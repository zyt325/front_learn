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
}