var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
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


let doctor_btn = document.getElementById("doctor");
let patient_btn = document.getElementById("patient");
let back_btn = document.querySelectorAll(".modal .modal-body .back");
let modal_choose = document.getElementById("modal-choose");
let modal_doctor = document.getElementById("modal-doctor");
let modal_patient = document.getElementById("modal-patient");

doctor_btn.addEventListener("click",() =>{
    modal_choose.classList.add("d-none")
    modal_doctor.classList.toggle("d-none")
})
patient_btn.addEventListener("click",() =>{
    modal_choose.classList.add("d-none")
    modal_patient.classList.toggle("d-none")
})
console.log(back_btn)

back_btn.forEach((el) => {
    el.addEventListener("click",() =>{
        modal_choose.classList.remove("d-none")
        modal_patient.classList.add("d-none")
        modal_doctor.classList.add("d-none")
    })
})

