# SDGs 互動式數位策展網站

## 專案目標

打造一個以聯合國永續發展目標（SDGs）為主題的互動式靜態網站，目標是呈現具 Awwwards 水準的視覺敘事與展場體驗。此目標代表品質方向，不保證任何獎項結果。網站需支援桌面與行動裝置，使用 GSAP 和 ScrollTrigger 製作展覽式捲動敘事與互動，並讓觀眾提交回饋；回饋透過 Google Apps Script 寫入 Google 試算表。

## 目前階段

- 目前已進入網站 MVP 實作階段：以原生 HTML/CSS/JavaScript、Vite、GSAP 與 ScrollTrigger 建立靜態雙語展覽。不要加入大型框架，除非使用者另行決定。
- 靜態網站的觀展回饋表單需先支援 Apps Script Web App URL 設定；在使用者建立 Apps Script 前，不宣稱回饋已寫入試算表。
- 首版策展網站已實作於 `index.html`、`src/main.js` 與 `src/styles.css`；`pnpm build` 可成功產生靜態網站。
- GitHub Pages 已部署至 https://renee0102sunny.github.io/climate-chain-reaction/，Repo 為 https://github.com/renee0102sunny/climate-chain-reaction；使用 `.github/workflows/deploy.yml` 由 GitHub Actions 建置並部署 `dist/`。
- Google Apps Script 由使用者直接在瀏覽器中操作。不要安裝或使用 Clasp，也不要擅自建立 Apps Script 專案。
- Git remote `origin` 指向 `https://github.com/renee0102sunny/climate-chain-reaction.git`；後續推送到 `main` 會觸發 Pages 部署。
- GitHub Pages 連結必須等首次部署成功後，從部署結果取得，再寫入 README.md 並推送；不可猜測或預先填入網址。

## 技術與設計方向

- 建置為靜態前端，使用 Vite 與 pnpm；網站互動使用 GSAP，並從 GSAP 套件使用 ScrollTrigger。
- 使用語意化 HTML、響應式 CSS 與漸進增強。除非使用者另行決定，不加入大型前端框架或不必要的套件。
- 以展覽敘事串接入口、SDG 主題內容、互動節點與觀展回饋；展覽名稱與最終視覺風格仍由使用者決定，不要自行假設。
- 動畫服務於內容閱讀與空間感。提供觸控、鍵盤操作和 `prefers-reduced-motion` 的適當體驗，避免只靠動畫或顏色傳達資訊。
- 優先確保載入速度、可讀性、鍵盤可用性、色彩對比和行動裝置操作品質。

## 已確認策展方向

- 核心觀眾為高中生，網站內容與學習詞彙採繁體中文及英文雙語。
- 以 SDG 2（消除飢餓）和 SDG 13（氣候行動）為主軸，透過「氣候連鎖反應」呈現氣候、農漁生產、食物供應與餐盤選擇的關聯。
- 生活入口是一份熟悉的餐點：學生的米飯、魚、香蕉，以及老師的咖啡。策展引導學生再設計 2050 年菜單，選項可包括昆蟲蛋白、培養肉及當季在地蔬果；在地或替代食材須依資料比較，不預設其環境影響必然較低。
- 展區地理與食物焦點：
  1. **西非與拉丁美洲｜咖啡**：以西非及拉丁美洲咖啡產區為比較範圍。國家案例須依原始產量資料與研究涵蓋範圍選定；阿拉比卡適種性模型不可直接代表所有咖啡品種。
  2. **南亞與東南亞低窪水患區｜稻米與香蕉**：以孟加拉低窪農區及湄公河三角洲作為候選案例。呈現稻作、洪水／鹽水入侵和香蕉生產或病害資料時，需確認各資料的地理尺度；不可把國家層級香蕉資料直接描述成特定三角洲田區的觀測。
  3. **北美與全球海洋｜野生魚**：北美使用 NOAA 漁業、魚群或海洋酸化資料作區域案例；全球野生捕撈比較使用 FAO capture fisheries 資料。呈現野生魚時，須與水產養殖統計分開。
