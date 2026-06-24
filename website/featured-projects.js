const section = document.querySelector(".featured-projects");
const panels = document.querySelectorAll(".fp-panel");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const mobileQuery = window.matchMedia("(max-width: 900px)");

if (section && panels.length) {

function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function mapRange(value, inputMin, inputMax, outputMin, outputMax) {
  const progress = clamp((value - inputMin) / (inputMax - inputMin));
  const easedProgress = progress * progress * (3 - 2 * progress);
  return outputMin + (outputMax - outputMin) * easedProgress;
}

function setPercent(name, value) {
  section.style.setProperty(name, `${value.toFixed(2)}%`);
}

function setNumber(name, value) {
  section.style.setProperty(name, value.toFixed(3));
}

function setActivePanel(index) {
  panels.forEach((panel, panelIndex) => {
    panel.classList.toggle("is-active", panelIndex === index);
  });

  section.style.setProperty("--panel-1-z", index === 0 ? "3" : "1");
  section.style.setProperty("--panel-2-z", index === 1 ? "3" : "2");
  section.style.setProperty("--panel-3-z", index === 2 ? "3" : "1");
}

function resetMobilePanels() {
  setPercent("--img-2-y", 105);
  setPercent("--img-4-y", 105);
  setPercent("--img-6-y", 105);
  setPercent("--wrap-2-y", 105);
  setPercent("--wrap-3-y", 105);
  setPercent("--panel-1-y", 0);
  setPercent("--panel-2-y", 0);
  setPercent("--panel-3-y", 0);
  setNumber("--panel-1-opacity", 1);
  setNumber("--panel-2-opacity", 1);
  setNumber("--panel-3-opacity", 1);
  panels.forEach((panel) => panel.classList.add("is-active"));
}

function updatePanelStack(progress) {
  setPercent("--panel-1-y", mapRange(progress, 0.30, 0.52, 0, 105));
  setNumber("--panel-1-opacity", mapRange(progress, 0.36, 0.50, 1, 0));

  const panel2In = mapRange(progress, 0.30, 0.52, -105, 0);
  const panel2Out = mapRange(progress, 0.64, 0.86, 0, 110);
  const panel2Y = progress < 0.64 ? panel2In : panel2Out;
  const panel2OpacityIn = mapRange(progress, 0.36, 0.52, 0, 1);
  const panel2OpacityOut = mapRange(progress, 0.64, 0.80, 1, 0);
  const panel2Opacity = progress < 0.64 ? panel2OpacityIn : panel2OpacityOut;

  setPercent("--panel-2-y", panel2Y);
  setNumber("--panel-2-opacity", panel2Opacity);

  setPercent("--panel-3-y", mapRange(progress, 0.64, 0.86, -110, 0));
  setNumber("--panel-3-opacity", mapRange(progress, 0.70, 0.86, 0, 1));

  if (progress < 0.52) {
    setActivePanel(0);
  } else if (progress < 0.86) {
    setActivePanel(1);
  } else {
    setActivePanel(2);
  }
}

function updateProjectScroll() {
  section.classList.toggle("fp-mobile-mode", mobileQuery.matches);

  if (reduceMotion) {
    resetMobilePanels();
    return;
  }

  const rect = section.getBoundingClientRect();
  const maxScroll = Math.max(section.offsetHeight - window.innerHeight, 1);
  const progress = clamp(-rect.top / maxScroll);

  if (!mobileQuery.matches) {
    setPercent("--img-2-y", 105);
    setPercent("--img-4-y", 105);
    setPercent("--img-6-y", 105);
    setPercent("--wrap-2-y", mapRange(progress, 0.30, 0.52, 105, 0));
    setPercent("--wrap-3-y", mapRange(progress, 0.64, 0.86, 105, 0));
  }

  updatePanelStack(progress);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        section.classList.add("is-visible");
        revealObserver.unobserve(section);
      }
    });
  },
  { threshold: 0.12 }
);

revealObserver.observe(section);

updateProjectScroll();
window.addEventListener("scroll", updateProjectScroll, { passive: true });
window.addEventListener("resize", updateProjectScroll);
mobileQuery.addEventListener("change", updateProjectScroll);
}
