  const countdownEl = document.getElementById("countdown");

  const eventDate = new Date(2026, 3, 26); // 3 = aprile (mesi partono da 0)
  const today = new Date();

  // Azzeriamo ore/minuti/secondi per avere giorni "puliti"
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);

  const diffTime = eventDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  countdownEl.textContent = diffDays;