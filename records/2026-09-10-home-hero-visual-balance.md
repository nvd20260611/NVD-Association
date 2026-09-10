# 首頁 Hero 視覺平衡修正紀錄

## 日期
2026-09-10

## 任務名稱
首頁 Hero 呈現方式調整

## 任務目標
回應首頁第一屏主標過大、換行不自然、補強句呈現不穩的視覺問題，以最小修改改善閱讀節奏。

## 背景
使用者提供正式站截圖，指出首頁 Hero 呈現方式怪怪的。畫面中主標字級過大，中文換行容易切在不自然位置，背景裝飾與補強句也讓視線較分散。

## 決策
- 只調整首頁 Hero 相關樣式，不改文案主軸。
- 保留 NVD｜Nature・Value・Days 與既有 CTA。
- 不修改 ROAD HUB、其他頁面內容、品牌色、圖片路徑或部署設定。

## 修改內容
- 為 Hero 補強句加入 `hero-positioning` class，讓樣式能精準控制。
- 收斂首頁 Hero 主標字級與行高，降低不自然斷行。
- 淡化並縮小首頁 Hero 背景膠囊裝飾。
- 調整首頁 Hero 上下 padding，讓第一屏文字更完整。
- 移除首頁 Hero 副標粗體片段的框線貼片感，改回自然文字重點。

## 修改檔案
- `index.html`
- `styles.css`

## 測試與驗證
- `node --check script.js`：通過
- `node --check scripts/check-site.mjs`：通過
- `node scripts/check-site.mjs`：通過
- `git diff --check`：通過，僅 CRLF 提醒
- 公開文案禁用詞與亂碼掃描：未命中
- 本機瀏覽器首頁檢查：H1 數量 1、console logs 0、目前視窗無水平溢出

## Obsidian 鏡像狀態
- 是否同步到 Obsidian：未執行
- Obsidian vault：[UNKNOWN]
- Obsidian 目的檔：[UNKNOWN]

## 問題與風險
- 390px 手機實機畫面仍建議由使用者目視確認。
- 本輪未使用 headless Chrome 截圖，因 shell 環境未找到 Chrome / Edge CLI 路徑。

## Git 狀態
- 是否 commit：否
- commit hash：無
- 是否 push：否

## 部署狀態
- 是否部署：否
- 部署平台：未執行
- 正式網址：未部署

## 下一步
- 使用者確認視覺後，再決定是否 commit / push / 部署。
