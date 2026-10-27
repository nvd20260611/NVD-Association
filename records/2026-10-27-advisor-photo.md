# 袁宜蓁顧問照片

- 目標：以使用者提供的照片替換 about.html 顧問卡片 KY 識別。
- 使用 Skill：personal-brand-website、nvd-website-maintainer、project-log-maintainer。
- 新增 assets/team/karen-yuan.jpg，原圖直接複製，533 × 528px、約 53KB，未修改原檔。
- about.html 沿用既有頭像及載入失敗備援；移除照片外層 aria-hidden，保留字母備援為裝飾。
- script.js 新增中英文 advisorPhotoAlt，使用既有 data-i18n-alt 機制。
- 不修改 CSS、介紹文案、ROAD HUB 或其他頁面。
- Chrome／Playwright：390／1366px 圖片成功載入，顯示 86 × 86px，沿用 object-fit: cover，未拉伸；無水平溢出。中英文 alt 正常，pageerror 無命中。
- node 語法、全站檢查與 diff 格式檢查通過（CRLF 提醒）。完整螢幕閱讀器人工驗收未執行。
- 未 commit、未 push、未部署；AGENTS.md 保持未追蹤。未同步 Obsidian。
