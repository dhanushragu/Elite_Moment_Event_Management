/* ==========================================
        ELITE MOMENTS
        PREMIUM EVENT WEBSITE

        SCRIPT.JS PART 1
========================================== */



/* ==========================================
            PAGE LOADER
========================================== */


window.addEventListener("load",()=>{

    const loader =
    document.querySelector(".loader");


    if(loader){

        setTimeout(()=>{

            loader.classList.add("hide");

        },1000);

    }

});





/* ==========================================
        SCROLL PROGRESS BAR
========================================== */


window.addEventListener("scroll",()=>{


    let scrollTop =
    document.documentElement.scrollTop;


    let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;


    let progress =
    (scrollTop / height) * 100;


    const bar =
    document.getElementById("progressBar");


    if(bar){

        bar.style.width =
        progress + "%";

    }


});





/* ==========================================
            STICKY NAVBAR
========================================== */


const header =
document.getElementById("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){

        header?.classList.add("scrolled");

    }

    else{

        header?.classList.remove("scrolled");

    }


});







/* ==========================================
            MOBILE MENU
========================================== */


const menuToggle =
document.querySelector(".menu-toggle");


const navLinks =
document.querySelector(".nav-links");



menuToggle?.addEventListener("click",()=>{


    menuToggle.classList.toggle("active");


    navLinks.classList.toggle("active");


});



document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        menuToggle?.classList.remove("active");


        navLinks?.classList.remove("active");


    });


});






/* ==========================================
            HERO SLIDER
========================================== */


const heroSlides =
document.querySelectorAll(".hero-slide");


let slideIndex = 0;



function showHeroSlide(){


    heroSlides.forEach(slide=>{


        slide.classList.remove("active");


    });



    if(heroSlides.length){


        heroSlides[slideIndex]
        .classList.add("active");


        slideIndex++;



        if(slideIndex >= heroSlides.length){

            slideIndex = 0;

        }


    }


}



if(heroSlides.length){


    showHeroSlide();


    setInterval(()=>{


        showHeroSlide();


    },5000);


}







/* ==========================================
        SMOOTH SCROLL NAVIGATION
========================================== */


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


    anchor.addEventListener("click",
    function(e){


        let target =
        document.querySelector(
        this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});







/* ==========================================
        ACTIVE NAV HIGHLIGHT
========================================== */


const sections =
document.querySelectorAll("section");


const navItems =
document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop =
        section.offsetTop - 150;



        if(scrollY >= sectionTop){


            current =
            section.getAttribute("id");


        }


    });



    navItems.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href")
        === "#" + current){


            link.classList.add("active");


        }


    });


});

/* ==========================================
        SCRIPT.JS PART 2

        COUNTERS
        REVEAL
        LIGHTBOX
        TESTIMONIALS
========================================== */



/* ==========================================
            COUNTER ANIMATION
========================================== */


const counters =
document.querySelectorAll(".counter");


let counterStarted = false;



function startCounters(){


    if(counterStarted) return;


    const counterSection =
    document.querySelector(".counter-grid");


    if(!counterSection) return;


    const sectionTop =
    counterSection.getBoundingClientRect().top;



    if(sectionTop < window.innerHeight - 100){


        counterStarted = true;


        counters.forEach(counter=>{


            const target =
            +counter.dataset.target;



            let count = 0;


            const speed =
            target / 100;



            const updateCounter = ()=>{


                if(count < target){


                    count += speed;


                    counter.innerText =
                    Math.ceil(count);


                    requestAnimationFrame(
                    updateCounter
                    );


                }


                else{


                    counter.innerText =
                    target;


                }


            };


            updateCounter();



        });


    }


}



window.addEventListener(
"scroll",
startCounters
);







/* ==========================================
            SCROLL REVEAL
========================================== */


const revealElements =
document.querySelectorAll(
".section, .service-card, .why-card, .timeline-item"
);



revealElements.forEach(element=>{


    element.classList.add("reveal");


});



function revealOnScroll(){


    revealElements.forEach(element=>{


        const top =
        element.getBoundingClientRect().top;



        if(top < window.innerHeight - 100){


            element.classList.add(
            "show"
            );


        }


    });


}



window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();







/* ==========================================
            GALLERY LIGHTBOX
========================================== */


const galleryImages =
document.querySelectorAll(
".gallery-item img"
);


const lightbox =
document.querySelector(".lightbox");


const lightboxImage =
document.getElementById(
"lightbox-img"
);


const closeLightbox =
document.querySelector(
".close-lightbox"
);



const nextBtn =
document.querySelector(
".lightbox .next"
);



const prevBtn =
document.querySelector(
".lightbox .prev"
);



let currentImage = 0;



const imageArray =
Array.from(galleryImages);



galleryImages.forEach(
(image,index)=>{


    image.parentElement
    .addEventListener("click",()=>{


        currentImage=index;


        showLightbox();


    });


});



function showLightbox(){


    if(lightbox){


        lightbox.classList.add(
        "active"
        );


        lightboxImage.src =
        imageArray[currentImage].src;


    }


}



function closeBox(){


    lightbox?.classList.remove(
    "active"
    );


}



closeLightbox?.addEventListener(
"click",
closeBox
);



