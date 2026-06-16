# Stripe setup — HostCert

One Stripe product for this experiment. Use your existing business Stripe account unless you have a separate legal entity.

## 1. Create product

In Stripe Dashboard → **Product catalogue** → **Add product**

### Monthly (primary — checkout default)

| Field | Value |
| --- | --- |
| Name | HostCert Starter |
| Description | Certificate tracker for UK holiday let hosts — up to 5 properties |
| Pricing | **Recurring** · **£9.00** · **Monthly** · GBP |

### Annual (upsell — not on homepage)

| Field | Value |
| --- | --- |
| Name | HostCert Starter — Annual |
| Description | Same as monthly; pay yearly and save |
| Pricing | **Recurring** · **£79.00** · **Yearly** · GBP |

**Why £79/year:** £9×12 = £108. Saving £29 (~27%) is enough to convert without gutting margin. One annual sale = **8.8 months** of monthly revenue upfront — useful for ad budget gates.

**When to offer annual:**
- **Not** on the homepage or first checkout screen (keeps trial signup simple).
- **Yes** on `thank-you.html` after onboarding, welcome email (day 2–3 of trial), and reply to support (“switch to annual anytime”).
- Create a **second Payment Link** for annual; add to `js/config.js` as `stripeAnnualPaymentLink`.

**Optional founding offer (first 20 customers):** £69/year via Stripe coupon `FOUNDING69` — only mention in direct outreach, not public site.

## 2. Create payment link with trial

**Payment links** → **New**

- Product: HostCert Starter
- **Free trial:** 14 days
- After payment: redirect to `http://hostcert.co.uk/onboarding.html` until GitHub issues HTTPS cert (then switch to `https://`)
- Collect customer email: **Yes**
- Enable tax if your account requires it (UK VAT — check with accountant; many micro-SaaS under threshold)

## 3. Update site config

Edit `js/config.js`:

```javascript
stripePaymentLink: "https://buy.stripe.com/YOUR_LINK_HERE",
stripeAnnualPaymentLink: "https://buy.stripe.com/YOUR_ANNUAL_LINK_HERE",
annualPriceGbp: 79,
annualSaveGbp: 29,
```

Redeploy / push to GitHub Pages.

## 4. Test payment

- Use Stripe test mode link first
- Complete test checkout
- Confirm redirect to onboarding
- Confirm receipt email
- Refund test payment

## 5. Customer portal (cancellation)

Stripe Dashboard → **Settings** → **Customer portal**

- Enable cancellation
- Link in welcome email: Stripe generates per-customer portal URLs

## 6. Webhook (optional v1)

For automation later:

- Event: `checkout.session.completed`, `customer.subscription.deleted`
- Endpoint: Zapier/Make or simple serverless function
- Action: notify operator, trigger onboarding chase

## 7. Statement descriptor

Set to **HOSTCERT** or **HOSTCERT CO** (max 22 chars) so customers recognise charges.

## Checklist

- [x] Product created
- [x] Payment link with 14-day trial
- [ ] Test payment completed
- [x] `js/config.js` updated with live link
- [x] Site redeployed
- [ ] Refund process documented (see fulfilment.md)
- [ ] Link added to experiment tracker
