let swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});
const image_input = document.querySelectorAll(".image-input");

image_input.forEach((el) => {
    el.addEventListener("change", function () {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const uploaded_image = reader.result;
            el.parentElement.style.backgroundImage = `url(${uploaded_image})`;
            el.nextElementSibling.style.display = "none";
        });
        reader.readAsDataURL(this.files[0]);
    })
});

new WOW().init();


