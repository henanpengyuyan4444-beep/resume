export const siteConfig = {
  // 基本信息
  name: "张雨",
  title: "全栈开发工程师 · AI 应用方向",
  description:
    "张雨的简历：全栈开发工程师，做企业级 AI 应用落地。Python/FastAPI、Go、Vue3/React、Flutter 与 LLM 工程化。",
  accentColor: "#4F46E5",
  location: "北京",
  phone: "16637433317",
  status: "2026 届 · 随时到岗 · 期望 10–15K",

  // 社交链接：有的填，没有的留空/删掉即可
  social: {
    email: "2693825087@qq.com",
    github: "",
    linkedin: "",
    twitter: "",
  },

  aboutMe:
    "2026 届本科，智能科学与技术专业（GPA 3.4/4，专业 Top 5%）。半年多在衔远科技做企业级 AI 应用：工作台的后端与 Flutter 客户端接入、Go IAM 的租户授权、AI 内容生成系统的管理台与 H5。我更在意那些“偶发才出现”的问题——断线重连、重复事件、任务终态不一致，习惯在异步任务和权限边界上补恢复测试。",

  skills: [
    "Python",
    "FastAPI",
    "Go / Gin",
    "Vue 3 / TypeScript",
    "React",
    "Flutter",
    "PostgreSQL",
    "Redis",
    "Docker / K8s",
    "LLM 应用",
  ],

  projects: [
    {
      name: "CIP / Leadeep 企业 AI 工作台",
      description:
        "面向企业 AI 办公场景的工作台：流式对话、历史消息、成果附件，Web 与移动端共用一套任务状态。针对断线、应用重进和重复事件做 SQLite 持久化、幂等去重与增量恢复；用 Redis 锁协调多租户 Token 并发刷新。",
      link: "",
      skills: ["Python", "FastAPI", "Flutter", "SQLite", "Redis"],
    },
    {
      name: "大观 · 身份权限与运营服务",
      description:
        "Go IAM 与 Python 服务的租户授权推送：任务快照 + 幂等标识 + 事务 + 持久化回执，处理重复请求与未知结果重放；组织树从逐节点读取改为一次管理关系查询 + 内存遍历，权限查询按每批 100 个组织执行，配有界并发与超时。",
      link: "",
      skills: ["Go", "Gin", "PostgreSQL", "Redis"],
    },
    {
      name: "飞鹤 KOS AI 内容生成与运营系统",
      description:
        "品牌内容运营系统：Vue 3/TypeScript 管理台与消费者 H5，串联活动配置、用户问答、AI 导写与结果展示。按用户答案生成 3 种风格笔记草稿，加入 LLM 结构化输出校验、重试与降级；评论生成是长链路异步任务，用 Redis 锁与恢复接口兜住重复执行。",
      link: "",
      skills: ["Vue 3", "TypeScript", "FastAPI", "Redis", "Kubernetes"],
    },
    {
      name: "《暴走拖拉机》游戏玩法",
      description:
        "用节点图开发地图玩法，主导核心机制实现与手感调优：拆出可复用的行为模块，按周活与留存反馈调参。",
      link: "",
      skills: ["节点图", "玩法设计", "数据调优"],
    },
  ],

  experience: [
    {
      company: "北京衔远科技有限公司",
      title: "全栈开发工程师",
      dateRange: "2026.07 — 2026.10",
      bullets: [
        "CIP / Leadeep 企业 AI 工作台：Python/FastAPI 后端 + Flutter 客户端接入，支持流式对话、历史消息与成果附件，实现 Web 与移动端消息及任务状态同步。",
        "针对断线、应用重进与重复事件，做 SQLite 持久化、幂等去重与增量恢复；统一任务终止/重试，收敛历史与实时消息的终态不一致。",
        "大观身份权限与运营服务：租户授权推送用任务快照 + 幂等标识 + 事务 + 持久化回执处理重放与未知结果；组织树改为一次管理关系查询 + 内存遍历。",
      ],
    },
    {
      company: "北京衔远科技有限公司",
      title: "全栈开发实习生",
      dateRange: "2026.04 — 2026.06",
      bullets: [
        "飞鹤 KOS：Vue 3/TypeScript 管理台与消费者 H5，串联活动配置、用户问答、AI 导写与结果展示，接入登录与 RBAC 菜单权限。",
        "FastAPI 活动与会话接口，按用户答案生成 3 种风格笔记草稿；加入 LLM 结构化输出校验、重试与降级，支持历史轮次与重新生成。",
        "评论生成异步任务串联链接解析、内容缓存、知识库匹配与第三方回调；完成 Docker 镜像构建、Harbor 推送与 Kubernetes 测试环境联调。",
      ],
    },
    {
      company: "星域文化传媒有限公司",
      title: "游戏逻辑开发实习生",
      dateRange: "2025.09 — 2026.01",
      bullets: [
        "通过节点图开发游戏玩法，主导《暴走拖拉机》地图逻辑，周活 2000+，被评为 A 级标杆地图。",
        "从“数值怎么调才有手感”开始，第一次系统性地做可玩性验证与迭代。",
      ],
    },
  ],

  education: [
    {
      school: "福建理工大学",
      degree: "智能科学与技术 · 本科",
      dateRange: "2022.09 — 2026.07",
      achievements: [
        "GPA 3.4/4，专业 Top 5%",
        "国家奖学金",
        "全国大学生数学竞赛 · 福建省一等奖",
      ],
    },
  ],
};
