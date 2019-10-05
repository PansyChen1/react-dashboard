const menuList = [
  {
    title: "首页",
    key: "/home",
    icon: "home",
  },
  {
    title: "商品",
    key: "/category",
    icon: "shop",
    children : [
      {
        title: "品类管理",
        key: "/category",
        icon: "bars",
      },
      {
        title: "商品管理",
        key: "/product",
        icon: "shopping",
      },
    ]
  },
  {
    title: "用户管理",
    key: "/user",
    icon: "user",
  },
  {
    title: "角色管理",
    key: "/role",
    icon: "team",
  },
  {
    title: "图形图表",
    key: "/area-chart",
    icon: "team",
    children: [
      {
        title: "折线图",
        key: "/line-chart",
        icon: "line-chart",
      },
      {
        title: "柱状图",
        key: "/bar-chart",
        icon: "bar-chart",
      },
      {
        title: "饼图",
        key: "/pie-chart",
        icon: "pie-chart",
      },
    ]
  },
];
 export default menuList;