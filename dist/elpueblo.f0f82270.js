var slideIndex = 0;
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("imageAndText");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for(i = 0; i < slides.length; i++)slides[i].style.display = "none";
    slides[slideIndex - 1].style.display = "flex";
}

//# sourceMappingURL=elpueblo.f0f82270.js.map
