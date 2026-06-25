# NVD 官網專案稽核紀錄

## 第二階段整理目的

本階段用於完成舊頁整併、冗餘清理、法律頁獨立後的殘留移除、Navbar / Footer 統一，以及後續維護規範建立。

## 頁面狀態

- `index.html`：首頁入口，保留 Hero、理念摘要與道路回報入口。
- `about.html`：關於 NVD、理念、價值、團隊與官方簡介。
- `report.html`：道路回報、NVD ROAD HUB 與回饋流程。
- `privacy.html`：隱私權政策全文。
- `terms.html`：服務條款全文。
- `join.html`：加入共創的參與方式說明頁，提供初步聯絡 Email，不含正式報名表。
- `manifesto.html`：保留為品牌理念轉址說明頁，canonical 指向 `about.html`。
- `resilience.html`：保留為道路回報轉址說明頁，canonical 指向 `report.html`。

## 冗餘清理紀錄

- 已移除 `privacy-modal` 與 `terms-modal` HTML 殘留。
- 已移除 `data-legal-modal` 與舊法律頁內錨點。
- 已移除跨頁使用的 `index.html#about`。
- 已將 `manifesto.html`、`resilience.html` 的重複長文改為簡短轉址說明。
- 已移除未使用的法律 Modal JavaScript。
- 全站沒有 `openGuideBtn`，原 guide Modal 無法開啟且沒有引用，因此 HTML 與專用 JavaScript 一併移除。
- ROAD HUB 互動與團隊照片 fallback 保留。

## SEO 與 Sitemap

- `manifesto.html` canonical 指向 `about.html`。
- `resilience.html` canonical 指向 `report.html`。
- 兩個轉址說明頁保留供舊連結使用，但從 `sitemap.xml` 移除，避免與正式內容重複。
- `join.html` 保留於 sitemap。

## 風險與保留項目

- ROAD HUB 仍為前端模擬。
- 尚未新增正式後端或正式回報表單。
- `join.html` 已完成參與方向與初步聯絡窗口說明；正式合作申請流程仍待後續規劃。
- 未來新增夥伴時，需先處理姓名、肖像、角色介紹與外部連結的公開同意。
- 未來新增表單時，需補充 CSP、個人資料告知、隱私權政策與服務條款。
- 法律頁仍使用 `legal-panel`、`legal-updated` 等共用樣式，因此相關 CSS class 不可直接刪除。

## 道路回報行動卡搬移（2026-06-23）

- 完整道路回報行動卡已從首頁入口區塊移至 `report.html`。
- `index.html` 已瘦身為道路回報入口摘要，CTA 指向 `report.html#dashboard`。
- `report.html` 是道路回報流程與行動卡的唯一主要維護頁。
- 保留 `official-profile-card` 共用樣式，因 About、法律頁與移轉說明頁仍有引用；本次只新增行動卡必要的響應式排列樣式。
- ROAD HUB 仍為前端模擬，未新增正式表單、送件端點或後端功能。

## 本階段完成 commit

待提交（本文件與第二階段整理內容將同一批提交）。

## P0 公信力與公開儲存庫風險修復（2026-06-23）

- ROAD HUB 已補上可見流程體驗聲明，並移除容易被誤認為正式成果、正式受理或政府同步的顯示內容。
- ROAD HUB 仍為前端模擬，未新增正式送件功能、表單或後端端點。
- 已將內部藍圖檔案取消 staged、保持未追蹤，並加入 `.gitignore` 防止誤提交至公開儲存庫。

## ROAD HUB JavaScript 去重（2026-06-23）

- 已移除被後宣告版本覆蓋的 11 個舊 ROAD HUB 函式宣告。
- 保留實際生效的後宣告版本，事件綁定、時間軸、重置與 P0 流程體驗文案維持不變。
- ROAD HUB 仍為前端模擬，未新增正式送件功能或後端端點。

## i18n hotfix（2026-06-24）

- 補齊 `report.html` Hero、道路回報行動卡、ROAD HUB 可見聲明、時間軸、按鈕及動態狀態的英文翻譯綁定。
- ROAD HUB 英文聲明明確說明不傳送、不保存、不是正式送件，也不是政府通報管道。
- `manifesto.html` 與 `resilience.html` 保持短移轉頁定位，並補上英文移轉說明。
- `privacy.html` 與 `terms.html` 加入繁體中文版本為準的可見聲明。
- 補強 `scripts/check-site.mjs` 的翻譯鍵完整性、ROAD HUB 英文安全文案與移轉頁翻譯防回歸檢查。
- 補齊 8 個公開頁面的繁中／英文 title、meta description、Open Graph 與 Twitter 文案切換。
- 補齊共享導覽、Header logo、主要 CTA、Email 聯絡按鈕與創辦人照片的中英文 ARIA／alt。
- 白話模式目前以不破壞公信力與聯絡限制聲明為最低要求；全站逐字白話覆蓋列為 P2。
- 本次未新增表單、正式送件功能、`fetch`、XHR、`FormData` 或後端端點。

## 加入共創說明頁正式化（2026-06-24）

- `join.html` 已調整為加入 NVD 共創行動的參與方式說明頁。
- 已加入初步聯絡信箱 `nvd20260611@gmail.com`，並明確標示用途與限制。
- 本次未新增表單、個人資料蒐集、後端或正式案件送件功能。
- 未來若新增正式合作表單，需先同步處理個人資料告知、隱私權政策、服務條款與資料保存說明。

## ROAD HUB 體驗版資料儀表板（2026-06-25）

- `report.html` 的 ROAD HUB 已補強為體驗版資料儀表板，包含 Demo observations、近 7 日 Demo 增量、障礙類型、區域分布、通行影響群體、資料完整度、資料用途與觀察紀錄。
- 觀察筆數只使用瀏覽器本機 `nvdRoadHubDemoCount` 產生累積感；未保存姓名、Email、電話、GPS、照片、正式案件資料或其他個人資料。
- 本次仍未新增表單、Google Form、後端、`fetch`、XHR、`FormData` 或正式送件功能。
- `scripts/check-site.mjs` 已補強 ROAD HUB 儀表板、防誤導文案、本機儲存 key 與英文 Demo 文案檢查。
