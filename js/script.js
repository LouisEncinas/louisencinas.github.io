// Ouverture et fermeture de la fenêtre modal

let modal = document.getElementById("modal_contact");

let open_btn = document.getElementById("header_navbar_link_contact");
let close_btn = document.getElementById("modal_close");

open_btn.addEventListener("click", function() {
    modal.style.bottom = "calc(50% - var(--letter_height)/2)";
});

close_btn.addEventListener("click", function() {
    modal.style.bottom = "-100%";
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



