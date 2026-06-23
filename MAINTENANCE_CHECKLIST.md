# NVD 官網維護檢查清單

## 改版前

- [ ] 確認要修改的頁面與範圍。
- [ ] 確認是否會影響 Navbar / Footer。
- [ ] 確認是否會影響 `script.js`。
- [ ] 確認是否會影響 ROAD HUB 模擬互動。
- [ ] 確認是否會影響創辦人照片路徑。
- [ ] 確認是否會影響法律頁。
- [ ] 確認是否會影響 `sitemap.xml`。
- [ ] 確認是否會影響 canonical。

## 改版後

- [ ] 每頁只有一個 H1。
- [ ] Navbar / Footer 全站一致。
- [ ] 無 `href="#"`。
- [ ] 無 `#privacy-modal`。
- [ ] 無 `#terms-modal`。
- [ ] 無 `data-legal-modal`。
- [ ] 無 `index.html#about`。
- [ ] 隱私權政策連到 `privacy.html`。
- [ ] 服務條款連到 `terms.html`。
- [ ] `report.html#dashboard` 可定位。
- [ ] `report.html#loop` 可定位。
- [ ] `index.html` 沒有完整道路回報流程，只保留入口摘要。
- [ ] `report.html` 保留完整道路回報行動卡。
- [ ] 全站只有一張「拍照、定位、補充說明」卡片。
- [ ] 全站只有一份完整道路回報步驟列表。
- [ ] 首頁 CTA 連到 `report.html#dashboard`。
- [ ] ROAD HUB 仍為前端模擬，沒有新增 `fetch`、XHR、`FormData` 或後端端點。
- [ ] `script.js` 沒有重複的 ROAD HUB 頂層函式宣告。
- [ ] ROAD HUB 有可見的「流程示意，不會傳送或保存資料」聲明。
- [ ] ROAD HUB 沒有看似真實成果的精確數字、HASH、信心值或精準座標。
- [ ] ROAD HUB 沒有「已受理、已轉交、已確認、同步政府」等可能造成誤解的文字。
- [ ] 提交前已確認 staged 檔案不含內部提示、blueprint 或協作規則。
- [ ] `assets/team/yian-chen.jpg` 未被修改。
- [ ] 手機版 Navbar 正常。
- [ ] 桌機版 Navbar 正常。
- [ ] 無水平溢出。
- [ ] 無 Console error。
- [ ] 無禁用詞。
- [ ] 無「數據」。
- [ ] `sitemap.xml` 已同步。
- [ ] canonical 正確。
- [ ] 外部連結有 `target="_blank"` 與 `rel="noopener noreferrer"`。
- [ ] header logo `alt="NVD 協會"`。
- [ ] footer 裝飾 logo `alt=""` 且外層 `aria-hidden="true"`。

## 刪除檔案或 class 前

- [ ] 先全站搜尋是否仍被引用。
- [ ] 先檢查 HTML 是否使用。
- [ ] 先檢查 `script.js` 是否使用。
- [ ] 先檢查 `styles.css` 是否使用。
- [ ] 先檢查 `sitemap.xml` 是否引用。
- [ ] 先檢查 Navbar / Footer 是否引用。
- [ ] 確認無引用後才刪除。
- [ ] 刪除後再次跑全站搜尋。
- [ ] 刪除後檢查 Console。
- [ ] 刪除後檢查手機版與桌機版。
