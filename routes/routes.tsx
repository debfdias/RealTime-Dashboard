import {
  LuBarChartBig,
  LuLayout,
  LuLayoutDashboard,
  LuSettings,
  LuTableProperties,
  LuUsers,
} from "react-icons/lu"

const appRoutes = [
  {
    name: "Dashboard",
    layout: "/dashboard",
    path: "dashboard",
    icon: <LuLayoutDashboard className="h-6 w-6" />,
  },
  {
    name: "Users",
    layout: "/users",
    path: "users",
    icon: <LuUsers className="h-6 w-6" />,
  },
  {
    name: "Charts",
    layout: "/charts",
    path: "charts",
    icon: <LuBarChartBig className="h-6 w-6" />,
  },
  {
    name: "Tables",
    layout: "/tables",
    path: "tables",
    icon: <LuTableProperties className="h-6 w-6" />,
  },
  {
    name: "Layout",
    layout: "/layout",
    path: "layout",
    icon: <LuLayout className="h-6 w-6" />,
  },
  {
    name: "Settings",
    layout: "/settings",
    path: "settings",
    icon: <LuSettings className="h-6 w-6" />,
  },
]

export default appRoutes
