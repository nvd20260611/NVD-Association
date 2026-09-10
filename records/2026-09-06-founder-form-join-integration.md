# Founder Form Join Integration

## 日期
2026-09-06

## 任務名稱
發起人意願確認表與加入頁整合

## 任務目標
將第一階段發起人意願暨資格確認表整合到 NVD 官網加入頁，並補齊外部表單相關隱私說明。

## 背景
NVD 永賦行動協會正在進行人民團體籌組準備，需要先以低負擔方式確認發起意願與基本資格。本輪採外開 Google Forms，不在官網內嵌 iframe，以維持現有 CSP 與手機版可用性。

## 決策
- 沿用 `join.html`，不新增獨立 founder 頁面。
- 不使用 iframe，因 `join.html` 目前 CSP 設定為 `frame-src 'none'`，且手機版 Google Form 內嵌體驗風險較高。
- 官網只放說明、資格提醒、第一階段限制與外開表單 CTA。
- 隱私頁補充外部表單會處理哪些資料，以及本階段不要求高敏感文件。

## 修改內容
- `join.html` 新增「發起人第一階段意願確認」區塊。
- `join.html` 更新加入頁 description 與參與路徑 lead。
- `privacy.html` 更新 description，並新增「發起人意願確認表」說明。
- `script.js` 同步新增繁中與英文 i18n key。
- `styles.css` 新增 join founder 區塊樣式，並將既有 join 清單裝飾符號改為 CSS 圓點。

## 修改檔案
- `join.html`
- `privacy.html`
- `script.js`
- `styles.css`

## 測試與驗證
- `node --check script.js`：通過
- `node --check scripts/check-site.mjs`：通過
- `node scripts/check-site.mjs`：通過
- `git diff --check`：通過，僅 CRLF 提醒
- 公開 HTML / `script.js` / `styles.css` 禁用詞掃描：無命中
- 公開 HTML / `script.js` / `styles.css` 亂碼掃描：無命中
- 每頁 H1 數量：8 個公開 HTML 頁面皆為 1
- 本機瀏覽器 390px / 768px：`join.html`、`privacy.html` 無水平溢出，console error / warning 為 0
- `join.html` 英文 i18n：新增發起人區塊可切換為英文，無異常問號
- `privacy.html` 英文 i18n：新增隱私補充可切換為英文，無異常問號

## Obsidian 鏡像狀態
- 是否同步到 Obsidian：待執行
- Obsidian vault：`D:\Obsidian`
- Obsidian 目的檔：`Codex Records\NVD-Association-public\2026\2026-09-06-founder-form-join-integration.md`

## 問題與風險
- Google Form 已建立並可取得填寫網址，但表單分段與部分必填/條件式設定仍需人工在 Google Forms 編輯介面確認。
- Google Sheet 管理欄位已預留；本輪未建立 Apps Script、自動寄信或第二階段補件流程。
- 本紀錄未寫入 Google Form 編輯網址或 Sheet 網址，避免把管理入口放進專案檔。

## Git 狀態
- 是否 commit：否
- commit hash：無
- 是否 push：否

## 部署狀態
- 是否部署：否
- 部署平台：GitHub Pages
- 正式網址：未部署本輪變更

## 下一步
- 人工進入 Google Forms 確認分段、必填、條件式分支與權限設定。
- 確認後可提交本輪官網變更，再視需要 push 觸發 GitHub Pages 更新。
