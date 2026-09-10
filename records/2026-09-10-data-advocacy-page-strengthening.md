# 資料倡議頁補強紀錄

## 日期
2026-09-10

## 任務名稱
資料倡議頁補強

## 任務目標
讓 `resilience.html` 不再像單純中繼頁，而是能承接 Navbar「資料倡議」入口的正式內容頁。

## 背景
使用者詢問「資料倡議那一頁是否是冗餘」，檢查後判斷該頁原本只有主標、簡短說明與兩個 CTA，頁面任務不足，容易讓使用者覺得只是跳轉到 ROAD HUB 的過場頁。

## 決策
- 保留 `resilience.html`，不刪除頁面。
- 以最小修改補強內容，不大改導覽列、不改首頁、不動 ROAD HUB 功能。
- 沿用既有卡片與流程樣式，不新增大型套件。

## 修改內容
- 補強資料倡議頁主文，說明 NVD 整理的資料來源。
- 新增「我們整理什麼資料」四張卡片：同儕經驗、AI 工具使用回饋、輔具與生活支持、公共空間觀察。
- 新增「資料如何支持改善」流程與 ROAD HUB 角色說明。
- 同步補齊繁中與英文 i18n key。

## 修改檔案
- `resilience.html`
- `script.js`

## 測試與驗證
- `node --check script.js`：通過
- `node --check scripts/check-site.mjs`：通過
- `node scripts/check-site.mjs`：通過
- `git diff --check`：通過，僅 CRLF 提醒
- 禁用詞與亂碼掃描：公開 HTML 與 `script.js` 未命中
- 本機瀏覽器檢查：8 個公開頁面在 390px 與 1366px 無水平溢出、每頁 1 個 H1、console error/warning 0
- `resilience.html` 補測 430px 與 768px：無水平溢出、每頁 1 個 H1、console error/warning 0

## Obsidian 鏡像狀態
- 是否同步到 Obsidian：未執行
- Obsidian vault：[UNKNOWN]
- Obsidian 目的檔：[UNKNOWN]

## 問題與風險
- 未進行人工視覺最終驗收。
- 未檢查正式站，僅檢查本機預覽。

## Git 狀態
- 是否 commit：否
- commit hash：無
- 是否 push：否

## 部署狀態
- 是否部署：否
- 部署平台：GitHub Pages
- 正式網址：未部署本次修改

## 下一步
- 建議使用者先看本機 `resilience.html` 視覺效果；確認後再 commit、push 與部署。
