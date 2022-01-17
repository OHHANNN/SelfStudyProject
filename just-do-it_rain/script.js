function createdoit() {
    const doit = document.createElement("div");
    doit.classList.add('doit');

    doit.style.left = Math.random() * 100 + "vw";

    doit.style.animationDuration = Math.random() * 2 + 4 + "s";

    doit.innerText = "Just Do It";

    document.body.appendChild(doit);

    setTimeout(() => {
        doit.remove();
    },6000);
}

setInterval(createdoit, 300);