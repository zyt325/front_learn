// 加载事件
window.onload = function() {
    // 获取表格
    var tb = document.getElementsByClassName("tb");
    // 设置表头背景颜色
    tb[0].children[0].style.backgroundColor = "navajowhite";

    // 获取表体中的tr
    var tbody_trLength = tb[0].tBodies[0].children.length;
    for (var i = 0; i < tbody_trLength; i++) {
        if (i % 2 == 0) {
            tb[0].tBodies[0].children[i].style.backgroundColor = "skyblue"
        } else {
            tb[0].tBodies[0].children[i].style.backgroundColor = "red"
        }
    }

    // 获取td选项框
    var cks = document.getElementsByName("ck");
    // 获取全选/全不选选项框
    var ck_all = document.getElementById("all");

    // 全选/全不选
    ck_all.onclick = function() {
        var is_check = ck_all.checked
        for (var i = 0; i < cks.length; i++) {
            cks[i].checked = is_check
        }
    }

    // 反选
    ck_all.nextSibling.onclick = function() {
        for (var i = 0; i < cks.length; i++) {
            if (cks[i].checked) {
                cks[i].checked = false
            } else {
                cks[i].checked = true
            }
        }
    }
}