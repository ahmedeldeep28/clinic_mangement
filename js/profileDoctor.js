//swatch from (about doctor) to (form about)
let edit_about = document.getElementById("edit_about");
edit_about.addEventListener("click", () => {
    document.getElementById("about").classList.toggle("d-none");
    document.getElementById("form_about").classList.toggle("d-none");
    edit_about.classList.add("d-none")
});

//swatch from  (form about) to (about doctor) 
let cancel_edit_about = document.getElementById("cancel_edit_about");
cancel_edit_about.addEventListener("click", () => {
    document.getElementById("about").classList.toggle("d-none");
    document.getElementById("form_about").classList.toggle("d-none");
    edit_about.classList.toggle("d-none")
});


//swatch from  (doctor) to (form doctor) 
let edit_doctor_btn = document.getElementById("edit_doctor");
edit_doctor_btn.addEventListener("click", () => {
    document.getElementById("form_doctor").classList.toggle("d-none");
    document.getElementById("info_doctor").classList.toggle("d-none");
    edit_doctor_btn.classList.toggle("d-none")
});

//swatch from  (form doctor)  to (doctor)
let cancel_edit_doctor = document.getElementById("cancel_edit_doctor");
cancel_edit_doctor.addEventListener("click", () => {
    document.getElementById("form_doctor").classList.toggle("d-none");
    document.getElementById("info_doctor").classList.toggle("d-none");
    edit_doctor_btn.classList.toggle("d-none")
});


let edit_info_btn = document.querySelectorAll(".edit_info");
let info_value = document.querySelectorAll(".info_value");
edit_info_btn.forEach((element, index) => {
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

var demo = document.getElementById("demo");
var get_location_btn = document.getElementById("get_location_btn");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        demo.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    document.getElementById("lat").setAttribute("value",position.coords.latitude);
    document.getElementById("long").setAttribute("value",position.coords.longitude);
    get_location_btn.textContent = "It was completed"
}
get_location_btn.addEventListener("click",() => getLocation())