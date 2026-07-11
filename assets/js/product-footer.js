/* Footer loader for product detail pages located in components/home/product */
document.addEventListener("DOMContentLoaded", () => {
    const footerTarget = document.getElementById("productFooter");

    if (!footerTarget) return;

    fetch("../../../components/footer.html")
        .then(response => {
            if (!response.ok) throw new Error("Unable to load footer");
            return response.text();
        })
        .then(html => {
            const rootPath = "../../../";

            html = html.replace(/(src|href)="assets\//g, `$1="${rootPath}assets/`);
            html = html.replace(/href="(?!https?:|mailto:|tel:|#|\.\.\/|\.\/|assets\/)([^"]+)"/g, (match, path) => `href="${rootPath}${path}"`);

            footerTarget.innerHTML = html;
        })
        .catch(error => console.error(error));
});
