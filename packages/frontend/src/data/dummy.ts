import DashboardIcon from "@/components/assets/nav/DashboardActive"
import DashboardInactive from "@/components/assets/nav/DashboardInactive"
import NotificationInactive from "@/components/assets/nav/NotificationsInactive"
import TransactionInactive from "@/components/assets/nav/TransactionInactive"
import WasteActive from "@/components/assets/nav/WasteActive"
import WasteInactive from "@/components/assets/nav/WasteInActive"

export const navBarLinks = [
    {
        text: "Home",
        link: "/"
    },
    {
        text: "About us",
        link: "#"
    },
    {
        text: "Testimonials ",
        link: "#"
    }
]

export const inAppNavBarLinks = [
    {
        text: "Dashboard",
        link: "/earn/dashboard",
        ActiveIcon: DashboardIcon,
        InActiveIcon: DashboardInactive
    },
    {
        text: "Waste management",
        link: "/earn/waste-management",
        ActiveIcon: WasteActive,
        InActiveIcon: WasteInactive
    },
    {
        text: "My Transactions",
        link: "/earn/my-transactions",
        ActiveIcon: TransactionInactive,
        InActiveIcon: TransactionInactive
    },
    {
        text: "Notifications",
        link: "/earn/notifications",
        ActiveIcon: NotificationInactive,
        InActiveIcon: NotificationInactive
    },
]