# Declare and Initialize Variables   
$CurrentDirectory =  Split-Path -parent $MyInvocation.MyCommand.Definition
 #SPOLE file use '@()' convert data to array 
$SiteCollections= @(Get-content "$CurrentDirectory\SiteCollections.txt")
$spolePath="$CurrentDirectory\SPOLE.app"
$spfxPath="$CurrentDirectory\SPOLE(SPFx).sppkg"
$paramterFile="$CurrentDirectory\SPOLE.Web.SetParameters.xml"
$updateApp="$CurrentDirectory\UpdateSharePointApp.exe"
$webDeploy="$CurrentDirectory\SPOLE.Web.deploy.cmd"  
 #others file 
$logFile = "$CurrentDirectory\$currentTime LogReport.csv"  
add-content $logFile "target,Status,exception"  
$credentials=Get-Credential 

#upload spfx to app catalog ,we install spfx in tenant scope
function InstallSPFxApp
{
  foreach($site in $SiteCollections)
   {
        try  
        {  
            Write-Host "Upload SPFx to AppCatalog"
            Connect-PnPOnline -URL $site -Credentials $credentials   
            $appCatalogUrl =  Get-PnPTenantAppCatalogUrl    
            # Add the SPFx app to the app catalog and publish it,we need add SkipFeatureDeployment option,otherwise the teneat deploy will be false             
            Add-PnPApp -Path $spfxPath -Publish -SkipFeatureDeployment   
            Disconnect-PnPOnline
            break
        }  
        Catch  
        {   
            Write-Host "Upload SPFx to AppCatalog failed,"$_.Exception.Message
            add-content $logFile  "$($appCatalogUrl),failed, $($_.Exception.Message)"   
            Continue;  
        }
        Write-Host "Upload SPFx to AppCatalog end"
   }
}
#remove spfx from app catalog
function UninstallSPFxApp
{
  foreach ($site in $SiteCollections)   
      {  
        Write-Host "Remove SPFx from AppCatalog"
        try  
        {  
            Connect-PnPOnline -URL $site -Credentials $credentials  
            $spfx = Get-PnPApp| Where Title -EQ "SPOLE-SPFx"
            $spfxId = $spfx.Id 
            $appCatalogUrl =  Get-PnPTenantAppCatalogUrl      
            Write-Host "appId:"$spfxId
            # Uninstall the SPOLE app at the tenant catalog
            Remove-PnPApp -Identity $spfxId
            Disconnect-PnPOnline 
            break 
        }  
        Catch  
        {   
            Write-Host "Remove SPFx from AppCatalog failed,"$_.Exception.Message
            add-content $logFile  "$($appCatalogUrl),failed, $($_.Exception.Message)"   
            Continue;  
        }  
      } 
      Write-Host "Remove SPFx from AppCatalog end"
}

#call UpdateSharePointApp.exe to update client id and remote url of SPOLE.app
function UpdateSPOLEApp
{ 
   try
    {
      Start-Process -FilePath $updateApp -ArgumentList $spolePath,$paramterFile
    }
   Catch
    {
      Write-Host "UpdateSPOLEApp failed,"$_.Exception.Message
      add-content $logFile  "UpdateSPOLEApp,failed, $($_.Exception.Message)"
    }
}

#deploy SPOLE profile via webDeploy
function WebDeploy
{
  try
  {
   $xmldata = [xml](Get-Content $paramterFile)
   #get web deploy address
   $webDeployAddressNode = $xmldata.parameters.setParameter | Where-Object {$_.name -match "WebDeployAddress"}
   $webDeployAddress =  $webDeployAddressNode.value

   #get remote pc name
   $reomtePcNameNode = $xmldata.parameters.setParameter | Where-Object {$_.name -match "ReomtePcName"}
   $reomtePcName =  $reomtePcNameNode.value

   #get reomote pc password 
   $reomtePcPwdNode = $xmldata.parameters.setParameter | Where-Object {$_.name -match "ReomtePcPwd"}
   $reomtePcPwd =  $reomtePcPwdNode.value
 
   $argumentList = -join("/Y /A:BASIC /M:",$webDeployAddress,"/MSDeploy.axd"," /U:",$reomtePcName," /p:",$reomtePcPwd," -allowUntrusted")
   Start-Process -FilePath $webDeploy -ArgumentList  $argumentList
  }
 catch
  {
    Write-Host "WebDeploy failed,"$_.Exception.Message
    add-content $logFile  "WebDeploy,failed, $($_.Exception.Message)" 
  }
}

