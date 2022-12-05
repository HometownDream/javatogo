import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // 代码笔记的侧边栏
  "/codenotes/": [
    {
      text: "Java核心",
      icon: "java",
      collapsible: true,
      prefix: "/codenotes/javacore/",
      children: [
        {
          text: "Java基础-面向对象",
          icon: "write",
          link: "Java基础-面向对象.md",
        },
        {
          text: "Java基础-泛型机制",
          icon: "write",
          link: "Java基础-泛型机制.md",
        },
        {
          text: "Java基础-注解机制",
          icon: "write",
          link: "Java基础-注解机制.md",
        },
        {
          text: "Java基础-异常机制",
          icon: "write",
          link: "Java基础-异常机制.md",
        },
        {
          text: "Java基础-反射机制",
          icon: "write",
          link: "Java基础-反射机制.md",
        },
        {
          text: "Java集合-类关系图",
          icon: "write",
          link: "Java集合-类关系图.md",
        },
        {
          text: "Java集合-ArrayList",
          icon: "write",
          link: "Java集合-ArrayList.md",
        },
        {
          text: "Java8新特性",
          icon: "write",
          link: "Java8新特性.md",
        },
        {
          text: "Java中的SPI机制",
          icon: "write",
          link: "Java中的SPI机制.md",
        },
      ],
    },
    {
      text: "Java虚拟机",
      icon: "engine",
      collapsible: true,
      prefix: "/codenotes/jvm/",
      children: [""],
    },
    {
      text: "企业级框架",
      icon: "frame",
      collapsible: true,
      prefix: "/codenotes/framework/",
      children: [
        {
          text: "Netty",
          icon: "network",
          collapsible: true,
          prefix: "netty/",
          children: ["Netty核心.md", "Netty高级.md"],
        },
        {
          text: "Electron核心",
          icon: "write",
          link: "Electron核心.md",
        },
      ],
    },
    {
      text: "算法和数据结构",
      icon: "ability",
      collapsible: true,
      prefix: "/codenotes/algdata/",
      children: [
        {
          text: "算法小抄",
          icon: "like",
          collapsible: true,
          prefix: "lbld/",
          children: [
            "算法小抄核心套路.md",
            "算法小抄数学运算.md",
            "算法小抄动态规划.md",
            "算法小抄数据结构.md",
            "算法小抄算法思维.md",
            "算法小抄高频面试.md",
          ],
        },
      ],
    },
    {
      text: "数据库",
      icon: "mysql",
      collapsible: true,
      prefix: "/codenotes/database/",
      children: [""],
    },
    {
      text: "开发必备",
      icon: "tool",
      collapsible: true,
      prefix: "/codenotes/devtool/",
      children: [""],
    },
    {
      text: "在线技术文档",
      icon: "read",
      collapsible: true,
      prefix: "/codenotes/cookbook/",
      children: [""],
    },
  ],

  // 浮生杂记的侧边栏
  "/floatinglife/": [
    {
      text: "小镇美食家",
      icon: "linter",
      collapsible: true,
      link: "/floatinglife/cooker/",
    },
    {
      text: "小镇技术宅",
      icon: "computer",
      collapsible: true,
      link: "/floatinglife/iter/",
    },
    {
      text: "小镇运动狂",
      icon: "strong",
      collapsible: true,
      link: "/floatinglife/sporter/",
    },
    {
      text: "小镇思考者",
      icon: "style",
      collapsible: true,
      link: "/floatinglife/thinker/",
    },
  ],

  // 开源项目的侧边栏
  "/projects/": [
    {
      text: "技术教程",
      icon: "guide",
      collapsible: true,
      link: "/projects/techguide/",
    },
    {
      text: "实战项目",
      icon: "workingDirectory",
      collapsible: true,
      link: "/projects/pracprojects/",
    },
    {
      text: "系统设计",
      icon: "shell",
      collapsible: true,
      link: "/projects/systemdesign/",
    },
    {
      text: "工具类库",
      icon: "module",
      collapsible: true,
      link: "/projects/toollibrary/",
    },
  ],
});
