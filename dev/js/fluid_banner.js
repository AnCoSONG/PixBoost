/* Vaskka 2018-10-23 15:56:50 */

/**
 * 更改当前状态到下一状态
 */
function changeStatus() {

}

/**
 * 主函数
 */
function main() {
    setInterval(function () {
        changeStatus();
    }, 1000);
}



$(document).ready(function(){
        main();
});