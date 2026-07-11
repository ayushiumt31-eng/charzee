/* ==========================================
   NAVBAR
========================================== */

function navbarScroll(){

    const header=document.querySelector(".header");

    if(!header) return;

    if(header.dataset.scrollReady==="true") return;

    header.dataset.scrollReady="true";

    const updateHeaderState=()=>{

        if(window.scrollY>80){

            header.classList.add("scrolled");

        }

        else{

            header.classList.remove("scrolled");

        }

    };

    window.addEventListener("scroll",()=>{

        updateHeaderState();

    });

    updateHeaderState();

}

function setActiveNavLink(){

    const currentPage=window.location.pathname.split("/").pop() || "index.html";
    const navLinks=document.querySelectorAll(".navbar-nav .nav-link[href]");

    navLinks.forEach(link=>{

        const linkPage=link.getAttribute("href").split("/").pop();
        const linkLabel=link.textContent.trim().toLowerCase();

        link.classList.toggle(
            "active",
            linkPage===currentPage || (currentPage==="products.html" && linkLabel==="products")
        );

    });

}
