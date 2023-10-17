let lang = navigator.language;

if (lang.startsWith("fr")) {
    window.location.href = "fr/"
}
else {
    window.location.href = "en/"
}