lightbox?.addEventListener(
"click",
(e)=>{


    if(e.target === lightbox){

        closeBox();

    }


});





nextBtn?.addEventListener(
"click",
()=>{


    currentImage++;


    if(currentImage >= imageArray.length){

        currentImage=0;

    }


    showLightbox();


});





prevBtn?.addEventListener(
"click",
()=>{


    currentImage--;


    if(currentImage < 0){

        currentImage =
        imageArray.length-1;

    }


    showLightbox();


});







/* ==========================================
            TESTIMONIAL SLIDER
========================================== */


const testimonials =
document.querySelectorAll(
".testimonial"
);



const dots =
document.querySelectorAll(
".dot"
);



let testimonialIndex = 0;



function showTestimonial(index){


    testimonials.forEach(item=>{

        item.classList.remove(
        "active"
        );

    });



    dots.forEach(dot=>{

        dot.classList.remove(
        "active"
        );

    });



    testimonials[index]
    ?.classList.add(
    "active"
    );



    dots[index]
    ?.classList.add(
    "active"
    );


}



function autoTestimonial(){


    testimonialIndex++;


    if(testimonialIndex >= testimonials.length){

        testimonialIndex=0;

    }


    showTestimonial(
    testimonialIndex
    );


}



if(testimonials.length){


    setInterval(
    autoTestimonial,
    5000
    );


}



dots.forEach(
(dot,index)=>{


    dot.addEventListener(
    "click",
    ()=>{


        testimonialIndex=index;


        showTestimonial(index);


    });


});

/* ==========================================
        SCRIPT.JS PART 3 FINAL

        FAQ
        BOOKING MODAL
        FORM VALIDATION
        BACK TOP
        LAZY LOADING
========================================== */



/* ==========================================
            FAQ ACCORDION
========================================== */


const faqItems =
document.querySelectorAll(".faq-item");



faqItems.forEach(item=>{


    const question =
    item.querySelector(".faq-question");



    question?.addEventListener("click",()=>{


        faqItems.forEach(other=>{


            if(other !== item){

                other.classList.remove("active");

            }


        });



        item.classList.toggle("active");


    });


});







/* ==========================================
            BOOKING MODAL
========================================== */


const bookingModal =
document.getElementById("bookingModal");



const openBookingButtons =
document.querySelectorAll(
".book-btn, .hero .primary-btn, .service-btn"
);



const closeModal =
document.querySelector(".close-modal");




openBookingButtons.forEach(button=>{


    button.addEventListener("click",(e)=>{


        e.preventDefault();


        bookingModal?.classList.add(
        "active"
        );


        document.body.style.overflow =
        "hidden";


    });


});





closeModal?.addEventListener(
"click",
()=>{


    bookingModal.classList.remove(
    "active"
    );


    document.body.style.overflow =
    "auto";


});





bookingModal?.addEventListener(
"click",
(e)=>{


    if(e.target === bookingModal){


        bookingModal.classList.remove(
        "active"
        );


        document.body.style.overflow =
        "auto";


    }


});







/* ==========================================
            BOOKING FORM VALIDATION
========================================== */


const bookingForm =
document.getElementById(
"bookingForm"
);



bookingForm?.addEventListener(
"submit",
(e)=>{


    e.preventDefault();



    const inputs =
    bookingForm.querySelectorAll(
    "input, select, textarea"
    );



    let valid = true;



    inputs.forEach(input=>{


        if(input.hasAttribute("required")
        &&
        input.value.trim()===""){


            input.style.border =
            "1px solid red";


            valid=false;


        }


        else{


            input.style.border =
            "1px solid #ddd";


        }


    });





    if(valid){


        alert(
        "Thank you! Your event enquiry has been submitted successfully."
        );



        bookingForm.reset();



        bookingModal.classList.remove(
        "active"
        );



        document.body.style.overflow =
        "auto";


    }


});







/* ==========================================
            BACK TO TOP
========================================== */


const backTop =
document.getElementById(
"backTop"
);



window.addEventListener(
"scroll",
()=>{


    if(window.scrollY > 500){


        backTop?.classList.add(
        "show"
        );


    }

    else{


        backTop?.classList.remove(
        "show"
        );


    }


});





backTop?.addEventListener(
"click",
()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});







/* ==========================================
            IMAGE LAZY LOADING
========================================== */


const lazyImages =
document.querySelectorAll(
"img"
);



lazyImages.forEach(img=>{


    img.setAttribute(
    "loading",
    "lazy"
    );


});







/* ==========================================
            CLOSE MENU ON RESIZE
========================================== */


window.addEventListener(
"resize",
()=>{


    if(window.innerWidth > 900){


        navLinks?.classList.remove(
        "active"
        );


        menuToggle?.classList.remove(
        "active"
        );


    }


});







/* ==========================================
            PREVENT EMPTY LINKS
========================================== */


document.querySelectorAll(
'a[href="#"]'
)
.forEach(link=>{


    link.addEventListener(
    "click",
    e=>{


        e.preventDefault();


    });


});







/* ==========================================
            WEBSITE READY
========================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


    console.log(
    "Elite Moments Website Loaded Successfully"
    );


});