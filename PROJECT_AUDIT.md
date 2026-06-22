# NVD 官網專案稽核紀錄

## 第二階段整理目的

本階段用於完成舊頁整併、冗餘清理、法律頁獨立後的殘留移除、Navbar / Footer 統一，以及後續維護規範建立。

## 頁面狀態

- `index.html`：首頁入口，保留 Hero、理念摘要與道路回報入口。
- `about.html`：關於 NVD、理念、價值、團隊與官方簡介。
- `report.html`：道路回報、NVD ROAD HUB 與回饋流程。
- `privacy.html`：隱私權政策全文。
- `terms.html`：服務條款全文。
- `join.html`：暫時保留既有主內容，本階段只更新導覽、Footer 與入口連結；後續仍需正式規劃。
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
- `join.html` 後續仍需正式規劃。
- 未來新增夥伴時，需先處理姓名、肖像、角色介紹與外部連結的公開同意。
- 未來新增表單時，需補充 CSP、個人資料告知、隱私權政策與服務條款。
- 法律頁仍使用 `legal-panel`、`legal-updated` 等共用樣式，因此相關 CSS class 不可直接刪除。

## 本階段完成 commit

待提交（本文件與第二階段整理內容將同一批提交）。
