# TTL website content review — private working notes

Prepared 5 September 2026. This file is not website copy. Keep this directory outside public assets, page imports, Gatsby data sources and deployment uploads.

The local redesign uses enquiry-oriented wording wherever operating details are unresolved. It does not establish new processing permissions or advertise every item in historical collateral as a current service.

## Decisions that would make the website more specific

1. **Current services and technical reviewer.** Confirm the work currently performed onsite, current methods/finishes, reporting ranges, sample requirements, QA/QC and turnaround. Until then the service pages invite scoped enquiries; old method tables are available only in the dated 2023 reference PDF.
2. **Material acceptance and operating conditions.** Confirm the approval set and material-specific acceptance process before expanding the public service list. The historical approval material considered in the strategy includes an exclusion for processing mine waste/reclamation material. No broad permission is inferred here. Public copy asks visitors to confirm acceptance and delivery before shipping.
3. **Operating/contracting entity and legacy legal copy.** The old about page named “Temiskaming Testing Laboratories Inc.” while the footer’s disclaimer/disclosure uses “Ltd.” The new commercial copy uses the trading name without a suffix. The existing disclaimer/disclosure is otherwise retained; the unsupported privacy paragraph is replaced by an accurate form-provider notice, and the blanket statement that Frank Basa approved the technical contents is removed from the redesigned site. Confirm the entity, current policy, current named officers and applicability of securities-related boilerplate. An exact copy of the former footer is preserved here for review.
4. **Current facility and photographs.** Confirm which spaces, equipment and Coleman arrangements are available today; obtain current documentary photographs. Existing photographs remain explicitly archival. The Cobalt lab and Coleman coreshack are identified as separate locations.
5. **Enquiry routing and commercial documents.** Confirm who receives Formspree form `xqkodqzd`, its spam/delivery settings, and the current quotation/forms process. No live submission or recipient-dashboard verification was performed. The public phone/email and existing endpoint are preserved. A current approved service/fee sheet would replace the 2023 archival reference.

## Claim register

Responsible reviewers below are suggested roles; no review or approval is implied.

| Claim or asset | Source and date | Category | Current verification | Responsible reviewer | Implemented public wording |
|---|---|---|---|---|---|
| Public email, phone, laboratory address | Existing repo/contact/footer; inspected 2026-09-05; publication date unknown | verified_current (website configuration only) | Targets verified in source; inbox, phone and current occupancy not independently tested | TTL content owner | Actual public contact details; “Project enquiries” |
| Form destination | Existing contact source; inspected 2026-09-05 | verified_current (integration configuration only) | Endpoint preserved; request encoding and UI outcomes tested with mocks; delivery configuration unknown | Formspree account owner | “This form uses Formspree to deliver your enquiry” |
| Sample preparation, gold/silver assays and QA/QC | Existing service page; source date unknown | historical | Current technical scope not approved during this work | Laboratory technical lead | Discuss requirements, current scope and quotation; no unverified numerical method table |
| Other elements/base-metal services | Checkboxes in request-for-analysis PDF, visible revision 2023-06-07 | withhold | Not reconciled with existing service menu | Laboratory technical lead | Visitors can describe specialist analysis needs; no new available-service claim |
| Method codes, detection limits and 2023 fees | 13-page schedule; visible year 2023 | historical | All text/fees preserved during image compression; no current-price verification | Technical/commercial lead | “2023 fee schedule — reference”; ask for current quotation |
| Request for analysis | QD 015 REV(3), visible 2023-06-07 | historical | Original file unchanged, 228,231 bytes | Laboratory administrator | Form date shown; confirm fit/current scope |
| Credit application | Existing 2-page PDF; no visible revision date | historical | Original unchanged, 139,276 bytes; metadata date not used as publication date | Commercial administrator | “Revision undated”; only for account arrangements when requested |
| Coleman coreshack and associated spaces | Existing geological page; source date unknown | historical | Existing description only; availability unresolved | Site/operations representative | Separate Highway 11/Coleman location; ask to confirm access and support |
| Establishment 1921; PolyMet 2000; TTL relaunch 2020 | Previously published TTL facility history; source date unknown | historical | Preserved as historical milestones, not continuous operations | TTL content owner | Short timeline explicitly includes a decommissioned period |
| Facility imagery | Existing repository photo collection; capture dates unknown | historical | Images visually inspected; no added equipment or invented photography | Site/operations representative | “Archive photograph” captions; current availability to be discussed |
| Material/testwork, engineering preparation, partnerships | Website strategy and user’s commercial objective, September 2026 | proposed | Topics for a scoped conversation; not bookable processing services | TTL commercial/technical leads | Objective, material, quantity, timing and prospective role |
| Capacities, accreditation, permit scope, recoveries, staffing, Re-2Ox ownership | Mixed historical collateral and internal discussions | withhold | No current approved evidence established | Appropriate technical/legal/corporate owners | Omitted |
| Customer/partner endorsements | Incoming enquiries and discussions, varying dates | withhold | Neither a completed engagement nor publication permission established | Relationship/content owner | No prospect names, logos, testimonials or attribution claims |

## Strategy context kept off the website

The referenced enquiries indicate possible demand, not proven website attribution, completed paid work or current partner relationships. No private prospect details, interpersonal discussion, permit correspondence or unpublished source documents were copied into public content. The detailed strategy report remains in the separate Codex task outputs.

## Files and intentional limitations

- `previous-footer.js.txt` preserves the original public legal copy for review.
- `fixtures/form-review.js.txt` is a mock-only development fixture, never imported or served in the production build.
- No analytics integration existed in the inspected repo. No tracking service, cookie banner, lead dashboard or invented metrics were added.
- No new host/deployment configuration was introduced. The review preserves Gatsby and the existing routes/download destinations.
