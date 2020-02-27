import './styles/styles.scss';

window.$ = window.jQuery = require('jquery');

var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
    if(e.data.d=="n"){
        currdeg = currdeg - 60;
    }
    if(e.data.d=="p"){
        currdeg = currdeg + 60;
    }
    carousel.css({
        "-webkit-transform": "rotateX("+currdeg+"deg)",
        "-moz-transform": "rotateX("+currdeg+"deg)",
        "-o-transform": "rotateX("+currdeg+"deg)",
        "transform": "rotateX("+currdeg+"deg)"
    });
}

let itemsLength = $('.carousel .item').length;
let rotateDeg = 0;
let allBlocksHeight = 0;

//считаем всю высоту блоков!
$('.carousel .item').each((i, item) => {
    console.log(parseInt(getComputedStyle(item).height));
    allBlocksHeight += parseInt(getComputedStyle(item).height);
});

console.log(allBlocksHeight);


$('.carousel .item').each((i, item) => {
    $(item).css({transform: `rotateX(${rotateDeg}deg) translateZ(${allBlocksHeight / (Math.PI * 2)}px)`});
    rotateDeg += 360 / itemsLength;
});
