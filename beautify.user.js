// ==UserScript==
// @name         雨云控制台魔改
// @namespace    雨云控制台魔改
// @version      1.2
// @description  雨云控制台魔改
// @author       原作者：WYH2004 魔改：御坂网络,ChatGPT
// @match        http*://app.rainyun.com/*
// @icon         https://www.rainyun.com/favicon.ico
// @grant        none
// @updateURL    https://github.com/rainyun-space/privacy-protection/raw/main/privacy-protection.user.js
// @downloadURL  https://github.com/rainyun-space/privacy-protection/raw/main/privacy-protection.user.js
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/2.2.4/jquery.min.js
// ==/UserScript==

var link = "http://pic.rmb.bdstatic.com/bjh/ebe942a9de49856f389c65f25a338335.png";//背景图片链接(尽量使用16：9的图片，此处默认使用本人自己的图片api)

(function() {
    $("body:first").removeClass("bg_img1");
    $("body:first").removeClass("bg_img2");
    $("body:first").removeClass("bg_img3");

    document.body.class = "index bg"
    document.body.style = "background: url(" + link +") no-repeat center center fixed;background-size:cover;background-size:100% 100%";
})();

(function() {
        // 获取当前页面的字体样式
        var currentFont = window.getComputedStyle(document.body).fontFamily;

        // 创建 MutationObserver 来检测页面改动
        var observer = new MutationObserver(function(mutationsList, observer) {
            // 检测到页面改动后执行的操作
            for (var mutation of mutationsList) {
                if (mutation.type === 'childList' || mutation.type === 'attributes') {
                    // 替换为你想要的字体，例如 'Arial', 'Times New Roman', 等等
                    var newFont = '楷体';

                    // 获取页面中所有元素
                    var allElements = document.getElementsByTagName('*');

                    // 遍历所有元素并更改字体
                    for (var i = 0; i < allElements.length; i++) {
                        allElements[i].style.fontFamily = newFont;
                    }
                }
            }
        });

        // 配置 MutationObserver 观察整个文档树和属性变化
        observer.observe(document, { attributes: true, childList: true, subtree: true });

})();