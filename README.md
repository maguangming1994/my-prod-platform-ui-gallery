# 星链移动端成品 UI 设计稿 V2

本目录只放高保真成品 UI 画板，不再混入页面目录、原型说明器或设计管理界面。

## 查看方式

双击 `index.html` 查看全部画板；点击画板图片可打开原始分辨率 PNG。

在线总览：<https://maguangming1994.github.io/my-prod-platform-ui-gallery/>

## 当前覆盖

- 23 套横向 UI 画板
- 86 个关键高保真移动界面与 1 个桌面后台审核界面，共 87 个界面
- 游客、普通用户、OPC 负责人、OPC 子账号、讲师、代理、销售、综合经营账号、平台/区域管理员
- 四类商品：录播课程、实物商品、虚拟商品、预约服务
- 登录、发现、购买、支付、订单、履约、售后、资产、提现、任务、社区、客服、多经营身份、OPC 保证金缴退、经营、财税与全局状态

## 文件结构

- `index.html`：全部成品稿查看入口
- `styles.css`：查看页样式
- `boards/`：原始高分辨率 PNG 画板
- `mobile-design-system.md`：统一视觉和组件规范
- `prompt-manifest.md`：本轮出图方式、统一约束与画板任务记录
- `agent-onboarding-flow.md`：代理申请、审核、首批进货和激活的页面与异常分支
- `agent-onboarding-prompts.md`：代理准入画板的视觉方向与最终出图提示词
- `business-identity-deposit-flow.md`：多经营身份、OPC 类目保证金与退保审核流程
- `business-identity-deposit-prompts.md`：第 19–21 套画板的视觉方向与最终出图提示词
- `agent-role-permissions-flow.md`：代理星卡采购、下级代理审核与本区域销售管理流程
- `agent-role-permissions-prompts.md`：第 04 套代理核心操作画板的最终出图提示词
- `implementation-identity-deposit-brief.md`：第 22 套画板的真实实施边界与页面 brief
- `implementation-identity-deposit-prompts.md`：第 22 套画板的最终出图提示词与禁止伪造项
- `agent-initial-stock-implementation-brief.md`：第 23 套画板的 V093 视觉基线、V094 真实实现边界与状态说明
- `agent-initial-stock-implementation-prompts.md`：第 23 套画板的归档提示词与下一版重绘约束
- `system-flow-implementation.md`：UI、前端路由、后端服务、异常流程和人工确认项的实施矩阵

## 视觉基准

- 深海蓝 `#0B1F33`
- 主操作青绿 `#0F766E`
- 白色表面与冷灰 `#F5F7FA` 页面背景
- 星卡、价格和待办使用琥珀色
- 红色只用于真实错误与危险操作
- 清晰中文、真实图片、12–16px 圆角、细边框和克制阴影

这 87 个关键界面用于锁定完整设计语言、角色差异与真实实施边界，其余长尾场景继续按同一组件、业务模板和状态规则扩展。

画板是目标设计，不代表所有业务都已上线。在线总览中的“流程与实现状态”及本目录的实施矩阵，才是当前设计与代码覆盖关系的评审入口。

## 已锁定业务修正

- 代理库存只有付费星卡，不包含耳机、面霜、箱包等普通实物商品。
- 03、04 号画板中代理采购普通实物及“库存商品”的内容属于旧稿错误，不作为开发依据。
- 代理端统一采用第 11、16、17 号画板表达的星卡首批进货、库存批次、补货、利润与激活流程。
- 普通实物 SKU 与库存归 OPC 管理；销售可以推广商品，但代理不因此持有普通商品库存。

完整人工确认结果见 [多角色 UI 业务决策](../../../product/多角色UI业务决策-2026-08-10.md)。后续修图和代码实现必须同步遵守其中的课程购买、现金钱包、角色导航、公开编号、会员期限和代理席位规则。
