# Design Lab comparison

| 对比维度 | A — Editorial | B — Systems | C — Cinematic | D — Minimal |
|---|---|---|---|---|
| 核心概念 | 工程期刊 | 交付与系统关系 | 连续案例叙事 | 技术判断档案 |
| 第一印象 | 沉稳、出版感 | 实践现场、可追溯 | 开阔、强记忆 | 直接、克制 |
| 信息密度 | 中高 | 高 | 低到中 | 低 |
| Hero | 刊头＋旁注＋衬线主张 | 主张＋关系节点 | 全屏超大主张 | 留白＋精确角色 |
| 项目表达方式 | 精选档案、旁注、正文 | 可展开记录＋决策检查面板 | 大编号、原始图像、连续章节 | 证据列表、按需查看原始图 |
| Blog 表达方式 | 双栏编辑预览＋阅读弹层 | 紧凑记录＋阅读弹层 | 大标题文章＋阅读弹层 | 单列阅读索引＋阅读弹层 |
| 动效特点 | 刊物遮罩、段落进入 | 节点顺序装配、证据切换 | 幕布开场、章节和图像揭示 | 小位移归位、克制揭示 |
| 最适合的受众 | 工程/产品负责人、深读者 | FDE 团队、工程负责人 | 创业团队、产品合作伙伴 | 招聘经理、潜在客户 |
| 主要优势 | 长篇案例与技术 Blog 承载最好 | 约束、系统、交付关系最明确 | 最容易形成视觉记忆 | 快速判断职责与能力 |
| 潜在风险 | 内容质量要求高 | 需避免逐渐堆成后台 UI | 篇幅较长，须限制动效 | 需要靠具体案例维持辨识度 |

推荐 A 作为优先评估方向：目前最强素材是 NewU 的约束、协作与技术取舍，A 能承载完整推理，也适合长期增加技术文章。B 最贴近 FDE 现场感；A 最适合长篇 Case Study 和技术 Blog；C 最容易形成视觉辨识度；D 最方便招聘方快速阅读。

可供选择后组合：A 的正文/注释 + B 的决策面板；D 的快速入口 + A 的案例正文；C 的章节揭示用于 A 的精选案例开场。当前四版保持独立，尚未组合或选择。

## Run
From repository root:
```
pnpm dev --port 5173
pnpm typecheck:lab
pnpm build:lab
pnpm exec vite preview --outDir dist-lab --port 4173
```
Design Lab: http://127.0.0.1:5173/design-lab
Routes: /design-lab/editorial, /design-lab/systems, /design-lab/cinematic, /design-lab/minimal.
The separate production output is dist-lab, with physical index.html files for all five routes. This does not deploy the portfolio. Existing general build is not the lab build; it still references a missing App.tsx from pre-existing work.

## Interaction and content
Switch directions with the fixed top bar. Expand project rows. Open Writing previews and close with Escape. In B, inspect three case tabs using mouse or arrow keys. Replay opening from each page footer. All demos use the same project/profile/article/experience sources. Missing facts and historical status are explicitly labeled.

Choose A, B, C, D, a main direction with selected elements from others, or request adjustments to one demo. Formal development is paused until that selection.
