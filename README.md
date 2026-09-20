# 班主任管家（TeachersWorkbench）协议站点

HarmonyOS 应用「班主任管家」（`com.xmgod.teachersworkbench`）的公开协议页面，通过 GitHub Pages 发布。

## 页面

| 页面 | 路径 |
| --- | --- |
| 协议首页 | `index.html` |
| 隐私政策（中/英） | `privacy-policy.html` |
| 用户协议（中/英） | `user-agreement.html` |

页面支持中英文切换（右上角按钮，或 `?lang=en` 参数），样式与脚本位于 `assets/`。

## 公开链接

- 入口：https://tomkuku588-bot.github.io/TeachersWorkbench/
- 隐私政策：https://tomkuku588-bot.github.io/TeachersWorkbench/privacy-policy.html
- 用户协议：https://tomkuku588-bot.github.io/TeachersWorkbench/user-agreement.html

## 部署

推送到 `main` 分支后，`.github/workflows/pages.yml` 会自动构建并部署到 GitHub Pages（首次运行会自动启用 Pages）。也可在 Actions 页面手动触发（workflow_dispatch）。

## 应用要点（协议内容依据）

- 本地优先：无账号、不联网、无云同步、无第三方 SDK、无广告/统计/支付。
- 权限：`PRIVACY_WINDOW`（后台隐私遮罩）、`ACCESS_BIOMETRIC`（应用锁生物识别）。
- 敏感学生数据仅存设备本地应用沙箱；备份文件由用户主动导出并自行保管。

## 版本记录

- 2026-09-20：首次发布，对应应用版本 1.0.0。