#upload SPOLE to app catalog and install
function UploadAndInstallSPOLE
{
   try
   {
    Write-Host "Upload SPOLE to AppCatalog"
    if($SiteCollections.Length -eq 0)
    {
     Write-Host "The sitecollection is empty"
    }
    else
    {
      Connect-PnPOnline -URL $SiteCollections[0] -Credentials $credentials
      Add-PnPApp -Path $spolePath
      $appCatalogUrl =  Get-PnPTenantAppCatalogUrl
      $spole = Get-PnPApp | Where Title -EQ "SPOLE"
      $spoleId = $spole.Id
      Write-Host "appId:"$spoleId
      Disconnect-PnPOnline
      Write-Host "Upload SPOLE to AppCatalog end"

      #get admin url for activate DenyAddAndCustomizePages
      $firstIndex = $SiteCollections[0].IndexOf("://") + 3
      $endIndex = $SiteCollections[0].IndexOf(".")
      $tenantStr = $SiteCollections[0].Substring($firstIndex,$endIndex-$firstIndex)
      $adminUrl = -join("https://",$tenantStr,"-admin.sharepoint.com")
      Connect-SPOService -URL $adminUrl -Credential $credentials

      foreach($site in $SiteCollections)
      {
       try
        {
          Write-Host "Install SPOLE in $site"
          Connect-PnPOnline -URL $site -Credentials $credentials
          Install-PnPApp -Identity $spoleId
          Disconnect-PnPOnline
          Set-SPOsite  $site -DenyAddAndCustomizePages 0
        }
       Catch
       {
         Write-Host "Install SPOLE failed in $site,"$_.Exception.Message
         add-content $logFile  "$($site),failed , $($_.Exception.Message)"   
         Continue;  
       }      
     }
     Disconnect-SPOService
    }
   }
   catch
   {
     Write-Host "Upload SPOLE to AppCatalog failed,"$_.Exception.Message
     add-content $logFile  "$($appCatalogUrl),failed, $($_.Exception.Message)"
   }
}
#upload SPOLE to app catalog and install in all site collection
function UploadSPOLEAndInstallAll ($SPUrl)
{
   try
   {
     # get all sitecollection except system created
     Connect-PnPOnline -URL $SPUrl -Credentials $credentials
     $appCatalogUrl =  Get-PnPTenantAppCatalogUrl   
     $siteColl = Get-PnPTenantSite
     $requiredSites = New-Object -TypeName System.Collections.ArrayList
     foreach($site in $siteColl)
     {
       if($site.url.contains("sites") -or $site.url.contains("teams"))
        {
          if(!($site.url -eq $appCatalogUrl))
          {
            #when use ArrayList.Add,if we don't receive the returns ,the returns will show in console
            #reference https://docs.microsoft.com/en-us/dotnet/api/system.collections.arraylist.add?view=netframework-4.8
            $index = $requiredSites.Add($site.url)
          }
        }
     }
      #get host url 
      $firstIndex = $SPUrl.IndexOf("://") + 3
      $endIndex = $SPUrl.IndexOf(".")
      $tenantStr = $SPUrl.Substring($firstIndex,$endIndex-$firstIndex)
      $tenantUrl = -join("https://",$tenantStr,".sharepoint.com")
      $adminUrl = -join("https://",$tenantStr,"-admin.sharepoint.com")
      $index = $requiredSites.Add($tenantUrl)

      #start upload and install SPOLE
      Write-Host "Upload SPOLE to AppCatalog"
      Add-PnPApp -Path $spolePath
      $spole = Get-PnPApp | Where Title -EQ "SPOLE"
      $spoleId = $spole.Id
      Write-Host "appId:"$spoleId
      Disconnect-PnPOnline
      Write-Host "Upload SPOLE to AppCatalog end"

      Connect-SPOService -URL $adminUrl -Credential $credentials

      foreach($site in $requiredSites)
      {
       try
        {
          Write-Host "Install SPOLE in $site"
          Connect-PnPOnline -URL $site -Credentials $credentials
          Install-PnPApp -Identity $spoleId
          Disconnect-PnPOnline
          Set-SPOsite  $site -DenyAddAndCustomizePages 0
        }
       Catch
       {
         Write-Host "Install SPOLE failed in $site,"$_.Exception.Message
         add-content $logFile  "$($site),failed , $($_.Exception.Message)"   
         Continue;  
       }      
     }
     Disconnect-SPOService
   }
   catch
   {
     Write-Host "UploadSPOLEAndInstallAll failed,"$_.Exception.Message
     add-content $logFile  "UploadSPOLEAndInstallAll,failed , $($_.Exception.Message)"
   }
}
#remove SPOLE from app catalog and uninstall in all site collection
function RemoveSPOLEAndUninstallAll($SPUrl)
{
 try
   {
     # get all sitecollection except system created
     Connect-PnPOnline -URL $SPUrl -Credentials $credentials
     $appCatalogUrl =  Get-PnPTenantAppCatalogUrl   
     $siteColl = Get-PnPTenantSite
     $requiredSites = New-Object -TypeName System.Collections.ArrayList
     foreach($site in $siteColl)
     {
       if($site.url.contains("sites") -or $site.url.contains("teams"))
        {
          if(!($site.url -eq $appCatalogUrl))
          {
            #when use ArrayList.Add,if we don't receive the returns ,the returns will show in console
            #reference https://docs.microsoft.com/en-us/dotnet/api/system.collections.arraylist.add?view=netframework-4.8
            $index = $requiredSites.Add($site.url)
          }
        }
     }
      #get host url 
      $firstIndex = $SPUrl.IndexOf("://") + 3
      $endIndex = $SPUrl.IndexOf(".")
      $tenantStr = $SPUrl.Substring($firstIndex,$endIndex-$firstIndex)
      $tenantUrl = -join("https://",$tenantStr,".sharepoint.com")

      $index = $requiredSites.Add($tenantUrl)

      #start remove and uninstall SPOLE
      foreach($site in $requiredSites)
      {
       try
        {
          Write-Host "Uninstall SPOLE in $site"
          Connect-PnPOnline -URL $site -Credentials $credentials  
          $spole = Get-PnPApp | Where Title -EQ "SPOLE" 
          $spoleId=$spole.Id      
          Write-Host "appid:"$spoleId
          Uninstall-PnpApp -Identity $spoleId
          Disconnect-PnPOnline  
        }
       Catch
       {
         Write-Host "Uninstall SPOLE failed in $site,"$_.Exception.Message
         add-content $logFile  "$($site),failed , $($_.Exception.Message)"   
         Continue;  
       }      
     }
     Write-Host "Remove SPOLE from AppCatalog"
     try
      {        
         Connect-PnPOnline -URL $requiredSites[0] -Credentials $credentials
         $spole = Get-PnPApp | Where Title -EQ "SPOLE"
         $spoleId=$spole.Id
         Write-Host "appId:"$spoleId
         Remove-PnPApp -Identity $spoleId
         Disconnect-PnPOnline 
     }
     catch
     {
       Write-Host "Remove SPOLE from AppCatalog failed,"$_.Exception.Message
       add-content $logFile  "$($appCatalogUrl),failed, $($_.Exception.Message)"   
     }
   }
   catch
   {
     Write-Host "RemoveSPOLEAndUninstallAll failed,"$_.Exception.Message
     add-content $logFile  "RemoveSPOLEAndUninstallAll,failed, $($_.Exception.Message)" 
   }
}
#install SPOlE in inputed site collections
function InstallSPOLE
{ 
   if($args.Count -eq 0)
   {
    Write-Host "Please input sharepoint online url"
   }
   else
   {
     Connect-PnPOnline -URL $args[0] -Credentials $credentials
     $spole = Get-PnPApp | Where Title -EQ "SPOLE"
     $spoleId = $spole.Id
     Write-Host "appId:"$spoleId
     Disconnect-PnPOnline

     #get admin url for activate DenyAddAndCustomizePages
     $firstIndex = $args[0].IndexOf("://") + 3
     $endIndex = $args[0].IndexOf(".")
     $tenantStr = $args[0].Substring($firstIndex,$endIndex-$firstIndex)
     $adminUrl = -join("https://",$tenantStr,"-admin.sharepoint.com")
     Write-Host "adminurl:"$adminUrl
     Connect-SPOService -URL $adminUrl -Credential $credentials

     foreach($site in $args)
      {
        try
         {
           Write-Host "Install SPOLE in $site"
           Connect-PnPOnline -URL $site -Credentials $credentials
           Install-PnPApp -Identity $spoleId
           Disconnect-PnPOnline
           Set-SPOsite $site -DenyAddAndCustomizePages 0
         }
        Catch
        {
          Write-Host "install SPOLE failed in $site,"$_.Exception.Message
          add-content $logFile  "$($site),failed, $($_.Exception.Message)"   
          Continue;  
        }      
     }
     Disconnect-SPOService
   }
}

