/**
 * Created by sunq on 2017/9/24.
 */
/*
首先创建一个数组10*20，存数字，0代表空、1代表current、2代表done
创建一个相同结构的数组，存div。这样两个数组形成映射关系，通过改变数字来改变小div颜色
*/
var gameNum = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0],
    [0,0,2,2,2,2,0,0,0,0]
];
var previewNum = [
    [0,0,0,0],
    [0,1,1,0],
    [0,0,1,1],
    [0,0,0,0]
];
var gameDivs = [], previewDivs=[];
function initGame() {
    for(var i=0;i<20;i++){
        var occion  = [];
        for(var w=0;w<10;w++){
            var div = document.createElement("div");
            div.className = "none";
            document.getElementsByClassName("game")[0].append(div);
            occion.push(div);
        }
        gameDivs.push(occion);
    }
}
function initPreview() {
    for(var i=0;i<4;i++){
        var occion  = [];
        for(var w=0;w<4;w++){
            var div = document.createElement("div");
            div.className = "none";
            document.getElementsByClassName("preview")[0].append(div);
            occion.push(div);
        }
        previewDivs.push(occion);
    }
}
function refresh() {
    for(var z=0;z<20;z++){
        for(var v=0;v<10;v++){
            if(gameNum[z][v] == 0){
                gameDivs[z][v].className = "none";
            }
            if(gameNum[z][v] == 1){
                gameDivs[z][v].className = "current";
            }
            if(gameNum[z][v] == 2){
                gameDivs[z][v].className = "done";
            }
        }
    }
    for(var z=0;z<4;z++){
        for(var v=0;v<4;v++){
            if(previewNum[z][v] == 0){
                previewDivs[z][v].className = "none";
            }
            if(previewNum[z][v] == 1){
                previewDivs[z][v].className = "current";
            }
            if(previewNum[z][v] == 2){
                previewDivs[z][v].className = "done";
            }
        }
    }
}
initGame();
initPreview();
console.log(gameNum[19][5]);
refresh();