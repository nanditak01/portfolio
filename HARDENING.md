# Week 09 – Portfolio Hardening Review

## Live Portfolio

https://portfolio-7mhr2zz42-nandita4.vercel.app/

---

# 1. Where It Breaks

## A. Form Testing

My portfolio does not contain a contact form. The Contact section provides direct links for Email, GitHub, and LinkedIn.

### Empty Input
- Result: Not applicable because there is no contact form.
- Status: N/A

### Invalid / Garbage Input
- Result: Not applicable because there is no contact form.
- Status: N/A

### Very Long Input
- Result: Not applicable because there is no contact form.
- Status: N/A

### Special Characters
- Result: Not applicable because there is no contact form.
- Status: N/A

### Double Submission
- Result: Not applicable because there is no contact form.
- Status: N/A

---

# 2. Browser / Device Testing

### Chrome
- Result: Portfolio tested and working correctly.
- Status: PASS

### Microsoft Edge
- Result: Previously tested during portfolio development and review.
- Status: PASS

### Mobile Device
- Result: Previously tested during the mobile responsiveness assignment.
- Navigation, layout, images, buttons, and content were checked.
- Status: PASS
- Evidence: Previous mobile testing screenshots / fix log

---

# 3. Link Testing

## Navigation Links

- Home: PASS
- About: PASS
- Projects: PASS
- Skills: PASS
- Contact: PASS

## External Links

### Email
- Test: Clicked "Email Me" from the live portfolio.
- Result: Outlook opened a new email with `nanditakundanagar@gmail.com` automatically filled in the To field.
- Status: PASS

### GitHub
- Test: Clicked "GitHub" from the live portfolio.
- Result: GitHub profile opened correctly.
- Profile: `github.com/nanditak01`
- Status: PASS

### LinkedIn
- Test: Clicked "LinkedIn" from the live portfolio.
- Result: LinkedIn profile opened correctly.
- Status: PASS

## Project Links

- Project links tested.
- Result: Links opened correctly.
- Status: PASS

---

# 4. Interaction / Stress Testing

## Rapid Navigation Testing

- Opened and closed the navigation menu repeatedly.
- Clicked navigation links multiple times.
- Scrolled rapidly through the page.
- Checked whether the layout became unstable.

Result:
- Navigation remained responsive.
- No duplicate menus appeared.
- No visible layout break occurred.
- Page remained usable.

Status: PASS

## Repeated Button Testing

- Project buttons were clicked repeatedly.
- External links were tested more than once.

Result:
- Buttons remained responsive.
- No visible duplicate actions or broken UI occurred.

Status: PASS

---

# 5. Performance Testing

Performance was checked using Google PageSpeed Insights.

Tool:
https://pagespeed.web.dev/

## Mobile

- Performance: [ADD SCORE]
- Accessibility: [ADD SCORE]
- Best Practices: [ADD SCORE]
- SEO: [ADD SCORE]

## Desktop

- Performance: [ADD SCORE]
- Accessibility: [ADD SCORE]
- Best Practices: [ADD SCORE]
- SEO: [ADD SCORE]

Evidence:
- PageSpeed mobile screenshot
- PageSpeed desktop screenshot

---

# 6. SEO / Findability

## Page Title

Status: [ADD RESULT]

Expected:
A descriptive title identifying the portfolio and owner.

## Meta Description

Status: [ADD RESULT]

Expected:
A concise description explaining the portfolio and technical work.

## Social Share Preview

Status: [ADD RESULT]

Expected:
Portfolio should provide Open Graph metadata and a social preview image.

## Search Engine Findability

Search term:

`"Nandita Kundanagar"`

Result:

[ADD WHAT YOU ACTUALLY FOUND]

Search term:

`"Nandita Kundanagar software developer"`

Result:

[ADD WHAT YOU ACTUALLY FOUND]

---

# 7. Triage

## Fix Now

| Issue | Impact | Action | Status |
|---|---|---|---|
| | | | |

If no new critical issues are discovered:

> No new critical fix-now issues were identified during Week 09 hardening tests.

## Known Limitations

| Limitation | Reason |
|---|---|
| Search engine indexing may take time | Search engines do not always index newly deployed websites immediately. |
| Performance may vary | Speed can vary depending on device, browser, network, and location. |

---

# 8. SEO / Metadata Improvements

The portfolio should include:

- Descriptive page title
- Meta description
- Open Graph title
- Open Graph description
- Open Graph URL
- Social sharing image

These improvements help search engines understand the portfolio and improve how the website appears when shared.

---

# 9. Hardening Review

## Reviewer

[ADD MENTOR / PEER NAME]

## Review Date

[ADD DATE]

## Feedback

[ADD REVIEWER FEEDBACK]

## Must-Fix Issues

[ADD MUST-FIX ISSUES]

## Resolution

[ADD HOW THE ISSUES WERE FIXED]

Status:

[ ] Review completed  
[ ] Must-fixes addressed

---

# 10. Evidence

The following evidence was collected during the hardening process:

1. Email link test
2. GitHub link test
3. LinkedIn link test
4. Navigation testing
5. Mobile testing evidence from previous assignment
6. SEO metadata evidence
7. PageSpeed mobile result
8. PageSpeed desktop result
9. Final live portfolio

---

# 11. Final Verification

- [x] Portfolio live URL tested
- [x] Email link tested
- [x] GitHub link tested
- [x] LinkedIn link tested
- [x] Navigation links tested
- [x] Project links tested
- [x] Mobile testing completed previously
- [x] Browser testing completed
- [x] Rapid interaction testing completed
- [ ] Performance checked
- [ ] SEO metadata verified
- [ ] Social preview verified
- [ ] Search findability checked
- [ ] Fix-now issues reviewed
- [ ] Known limitations documented
- [ ] Hardening review completed
- [ ] Mentor/peer must-fixes addressed

---

# Final Status

The portfolio was tested beyond the normal happy path, including external links, navigation, repeated interactions, browser/device behavior, performance, and SEO.

All discovered issues are being classified as either:

- Fix Now
- Known Limitation

The portfolio will be submitted for hardening review after SEO, performance, and final verification are completed.