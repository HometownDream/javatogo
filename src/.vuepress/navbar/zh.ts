import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "go", icon: "code", link: "/go/" },
  { text: "java", icon: "code", link: "/java/" },
  { text: "代码笔记", icon: "code", link: "/codenotes/" },
  { text: "浮生杂记", icon: "note", link: "/floatinglife/" },
  { text: "开源项目", icon: "free", link: "/projects/" },
  { text: "博客主页", icon: "blog", link: "/blog/" },
  { text: "快速导航", icon: "navigation", link: "/quicknav/" },
  { text: "英语角", icon: "navigation", link: "/engcorner/" },
  { text: "run", icon: "navigation", link: "/run/" },
  {
    text: "资源宝库",
    icon: "advance",
    prefix: "/resources/",
    children: [
      {
        text: "书籍资源",
        icon: "animation",
        link: "books/",
      },
      {
        text: "影音资源",
        icon: "play",
        link: "videos/",
      },
    ],
  },
]);
