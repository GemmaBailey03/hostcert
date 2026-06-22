# Custom domain setup — hostcert.co.uk

**Status:** Domain purchased (1 year, ~£8.39). DNS → GitHub Pages complete. **HTTPS live** (Let's Encrypt, enforced 22 Jun 2026).

## DNS records (GoDaddy → GitHub Pages)

In **DNS Management** for `hostcert.co.uk`, add or update:

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| A | @ | 185.199.108.153 | 600 (or default) |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |
| CNAME | www | gemmabailey03.github.io | 600 |

Remove any conflicting `@` A records pointing at GoDaddy parking.

GitHub repo already has `CNAME` file and custom domain set to `hostcert.co.uk`.

## Email forwarding (ImprovMX — free)

**Chosen setup:** ImprovMX (free tier). No cPanel hosting needed — website stays on GitHub Pages; only email uses MX records.

| Item | Value |
| --- | --- |
| Forward | `support@hostcert.co.uk` → `peoplebuilding.co.uk@gmail.com` |
| ImprovMX account | `peoplebuilding.co.uk@gmail.com` |
| MX 1 | `@` → `mx1.improvmx.com` (priority 10) |
| MX 2 | `@` → `mx2.improvmx.com` (priority 20) |
| SPF (TXT) | `@` → `v=spf1 include:spf.improvmx.com ~all` |

**Activation:** Confirm ImprovMX signup email → add domain `hostcert.co.uk` → create `support` alias → MX records in GoDaddy (below).

## Email forwarding (alternatives — not used)

cPanel forwarders work if you already pay for hosting and add the domain there. GoDaddy paid email is unnecessary for this experiment.

Required for FormSubmit activation, customer support, and Stripe receipt contact (optional).

## Cost estimate

- Domain: ~£5–12/year
- Email forwarding: free tier available
- Hosting: free (GitHub Pages)
