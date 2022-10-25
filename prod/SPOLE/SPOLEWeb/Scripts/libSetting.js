$(document).ready(function () {
    var data = JSON.parse(jsonData),
        len = data.length,
        checkAll = true,
        selectNum = 0;

    data.forEach(function (item, index) {
        if (!item.checked) {
            checkAll = false;
        } else {
            selectNum++;
        }
    });

    $("#box .select-all").prop('checked', checkAll);

    function initList() {
        for (let i = 0; i < len; i++) {
            var oLi = document.createElement('li'),
                oInp = document.createElement('input'),
                oLabel = document.createElement('label');
            oInp.setAttribute('type', 'checkbox');
            oInp.setAttribute('id', i);
            oInp.setAttribute('name', i);
            oInp.checked = data[i].checked;
            oLabel.innerText = data[i].name;
            oLabel.setAttribute('for', i);
            oLi.appendChild(oInp);
            oLi.appendChild(oLabel);
            $('#box .list').append(oLi);
        }
    }

    initList();

    $('#box .select-all').change(function (e) {
        $('#box .list li input').each(function (index, ele) {
            ele.checked = e.currentTarget.checked;
            data[index].checked = e.currentTarget.checked;
        });
        if (!e.currentTarget.checked) {
            checkAll = false;
        } else {
            selectNum = $('#box .list li input').size();
        }
    });


    $('#box .list li input').each(function (index, ele) {
        $(ele).change(function (e) {
            data[index].checked = e.currentTarget.checked;
            if (!e.currentTarget.checked) {
                selectNum--;
                checkAll = false;
                $('.select-all').prop('checked', checkAll);
            } else {
                selectNum++;
                if (selectNum == $('#box .list li input').size()) {
                    checkAll = true;
                    $('.select-all').prop('checked', checkAll);
                }
            }
        });

    });

    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

    $("#btns .save").click(function (e) {
        var newData = data.filter(function (item, index) {
            return item.checked;
        });
        var selectedColumns = {};
        for (let i = 0; i < newData.length; i++) {
            selectedColumns[newData[i]["id"]] = newData[i]["name"]
        }
        selectedColumns = JSON.stringify(selectedColumns);
        $.ajax({
            type: "POST",
            data: { "selectedColumns": selectedColumns },
            url: "/GeneralSetting/ListSettingViewSubmit?listId=" + getQueryString("listId") + "&SPHostUrl=" + getQueryString("SPHostUrl"),
            success: function (data) {
                alert(data);
            },
            error: function () {
                alert("Cannot save library setting");
            }
        });
    });

    $("#btns .cancel").click(function () {
        window.history.back(-1);
    });


});



