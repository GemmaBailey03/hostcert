# HostCert marketing plan — agent-owned execution

**Experiment:** EXP-001 · **Product:** HostCert · **Price:** £9/mo (14-day trial)  
**Owner (execution):** Cursor agent · **Review with Gemma:** Stripe setup + weekly  
**Steve updates:** Via WhatsApp → agent reads this file + `experiment-tracker.md`

---

## 1. Economics guardrails (non-negotiable)

Every pound spent must pay back within **3 months** of a paying customer.

| Metric | Value | Notes |
| --- | --- | --- |
| MRR per customer | £9 | After Stripe (~£8.67 net) |
| Realistic LTV (early) | £45–£90 | Assumes 5–10 months retention |
| Max acceptable CAC | **£27** | 3× monthly revenue |
| Ideal CAC (organic) | **£0** | Target for first 10 customers |

**Paid ads verdict at launch:** **Do not run prospecting ads yet.** Niche UK host keywords + cold traffic rarely converts below £50–150 CAC for a £9/mo tool. That fails the payback rule.

**When paid becomes allowed:**

| Gate | Condition | Then |
| --- | --- | --- |
| Gate A | ≥3 paying customers from **organic only** | Retargeting ads allowed, max **£3/day** Meta |
| Gate B | Trial→paid ≥25% AND landing→trial ≥3% | Prospecting test allowed, max **£5/day** Meta, 7-day cap |
| Gate C | CAC ≤£27 proven over 14 days | Scale to **£10/day** max; re-check weekly |

If any gate fails → pause ads, return to organic.

---

## 2. Strategy summary — maximum impact, minimum spend

**Primary motion (Weeks 1–4):** Organic trust-building in host communities + direct outreach.  
**Secondary motion:** SEO content (slow compounding, £0).  
**Paid motion:** Retargeting only, and only after Gate A.

**Why this order:** Hosts buy from peers and pain stories, not display ads. Compliance is anxiety-driven — helpful posts outperform “buy my tool” every time.

---

## 3. Phase timeline

### Phase 0 — Pre-Stripe (marketing started 2026-06-15)

**Budget: £0 · Stripe goes live when Gemma is back**

Marketing **runs now**. First-wave traffic is awareness + onboarding leads; checkout already falls back to onboarding while Stripe is pending.

| Action | Owner | Status |
| --- | --- | --- |
| Community + Reddit response bank | Agent | `reddit-response-bank.md` |
| SEO article 1 draft | Agent | `content/01-uk-stl-certificates-checklist-2026.md` |
| ImprovMX alias `support@hostcert.co.uk` | Agent | In progress |
| Activate FormSubmit (test submit) | Agent | After email live |
| Direct outreach 15/week | Agent | Mon–Fri cadence |
| Add Plausible or GA4 | Agent | Pending |
| **Paid ads** | — | **£0** until Gate A (3 organic payers) |

**Annual upsell:** £79/year offered **after** monthly signup only (not homepage). See `operations/stripe-setup.md`.

### Phase 1 — Days 1–14 post-Stripe (organic blitz)

**Budget: £0 paid · Time: agent-managed daily**

| Channel | Frequency | Weekly target |
| --- | --- | --- |
| Facebook host groups | 2 value-first posts/week (different groups) | 4 posts, 10+ comments helping others |
| Reddit (r/AirbnbHosts, UK subs) | 3 helpful comments/week | 3 comments, 0 spam |
| Direct outreach (FB/LinkedIn/Airbnb profile) | 3 messages/day, Mon–Fri | 15/week |
| Email follow-up to trial signups | Within 24h of onboarding | 100% response rate |

**Week 1 success criteria:** 200+ site visits, 5+ trial signups, 1+ paying customer.  
**Week 2 success criteria:** 10+ trials cumulative, 3+ paying customers → **Gate A unlocked**.

### Phase 2 — Days 15–30 (optimize + conditional paid)

| Channel | Action |
| --- | --- |
| Meta retargeting | £3/day to site visitors (after Gate A); carousel: pain → dashboard → trial |
| SEO | Publish article 2 of 4 |
| Community | Repeat Phase 1; double down on group that responded best |
| Referral | Ask happy customers: “Know another self-managing host?” |

**30-day target:** 15+ trials, 8+ paying → **~£72 MRR** (covers domain + tools with margin).

### Phase 3 — Day 31+ (scale or pivot)

- If MRR ≥£72 and churn <15%/mo → consider £5/day prospecting test (Gate B).
- If MRR <£27 after 30 days → iterate offer/landing page before any ad spend.
- If zero trials after 14 days of outreach → review positioning; do **not** buy ads to fix messaging.

---

## 4. Paid ads spec (when gates pass)

**Platform:** Meta (Facebook + Instagram) only. Google Search too expensive for volume at £9 ARPU.

| Campaign | Daily budget | Audience | Creative |
| --- | --- | --- | --- |
| Retargeting (Gate A) | **£3/day** | Site visitors 7d, UK, 28–65 | Static: “Still tracking certs in a spreadsheet?” |
| Prospecting test (Gate B) | **£5/day** max | Interests: Airbnb, short-term rental, UK homeowners | Short video or carousel; lead with 2025 cert rules |
| Scale (Gate C) | **£10/day** max | Lookalike 1% from trial signups | Winning creative from test |

**Hard stops:** Pause if CPC >£2.50, CTR <0.8%, or no trial in 7 days of spend.

**Do not use:** Google Ads (CPC £3–8), TikTok (wrong audience), LinkedIn ads (CAC £80+).

---

