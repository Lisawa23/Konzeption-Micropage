window.addEventListener("load", function () {
    var menuIcon = document.getElementById("menu-icon");
    var slideoutMenu = document.getElementById("slideout-menu");
    var time = document.querySelector(".mfirst");
    menuIcon.addEventListener("click", function () {
        if (slideoutMenu.style.opacity == "1") {
            slideoutMenu.style.opacity = "0";
            slideoutMenu.style.pointerEvents = "none";
        }
        else {
            slideoutMenu.style.opacity = "1";
            slideoutMenu.style.pointerEvents = "auto";
        }
    });
    var hideBlock = document.querySelector(".timeline-panel");
    time.addEventListener("mouseover", function () {
        var text = document.querySelector(".text1");
        var text2 = document.querySelector(".text2");
        var text3 = document.querySelector(".text3");
        var text4 = document.querySelector(".text4");
        hideBlock.classList.remove("hidden");
        text.innerHTML = "Vorlesung";
        text2.innerHTML = "";
        text3.innerHTML = "";
        text4.innerHTML = "";
    });
    document.querySelector(".mfirst").addEventListener("mouseout", function () {
        hideBlock.classList.add("hidden");
    });
    document.querySelector(".m2").addEventListener("mouseover", function () {
        var text = document.querySelector(".text1");
        var text2 = document.querySelector(".text2");
        var text3 = document.querySelector(".text3");
        var text4 = document.querySelector(".text4");
        hideBlock.classList.remove("hidden");
        text.innerHTML = "Ideenfindung";
        text2.innerHTML = "Pitchentwurf 1";
        text3.innerHTML = "Pitch 1";
        text4.innerHTML = "";
    });
    document.querySelector(".m2").addEventListener("mouseout", function () {
        hideBlock.classList.add("hidden");
    });
    document.querySelector(".m3").addEventListener("mouseover", function () {
        var text = document.querySelector(".text1");
        var text2 = document.querySelector(".text2");
        var text3 = document.querySelector(".text3");
        var text4 = document.querySelector(".text4");
        hideBlock.classList.remove("hidden");
        text.innerHTML = "Pitchentwicklung";
        text2.innerHTML = "Pitch 2";
        text3.innerHTML = "Konzeptentwicklung";
        text4.innerHTML = "Illustrationen erstellen";
    });
    document.querySelector(".m3").addEventListener("mouseout", function () {
        hideBlock.classList.add("hidden");
    });
    document.querySelector(".m4").addEventListener("mouseover", function () {
        var text = document.querySelector(".text1");
        var text2 = document.querySelector(".text2");
        var text3 = document.querySelector(".text3");
        var text4 = document.querySelector(".text4");
        hideBlock.classList.remove("hidden");
        text.innerHTML = "Animieren";
        text2.innerHTML = "Postproduktion";
        text3.innerHTML = "Pr??sentationsvorbereitung";
        text4.innerHTML = "Pr??sentieren";
    });
    document.querySelector(".m4").addEventListener("mouseout", function () {
        hideBlock.classList.add("hidden");
    });
    document.querySelector(".mlast").addEventListener("mouseover", function () {
        var text = document.querySelector(".text1");
        var text2 = document.querySelector(".text2");
        var text3 = document.querySelector(".text3");
        var text4 = document.querySelector(".text4");
        hideBlock.classList.remove("hidden");
        text.innerHTML = "Letzte Schliffe";
        text2.innerHTML = "Micropage erstellen";
        text3.innerHTML = "";
        text4.innerHTML = "";
    });
    document.querySelector(".mlast").addEventListener("mouseout", function () {
        hideBlock.classList.add("hidden");
    });
});
//# sourceMappingURL=script.js.map