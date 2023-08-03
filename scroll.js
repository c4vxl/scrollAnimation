document.querySelectorAll(".scroll_animation_enabled").forEach(element => {
    element.setAttribute("style", "transition: 0s;");
    element.classList.add("scroll_animation_inviewport");
    setTimeout(() => {
        element.setAttribute("style", "");
    }, 10);
});

window.addEventListener("scroll", (event) => {
    document.querySelectorAll(".scroll_animation_enabled").forEach(element => {
        const rect = element.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add("scroll_animation_inviewport");
        } else if (rect.top > window.innerHeight) {
            element.classList.remove("scroll_animation_inviewport");
        }
    });
});