
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector("#site-navigation");

    if (!menuButton || !navigation) return;

    // Determine whether we're in the pages folder.
    const inPagesFolder = window.location.pathname
        .split("/")
        .includes("pages");

    const prefix = inPagesFolder ? "../" : "";

    // One shared navigation list for the entire website.
    const menuItems = [
        ["Home", "index.html"],
        ["Web Design & Development", "pages/web-design-development.html"],
        ["Software Development", "pages/software-development.html"],
        ["Digital Solutions", "pages/digital-solutions.html"],
        ["Hosting & Maintenance", "pages/hosting-maintenance.html"],
        ["Portfolio", "pages/portfolio.html"],
        ["Software Support", "pages/software-support.html"],
        ["About", "pages/about.html"],
        ["Contact", "pages/contact.html"]
    ];

    // Build navigation links.
    navigation.replaceChildren();

    menuItems.forEach(function ([label, path]) {
        const link = document.createElement("a");
        link.href = prefix + path;
        link.textContent = label;
        navigation.appendChild(link);
    });

    function closeMenu() {
        navigation.classList.remove("menu-open");
        menuButton.setAttribute("aria-expanded", "false");
    }

    menuButton.addEventListener("click", function () {
        const isOpen = navigation.classList.toggle("menu-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    // Close when clicking outside the menu.
    document.addEventListener("click", function (event) {
        if (!navigation.contains(event.target) &&
            !menuButton.contains(event.target)) {
            closeMenu();
        }
    });

    // Close when pressing Escape.
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            const wasOpen = navigation.classList.contains("menu-open");
            closeMenu();
            if (wasOpen) menuButton.focus();
        }
    });
});
