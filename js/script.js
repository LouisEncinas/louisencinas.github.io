function hide(div, zInd) {
    div.style.zIndex = zInd;
    div.style.backgroundColor = "rgba(0,0,0,.2)";
    document.body.style.overflow = 'hidden';
}

function unhide(div) {
    div.style.backgroundColor = "rgba(0,0,0,0)";
    setTimeout(function() {
        div.style.zIndex = "-1";
    }, 300);
}

// Ouverture et fermeture de la fenêtre modal

let hide_overlay_modal = document.getElementById("hide_overlay_modal");
let hide_overlay_navbar = document.getElementById("hide_overlay_navbar");

let modal = document.getElementById("modal_contact");

let open_btn = document.getElementById("header_navbar_link_contact");
let close_btn = document.getElementById("modal_close");

open_btn.addEventListener("click", function() {
    modal.style.bottom = "calc(50% - var(--letter_height)/2)";
    hide(hide_overlay_modal, "9");
});

close_btn.addEventListener("click", function() {
    modal.style.bottom = "-100%";
    unhide(hide_overlay_modal);
    if (window.innerWidth >= 768) {
        document.body.style.overflow = 'auto';
    }
});

// Déf des chemins

let link_fr = document.getElementById("footer_select_lang_fr_link");
let link_en = document.getElementById("footer_select_lang_en_link");
let loc = location.href;

if (loc.search("/fr/") !== -1) {
    link_fr.setAttribute("href", loc);
    link_en.setAttribute("href", loc.replace("/fr/", "/en/"));
} 

if (loc.search("/en/") !== -1) {
    link_en.setAttribute("href", loc);
    link_fr.setAttribute("href", loc.replace("/en/", "/fr/"));
}

// Menu responsive

let dev_btn = document.getElementsByClassName("header_dev_container");
let close_dev_btn = document.getElementById("navbar_close");

let navbar_dev = document.getElementById("dev_navbar");

function hideNavbar() {
    navbar_dev.style.right = "-100%";
    unhide(hide_overlay_navbar);
    document.body.style.overflow = 'auto';
}

function unhideNavbar() {
    navbar_dev.style.right = "0";
    hide(hide_overlay_navbar, "1");
}

dev_btn[0].addEventListener("click", unhideNavbar);
close_dev_btn.addEventListener("click", hideNavbar);

window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
        hideNavbar();
    }
});