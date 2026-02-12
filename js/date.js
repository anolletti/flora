// --- Footer Year ---
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- Powtoon autoplay on scroll ---
  const iframe = document.getElementById("powtoonVideo");
  if (!iframe) return;

  const baseSrc = iframe.src.split("&autoplay")[0];

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        iframe.src = baseSrc + "&autoplay=1&mute=1";
      }
    },
    { threshold: 0.5 },
  );

  observer.observe(iframe);
});
