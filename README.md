# HostCert — Experiment EXP-001

Certificate expiry tracker for self-managing UK short-term let hosts.

## Live site

- **Staging URL:** https://gemmabailey03.github.io/hostcert/
- **Target domain:** hostcert.co.uk (available — purchase pending)
- **Price:** £9/month after 14-day trial

## Quick start (operator)

1. Buy `hostcert.co.uk` and point DNS to GitHub Pages (see below)
2. Set up `support@hostcert.co.uk` email forwarding
3. Activate FormSubmit (submit test form once, click activation email)
4. Complete Stripe setup → `operations/stripe-setup.md`
5. Update `js/config.js` with Stripe payment link
6. Push to GitHub → site updates in ~1 min

## Local preview

```bash
cd experiments/hostcert
python3 -m http.server 8080
# Open http://localhost:8080
```

## GitHub Pages deploy

Site auto-deploys from `main` branch of `GemmaBailey03/hostcert`.

```bash
git add .
git commit -m "Update site"
git push
```

## Custom domain (after purchase)

1. Add `CNAME` file containing `hostcert.co.uk` (already in repo when domain ready)
2. DNS at registrar:
   - `A` records → GitHub Pages IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
   - OR `CNAME` www → gemmabailey03.github.io
3. Enable HTTPS in repo Settings → Pages

## Structure

```
index.html          Homepage + pricing
checkout.html       Trial / Stripe checkout
onboarding.html     Customer intake form
thank-you.html      Post-form confirmation
privacy.html / terms.html / contact.html
operations/         Fulfilment, Stripe, customer tracker
templates/          Guest pack + compliance PDF templates
launch/             Outreach copy
```

## Status

See `/experiment-tracker.md` in project root.
