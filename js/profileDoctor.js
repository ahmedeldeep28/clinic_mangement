//swatch from (about doctor) to (form about)
let edite_about = document.getElementById("edite_about");
edite_about.addEventListener("click", () => {
    document.getElementById("about").classList.toggle("d-none");
    document.getElementById("form_about").classList.toggle("d-none");
    edite_about.classList.add("d-none")
});

//swatch from  (form about) to (about doctor) 
let cancel_edite_about = document.getElementById("cancel_edite_about");
cancel_edite_about.addEventListener("click", () => {
    document.getElementById("about").classList.toggle("d-none");
    document.getElementById("form_about").classList.toggle("d-none");
    edite_about.classList.toggle("d-none")
});


//swatch from  (doctor) to (form doctor) 
let edite_doctor_btn = document.getElementById("edite_doctor");
edite_doctor_btn.addEventListener("click", () => {
    document.getElementById("form_doctor").classList.toggle("d-none");
    document.getElementById("info_doctor").classList.toggle("d-none");
    edite_doctor_btn.classList.toggle("d-none")
});

//swatch from  (form doctor)  to (doctor)
let cancel_edite_doctor = document.getElementById("cancel_edite_doctor");
cancel_edite_doctor.addEventListener("click", () => {
    document.getElementById("form_doctor").classList.toggle("d-none");
    document.getElementById("info_doctor").classList.toggle("d-none");
    cancel_edite_doctor.classList.toggle("d-none")
});


let edite_info_btn = document.querySelectorAll(".edite_info");
let info_value = document.querySelectorAll(".info_value");
edite_info_btn.forEach((element, index) => {
    element.addEventListener("click", () => {
        info_value[index].classList.toggle("d-none")
    })
});

let slider = new Swiper(".slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});