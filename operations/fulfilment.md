# HostCert fulfilment process (v1 — manual)

## When someone pays or starts trial

1. **Stripe webhook / email notification** — note customer name, email, subscription ID
2. **Check onboarding form** — FormSubmit delivers to support@hostcert.co.uk (after email activated)
3. If no onboarding within 24h — send chase email (template below)

## Setup checklist (operator — target: within 24h)

- [ ] Create customer row in `operations/customer-tracker.csv`
- [ ] Enter properties + cert dates in dashboard (Airtable or spreadsheet — see template)
- [ ] Set reminder dates: 30, 14, 7 days before each expiry
- [ ] Generate compliance summary PDF from template
- [ ] Send welcome email with dashboard link + guest info pack PDF
- [ ] Log in experiment tracker

## What the customer receives

1. **Welcome email** — dashboard link, what to expect, support contact
2. **Compliance dashboard** — traffic-light view per property (Airtable interface or shared sheet v1)
3. **Guest info pack PDF** — from `templates/guest-info-pack.md` (export to PDF)
4. **Reminder emails** — automated via calendar/Zapier or manual weekly check v1

## Reminder email schedule

| Days before expiry | Action |
| --- | --- |
| 30 | Email: "Certificate due in 30 days" |
| 14 | Email: "Certificate due in 14 days" |
| 7 | Email: "Certificate due in 7 days — action needed" |
| 0 (overdue) | Email: "OVERDUE — please renew" |

## Support

- **Response target:** 48 hours
- **Email:** support@hostcert.co.uk
- **Common questions:** how to update dates, add property, cancel subscription

## Cancellation

1. Customer cancels via Stripe Customer Portal or emails support
2. Mark customer **cancelled** in tracker
3. Stop reminder schedule
4. Access until end of billing period
5. Delete personal data within 30 days of request (GDPR)

## Refunds

- Within 14 days of first paid charge → full refund via Stripe
- Log refund in tracker with reason

## If fulfilment fails

- Email customer within 4 hours explaining delay
- Offer 7 days free extension if setup exceeds 24h

---

## Welcome email template

```text
Subject: Your HostCert dashboard is ready

Hi [Name],

Your compliance dashboard is set up for [N] properties.

View your dashboard: [LINK]

What's included:
- Certificate expiry dates with status colours
- Reminder emails at 30, 14 and 7 days before each renewal
- Guest info pack PDF (attached)

Please check all dates are correct and reply if anything needs updating.

Need help? Reply to this email or contact support@hostcert.co.uk

— HostCert
```

## Onboarding chase template (no form after 24h)

```text
Subject: Quick step to activate your HostCert dashboard

Hi [Name],

Thanks for signing up to HostCert. We haven't received your property details yet.

Complete onboarding here (2 minutes): [ONBOARDING URL]

Once submitted, we'll have your dashboard ready within 24 hours.

— HostCert
```
