
export const Data = {
    menus: [
      {
        header: true,
        name: "Dashboard",
      },
      {
        dropdown: true,
        // active: true,
        name: "Dashboard",
        icon: "fas fa-tachometer-alt",
        children: [
          {
            name: "Home Dashboard",
            url: "/",
            // active: true
          },
        ],
      },
      {
        header: true,
        name: "Master",
      },
      {
        dropdown: true,
        // active: true,
        name: "Master",
        icon: "fas fa-archive",
        children: [
          {
            name: "Products",
            url: "/products",
            // active: true
          },
        ],
      },
    ],
  };