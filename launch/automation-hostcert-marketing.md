# HostCert scheduled marketing — agent runbook

**Experiment:** EXP-001 · **Runs:** Monday & Wednesday **10:30** (local)  
**Schedule (cron):** `30 10 * * 1,3`  
**Owner:** Cursor automation · **Notify:** WhatsApp Gemma (`447932656999`)

---

## Every run (in order)

### 1. Read current state

- `launch/weekly-metrics.md` — Week 1 actuals
- `launch/outreach-prospects.md` — agent log + prospect table
- `launch/marketing-plan.md` — phase, gates, cadence
- `experiment-tracker.md` in parent Steve business a day repo if accessible; else skip

### 2. SEO content (primary — no browser required)

**Wednesday runs:** Publish **one new guide** from the queue below, OR refresh/update an existing guide’s “Updated” date and add 2–3 sentences if nothing new to publish.

**Monday runs:** Cross-link guides from homepage/footer if missing; update `sitemap.xml`; ensure internal links between guides.

**Guide topics queue (use next unused):**

| # | Slug | Topic | Status |
| --- | --- | --- | --- |
| 1 | uk-stl-certificates-checklist | UK certificates checklist | Done |
| 2 | spreadsheet-vs-tracker-holiday-let-certs | Spreadsheet vs tracker | Done |
| 3 | airbnb-platform-fire-safety-uploads-uk | Platform fire safety uploads | Done |
| 4 | scotland-short-term-let-licensing-basics | Scotland STL licensing overview | Done |
| 5 | england-stl-registration-2026 | England registration scheme prep | Done |
| 6 | holiday-let-insurance-renewal-checklist | Insurance + cert alignment | Next |

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

## WhatsApp notification (required — success OR failure)

**Always** send to **447932656999** at the end of every run — even if the run failed partway through. Gemma uses this to know the automation ran.

### On success

```text
✅ HostCert marketing — COMPLETED [Mon/Wed] [date]

• SEO: [published/updated + URL]
• Site: https://hostcert.co.uk OK
• Outreach: [Reddit/FB/none this run]
• Trials: X | Paying: X | MRR: £X
• Next: [one line]
```

### On failure (any blocker)

```text
❌ HostCert marketing — NOT COMPLETED [Mon/Wed] [date]

• Failed at: [step — e.g. git push, guide publish, site check]
• Error: [plain English, one line]
• Partial work: [what did complete, if anything]
• Action: [what Gemma or agent needs to fix]
```

If WhatsApp MCP is unavailable (Mac off, bridge down), log the same text in `launch/weekly-metrics.md` Notes and retry WhatsApp on the next run.

---

## Cursor Automation setup (reference)

| Field | Value |
| --- | --- |
| Name | HostCert Mon/Wed marketing |
| Schedule | Mon & Wed **10:30** local (`30 10 * * 1,3`) |
| Repo | `GemmaBailey03/hostcert` · `main` |
| Prompt | Follow this file. Always WhatsApp 447932656999 success or failure summary. |
| Tools | Git, WhatsApp MCP (local Mac + bridge must be running) |

---

## Do not

- Spend on ads (Gate A not passed)
- Post promo links in Facebook groups that ban them
- Open Browser Hub more than once per run
- Ask Gemma to do manual copy-paste unless blocked on Reddit login
- Skip the WhatsApp notification — success or failure
