<#
Cgywin:
  cd D:/Projects/Nextlabs/SharePoint/SharePointOnline/SPOE_1.1
  pwsh ./build/UpdateSPOAppsVersion.ps1 -FilePathAppManifest ./prod/SPOLE/SPOLE/AppManifest.xml -FilePathPackageSolution ./prod/SPOESPFx/config/package-solution.json -BuildNumber 787989
#>

# File invoke parameters, must be the first executable code
param(
    [string]$FilePathAppManifest=$(throw "Parameter missing: -FilePathAppManifest FilePathAppManifest"),
    [string]$FilePathPackageSolution=$(throw "Parameter missing: -FilePathPackageSolution FilePathPackageSolution"),
    [int32]$BuildNumber=$(throw "Parameter missing: -BuildNumber BuildNumber")
)

# Regin: Global variables

# XML Node, Attr names
$xmlAttrName_Version = "Version";

# EndRegin: Global variables

# Entry Main
function Invoke-Main{
    param (
        $FilePathAppManifest,
        $FilePathPackageSolution,
        $BuildNumber
    )

    Update-SPOAppsVersion $FilePathAppManifest $FilePathPackageSolution $BuildNumber;
}

function Update-SPOAppsVersion {
    param (
        $FilePathAppManifestIn,
        $FilePathPackageSolutionIn,
        $BuildNumber
    )

    # AppManifest version update
    $bRet = $false;
    Write-Host "Begin update AppManifest file version: $FilePathAppManifestIn"
    $FilePathAppManifest = Resolve-Path $FilePathAppManifestIn;
    if ([string]::IsNullOrEmpty($FilePathAppManifest)) {
      Write-Host "The imput AppManifest file $FilePathAppManifestIn do not exist"
    }
    else {
      $bRet = Update-SPOHostAppVersion $FilePathAppManifest $BuildNumber;
    }
    Write-Host "End update AppManifest version, status: $bRet, File: $FilePathAppManifestIn";

    Write-Host "`n------------------------------------------------------------------`n";

    # PackageSolution version update
    $bRet = $false;
    Write-Host "Begin update PackageSolution file version: $FilePathPackageSolutionIn";
    $FilePathPackageSolution = Resolve-Path $FilePathPackageSolutionIn;
    if ([string]::IsNullOrEmpty($FilePathPackageSolution)) {
      Write-Host "The imput PackageSolution file $FilePathPackageSolutionIn do not exist";
    }
    else {
      $bRet = Update-SPFXPackageVersion $FilePathPackageSolution $BuildNumber;
    }
    Write-Host "End update PackageSolution version, status: $bRet, File: $FilePathPackageSolutionIn";
}

function Update-SPOHostAppVersion {
    param (
        $FilePath,      # AppManifest.xml
        $BuildNumber
    )

    $bRet = $false;

    # Update AppManifest.xml file in host app to update the app version
    try {
      # Convert file content to XML object
      $xmlAppManifest = [xml](Get-Content $FilePath);

      # Update version string with build number
      $CurVersion = $xmlAppManifest.App.GetAttribute($xmlAttrName_Version);
      $NewVersion = $CurVersion.Substring(0, $CurVersion.LastIndexOf(".") + 1) + $BuildNumber;

      # Set new version info into the version attributes
      $xmlAppManifest.App.SetAttribute($xmlAttrName_Version, $NewVersion);

      # Save all the changes into the XML file
      $xmlAppManifest.Save($FilePath);
      $content = Get-Content $FilePath;
      Write-Host $content;   # Log
      $bRet = $true;
    }
    catch {
      Write-Host "$($_.Exception.Message)";
    }

    return $bRet;
}

function Update-SPFXPackageVersion {
    param (
        $FilePath,      # package-solution.json
        $BuildNumber
    )

    $bRet = $false;

    try {
      # Update package-sulution.json in SPFX to update the SPFX version
      $szContentPackjson = @(Get-Content $FilePath);
      $contentPackjson = [string]::Join("`n", $szContentPackjson);
      $jsonSPFXPackage = ConvertFrom-Json -InputObject $contentPackjson -Depth 1024;    # default depth is 1024

      # Update version string with build number
      $CurVersion = $jsonSPFXPackage.solution.version;
      $NewVersion = $CurVersion.Substring(0, $CurVersion.LastIndexOf(".") + 1) + $BuildNumber;

      # Set new version info into the version attributes
      $jsonSPFXPackage.solution.version = $NewVersion;
      $jsonSPFXPackage.solution.features[0].version = $NewVersion;

      # Save all the changes into the XML file
      $newContentPackjson = ConvertTo-Json -InputObject $jsonSPFXPackage -Depth 100; # default depth is 2 and max is 100
      $content = Tee-Object -InputObject $newContentPackjson -FilePath $FilePath;
      Write-Host $content;   # Log
      $bRet = $true;
    }
    catch {
      Write-Host "$($_.Exception.Message)";
    }

    return $bRet;
}

# Entry: Main
Invoke-Main $FilePathAppManifest $FilePathPackageSolution $BuildNumber;

# AppManifest.xml
<#
<?xml version="1.0" encoding="utf-8" ?>
<!--Created:cb85b80c-f585-40ff-8bfc-12ff4d0e34a9-->
<App xmlns="http://schemas.microsoft.com/sharepoint/2012/app/manifest"
     Name="SPOLE"
     ProductID="{5b385ddf-cd4d-41f6-a2f0-5742bcf5a82b}"
     Version="1.2.0.0"
     SharePointMinVersion="16.0.0.0"
>
  <Properties>
    <Title>SPOLE</Title>
    <StartPage>~remoteAppUrl/?{StandardTokens}</StartPage>
  </Properties>

  <AppPrincipal>
    <RemoteWebApplication ClientId="*" />
  </AppPrincipal>
  <AppPermissionRequests AllowAppOnlyPolicy="true">
    <AppPermissionRequest Scope="http://sharepoint/content/sitecollection" Right="FullControl" />
    <AppPermissionRequest Scope="http://sharepoint/social/tenant" Right="Read" />
  </AppPermissionRequests>
</App>
#>

# Package-Solution.json
<#
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/package-solution.schema.json",
  "solution": {
    "name": "SPOLE-SPFx",
    "id": "cf68e6fb-adf8-4014-ba87-abb0a2937af2",
    "version": "1.2.0.0",
    "includeClientSideAssets": true,
    "isDomainIsolated": false,
    "skipFeatureDeployment": true,
    "features": [
      {
        "title": "Application Extension - Deployment of custom action.",
        "description": "Deploys a custom action with ClientSideComponentId association",
        "id": "2c18ca49-e421-4c70-ab9c-e9d4ceef7564",
        "version": "1.2.0.0",
        "assets": {
          "elementManifests": [
            "elements.xml"
          ]
        }
      }
    ]
  },
  "paths": {
    "zippedPackage": "solution/SPOLE(SPFx).sppkg"
  }
}
#>