document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Form submitted successfully! We'll contact you soon.");
    form.reset();
  });
});
const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = Math.ceil(target / 80);

    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(updateCount, 40);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});
