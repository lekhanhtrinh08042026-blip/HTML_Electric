# V33 / V33i electrical family

Open `public/machines/V33/index.html`, then choose model, Professional generation, and the exact drawing unit / revision. Model and revision remain visible in the machine workspace.

The root catalogue uses one family card. Controller-specific entries are hidden from that root list. `public/machines/V33/controllers.js` supplies the family selector, `manifest.json` identifies each source, and `catalog.js` supplies the shared brand identity. Existing SLIM and machine entries remain supported by the generic family-card renderer.

Structured sources:
- V33 Pro 5: 14MTC20EE, Edition 70; 431 pages, 214 circuit sheets.
- V33i Pro 5: F932 28 81(5), version 2.01; 358 pages, 240 circuit sheets.
- V33i Pro 6: 39MTC20AE, version 2.05; 540 pages, 382 circuit sheets. Four pages explicitly labelled for another machine model are preserved in the original source but excluded from functional V33i blocks.

Scan-only sources, clearly labelled in the selector:
- V33 Pro 5: 14MTC20EE Editions 24 and 53.
- V33i Pro 5: F932 33 11(5), version 3.05.

Scan-only selections open the original page viewer. They do not borrow I/O or circuit mappings from another revision. STD/CE and equipment options are recorded by the original source pages, not assumed to be uniform across a whole drawing book. No V33 Pro 6 drawing has been inferred from a V33i source.

All source viewers show page images immediately. The original PDF is assembled only when the user requests it, from ordered binary parts, and checked against the SHA-256 recorded for the original PDF. Each static asset stays below the hosting file-size limit.

To add a source: create its source-specific page assets, data and manifest; register its metadata in the family controller list and hidden catalogue entries. Reuse the shared `engine.js`, `model.css`, and standard graph renderer. Confirm the cover identity, circuit title blocks, sheet IDs, I/O, page references, and source hash before enabling structured lookup.
