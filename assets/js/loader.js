/* ==========================================
   COMPONENT LOADER
========================================== */

function loadComponents() {

    const components = {

        header: "components/header.html",

        hero: "components/hero.html",

        trusted: "components/trusted.html",

        about: "components/abouts.html",


        services: "components/services.html",

        projects: "components/projects.html",

        portfolio: "components/portfolio.html",

        testimonials: "components/testimonials.html",

        whyChoose: "components/why-choose.html",

        cta: "components/cta.html",

        footer: "components/footer.html",

        contact: "components/contact.html",

        products: "components/home/products.html",

        serviceAgent: "components/service-agent.html",

    };

    Object.entries(components).forEach(([id, file]) => {

        const element = document.getElementById(id);

        if (!element) return;

        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${file}`);
                }
                return response.text();
            })
            .then(html => {
                element.innerHTML = html;

                if (id === "header") {
                    navbarScroll();
                    setActiveNavLink();
                }

                // Contact form initialize
                if (id === "contact" && typeof initContactForm === "function") {
                    initContactForm();
                }

                // Service Agent initialize
                if (id === "serviceAgent" && typeof initServiceAgent === "function") {
                    initServiceAgent();
                }

                removeCurrentPageLinks(element, id);
            })
            .catch(error => console.error(error));

    });

}

function removeCurrentPageLinks(container, componentId) {

    if (componentId === "header" || componentId === "footer") return;

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const links = container.querySelectorAll("a[href]");

    links.forEach(link => {

        const linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage !== currentPage) return;

        const centeredWrapper = link.closest(".text-center");
        link.remove();

        if (centeredWrapper && centeredWrapper.children.length === 0) {
            centeredWrapper.remove();
        }

    });

}

/* ==========================================
   LOAD COMPONENTS
========================================== */

document.addEventListener("DOMContentLoaded", () => {
    loadComponents();
});

