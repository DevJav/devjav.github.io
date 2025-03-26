const topBtn = document.getElementById("topBtn");
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('darkmodebutton');

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.visibility = "visible";
        topBtn.style.opacity = "1";
        topBtn.style.pointerEvents = "auto";
    } else {
        topBtn.style.visibility = "hidden";
        topBtn.style.opacity = "0";
        topBtn.style.pointerEvents = "none";
    }

    if (document.body.scrollTop < 0 || document.documentElement.scrollTop < 450) {
        themeSwitch.style.visibility = "visible";
        themeSwitch.style.opacity = "1";
        themeSwitch.style.pointerEvents = "auto";
    } else {
        themeSwitch.style.visibility = "hidden";
        themeSwitch.style.opacity = "0";
        themeSwitch.style.pointerEvents = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
topBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode();
}

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'enabled');
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
};

if (darkmode === 'enabled') {
    enableDarkMode();
}

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    if (darkmode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
