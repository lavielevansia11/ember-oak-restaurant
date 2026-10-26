// Menu category filtering
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".menu-card");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("is-active"));
    button.classList.add("is-active");

    const category = button.dataset.filter;
    cards.forEach((card) => {
      const show = category === "all" || card.dataset.category === category;
      card.classList.toggle("is-hidden", !show);
    });
  });
});

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// Reservation form (demo only — no backend)
const form = document.getElementById("reserve-form");
const note = document.getElementById("form-note");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    note.textContent = "Please fill in your name, email and date.";
    form.reportValidity();
    return;
  }

  const data = new FormData(form);
  note.textContent = `Thanks, ${data.get("name")}! We'll confirm your table for ${data.get("guests")} on ${data.get("date")} by email.`;
  form.reset();
});

// Default date to today
const dateInput = form.querySelector('input[name="date"]');
dateInput.min = new Date().toISOString().split("T")[0];
