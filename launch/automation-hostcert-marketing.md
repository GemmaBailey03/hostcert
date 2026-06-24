# HostCert scheduled marketing — agent runbook

**Experiment:** EXP-001 · **Runs:** Monday & Wednesday ~9:00 (local)  
**Owner:** Cursor automation · **Notify:** WhatsApp Gemma (`447932656999`)

---

## Every run (in order)

### 1. Read current state

- `launch/weekly-metrics.md` — Week 1 actuals
- `launch/outreach-prospects.md` — agent log + prospect table
- `launch/marketing-plan.md` — phase, gates, cadence
- `experiment-tracker.md` in parent Steve business a day repo if accessible; else skip

### 2. SEO content (primary — no browser required)

**Wednesday runs:** Publish **one new guide** if fewer than 4 guides exist, OR refresh/update an existing guide’s “Updated” date and add 2–3 sentences if nothing new to publish.

**Monday runs:** Cross-link guides from homepage/footer if missing; update `sitemap.xml`; ensure internal links between guides.

**Guide topics queue (use next unused):**

| # | Slug | Topic |
| --- | --- | --- |
| 1 | uk-stl-certificates-checklist | Done |
| 2 | spreadsheet-vs-tracker-holiday-let-certs | Done |
| 3 | airbnb-platform-fire-safety-uploads-uk | Done |
| 4 | scotland-short-term-let-licensing-basics | Scotland STL licensing overview (not legal advice) |
| 5 | england-stl-registration-2026 | England registration scheme prep |
| 6 | holiday-let-insurance-renewal-checklist | Insurance + cert alignment |

**Publish checklist:**

- [ ] HTML in `guides/` matching existing guide style
- [ ] Link from `index.html` guides section + footer
- [ ] Add URL to `sitemap.xml`
- [ ] Commit + push to `main` (GitHub Pages deploy)

### 3. Metrics

Update `launch/weekly-metrics.md` actuals column and agent log row in `launch/outreach-prospects.md`.

### 4. Social (optional — strict rules)

- **Facebook:** Do NOT automate. No Browser Hub unless Gemma explicitly requests.
- **Reddit:** Only if saved login works in **one** browser session (search → comment → close). Max 1 comment per run. If automation fails, skip and note in log.
- **Never** rapid open/close browser cycles.

### 5. FormSubmit / Stripe

- Spot-check `https://hostcert.co.uk` returns 200
- Do not change Stripe without `operations/stripe-setup.md`

---

## WhatsApp summary (required)

Send to **447932656999** when done:

```text
HostCert marketing run — [Mon/Wed] [date]

• SEO: [what published/updated + URL]
• Site: live / any issues
• Outreach: [Reddit/FB/none]
• Trials: X | Paying: X | MRR: £X
• Next: [one line]
```

Keep under 5 bullets. Plain English.

---

## Do not

- Spend on ads (Gate A not passed)
- Post promo links in Facebook groups that ban them
- Open Browser Hub more than once per run
- Ask Gemma to do manual copy-paste unless blocked on Reddit login
