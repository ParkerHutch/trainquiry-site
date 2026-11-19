const storeLink = document.querySelector("[data-app-store]");
const releaseStatus = document.querySelector("[data-release-status]");
const appStoreUrl = window.TRAINQUIRY?.appStoreUrl;

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