- 可先以四種熟悉食物完成策展內容 MVP；可可與小麥等原先構想暫不列為這三區的主要餐盤入口，若重新納入，須由使用者確認其位置。
- 優先採用政府或國際組織原始資料。每項資料須標示來源、年份、單位、地理尺度、授權及是否為觀測、統計或模型推估；不把模型情境寫成已發生的觀測，也不把同時變化直接說成因果。
- 衛星影像可用來比較地表、水域或植生變化；若要呈現土壤或河水鹽度，須搭配測站資料或已驗證的鹽度產品，並註明它與農田根區鹽度的差異。
- 展區原始資料優先入口：
  - **咖啡**：以 [FAOSTAT 作物生產資料](https://www.fao.org/faostat/en/#data/QCL) 比較國家產量、收穫面積與單位產量；以 [CIAT 阿拉比卡氣候適種性研究](https://alliancebioversityciat.org/publications-data/projected-shifts-coffea-arabica-suitability-among-major-global-producing-regions) 補充 2050 情境。CIAT 模型只針對阿拉比卡，不能代表西非常見的羅布斯塔咖啡，也不能把適種性變化當成產量預測。
  - **稻米與香蕉**：孟加拉稻米採 [BRRI 稻米資料庫](https://brri.gov.bd/pages/static-pages/6922dbd4933eb65569e0cd7e)，越南湄公河案例採 [越南統計總局農林漁業資料](https://www.gso.gov.vn/nong-lam-nghiep-va-thuy-san/)；水文與水質可查 [湄公河委員會資料入口](https://portal.mrcmekong.org/) 及 [孟加拉鹽度資訊系統](https://data.gov.bd/bn/dataset/salinity-information-system)。香蕉國家產量可由 FAOSTAT 查詢；蕉病 TR4 分布可參考 [EPPO 全球資料庫](https://gd.eppo.int/taxon/FUSAC4/distribution)，但須註明其地理尺度通常是國家或行政區，不能當成特定田區的即時擴散位置。
  - **野生魚與海洋**：北美區域案例優先採用 [NOAA Stock SMART](https://apps-st.fisheries.noaa.gov/stocksmart/) 的魚群評估資料及 [NOAA 氣候脆弱度評估](https://www.fisheries.noaa.gov/national/climate-change/climate-vulnerability-assessments)；全球野生捕撈採 [FAO FishStat 捕撈統計](https://www.fao.org/statistics/data-collection/fishery-and-aquaculture/en)，勿混入養殖產量。海洋酸化可用 NOAA 海洋化學觀測資料補充，敘事須區分貝類／浮游生物的直接影響與魚類食物網的間接影響。
- 高中生雙語詞彙採一致對照，例如：氣候連鎖反應（Climate chain reaction）、作物產量（Crop yield）、野生捕撈（Wild capture fisheries）、食物可得性（Food availability）、當季農產品（Seasonal produce）、培養肉（Cultivated meat）。

## 觀展回饋與資料

- 使用 Google Apps Script Web App 作為靜態網站與 Google 試算表之間的回饋介面；Apps Script 的撰寫、部署與試算表欄位設定由使用者在瀏覽器中操作。
- 不把 Google 帳密、私密金鑰或其他機密放進前端、Git、README 或公開設定。公開 Web App URL 不是存取控制機制；需在 Apps Script 端驗證輸入並防範垃圾提交。
- 表單需清楚說明提交用途；只收集達成觀展回饋所需的資料，並提供送出中、成功與失敗狀態。

## Git 與部署

- 使用 GitHub CLI（`gh`）管理 GitHub Repo；提交前檢查差異，提交訊息簡潔且描述變更。
- 預設分支使用 `main`。GitHub Pages 以 GitHub Actions 建置並部署 Vite 的 `dist/`。
- 部署工作流程需要在 Repo 設定中將 Pages 的來源選為 GitHub Actions。
- 首次部署成功後，將實際 Pages URL 加入 README.md，然後提交並推送這項更新。
- 不提交 `node_modules/`、`dist/`、本機 `.env` 或任何憑證。

## 後續完成條件

- 觀眾可以在桌面和手機順暢瀏覽完整策展敘事，並操作主要互動。
- GSAP/ScrollTrigger 動畫有清楚用途，並兼顧鍵盤、觸控與減少動態效果偏好。
- 回饋可經 Apps Script 驗證並記錄至指定 Google 試算表，且使用者能辨識提交結果。
- GitHub Actions 可重現建置並部署到 GitHub Pages。
- 成功部署的 Pages URL 出現在 README.md，該更新已推送到使用者指定的 Repo。
