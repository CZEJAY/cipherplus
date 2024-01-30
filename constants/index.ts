import { DivideCircleIcon, Info, LayoutDashboard, LucideTrendingUp, Package, UsersRoundIcon } from "lucide-react";

export const Links = [
    {
        icon: LayoutDashboard,
        pathname: "/ui",
        label: "Dashboard"
    },
    {
        icon: LucideTrendingUp,
        pathname: "/ui/stats",
        label: "Stats"
    },
    {
        icon: UsersRoundIcon,
        pathname: "/ui/users",
        label: "users"
    },
    {
        icon: Package,
        pathname: "/ui/package",
        label: "Packages"
    },
    {
        icon: DivideCircleIcon,
        pathname: "/ui/revenue",
        label: "Revenue"
    },
    {
        icon: Info,
        pathname: "/ui/infomations",
        label: "infomations"
    },
] as const