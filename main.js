// Load header and footer
async function loadComponent(elementId, file) {
    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Cannot load ${file}`);
        }

        const html = await response.text();

        document.getElementById(elementId).innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}

// Load components
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");
});

//                   //
const header = document.getElementById('header');

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Always show header at the top
    if (currentScroll <= 100) {
        header.classList.remove('header-hidden');
        lastScroll = currentScroll;
        return;
    }

    // Scrolling down: hide header
    if (currentScroll > lastScroll) {
        header.classList.add('header-hidden');
    } 
    // Scrolling up: show header
    else {
        header.classList.remove('header-hidden');
    }

    lastScroll = currentScroll;
});

async function LightMode() {
var element = document.body;
element.classList.toggle("light-mode");
} 
