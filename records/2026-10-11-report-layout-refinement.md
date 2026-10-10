# 行動專案頁排版收斂

- 日期：2026-10-11（Asia/Taipei）
- 目標：依已確認建議整理 report 頁閱讀動線，不改 ROAD HUB 功能邏輯。
- 使用 Skill：nvd-website-maintainer、brainstorming、project-log-maintainer。
- 檔案：report.html、styles.css、script.js。
- 調整：Hero 移除卡片外框；桌機主標 48px、兩行；手機自然換行。工具 CTA 接在準備事項後；五步操作移到 ROAD HUB 前並同步中英文標示。巡護卡片取消額外高度、淡化陰影及移除裝飾；文字區寬度統一；資料說明與合作入口共用一個外框。
- Chrome / Playwright：390、768、1366、1920px 的 body scrollWidth 分別為 375、753、1351、1905px，無水平溢出。差額為保留的捲軸空間。
- 桌機主標第一段各一行；390px 自然分成兩行。每頁仍一個 H1。
- 巡護卡片桌機 191px 等高；手機依內容呈現。手機 mockup 維持直式。
- ROAD HUB：四種尺寸點步驟 03 均切換 data-step 為 2；未修改功能邏輯。
- 英文／深色／語氣切換可操作；390px 英文深色無水平溢出。
- 本輪瀏覽器未觀察到 console error / pageerror。
- node 語法與現有全站檢查通過；diff 檢查只有 CRLF 提醒。
- 截圖存於電腦暫存資料夾 nvd-report-layout，未加入 Git。
- 尚未 commit、push、部署；AGENTS.md 保持未追蹤。
- 無障礙：保留既有按鈕語意、i18n、標題及連結；完整螢幕閱讀器驗收未執行。
