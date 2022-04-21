let doctor_btn = document.getElementById("doctor");
let patient_btn = document.getElementById("patient");
let modal_choose = document.getElementById("modal-choose");
let modal_doctor = document.getElementById("modal-doctor");
let modal_patient = document.getElementById("modal-patient");
let modal_login = document.getElementById("modal-login");
let back_btn = document.querySelectorAll(".modal .modal-body .back");
let login_btn = document.querySelectorAll(".login_btn");
let createAcounte_btn = document.querySelectorAll(".create_acounte");
let register_patient = document.querySelectorAll(".register_patient");
let register_doctor = document.querySelectorAll(".register_doctor");
let register_btn = document.querySelectorAll(".register_btn");


function showModalDoctor() {
    heidModalChoose()
    heidModalLogin()
    heidModalPatient()
    modal_doctor.classList.add("d-block")
    modal_doctor.classList.remove("d-none")
}
function showModalPatient() {
    heidModalChoose()
    heidModalLogin()
    heidModalDoctor()
    modal_patient.classList.add("d-block")
    modal_patient.classList.remove("d-none")
}
function showModalChoose() {
    heidModalDoctor()
    heidModalPatient()
    heidModalLogin()
    modal_choose.classList.add("d-block")
    modal_choose.classList.remove("d-none")
}
function showModalLogin() {
    heidModalDoctor()
    heidModalPatient()
    heidModalChoose()
    modal_login.classList.add("d-block")
    modal_login.classList.remove("d-none")
}
function heidModalDoctor() {
    modal_doctor.classList.remove("d-block")
    modal_doctor.classList.add("d-none")
}
function heidModalPatient() {
    modal_patient.classList.add("d-none")
    modal_patient.classList.remove("d-block")
}
function heidModalChoose() {
    modal_choose.classList.add("d-none")
    modal_choose.classList.remove("d-block")
}

function heidModalLogin() {
    modal_login.classList.add("d-none")
    modal_login.classList.remove("d-block")
}


doctor_btn.addEventListener("click", () => {
    showModalDoctor()
})
patient_btn.addEventListener("click", () => {
    showModalPatient()
})

back_btn.forEach((el) => {
    el.addEventListener("click", () => {
        showModalChoose()
    })
});

register_btn.forEach((el) => {
    el.addEventListener("click", () => {
        showModalChoose();
    })
});

register_patient.forEach((el) => {
    el.addEventListener("click", () => {
        showModalPatient()
    })
})

register_doctor.forEach((el) => {
    el.addEventListener("click", () => {
        showModalDoctor()
    })
});

login_btn.forEach((el) => {
    el.addEventListener("click", () => {
        showModalLogin()
    })
});

createAcounte_btn.forEach((el) => {
    el.addEventListener("click", () => {
        showModalChoose()
    })
});



new WOW().init();
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



