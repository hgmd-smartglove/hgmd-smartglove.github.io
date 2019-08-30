var a = 1;
var numberofpages = document.getElementsByTagName("section").length;

[...document.getElementsByTagName("section")].forEach(tag => tag.addEventListener("click", event => {
    a = a == numberofpages ? 1 : a + 1;
    document.body.style.marginTop = ((a - 1) * -100) + "vh"
}));

[...document.getElementsByTagName("section")].forEach(tag => tag.addEventListener("contextmenu", event => {
    event.preventDefault();
    a = a == 1 ? numberofpages : a - 1;
    document.body.style.marginTop = ((a - 1) * -100) + "vh"
}));