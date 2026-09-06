# NVD 官網視覺一致性小修紀錄

## 日期
2026-09-06

## 任務名稱
全站字級與排版一致性檢查

## 任務目標
檢查 NVD 官網各公開頁面在字級、卡片寬度與排版節奏上是否一致，並以最小 CSS 修改修正明顯離群問題。

## 背景
使用者指出加入頁新增發起人區塊與其他區塊大小不一致，且希望整站在後續擴充時不要逐漸發散。

## 決策
- 保留首頁與 ROAD HUB 作為較強主視覺頁面。
- 一般內頁 H1 統一套用 `.section-heading` 字階。
- 法律頁卡片內 H2 改為段落小標層級，避免與頁面主標競爭。
- 手機版首頁 help 卡改為單欄，降低閱讀左右跳動。

## 修改內容
- 統一 `join-founder-card`、`join-prepare-card`、`join-contact-card` 寬度。
- 統一加入頁發起人區塊與準備區塊標題字級。
- 修正發起人四格小卡高度與間距一致性。
- 新增 `.section-heading h1` 共用字階。
- 新增 `.legal-panel h2` 段落標題字級。
- 手機版 `.home-page .help-grid` 改為單欄。
- 清理一處 CSS 註解亂碼。

## 修改檔案
- `styles.css`
- `records/2026-09-06-visual-consistency-audit.md`

## 測試與驗證
- `node --check script.js`：通過
- `node --check scripts/check-site.mjs`：通過
- `node scripts/check-site.mjs`：通過
- `git diff --check`：通過，僅 CRLF 提示
- 390 / 768 / 1366 / 1920：8 個公開頁面皆無水平溢出
- 390 / 768 / 1366 / 1920：8 個公開頁面 Console error = 0
- 每頁 H1 數量：皆為 1

## Obsidian 鏡像狀態
- 是否同步到 Obsidian：是
- Obsidian vault：`D:\Obsidian`
- Obsidian 目的檔：`Codex Records\NVD-Association-public\2026\2026-09-06-visual-consistency-audit.md`

## 問題與風險
- 禁用詞掃描命中 `README.md`、`MAINTENANCE_CHECKLIST.md`、`AGENTS.md` 與 `my_約瑟宰相_終極協作版_blueprint.md` 的規則文字或內部藍圖文字；未判定為公開頁面文案問題。
- 未做正式站部署檢查。

## Git 狀態
- 是否 commit：否
- commit hash：無
- 是否 push：否

## 部署狀態
- 是否部署：否
- 部署平台：GitHub Pages
- 正式網址：未部署

## 下一步
- 使用者確認視覺後，再決定是否 commit / push / 部署。
