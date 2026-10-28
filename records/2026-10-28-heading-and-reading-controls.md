# 標題層級與閱讀介面整理

- 日期：2026-10-28（Asia/Taipei）。
- 依據：使用者提供 Sandy 建議書及兩張標註截圖，並同意依建議調整。
- 使用 Skill：nvd-website-maintainer、personal-brand-website、systematic-debugging、project-log-maintainer。

## 修改

- report.html：唯一 H1 僅包含地圖名稱；原第二段大字改為段落標語「記錄通行阻礙 × 整理公共資料」。介紹拆成地圖與 ROAD HUB 兩段，同步繁中英文。
- styles.css：主標／標語分級（桌機 48／28px、手機 30／18px）；標題使用 balance、部分段落使用 pretty，未支援時保留自然換行。回報卡片標題也平衡換行，減少落單字。
- 使用者補充：白話提供一般民眾易讀說明，治理供市政府與公部門溝通；依最新要求恢復八頁原有切換，不移除功能。
- script.js：保留原有語氣字典、state、事件、儲存設定與隱私說明。補充行動專案的四組中英文語氣文案（地圖介紹、示範介紹、工具說明、資料倡議標題），並為切換按鈕增加用途提示。主標、操作流程與重要限制不因語氣改變。
- scripts/check-site.mjs：保留原有字典邊界及語氣 aria 檢查，僅新增 reportDemoLead 英文 key 檢查。

## 實測及限制

- 修改前 Chrome：report／join／privacy／terms 主文切換無差異；about 有少量差異。使用者明確要求保留兩種語氣，法律條文及操作步驟保持一致。
- 排版回歸：主要六頁 index、about、report、join、privacy、terms，390／768／1366／1920px 共 24 組尺寸，中英文無水平溢出，H1 各一個，無額外內層垂直捲軸。此批測試在恢復切換前完成。
- 恢復後 Chrome／Playwright：report 在四種寬度、繁中／英文、白話／治理均無水平溢出、維持一個 H1；兩種語氣有實際文案差異，儲存設定及重新載入正常，ROAD HUB 步驟切換正常，Console 無錯誤。
- report 的 body scrollWidth 為 375／753／1351／1905px；根捲軸空間持續保留。
- 手機選單展開與 Escape 關閉、語言切換、主題切換及 ROAD HUB 步驟 03（data-step=2）正常。截圖顯示 1920px 主標一行、390px 兩行；Console error／pageerror 無命中。
- 八頁切換按鈕均恢復原樣；八頁結構與連結由現有檢查器驗證。
- 雙捲軸本輪未重現，未修改 html/body 滾動規則，不宣稱已修復。實機 iPhone Safari、擴充套件或特定滾動狀態仍需人工確認。
- node --check script.js、node --check scripts/check-site.mjs、node scripts/check-site.mjs、git diff --check 通過；僅 CRLF 提醒。
- 前兩次瀏覽器批次因截圖或頁面 load 等待失敗，後續以 domcontentloaded 完成驗收，再單獨擷取已載入字體的 report 截圖。
- 截圖在電腦暫存資料夾 nvd-20261028，未加入 Git。
- 未進行完整螢幕閱讀器驗收。未保證搜尋排名或 AI 引用效果。
- 提交前狀態：未 commit、未 push、未部署；AGENTS.md 保持未追蹤。使用者後續授權先提交並部署目前版本。未同步 Obsidian。

## 待辦：語氣文案再校對

- 使用者要求後續提醒修正語氣，不在本輪擴大文案調整。
- 白話版：以一般民眾易理解為原則；治理版：供市政府與其他公部門閱讀，重點是公共需求、資料用途及協作方式。
- 後續需逐頁確認差異及用語一致性，兩版維持相同事實與服務限制，不能暗示已獲政府認可或正式受理。
- 定時提醒日期及時間尚待使用者指定，目前僅記入待辦。
