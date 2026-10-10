# Report Page SmartRoad Positioning Update

## 日期
2026-10-10

## 任務名稱
report-smartroad-positioning

## 任務目標
將 `report.html` 從單純 ROAD HUB 示範頁，整理為「恢恢尋路行動工具 + ROAD HUB 資料整理示範」的行動專案頁。

## 背景
使用者提供 Road Tag 與既有 SmartRoad Portal 連結後，希望 NVD 官網能呈現差異化：NVD 不只做道路回報工具，而是把行動工具、巡護教學、資料整理與公共倡議串成完整說明。

## 決策
- `恢恢尋路` 作為目前主力行動工具。
- `ROAD HUB` 保留為官網中的資料整理示範，不描述為正式受理或政府通報管道。
- 新增新手巡護教學與從回報工具到公共資料的說明，降低與單一回報平台的重疊感。

## 修改內容
- 更新 `report.html` title、description、Open Graph 與 Twitter metadata。
- 新增恢恢尋路行動工具卡片與外部入口。
- 保留並重新定位 ROAD HUB demo 卡片。
- 新增新手巡護教學、資料整理流程、行動 CTA。
- 同步 `script.js` 繁中與英文 i18n。
- 補 `styles.css` report 頁新增卡片與行動按鈕樣式。

## 修改檔案
- `report.html`
- `script.js`
- `styles.css`
- `records/2026-10-10-report-smartroad-positioning.md`

## 測試與驗證
- `node --check script.js`：通過
- `node --check scripts/check-site.mjs`：通過
- `node scripts/check-site.mjs`：通過
- `git diff --check`：通過，僅 CRLF warning
- 禁用詞與亂碼掃描：未命中
- 本機 `report.html` RWD 指標：
  - 390px：scrollWidth 375，console issue 0
  - 768px：scrollWidth 753，console issue 0
  - 1366px：scrollWidth 1351，console issue 0
  - 1920px：scrollWidth 1905，console issue 0

## Obsidian 鏡像狀態
- 是否同步到 Obsidian：未執行
- Obsidian vault：[UNKNOWN]
- Obsidian 目的檔：[UNKNOWN]

## 問題與風險
- 未實測正式站，僅本機預覽。
- 外部恢恢尋路網站可用性需人工持續確認。
- 新增內容目前集中於 `report.html`，首頁與資料倡議頁未同步加深 SmartRoad 連動。

## Git 狀態
- 是否 commit：否
- commit hash：無
- 是否 push：否

## 部署狀態
- 是否部署：否
- 部署平台：GitHub Pages
- 正式網址：未部署

## 下一步
- 使用者視覺確認後，再決定是否 commit / push / 部署。
