# Shared model presentation

All models load app/style.css, app/design.css, catalog.js and app/brand.js. The catalogue loads app/design.css and app/catalog-ui.js.

Use the same header, colour tokens, typography, spacing, controls, icons, functional diagrams and source viewer. Model-specific content remains in its data adapter. Never add model-specific theme overrides.

To register a future machine, add its model metadata to catalog.js, its photo under assets/machines/, and model data/entry point. Call MACHINE_BRAND.hero(id) from its overview and use MACHINE_UI for diagrams.

Each catalogue card has the same image frame, metadata rows, fact grid and footer. Keep original machine photo proportions with object-fit:contain. Do not use another model image as a placeholder.

Reference: Makino Vietnam site layout, dark navigation, blue headings and white product imagery. Use the MAKINO wordmark asset at assets/brand/makino-logo.svg. The shared subtitle is “Support — Field Service Engineer”. The catalogue headline is “Electrical Service Support.” with “For Field Service Engineers” as its audience line. Logo source: https://www.makino.com.sg/Assets/images/logo.svg. Source photos credited in the UI and MODEL_IMAGE_SOURCES.md.
