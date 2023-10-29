$("nav a").click(function (e) {
    $.scrollTo(this.hash || 0, 2000);
    e.preventDefault();
});


// 4페이지
$(".navi li").mouseenter(function () {
    let changeImage = $(this).attr("data-image");
    $(".page4").css({ background: `url(${changeImage})` });
});

$(".navi li").mouseleave(function () {
    $(".page4").css({ background: "" });
});


// 5페이지 모달
const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

open.addEventListener("click", (e) => {
    modalBox.classList.toggle("active");
});

close.addEventListener("click", (e) => {
    modalBox.classList.toggle("active");
});
