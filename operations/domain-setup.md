# Custom domain setup — hostcert.co.uk

**Status:** Domain available (not purchased yet). Buy at Nominet registrar (e.g. Namecheap, 123-reg, Google Domains).

## After purchase

1. In GitHub repo **Settings → Pages → Custom domain**, enter `hostcert.co.uk`
2. Add file `CNAME` to repo root containing only:
   ```
   hostcert.co.uk
   ```
3. DNS at your registrar:

   **Option A — apex domain (hostcert.co.uk)**
   ```
   A    @    185.199.108.153
   A    @    185.199.109.153
   A    @    185.199.110.153
   A    @    185.199.111.153
   ```

   **Option B — www redirect**
   ```
   CNAME   www   gemmabailey03.github.io
   ```

4. Enable **Enforce HTTPS** in GitHub Pages settings (may take up to 24h)
5. Update form redirect URLs in `onboarding.html` to `https://hostcert.co.uk/thank-you.html`

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
