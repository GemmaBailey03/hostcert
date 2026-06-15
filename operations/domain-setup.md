# Custom domain setup — hostcert.co.uk

**Status:** Domain purchased (1 year, ~£8.39). DNS → GitHub Pages in progress.

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

## Email forwarding

Set up `support@hostcert.co.uk` → your inbox (registrar forwarding or ImprovMX / Cloudflare Email Routing).

Required for:
- FormSubmit activation
- Customer support
- Stripe receipt contact (optional)

## Cost estimate

- Domain: ~£5–12/year
- Email forwarding: free tier available
- Hosting: free (GitHub Pages)
