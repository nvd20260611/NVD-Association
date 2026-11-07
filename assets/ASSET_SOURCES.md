# Asset Sources

This file tracks public-facing visual assets and their origin.

| Asset | Source | License / status | Notes |
| --- | --- | --- | --- |
| `assets/nvd-logo-horizontal.png` | User-provided NVD brand reference image, cropped without redesign | Project brand asset | Horizontal logo for light backgrounds. |
| `assets/nvd-logo-horizontal-transparent.png` | Derived from user-provided NVD horizontal logo by removing the white background | Project brand asset | Transparent color logo for consistent headers across themes; no logo redesign. |
| `assets/nvd-logo-horizontal-dark-transparent.png` | Derived from user-provided NVD horizontal logo by removing the white background and adapting navy marks for dark-background legibility | Project brand asset | Same-size transparent logo for dark headers; no logo redesign. |
| `assets/nvd-logo-horizontal-reverse.png` | User-provided NVD brand reference image, cropped without redesign | Project brand asset | Reverse logo for dark backgrounds. |
| `assets/nvd-logo-horizontal-reverse-transparent.png` | Derived from user-provided NVD reverse logo by removing the blue background | Project brand asset | Transparent reverse logo for dark headers; no logo redesign. |
| `assets/nvd-logo-icon.png` | User-provided NVD brand reference image, cropped without redesign | Project brand asset | App icon / favicon. |
| Icons in `styles.css` (`.fa-*` rules) | Font Awesome Free 6.5.2 SVGs (@fortawesome/fontawesome-free) | CC BY 4.0, attribution kept in the CSS comment | Inlined as CSS mask data URIs on 2026-11-07, replacing the cdnjs stylesheet. |
| `assets/road-hub/road-photo-0*.jpg`, `assets/team/yian-chen.jpg` | Existing project photos | Same as before this change | Proportionally downscaled without cropping and recompressed on 2026-11-07 (1108×1477 → 600×800, 1122×1402 → 480×600; integer pixel rounding changes the ratio by < 0.05%). File names and paths unchanged. |

Do not add public images unless the source, author, license, and proof of permission are recorded here.
