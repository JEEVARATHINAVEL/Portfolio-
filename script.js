

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight / 1.2;

            if (sectionTop < triggerPoint) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});


const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

const indicator = document.createElement("div");
indicator.classList.add("indicator");
navbar.appendChild(indicator);

function moveIndicator(activeLink) {
    const linkRect = activeLink.getBoundingClientRect();
    const navbarRect = navbar.getBoundingClientRect();
    
    indicator.style.width = `${linkRect.width}px`;
    indicator.style.left = `${linkRect.left - navbarRect.left}px`;
}
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
        moveIndicator(this);
    });
});

window.addEventListener("load", () => {
    const activeLink = document.querySelector(".navbar a.active");
    if (activeLink) moveIndicator(activeLink);
});

window.addEventListener("scroll", () => {
    let current = "";

    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === current) {
            link.classList.add("active");
            moveIndicator(link);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".home-image img").classList.add("animated");
    }, 500); 
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".hidden");

    function revealOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 100;

            if (sectionTop < triggerPoint) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".hidden");

    function revealOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 100;

            if (sectionTop < triggerPoint) {
                section.classList.add("show");
            } else {
                section.classList.remove("show"); 
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

document.addEventListener("DOMContentLoaded", () => {
    const skillCards = document.querySelectorAll(".skill-card");
    
    skillCards.forEach(card => {
        card.addEventListener("click", () => {
            card.querySelector(".card-inner").classList.toggle("flipped");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");

    function handleScroll() {
        const section = document.querySelector(".projects-section");
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (sectionPosition < screenPosition) {
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("active");
                }, index * 200);
            });
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});

document.addEventListener("DOMContentLoaded", () => {
    function showImage(imageSrc) {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("certificateImage");
        
        modal.style.display = "flex";
        modalImg.src = imageSrc;
    }

    function closeImage() {
        document.getElementById("imageModal").style.display = "none";
    }

    window.showImage = showImage;
    window.closeImage = closeImage;
});

function showImage(imageSrc) {
    let imgWindow = window.open("", "_blank");
    imgWindow.document.write('<img src="' + imageSrc + '" style="max-width:100%; height:auto; display:block; margin:auto;">');
    imgWindow.document.title = "Certificate Image";
}


document.addEventListener("DOMContentLoaded", () => {
    const contactSection = document.querySelector(".contact-section");

    function handleScroll() {
        const sectionPosition = contactSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (sectionPosition < screenPosition) {
            contactSection.classList.add("active");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

 
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();


    let phoneNumber = "9176089003"; 

    
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before sending.");
        return;
    }

   
    let whatsappMessage = `Hello, I am *${name}* (%0AEmail: ${email})%0A%0A${message}`;


    let whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  
    window.open(whatsappURL, "_blank");
});



