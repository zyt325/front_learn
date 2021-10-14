// 引入这个js文件，实际上就相当于把这个文件执行了一遍 全局
// 函数 作用域保护

/* 
框架开发：
    运行在哪里 哪一种方法引入的 不同的使用平台引入
    明确表明：框架适用于哪几种引入方法
        CommandJS(node.js)
        AMD(require.js)
        CMD(sea.js)
*/


// 跨平台的模块化框架
(function(glabal, factory) {
    /* if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = factory(); //CommandJS
    } else {
        if (typeof define === "function" && define.amd) {
            define(factory); // CMD & AMD
        } else {
            glabal.Table = factory(); // 浏览器的引入方式
        }
    } */

    typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() :
        typeof define === "function" && define.amd ? define(factory) : glabal.xTable = factory();

})(this, function() {
    'use strict';

    // 安全方法 防止某些变量或者对象被外部修改 工具类
    function isObject(obj) {
        /* if( obj !== null && typeof obj === "object"){
            return true;
        }else{
            return false;
        } */
        return obj !== null && typeof obj === "object"
    }

    // 构造函数
    function xTable(arg) {
        if (!isObject(arg)) {
            throw new Error("参数类型错，必须传入json类型")
        }
        var wrap = document.querySelector(arg.el);
        var theadContent = arg.thead;
        var columnList = arg.columns,
            dataList = arg.data;

        var table = document.createElement("table");
        var thead = document.createElement('thead');
        var tbody = document.createElement('tbody');

        var tds = ""
            /* for (var i = 0; i < theadContent.length; i++) {
                var th = document.createElement('th');
                th.innerText = theadContent[i];
                tds += th;
            } */
        theadContent.forEach(function(th) {
            tds += "<th>" + th + "</th>"
        })
        thead.innerHTML = "<tr>" + tds + "</tr>";
        table.appendChild(thead);


        dataList.forEach(function(e) {
            var tr = document.createElement('tr');
            columnList.forEach(function(col) {
                var td = document.createElement('td');
                td.innerText = e[col['key']]
                tr.appendChild(td)
            })
            tbody.appendChild(tr);
        })
        table.appendChild(tbody);

        table.className = "xTable";
        table.style.cssText = "width:100%;text-align:center;"
        table.border = 1;
        wrap.appendChild(table);
        // console.log(wrap);
    }
    return xTable;
});


/* (function(){

})() 函数自执行 */