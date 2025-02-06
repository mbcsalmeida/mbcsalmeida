$(document).ready(function () {
let lang = new URL(window.location.href).searchParams.get("lang");
console.log(lang);
switch (lang) {
    case "jp":
        $("#eng").removeClass("text-muted ");
        $("#pt").removeClass("text-muted");
        $("#jp").addClass("text-muted");
        $("#title").text("自分の履歴書サイトへようこそ");
        $("#description").html("Mateus Almeidaと申します。コンピューター科学の卒業生です。<br>いつもWebプログラミングとオブジェクト指向プログラミング技能を上達することを目指しています。");
        $("summary").text("履歴書のダウンロード");
        $("#btn-eng").text("英語版");
        $("#btn-pt").text("ポルトガル語版");
        $("#btn-jp").text("日本語版");
        break;
    case "pt":
        $("#eng").removeClass("text-muted ");
        $("#jp")?.removeClass("text-muted ");
        $("#pt").addClass("text-muted");
        $("#title").text("Bem-vindo ao meu site pessoal");
        $("#description").html("O meu nome é Mateus Almeida e sou licenciado em Ciências de Computadores.<br> O meu objetivo é melhorar as minhas competências de desenvolvimento web e de software.");
        $("summary").text("Download do meu Currículo");
        $("#btn-eng").text("Versão EN");
        $("#btn-pt").text("Versão PT");
        $("#btn-jp").text("Versão JP");
        break;
    case "eng":
    default:
        $("#eng").addClass("text-muted ");
        $("#pt")?.removeClass("text-muted ");
        $("#jp")?.removeClass("text-muted ");
        $("#title").text("Welcome to my Website");
        $("#description").html("I'm Mateus Almeida, graduate of Computer Science.<br> My aim is to improve my skills of software and web development.");
        $("summary").text();
        $("#btn-eng").text("ENG ver.");
        $("#btn-pt").text("PT ver.");
        $("#btn-jp").text("JP ver.");
}
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".content");

    function reveal() {
        elements.forEach((el) => {
            let rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal();
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".slide-in");

    function reveal() {
        elements.forEach((el) => {
            let rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal();
});

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    let currentIndex = 0;
    const totalCards = document.querySelectorAll(".project-card").length;

    function updateCarousel() {
        const newTransform = `translateX(-${currentIndex * 20}vw)`;
        carousel.style.transform = newTransform;
    }

    rightBtn.addEventListener("click", function() {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    leftBtn.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
});


