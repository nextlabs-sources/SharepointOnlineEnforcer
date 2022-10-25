function ConfigurationSubmit() {
    var obj = {
        JavaPcHost: $("#JavaPcHost")[0].value,
        OAUTHHost: $("#OAUTHHost")[0].value,
        ClientSecureID: $("#ClientSecureID")[0].value,
        ClientSecureKey: $("#ClientSecureKey")[0].value
    };
    var strDefaultBehavior = $("#DefaultBehaviorSelect").val()
    if (obj.JavaPcHost == "" || obj.OAUTHHost == "" || obj.ClientSecureID == "" || obj.ClientSecureKey == "") {
        alert("You must complete the information");
        return;
    }

    $.ajax({
        type: "POST",
        data: { "generalSetInfo": obj, "strDefaultBehavior": strDefaultBehavior},
        url: "/GeneralSetting/ConfigurationViewSubmit?SPHostUrl=" + getQueryString("SPHostUrl"),
        success: function (data) {
            if (data == "test connection failed") {
                $("#TestConnectionResult")[0].classList.remove("hide");
            }
            else {
                $("#TestConnectionResult")[0].classList.add("hide");
                alert(data);
            }
            ZENG.msgbox.hide();
        },
        error: function () { alert("Cannot save configuration"); ZENG.msgbox.hide(); }
    });

    ZENG.msgbox.show("Saving...Please wait", 6);
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function onCancelClick() {
    window.history.back(-1);
}