## 5. SEO plan

**Cadence:** **1 article every 2 weeks** (quality > volume). Agent drafts, Gemma optional quick review.

**Priority articles (publish order):**

1. “UK short-term let certificates checklist 2026” (pillar)
2. “Gas safety certificate (CP12) for Airbnb hosts — when it expires”
3. “Fire risk assessment for holiday lets — what hosts actually need”
4. “How to track certificate expiry across multiple Airbnb properties”

**Each article:** 800–1,200 words, one clear CTA to trial, internal link to homepage, target one long-tail keyword.

**No paid SEO tools required.** Use Google Search Console (free) once HTTPS live.

**Realistic expectation:** SEO contributes meaningful traffic from **month 2–3**, not week 1.

---

## 6. Community & forum execution (agent-managed)

### Facebook groups (primary)

Post only where rules allow. Always **ask a question first**, mention tool softly.

| Group (search on FB) | Action | Frequency |
| --- | --- | --- |
| UK Airbnb Hosts | Value post (`community-post.md`) | Week 1 |
| Airbnb Hosts UK | Shorter comment-style intro | Week 2 |
| Short Term Lets UK | Compliance checklist share + soft mention | Week 3 |
| Local regional host groups | Adapt post with local angle | Week 4 |

**Rules:** Max 1 promo-leaning post per group **ever** unless mod approves. Reply to every comment within 12h.

### Reddit

| Subreddit | Tactic |
| --- | --- |
| r/AirbnbHosts | Answer cert/compliance threads; profile link only if asked |
| r/UKPersonalFinance | Rare — only if STL compliance thread appears |
| r/smallbusiness | “Micro-SaaS for niche” only if relevant thread |

**Never:** Same-day cross-post spam, link drops without context.

### Airbnb Community Centre

Browse UK hosting forum weekly; reply to compliance questions with genuine help + trial link at end.

### Agent weekly community log

Track in `launch/outreach-prospects.md`: date, channel, post URL, replies, trials attributed.

---

## 7. Direct outreach cadence

**Volume:** 3 personalized messages/day, Mon–Fri (15/week).

**Where to find hosts:**
- Airbnb listings with 2–5 properties same host name
- Facebook group active members
- LinkedIn “Airbnb host” + UK filter

**Template:** See `outreach-prospects.md` (update URL to https://hostcert.co.uk once HTTPS live).

**Follow-up:** One bump at day 4 if no reply. Stop after that.

---

## 8. Metrics dashboard (agent updates weekly)

| Metric | W1 target | W4 target | Logged in |
| --- | --- | --- | --- |
| Unique visitors | 200 | 800 | experiment-tracker / analytics |
| Trial signups | 5 | 15 | customer-tracker.csv |
| Paying customers | 1 | 8 | customer-tracker.csv |
| MRR | £9 | £72 | experiment-tracker |
| Outreach sent | 15 | 60 cumulative | outreach-prospects.md |
| Community posts | 2 | 8 cumulative | outreach-prospects.md |
| Ad spend | £0 | ≤£63 if Gate A | this file |
| CAC | £0 | ≤£27 | calculated |

**7-day review (2026-06-22):** Continue / iterate / park decision.  
**30-day review (2026-07-15):** Kill if MRR <£18 and zero organic traction.

---

## 9. Agent execution schedule (standing)

| Day | Agent actions |
| --- | --- |
| **Mon** | Scan FB/Reddit for compliance threads; 3 outreaches; update metrics |
| **Tue** | 3 outreaches; reply to all comments/DMs |
| **Wed** | Community post OR SEO draft (alternating weeks) |
| **Thu** | 3 outreaches; trial follow-up emails |
| **Fri** | Weekly metrics summary; update experiment-tracker; prep Steve snapshot |
| **Sat–Sun** | Monitor only (reply to urgent DMs) |

---

## 10. Steve / WhatsApp update protocol

When **Steve asks for HostCert update** (via WhatsApp MCP → autogem):

**Agent reads:**
- `experiment-tracker.md` (EXP-001 row)
- `launch/outreach-prospects.md` (prospect log)
- `operations/customer-tracker.csv`
- This file (Phase + gates)

**Reply format (≤5 bullets):**
1. Status (Live / Stripe pending / etc.)
2. MRR + paying customers + trials
3. This week’s outreach/community done
4. Blockers (e.g. Stripe, HTTPS)
5. Next 7 days focus

**AutoMem tags:** `HostCert`, `EXP-001`, `Steve-business-a-day`

---

## 11. Tomorrow handoff (Gemma)

1. **Stripe** — follow `operations/stripe-setup.md`; paste Payment Link into `js/config.js`; test £9 subscription.
2. **Confirm** ImprovMX alias `support@hostcert.co.uk` → peoplebuilding.co.uk@gmail.com live.
3. **Approve** agent to start Phase 1 outreach (reply “go” or “start marketing”).

After Stripe + “go”, agent executes Phase 1 without further daily approval unless spend >£0 (then Gemma approves Gate A spend).

---

## 12. What we are NOT doing (and why)

| Tactic | Why not |
| --- | --- |
| £20/day Meta prospecting | CAC would exceed LTV at £9/mo |
| Google Ads | CPC too high for micro-SaaS |
| Influencer paid posts | No budget; unproven ROI |
| 3 SEO articles/week | Quality drops; Gemma time sink |
| cPanel / paid email | ImprovMX free tier sufficient |
| Cold email lists (paid) | GDPR risk + spam reputation |

---

*Last updated: 2026-06-15 · Next review: 2026-06-22*
