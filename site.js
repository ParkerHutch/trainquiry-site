const storeLink = document.querySelector("[data-app-store]");
const releaseStatus = document.querySelector("[data-release-status]");
const appStoreUrl = window.TRAINQUIRY?.appStoreUrl;

const previewImage = document.querySelector("[data-preview-image]");
const previewControls = document.querySelector("[data-preview-controls]");
const previewButtons = document.querySelectorAll("[data-preview]");
const previews = {
  lock: {
    src: "assets/widget-lock-screen.jpg",
    alt: "Trainquility widgets showing sample arrivals on an iPhone Lock Screen.",
    width: 1206,
    height: 2622
  },
  home: {
    src: "assets/widget-home-screen.jpg",
    alt: "Trainquility widget showing sample arrivals on an iPhone Home Screen.",
    width: 1170,
    height: 2532
  }
};

if (previewImage && previewControls) {
  previewControls.hidden = false;
  previewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = previews[button.dataset.preview];
      if (!selected) return;
      previewImage.src = selected.src;
      previewImage.alt = selected.alt;
      previewImage.width = selected.width;
      previewImage.height = selected.height;
      previewButtons.forEach((option) => {
        option.setAttribute("aria-pressed", String(option === button));
      });
    });
  });
}

if (appStoreUrl) {
  try {
    const url = new URL(appStoreUrl);
    if (url.protocol === "https:" && url.hostname === "apps.apple.com") {
      storeLink.href = url.href;
      storeLink.hidden = false;
      releaseStatus.hidden = true;
    }
  } catch {
    // Keep the release status if the configured URL is incomplete.
  }
}

function showLinkedPrivacyPolicy() {
  if (window.location.hash !== "#privacy") return;
  const policy = document.getElementById("privacy");
  policy.open = true;
  policy.scrollIntoView({ block: "start" });
}

window.addEventListener("hashchange", showLinkedPrivacyPolicy);
showLinkedPrivacyPolicy();
