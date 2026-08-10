# 星链移动端统一重设计规范

## 视觉定位

关键词：专业、清爽、可信、克制、业务驱动。

设计方向：消费端保持亲和与易浏览，经营端保持高效与可信；两者共享同一品牌色、排版、组件、状态和交互规则。

## 页面覆盖

| 界面板 | 覆盖页面 |
|---|---|
| 01 消费链路 | 登录/注册、游客首页、课程详情 |
| 02 账户资产 | 我的账户、我的订单、资产中心 |
| 03 经营工作台 | 经营身份总览、OPC 工作台、代理工作台、销售工作台 |
| 04 核心表单 | 经营身份申请、发布商品、代理采购、发布帖子 |

服务协议、区域选择、权限提示、错误提示、空状态和加载状态统一复用下述组件，不再为每个角色单独创建视觉体系。

## 设计 Token

### 色彩

| Token | 色值 | 用途 |
|---|---|---|
| `brand-navy` | `#0B1F33` | 品牌、标题、深色顶栏 |
| `primary-teal` | `#0F766E` | 主按钮、选中态、链接 |
| `primary-hover` | `#0B625C` | 按压态 |
| `mint-soft` | `#E8F5F2` | 选中背景、成功浅底 |
| `page-bg` | `#F5F7FA` | 页面背景 |
| `surface` | `#FFFFFF` | 卡片、弹层、输入区 |
| `border` | `#E4EAF0` | 边框、分割线 |
| `text-primary` | `#0B1F33` | 主文字 |
| `text-secondary` | `#667085` | 次级说明 |
| `reward` | `#D97706` | 星卡、价格、收益 |
| `success` | `#15803D` | 通过、完成、经营中 |
| `warning` | `#D97706` | 待处理、风险提醒 |
| `danger` | `#DC2626` | 错误、危险操作 |

### 字体

- 中文：`Noto Sans SC`、`PingFang SC`、`Microsoft YaHei` 回退。
- 页面标题：20px / 28px / 700。
- 卡片标题：16px / 24px / 600。
- 正文：14px / 22px / 400。
- 辅助文字：12px / 18px / 400。
- 关键数字：24–28px / 700，使用等宽数字特性。

### 空间与形态

- 基础间距：8px；常用间距为 8、12、16、24、32px。
- 页面左右边距：16px。
- 按钮高度：48px；小按钮不得低于 40px。
- 最小触控区：44 × 44px。
- 卡片圆角：16px；输入框与按钮：12px；状态标签：999px。
- 边框：1px `#E4EAF0`。
- 阴影只用于浮层和重要卡片：`0 4px 16px rgba(11,31,51,.06)`。

## 核心组件

### 顶栏

- 一级页使用居中标题；左侧返回，右侧仅放一个高频操作。
- 首页使用 Logo、搜索和订单入口，不再额外叠加页面标题。
- 禁止使用无业务含义的英文眉题。

### 底部导航

- 固定五项：首页、商城、发现、资产、我的。
- 高度 64px 加系统安全区；正文必须预留对应底部空间。
- 选中态只使用青绿图标与文字，不使用大面积色块。

### 按钮

- 主按钮：青绿实底、白字；每屏最多一个主要动作。
- 次按钮：白底青绿描边。
- 危险按钮：默认使用红色文字，二次确认后才使用红色实底。
- 禁用态：灰底灰字，必须同时说明不可用原因。

### 表单

- 相关字段按“基本信息、价格库存、履约售后”分组。
- 枚举值必须翻译成中文，不显示 `PHYSICAL`、`STAR_ONLY` 等技术字段。
- 错误信息紧贴字段，包含原因与修复方式。
- 长流程使用 3–5 步进度条，并允许保存草稿。

### 数据卡与状态

- KPI 卡最多四项，统一“标签—数值—辅助说明”的结构。
- 技术状态统一转换：`ACTIVE` → “经营中”，`PAYMENT_PROCESSING` → “支付处理中”，`ALLOWED` → “权限正常”。
- 红色只表达真正风险，橙色表达待处理，绿色表达完成或正常。

### 空状态

- 必须包含：发生了什么、用户可以做什么、一个明确 CTA。
- 经营身份空状态还需显示申请条件、审核时间和身份价值。
- 禁止让空状态占满整屏而没有后续操作。

## 角色一致性规则

- 普通用户：突出学习、订单、资产与经营入口。
- OPC：突出商品、订单、履约、售后与提现。
- 代理：突出采购、库存、下级销售与经营明细。
- 销售：突出推广、客户订单、所属代理与收益。
- 综合经营账号：通过身份总览切换角色，角色工作台内部不重复放多身份导航。

## GPT Image 统一风格锚点

```text
Production-ready Chinese mobile service marketplace UI for 星链. Professional,
fresh, trustworthy and restrained. Navy #0B1F33 typography and headers, teal
#0F766E primary actions, white surfaces, cool-gray #F5F7FA page background,
muted mint selected states, amber only for prices and pending states, red only
for errors. Noto Sans SC-like typography, 8px spacing grid, 12–16px radii,
hairline borders, minimal natural shadows, consistent 24px outline icons,
44px minimum tap targets, realistic implementable components and clear Chinese.
No random English eyebrow copy, raw database enums, glassmorphism, neon,
excessive gradients, fake 3D, oversized empty banners or obstructive navigation.
```

## 验收清单

- 所有页面是否只存在一个主操作。
- 底部导航是否没有遮挡内容。
- 所有触控目标是否至少 44px。
- 状态是否为用户语言而非数据库语言。
- 星卡、现金与收益的单位是否清楚且不混用。
- 角色权限、区域范围与当前身份是否始终可确认。
- 空状态、错误、加载、禁用和成功状态是否完整。
- 图片生成稿中的中文、数字和图标是否在开发前人工校对。

## 出图说明

本轮界面板使用内置 ImageGen 编辑/参考模式生成。原截图作为信息与业务结构参考，未覆盖原文件。生成图用于统一视觉方向和高保真讨论；最终开发稿应在 Figma 或代码组件中按本规范重建，并逐项校正文案、数据和状态。