#remove SPOLE from app catalog
function RemoveSPOLEFromCatalog
{
 Write-Host "Remove SPOLE from AppCatalog"
 try
  {
    foreach($site in $SiteCollections)
    {
      Connect-PnPOnline -URL $site -Credentials $credentials
      $appCatalogUrl =  Get-PnPTenantAppCatalogUrl
      $spole = Get-PnPApp | Where Title -EQ "SPOLE"
      $spoleId=$spole.Id
      Write-Host "appId:"$spoleId
      Remove-PnPApp -Identity $spoleId
      Disconnect-PnPOnline 
      break
    }
  }
  catch
  {
     Write-Host "Remove SPOLE from AppCatalog failed,"$_.Exception.Message
     add-content $logFile  "$($appCatalogUrl),failed, $($_.Exception.Message)"   
  }
}
# uninstall SPOLE from selected site collections
function UninstallSPOLE
{
   if($args.Count -eq 0)
   {
    foreach ($site in $SiteCollections)   
      {  
        Write-Host "Uninstall SPOLE from $site"
        try  
        {  
            Connect-PnPOnline -URL $site -Credentials $credentials  
            $spole = Get-PnPApp | Where Title -EQ "SPOLE" 
            $spoleId=$spole.Id      
            Write-Host "appid:"$spoleId
            Uninstall-PnpApp -Identity $spoleId
            Disconnect-PnPOnline  
        }  
        Catch  
        {   
            Write-Host "Remove SPOLE from $site failed,"$_.Exception.Message
            add-content $logFile  "$($site),failed, $($_.Exception.Message)"   
            Continue;  
        } 
        Write-Host "-------------------------------------------" 
      } 
      Write-Host "Uninstall SPOLE end"
   }
   else
   {
    foreach ($site in $args)   
      {  
        Write-Host "Uninstall SPOLE from $site"
        try  
        {  
            Connect-PnPOnline -URL $site -Credentials $credentials  
            $apps =  Get-PnPAppInstance
             foreach($app in $apps)
            {   
             if($app.title -eq "SPOLE")  
             {
              Write-Host "appid:"$app.Id
              Uninstall-PnPAppInstance -Identity $app.Id -Force
              break
             }       
            }
            Disconnect-PnPOnline
        }  
        Catch  
        {   
            Write-Host "Remove SPOLE from $site failed,"$_.Exception.Message
            add-content $logFile  "$($site),failed, $($_.Exception.Message)"   
            Continue;  
        } 
        Write-Host "-------------------------------------------" 
      } 
      Write-Host "Uninstall SPOLE end"
   }
   
}
#list all installed apps in tenant 
function GetAllInstalledAppInTenant($SPUrl)
{
 try
  {
    # get all sitecollection except system created
     Connect-PnPOnline -URL $SPUrl -Credentials $credentials
     $appCatalogUrl =  Get-PnPTenantAppCatalogUrl   
     $siteColl = Get-PnPTenantSite
     $requiredSites = New-Object -TypeName System.Collections.ArrayList
     foreach($site in $siteColl)
     {
       if($site.url.contains("sites") -or $site.url.contains("teams"))
        {
          if(!($site.url -eq $appCatalogUrl))
          {
            #when use ArrayList.Add,if we don't receive the returns ,the returns will show in console
            #reference https://docs.microsoft.com/en-us/dotnet/api/system.collections.arraylist.add?view=netframework-4.8
            $index = $requiredSites.Add($site.url)
          }
        }
     }
      #get host url 
      $firstIndex = $SPUrl.IndexOf("://") + 3
      $endIndex = $SPUrl.IndexOf(".")
      $tenantStr = $SPUrl.Substring($firstIndex,$endIndex-$firstIndex)
      $tenantUrl = -join("https://",$tenantStr,".sharepoint.com")
      $index = $requiredSites.Add($tenantUrl)
      foreach($site in $requiredSites)
      {
       try  
        {  
            Connect-PnPOnline -URL $site -Credentials $credentials 
            $apps =  Get-PnPAppInstance
            Write-Host "Current site is $site,below is installed app"
            foreach($app in $apps)
            {            
             $id = $app.Id
             $title = $app.title
             Write-Host "name: $title,id: $id" 
            }
            Write-Host "-------------------------------"
            Disconnect-PnPOnline  
        }  
        Catch  
        {   
            Write-Host "Get installed app failed in $site,"$_.Exception.Message
            add-content $logFile  "$($site),failed , $($_.Exception.Message)"   
            Continue;  
        }  
     }
  }
 catch
  {
    Write-Host "GetAllInstalledAppInTenant failed,"$_.Exception.Message
    add-content $logFile  "GetAllInstalledAppInTenant,failed , $($_.Exception.Message)"
  }
}
# list all installed apps in config file
function GetAllInstalledAppInSites
{
  foreach ($site in $SiteCollections)   
      {  
        try  
        {  
            Connect-PnPOnline -URL $site -Credentials $credentials 
            $apps =  Get-PnPAppInstance
            Write-Host "Current site is $site,below is installed app"
            foreach($app in $apps)
            {            
             $id = $app.Id
             $title = $app.title
             Write-Host "name: $title,id: $id" 
            }
            Write-Host "-------------------------------"
            Disconnect-PnPOnline  
        }  
        Catch  
        {   
            Write-Host "Get installed app failed in $site,"$_.Exception.Message
            add-content $logFile  "$($site),failed , $($_.Exception.Message)"   
            Continue;  
        }  
      } 
}


