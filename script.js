const text = document.querySelector(".sec-text");

const load = () => {
    setTimeout(() => {
        text.textContent = "Maghfur Hasani";
    }, 0);
    setTimeout(() => {
        text.textContent = "a Full Stack"
    }, 4000);
    setTimeout(() => {
        text.textContent = "a Web Developer"
    }, 8000);
}

load();
setInterval(load, 12000);