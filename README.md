# NVD 協會官方網站

NVD Road Feedback & Repair 官方靜態網站，部署於 GitHub Pages。專案維持純 HTML、CSS 與 JavaScript，不使用框架、SPA 或建置系統。

## 網站頁面分工

- `index.html`：首頁入口，只放 Hero、理念摘要、道路回報入口與 Footer，不放完整長文。
- `about.html`：關於 NVD、理念、價值、團隊介紹、官方簡介。
- `report.html`：道路障礙回報入口、NVD ROAD HUB、回饋流程與頁面內操作說明。
- `privacy.html`：隱私權政策全文。
- `terms.html`：服務條款全文。
- `join.html`：加入共創的參與方式說明頁，提供初步聯絡窗口，不是正式報名頁。
- `manifesto.html`：品牌理念轉址說明頁，不再維護完整長文；正式內容在 `about.html#mission`。
- `resilience.html`：道路回報轉址說明頁，不再維護完整長文；正式內容在 `report.html`。

不要再把完整理念、完整團隊介紹或完整法律條款放回 `index.html`。

## Navbar / Footer 維護規則

Navbar 主選單固定為：

- 首頁 → `index.html`
- 關於 NVD → `about.html`
- 道路回報 → `report.html`
- 加入共創 → `join.html`
- 立即回報 → `report.html#dashboard`

Footer 固定為：

### 認識 NVD

- 關於 NVD → `about.html#about`
- 我們關心什麼 → `about.html#mission`
- 團隊介紹 → `about.html#team`

### 行動

- 道路回報 → `report.html`
- 回饋流程 → `report.html#loop`
- 加入共創 → `join.html`

### 網站資訊

- 隱私權政策 → `privacy.html`
- 服務條款 → `terms.html`

維護要求：

1. 法律頁只放 Footer，不放 Navbar。
2. 不使用 `#privacy-modal`。
3. 不使用 `#terms-modal`。
4. 不使用 `data-legal-modal`。
5. 導覽改版時，所有公開 HTML 頁面的 Navbar / Footer 必須同步更新。
6. 更新後搜尋全站，確認沒有舊連結殘留。
7. Navbar 與 Footer 外層的共享區塊註解必須保留。

## 團隊成員維護規則

1. 團隊介紹主要維護在 `about.html`。
2. 創辦人照片固定路徑：`assets/team/yian-chen.jpg`。
3. 不改創辦人照片檔名、路徑或裁切版本。
4. 新增夥伴前，確認對方是否同意公開姓名、照片、角色、介紹，以及個人網站或社群連結。
5. 夥伴沒有照片時，使用 NVD 占位元素。
6. 不使用假照片，也不使用圖庫照片冒充團隊成員。
7. 外部個人網站連結必須包含 `target="_blank"` 與 `rel="noopener noreferrer"`。

## 內容用語規範

全站對外文案避免使用下列詞彙：

`痛點`、`生態`、`賽道`、`打造`、`落地`、`賦能`、`閉環`、`信息`、`視頻`、`質量`、`渠道`、`用戶`、`場景`、`數據`

「數據」一律改用「資料」。檢查範圍包含 HTML 內文、meta、`aria-label`、`script.js` 顯示文字與 README 中的對外文案。若必要的程式變數名稱涉及既有功能，改名前必須先確認所有引用與測試結果。

## ROAD HUB 維護規則

1. ROAD HUB 目前是前端模擬互動，不代表已經有正式送件後端。
2. 未建置後端前，不可宣稱已完成正式回報系統。
3. 不新增假回報數字。
4. 未來新增正式表單時，需同步檢查 CSP 的 `form-action`。
5. 未來新增送件端點前，需先補齊隱私權政策、服務條款與個人資料告知流程。
6. ROAD HUB 只能作為流程示意；正式回報管道開放前，不得使用正式受理、案件確認、政府同步或真實成果數字等表述。

### 道路回報內容維護規則

- `index.html` 只維護道路回報入口摘要，不放完整回報流程。
- `report.html` 是完整道路回報流程、道路回報行動卡與 ROAD HUB 的主要維護頁。
- 不要把完整回報流程複製回 `index.html`。
- 「拍照、定位、補充說明」等流程內容只在 `report.html` 修改。
- 首頁 CTA 統一連到 `report.html#dashboard`。

## 加入共創頁維護規則

1. `join.html` 目前是參與方式說明頁，不是正式報名頁。
2. 初步聯絡信箱固定為 [nvd20260611@gmail.com](mailto:nvd20260611@gmail.com)。
3. 此 Email 僅供合作詢問、參與方式了解與一般聯繫，不作為道路障礙正式陳情、緊急通報或政府案件受理管道。
4. `join.html` 不放未完成個人資料告知流程的表單，也不暗示已開放正式申請。
5. 未來新增表單前，必須同步更新 `privacy.html`、`terms.html`、資料用途、保存方式與回覆範圍說明。

## 部署與檢查

GitHub Pages 建議設定：

- Source：Deploy from a branch
- Branch：`main`
- Folder：`/root`

本專案目前沒有 `package.json`，因此沒有 `npm run lint` 或 `npm run build`。既有靜態檢查命令：

```powershell
node --check script.js
node scripts/check-site.mjs
```

完整人工驗收請依照 `MAINTENANCE_CHECKLIST.md`。
