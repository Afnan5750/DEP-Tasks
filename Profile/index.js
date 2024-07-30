var icon = document.getElementById("icon");


if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light");
}


let localData = localStorage.getItem("theme");


if (localData == "light") {
    icon.src = "Images/moon.png";
    document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
    icon.src = "Images/sun.png"
    document.body.classList.add("dark-theme");
}

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "Images/sun.png";
        localStorage.setItem("theme", "dark");
    } else {
        icon.src = "Images/moon.png";
        localStorage.setItem("theme", "light");
    }
}


// name paragraph and a amination in hero section

document.addEventListener("DOMContentLoaded", function () {
    const infoSection = document.querySelector(".info");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });

    observer.observe(infoSection);
});


// -------------------------------


// about p and a animation 

document.addEventListener("DOMContentLoaded", function () {
    const aboutInfo = document.querySelector('.about-info');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    observer.observe(aboutInfo);
});



// ------------------------------

// About image Animation 

document.addEventListener("DOMContentLoaded", function () {
    const imgSection = document.querySelector(".about-img");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });

    observer.observe(imgSection);
});


// -----------------------------------------


// nabar color on scrolling

window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


// ---------------------------------------

// Smooth srcolling on navbar click 

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

            if (targetId === 'home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const offset = targetElement.offsetTop - document.querySelector('nav').offsetHeight;
                    window.scrollTo({
                        top: offset,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});


// -----------------------------------------------

// Project Animation 

document.addEventListener("DOMContentLoaded", function () {
    const projectItems = document.querySelectorAll('.pro');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= -100 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight + 200 || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }


    function animateOnScroll() {
        projectItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('animate');
            } else {
                item.classList.remove('animate');
            }
        });
    }

    animateOnScroll();

    window.addEventListener('scroll', animateOnScroll);
});


// ------------------------------------------------------------


// See More button 

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector(".btn button");
    const hideElements = document.querySelectorAll(".pro.hide");
    let startIndex = 0;
    const elementsToShow = 3;

    submitButton.addEventListener("click", function () {
        for (let i = startIndex; i < startIndex + elementsToShow; i++) {
            if (hideElements[i]) {
                hideElements[i].style.display = "block";
            }
        }
        startIndex += elementsToShow;

        if (startIndex >= hideElements.length) {
            submitButton.style.display = "none";
        }
    });
});



// -----------------------------------------------------------



// Heading Skills, Projects, About Me Animation   


document.addEventListener("DOMContentLoaded", function () {
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateSectionTitles() {
        var sectionTitles = document.querySelectorAll(".section-title");
        sectionTitles.forEach(function (title) {
            if (isInViewport(title) && !title.classList.contains("active")) {
                title.classList.add("active");
            } else if (!isInViewport(title) && title.classList.contains("active")) {
                title.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", function () {
        animateSectionTitles();
    });

    animateSectionTitles();
});



// --------------------------------------

// Skill bar Animation 

document.addEventListener("DOMContentLoaded", function () {
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateSkillBars() {
        var skillBars = document.querySelectorAll(".skill-per");
        skillBars.forEach(function (bar) {
            if (isInViewport(bar) && !bar.classList.contains("active")) {
                bar.classList.add("active");
                bar.style.setProperty("--skill-percentage", bar.getAttribute("per"));
            } else if (!isInViewport(bar) && bar.classList.contains("active")) {
                bar.classList.remove("active");
                bar.style.setProperty("--skill-percentage", "0");
            }
        });
    }

    window.addEventListener("scroll", function () {
        animateSkillBars();
    });

    animateSkillBars();
});


// ----------------------------------------------------


// contact form submission 

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Sending..."

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});


// --------------------------------------------------






// Navbar into Hamburger menu



document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('nav ul');
    const bars = document.querySelectorAll('.bar');

    hamburgerMenu.addEventListener('click', function () {
        this.classList.toggle('active');
        navList.classList.toggle('show');

        bars.forEach(bar => bar.classList.toggle('active'));
    });
});



// ------------------------------------------------------------




//Typing Effect  




const typingText = document.getElementById('typing-text');
const words = ['Web Developer', 'Web Designer'];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
        typingText.innerHTML = `I'm a <span>${currentWord.slice(0, letterIndex)}</span>`;
        letterIndex++;
        if (letterIndex === currentWord.length + 1) {
            isDeleting = true;
            setTimeout(typeEffect, 500); // Decreased timeout for faster typing
        } else {
            setTimeout(typeEffect, 100); // Decreased timeout for faster typing
        }
    } else {
        typingText.innerHTML = `I'm a <span>${currentWord.slice(0, letterIndex)}</span>`;
        letterIndex--;
        if (letterIndex === 0) {
            isDeleting = false;
            wordIndex++;
            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
        setTimeout(typeEffect, 50); // Decreased timeout for faster deleting
    }
}

typeEffect();



// ---------------------------------------------------------------------







// Typing Effect Animation 

document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.getElementById('typing-text');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    observer.observe(typingText);
});

// --------------------------------------------------