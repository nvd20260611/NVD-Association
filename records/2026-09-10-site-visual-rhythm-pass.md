# 全站視覺節奏第一批修正紀錄

## 日期
2026-09-10

## 任務名稱
全站視覺節奏第一批

## 任務目標
收斂 NVD 官網滑動體感，降低區塊空白過大、文字區太分散、卡片節奏不一致與長頁回到上方不便的問題。

## 背景
影片檢查後判斷首頁、About、Join 與資料倡議頁存在段落距離偏鬆、閱讀寬度偏散、卡片高度不一致與長頁操作成本偏高等視覺體感問題。

## 決策
- 優先以 `styles.css` 收斂 section spacing、文字容器與卡片節奏。
- 不改首頁文案、不重構 HTML、不動 ROAD HUB 功能邏輯。
- 以 JS 產生全站 back-to-top button，避免每頁重複插入 HTML。
- 保留既有 `html` / `body` scrollbar 與 overflow 主規則，不用新的 overflow workaround。

## 修改內容
- 新增閱讀寬度與 section 節奏 CSS token。
- 收斂首頁、About、Join、資料倡議頁主要區塊上下距離。
- 收斂 About 文字寬度與團隊/官方卡片最大寬度。
- 收斂 Join Hero、參與方式、發起人、準備與聯絡區塊間距。
- 資料倡議頁桌機卡片改為 2x2，卡片高度一致。
- 新增全站回到上方按鈕，滾動超過 640px 後顯示，支援鍵盤 focus 與 i18n aria-label。

## 修改檔案
- `styles.css`
- `script.js`

## 測試與驗證
- `node --check script.js`：通過
- `node --check scripts/check-site.mjs`：通過
- `node scripts/check-site.mjs`：通過
- `git diff --check`：通過，僅 CRLF 提醒
- 禁用詞與亂碼掃描：公開 HTML 與 `script.js` 未命中
- 本機瀏覽器抽測 `index.html`、`about.html`、`join.html`、`report.html`、`resilience.html`：390px、768px、1366px、1920px 無水平溢出，console error/warning 0，每頁 1 個 H1
- back-to-top：滾動後顯示，點擊後回到頁首並隱藏

## Obsidian 鏡像狀態
- 是否同步到 Obsidian：未執行
- Obsidian vault：[UNKNOWN]
- Obsidian 目的檔：[UNKNOWN]

## 問題與風險
- 仍建議使用者人工看一次正式視覺節奏，尤其是首頁 Hero 到第一組卡片、Join 發起人區塊與 ROAD HUB 深色段落。
- 本輪未做正式站檢查。

## Git 狀態
- 是否 commit：否
- commit hash：無
- 是否 push：否

## 部署狀態
- 是否部署：否
- 部署平台：GitHub Pages
- 正式網址：未部署本次修改

## 下一步
- 人工視覺確認後，再決定是否 commit、push 與部署。
