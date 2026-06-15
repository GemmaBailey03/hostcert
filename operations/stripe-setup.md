# Stripe setup — HostCert

One Stripe product for this experiment. Use your existing business Stripe account unless you have a separate legal entity.

## 1. Create product

In Stripe Dashboard → **Product catalogue** → **Add product**

| Field | Value |
| --- | --- |
| Name | HostCert Starter |
| Description | Certificate tracker for UK holiday let hosts — up to 5 properties |
| Pricing | **Recurring** · **£9.00** · **Monthly** · GBP |

## 2. Create payment link with trial

**Payment links** → **New**

- Product: HostCert Starter
- **Free trial:** 14 days
- After payment: redirect to `https://hostcert.co.uk/onboarding.html` (or GitHub Pages URL until domain live)
- Collect customer email: **Yes**
- Enable tax if your account requires it (UK VAT — check with accountant; many micro-SaaS under threshold)

## 3. Update site config

Edit `js/config.js`:

```javascript
stripePaymentLink: "https://buy.stripe.com/YOUR_LINK_HERE",
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

- [ ] Product created
- [ ] Payment link with 14-day trial
- [ ] Test payment completed
- [ ] `js/config.js` updated with live link
- [ ] Site redeployed
- [ ] Refund process documented (see fulfilment.md)
- [ ] Link added to experiment tracker
