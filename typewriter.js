const TYPE_SPEED = 28; // ms per carattere

function typeWriter(el) {
	const text = el.dataset.text;
	let index = 0;

	el.textContent = '';
	el.style.opacity = '1';

	function type() {
		if (index < text.length) {
			el.textContent += text.charAt(index);
			index++;
			setTimeout(type, TYPE_SPEED);
		} else {
			el.classList.add('typed'); // segna come completato
		}
	}

	type();
}

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (!entry.isIntersecting) return;

		const brano = entry.target.querySelector('.brano');

		if (brano && !brano.classList.contains('typed')) {
			typeWriter(brano);
		}
	});
}, {
	threshold: 0.6
});

// osserva solo i <li> che contengono un .brano
document.querySelectorAll('.timeline li').forEach(li => {
	if (li.querySelector('.brano')) {
		observer.observe(li);
	}
});
