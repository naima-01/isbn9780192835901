
document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".banner");
    const art = document.querySelector(".art");
    const clicks = document.querySelector(".clicks");
    const entries = document.querySelector(".entries");
    const contact = document.querySelector(".contact");
    const title = document.querySelector(".title");
    const tea = document.querySelector(".tea");

    // Initial transforms
    const bodyHeight = document.body.clientHeight;
    const bannerHeight = 277; // Banner's height
    const translateValue = (bodyHeight / 2) - (bannerHeight / 2);
    banner.style.transform = `translateY(${translateValue}px)`;
    art.style.transform = `translateY(${translateValue}px)`;
    clicks.style.transform = `translateY(${translateValue}px)`;
    entries.style.transform = `translateY(${translateValue}px)`;
    contact.style.transform = `translateY(${translateValue}px)`;

    function fadeIn(element, duration) {
        element.style.opacity = "0";
        element.style.transition = `opacity ${duration}ms ease-in`;
        element.style.opacity = "1";
    }

    banner.addEventListener("click", function () {
        // Apply the translation effect to move elements to flex-start
        banner.style.transition = "transform 0.5s ease";
        banner.style.transform = "translateY(0)";

        art.style.transition = "transform 0.5s ease";
        art.style.transform = "translateY(0)";

        clicks.style.transition = "transform 0.5s ease";
        clicks.style.transform = "translateY(0)";

        entries.style.transition = "transform 0.5s ease";
        entries.style.transform = "translateY(0)";

        contact.style.transition = "transform 0.5s ease";
        contact.style.transform = "translateY(0)";

        // Wait for the translation to complete before fading in
        setTimeout(function () {
            fadeIn(art, 500);
            fadeIn(clicks, 500);
            fadeIn(entries, 500);
            fadeIn(contact, 500);
        }, 500); // Match the duration of the translation effect
        title.style.opacity = "1";
        tea.style.opacity = "1";
    });

    const elementsToFadeIn = document.querySelectorAll('.clicks-container');
    setTimeout(function () {
        elementsToFadeIn.forEach(element => {
            element.classList.add('visible');
        });
    }, 500); // Adjust delay as needed
});
