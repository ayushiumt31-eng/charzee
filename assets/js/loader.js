/* ==========================================
   COMPONENT LOADER
========================================== */

function loadComponents() {

    const components = {

        header: "components/header.html",

        hero: "components/hero.html",

        trusted: "components/trusted.html",

        about: "components/abouts.html",

        // products: "components/products.html",

        services: "components/services.html",

        projects: "components/projects.html",

        whyChoose: "components/whychoose.html",

        cta: "components/cta.html",

        footer: "components/footer.html",

        products: "components/home/products.html",

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
            })
            .catch(error => console.error(error));

    });

}

/* ==========================================
   LOAD COMPONENTS
========================================== */

document.addEventListener("DOMContentLoaded", () => {
    loadComponents();
});

