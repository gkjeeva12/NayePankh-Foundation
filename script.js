// ===============================
// VOLUNTEER FORM
// ===============================

const volunteerForm =
document.getElementById("volunteerForm");

if (volunteerForm) {

    volunteerForm.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        alert(
        "Thank you for registering as a volunteer!"
        );

        volunteerForm.reset();

    });

}


// ===============================
// CONTACT FORM
// ===============================

const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        alert(
        "Your message has been sent successfully!"
        );

        contactForm.reset();

    });

}


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

window.addEventListener("scroll",()=>{

const navbar =
document.querySelector(".navbar");

if(!navbar) return;

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 4px 15px rgba(0,0,0,0.2)";

}
else{

navbar.style.boxShadow = "none";

}

});


// ===============================
// SMOOTH SCROLLING
// ===============================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener(
'click',
function(e){

e.preventDefault();

document.querySelector(
this.getAttribute('href')
).scrollIntoView({

behavior:'smooth'

});

});

});


// ===============================
// ANIMATED COUNTERS
// ===============================

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter = ()=>{

const target =
+counter.getAttribute("data-target");

const current =
+counter.innerText;

const increment =
target / 100;

if(current < target){

counter.innerText =
Math.ceil(current + increment);

setTimeout(updateCounter,20);

}
else{

counter.innerText = target;

}

};

updateCounter();

});


// ===============================
// PAGE LOADED MESSAGE
// ===============================

console.log(
"NayePankh Foundation Website Loaded Successfully"
);