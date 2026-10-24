# 新增袁宜蓁顧問介紹

- 日期：2026-10-24（Asia/Taipei）。
- 使用 Skill：personal-brand-website、nvd-website-maintainer、project-log-maintainer。
- 目標：在 about.html 現有團隊區新增「袁宜蓁｜NVD 顧問」。顧問角色由使用者提供。
- 來源：使用者提供的 karen-horizontal.png 名片，以及 https://aaa0218haha-collab.github.io/karen-portfolio/#about 公開介紹。
- 核對：姓名、Karen Yuan／凱倫、諮商心理與復健諮商碩士背景、勞動部職業輔導評量員資格、專案企劃與系統導入／AI 應用、職業重建及自立生活倡議。
- 修改：about.html 新增同款 team-card；script.js 新增七組繁中／英文 i18n key（含 CTA 與 aria-label）。保留發起人內容。
- 圖片：提供的是橫式名片，未縮圖或當作人物照片；使用既有 placeholder 樣式呈現 KY，裝飾識別設 aria-hidden。
- 未變更：CSS、圖片、其他頁面、ROAD HUB 功能。
- 檢查：node --check script.js、node --check scripts/check-site.mjs、node scripts/check-site.mjs、git diff --check 通過；僅 CRLF 提醒。
- Chrome／Playwright：390、768、1366px 的 body scrollWidth 為 375、753、1351px，無水平溢出；H1 仍一個。中英文切換及深色模式可呈現，Console error／pageerror 無命中。
- 無障礙：團隊區 H2、卡片 H3、顧問 article 有 aria-labelledby；外站連結有中英文說明及 noopener noreferrer。未進行完整螢幕閱讀器人工驗收。
- 狀態：未 commit、未 push、未部署；AGENTS.md 保持未追蹤。
- 未同步 Obsidian：本輪未辨識使用中的 vault，紀錄保留在專案內。
