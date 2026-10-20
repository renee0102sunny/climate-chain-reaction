# AFTERTASTE — 食後回聲

An interactive, bilingual exhibition for high school students about SDG 2 (Zero Hunger), SDG 13 (Climate Action), and the climate chain reaction behind everyday food.

## Run locally

```sh
pnpm install
pnpm dev
```

Build the static site with `pnpm build`. Vite writes the deployable files to `dist/`.

## Feedback form

The form collects only a food choice and an optional reflection. To connect it to the Google Sheet after creating and deploying the Apps Script Web App in a browser, copy `.env.example` to `.env.local` and set:

```text
VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Rebuild after setting the URL. The browser request uses `no-cors`, so the site can confirm that it sent the request but cannot verify that the sheet stored it.

## Exhibition evidence

Sources and notes are also linked in the exhibition itself. The figures below retain each source’s scope and do not establish that climate change alone caused a change in production.

- Côte d’Ivoire coffee production and cultivated area, 2022–2023: [official open-data portal](https://data.gouv.ci/datasets/statistiques-globales-sur-le-secteur-cacao-et-cafe).
- Brazil coffee crop estimates, 2023: [CONAB, fourth survey](https://cast.conab.gov.br/post/2023-12-14_4_lev_cafe/).
- Arabica suitability model for the 2050s: [CIAT research](https://alliancebioversityciat.org/publications-data/projected-shifts-coffea-arabica-suitability-among-major-global-producing-regions). This is a model of climate suitability, not a production forecast.
- Bangladesh BRRI dhan78 variety profile: [BRRI Rice Profile](https://riceprofile.brri.gov.bd/varieties/88).
- Vietnam banana production, Q1 2025: [National Statistics Office](https://www.gso.gov.vn/en/data-and-statistics/2025/04/press-release-socio-economic-situation-in-the-first-quarter-of-2025/). This figure is national, not Mekong Delta-specific.
- TR4 disease distribution: [EPPO Global Database](https://gd.eppo.int/taxon/FUSAC4/distribution). Distribution records are not farm-level observations.
- Global capture and aquaculture production, 2024: [FAO SOFIA 2026](https://www.fao.org/newsroom/detail/sofia-2026--global-fisheries-and-aquaculture-production-reaches-new-highs/).
- Eastern Bering Sea fish-stock climate vulnerability: [NOAA Fisheries](https://www.fisheries.noaa.gov/feature-story/study-looks-vulnerability-eastern-bering-sea-fish-crab-and-salmon-stocks-climate).
- Ocean carbon and acidification observations, experiments, and models: [NOAA OCADS](https://www.ncei.noaa.gov/products/ocean-carbon-acidification-data-system).

## GitHub Pages

The site is deployed with GitHub Actions: [https://renee0102sunny.github.io/climate-chain-reaction/](https://renee0102sunny.github.io/climate-chain-reaction/).
