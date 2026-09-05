# Local verification and continuation

## Running locally

Use the repository’s existing Node version guidance (`.node-version`: 20.11.0). This revision was installed, built and tested successfully with the available Node 24.19.0 and npm 11.17.0.

The repo previously had no tracked dependency lock. `package-lock.json` now records the packages resolved from the existing declared version ranges; no dependency declarations or framework were upgraded for the redesign.

```sh
npm ci
npm run develop -- --host 127.0.0.1
npm run lint
npm test
npm run build
npm run serve -- --host 127.0.0.1 --port 8000
```

On this computer the development file-watcher limit required polling:
`WATCHPACK_POLLING=true CHOKIDAR_USEPOLLING=true GATSBY_CPU_COUNT=2 npm run develop -- --host 127.0.0.1`.

The Codex sandbox also needed `XDG_CONFIG_HOME` directed to its task working directory for Gatsby’s local configuration writes. That is an environment detail, not a required website setting.

## Form regression coverage

`npm test` uses Node’s built-in test runner. Ten tests cover supported query categories, required fields/email validation, exact existing Formspree endpoint, valid FormData headers, reply-to mapping, category-specific optional fields, honeypot, rejection, network failure, timeout, input preservation and retry.

The browser test uses the real EnquiryForm component with an injected transport. The fixture explicitly performs no network calls. To repeat it, temporarily copy `.review/fixtures/form-review.js.txt` to `src/pages/form-review.js`, run Gatsby develop, and open `/form-review/`. Use only fictional test details. The fixture’s Resolve failure/Resolve success buttons complete its pending local mock. Remove the temporary page before building; its production-render guard also prevents accidental release.

Browser checks completed:
- Empty submission focuses Name and submits zero requests; invalid email focuses Email.
- Partnership category reveals collaboration/timing/information questions.
- Pending button/fieldset disabled; forced repeated click leaves request count at one.
- Mock 422 rejection retains typed text and shows direct-contact alternatives.
- Retry and mock 200 response report success, clear inputs, remove stale error.
- Editing after success removes the previous success notice.

No real Formspree message was sent. Inbox routing, provider-side spam settings and delivery remain an account-owner check.

## Production checks

- Production Gatsby build completed successfully; lint passed without warnings; all 10 tests passed.
- Eight substantive routes generate HTML, unique descriptions and canonical URLs. Internal links/download files resolve.
- Sitemap has the eight substantive routes; 404 and mock fixture are excluded.
- Original 2023 schedule URL remains emitted: `/static/schedule-c88ec49f098c2fcb0ac5002d9383b8c6.pdf`.
- All core pages fit 360/390/768/1440px widths without horizontal overflow. Actual browser checks included desktop dropdown and mobile menu, keyboard focus containment, Escape/focus return, closing via a route link, and contextual enquiry categories.
- Initial server-rendered form controls are disabled until hydration; no-JavaScript visitors have email/telephone alternatives and cannot submit personal information into a default GET URL.
- No real analytics collection existed or was added. No live delivery, external device lab or Lighthouse score is claimed.

## Documents and images

The 2023 schedule was reduced from 16,877,538 to 2,965,641 bytes (82.43%). All 13 pages retain identical extracted text, vector drawings, dimensions and annotation counts. All pages rendered; ten unchanged pages pixel-identical, three photo pages visually checked. Fees were not changed.

The hero uses real existing archive imagery in 700px and 1400px WebP variants (31,570 and 70,828 bytes). Smaller/lower images load lazily with dimensions. New commercial pages have per-page metadata, canonical links and archive-photo social previews.
