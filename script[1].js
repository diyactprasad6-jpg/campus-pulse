// CAMPUS PULSE - JAVASCRIPT

// 1. Dynamic greeting
const heading = document.querySelector(".topbar h1");

function updateGreeting() {
    const hour = new Date().getHours();

    let greeting = "Good evening";

    if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 17) {
        greeting = "Good afternoon";
    }

    heading.textContent = greeting + ", Student! 👋";
}

updateGreeting();


// 2. Display today's date
const dateText = document.createElement("p");

dateText.textContent = new Date().toLocaleDateString(
    "en-IN",
    {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }
);

document.querySelector(".topbar > div").appendChild(dateText);


// Active navigation and section switching
const navLinks = document.querySelectorAll(".sidebar nav a");
const sections = document.querySelectorAll(".main-content > section, .main-content > header");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("selected"));
        this.classList.add("selected");

        const target = this.getAttribute("href").substring(1);

        sections.forEach(section => {
            section.style.display =
                section.id === target ? "block" : "none";
        });
    });
});


// 4. Notice interaction
const notices = document.querySelectorAll(".notice");

notices.forEach(notice => {
    notice.style.cursor = "pointer";

    notice.addEventListener("click", function () {
        this.classList.toggle("notice-open");
    });
});

console.log("Campus Pulse is ready!");