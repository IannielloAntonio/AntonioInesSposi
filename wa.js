const parts = ["", "", "", ""];
const number = parts.join("");
const text = encodeURIComponent(
  "Ciao! Confermiamo la nostra presenza al matrimonio 🎉"
);

let human = false;

["mousemove", "touchstart", "scroll", "keydown"].forEach(evt => {
  document.addEventListener(evt, () => human = true, { once: true });
});

document.getElementById("waBtn").addEventListener("click", function (e) {
  e.preventDefault();

  if (!human) {
    alert("Per favore interagisci prima con la pagina 🙂");
    return;
  }

  const ok = confirm("Aprire WhatsApp per inviare la conferma?");
  if (!ok) return;

  window.open(`https://wa.me/${number}?text=${text}`, "_blank");
});