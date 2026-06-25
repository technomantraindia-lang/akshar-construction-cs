(function initQuoteModal() {
  if (window.__aksharQuoteModalReady) return;
  window.__aksharQuoteModalReady = true;

  const script = document.currentScript;
  const assetsBase = script
    ? new URL("../assets/", script.src).href
    : "assets/";
  const modalImage =
    assetsBase +
    encodeURI("banera/project page.png");
  const logoImage =
    assetsBase +
    encodeURI("logo 48 (73).png");

  const modalMarkup = `
    <div class="quote-modal" id="quoteModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="quoteModalTitle">
      <div class="quote-modal__dialog">
        <aside class="quote-modal__aside">
          <img class="quote-modal__brand-logo" src="${logoImage}" alt="Akshar Construction" width="64" height="64" decoding="async">
          <img class="quote-modal__image" src="${modalImage}" alt="Akshar Construction project site" loading="lazy" draggable="false">
          <p class="quote-modal__tagline">Trusted Partner In</p>
          <h2 class="quote-modal__headline">Building &bull; Construction &bull; Excellence</h2>
          <div class="quote-modal__contacts">
            <div class="quote-modal__contact-card">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div>
                <strong>Call Us</strong>
                <a href="tel:+919875020688">+91 98750 20688</a>
              </div>
            </div>
            <div class="quote-modal__contact-card">
              <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
              <div>
                <strong>Email Us</strong>
                <a href="mailto:info@aksharconstruction.com">info@aksharconstruction.com</a>
              </div>
            </div>
            <div class="quote-modal__contact-card">
              <svg viewBox="0 0 24 24"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3v-7z"/><path d="M21 11h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3v-7z"/><path d="M7 12h10"/></svg>
              <div>
                <strong>24/7 Support</strong>
                <span>We are always here to help</span>
              </div>
            </div>
          </div>
        </aside>
        <div class="quote-modal__main">
          <button class="quote-modal__close" type="button" aria-label="Close quote form">
            <svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
          <h3 class="quote-modal__title" id="quoteModalTitle">Get in Touch</h3>
          <p class="quote-modal__subtitle">We'd love to hear from you. Send us an enquiry and our team will get back to you shortly.</p>
          <form class="quote-modal__form" id="quoteModalForm" novalidate>
            <div class="quote-modal__row">
              <label class="quote-modal__field">
                <svg class="quote-modal__field-icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <input type="text" name="name" placeholder="Full Name" required autocomplete="name">
              </label>
              <label class="quote-modal__field">
                <svg class="quote-modal__field-icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
                <input type="email" name="email" placeholder="Email Address" required autocomplete="email">
              </label>
            </div>
            <div class="quote-modal__row">
              <label class="quote-modal__field">
                <svg class="quote-modal__field-icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <input type="tel" name="phone" placeholder="Phone Number" required autocomplete="tel">
              </label>
              <label class="quote-modal__field">
                <svg class="quote-modal__field-icon" viewBox="0 0 24 24"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12h12"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
                <input type="text" name="company" placeholder="Company Name" autocomplete="organization">
              </label>
            </div>
            <label class="quote-modal__field quote-modal__field--full">
              <svg class="quote-modal__field-icon" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
              <select name="service" required>
                <option value="" disabled selected>Select Service</option>
                <option>Residential Construction</option>
                <option>Commercial Construction</option>
                <option>Industrial Construction</option>
                <option>Civil Construction Work</option>
                <option>Renovation &amp; Remodeling</option>
                <option>Turnkey Construction Projects</option>
                <option>Other</option>
              </select>
            </label>
            <label class="quote-modal__field quote-modal__field--full">
              <svg class="quote-modal__field-icon" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
              <input type="text" name="subject" placeholder="Subject" required>
            </label>
            <label class="quote-modal__field quote-modal__field--full quote-modal__field--textarea">
              <svg class="quote-modal__field-icon" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
              <textarea name="message" placeholder="Message" required></textarea>
            </label>
            <button class="quote-modal__submit" type="submit">
              <svg viewBox="0 0 24 24"><path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-6h6v6"/></svg>
              Send Enquiry
              <svg class="quote-modal__submit-arrow" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
            </button>
          </form>
          <p class="quote-modal__note">
            <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            We'll respond within 24 hours
          </p>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalMarkup);

  const modal = document.getElementById("quoteModal");
  const form = document.getElementById("quoteModalForm");
  const closeBtn = modal.querySelector(".quote-modal__close");
  const serviceSelect = form.querySelector('select[name="service"]');
  let lastFocus = null;

  function syncServiceSelectStyle() {
    if (!serviceSelect) return;
    serviceSelect.classList.toggle("has-value", Boolean(serviceSelect.value));
  }

  if (serviceSelect) {
    syncServiceSelectStyle();
    serviceSelect.addEventListener("change", syncServiceSelectStyle);
  }

  function openModal() {
    lastFocus = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("quote-modal-open");
    const firstInput = form.querySelector("input, select, textarea");
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 120);
    }
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("quote-modal-open");
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  }

  function isQuoteTrigger(element) {
    if (!element || !element.closest) return false;
    return Boolean(
      element.closest(".quote-trigger, .header-cta, .quote-button")
    );
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".quote-trigger, .header-cta, .quote-button");
    if (!trigger) return;
    event.preventDefault();
    event.stopPropagation();
    openModal();
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const lines = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Company: ${data.get("company") || "N/A"}`,
      `Service: ${data.get("service")}`,
      `Subject: ${data.get("subject")}`,
      "",
      String(data.get("message")),
    ];

    const subject = encodeURIComponent(`Quote Enquiry: ${data.get("subject")}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:info@aksharconstruction.com?subject=${subject}&body=${body}`;
    closeModal();
    form.reset();
    syncServiceSelectStyle();
  });

  window.openAksharQuoteModal = openModal;
})();
