(function () {
  const config = window.HOSTCERT_CONFIG || {};

  function applyConfig() {
    document.querySelectorAll("[data-stripe-link]").forEach(function (el) {
      const link = config.stripePaymentLink;
      if (link && link !== "STRIPE_PAYMENT_LINK_PLACEHOLDER") {
        el.href = link;
      } else {
        el.href = "checkout.html";
        el.classList.add("checkout-pending");
      }
    });

    document.querySelectorAll("[data-support-email]").forEach(function (el) {
      const email = config.supportEmail || "support@hostcert.co.uk";
      if (el.tagName === "A") {
        el.href = "mailto:" + email;
        if (!el.textContent.trim()) el.textContent = email;
      }
    });

    document.querySelectorAll("[data-price]").forEach(function (el) {
      el.textContent = "£" + (config.priceGbp || 9);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyConfig);
  } else {
    applyConfig();
  }
})();
