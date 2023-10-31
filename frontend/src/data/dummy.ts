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
        text: "How it works",
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

export const picturesLink = [
    {
        link:"/images/picture-2.png",
        alt:"Dust bin",
        className: "row-span-3 pt-[3rem]"
    },
    {
        link:"/images/picture-1.png",
        alt:"Dust bin",
        className: "self-center object-cover w-full"
    },
  
    {
        link:"/images/picture-3.png",
        alt:"Dust bin",
        className: "row-span-2 ",
    },
    {
        link:"/images/picture-4.png",
        alt:"Dust bin",
        className: "",
    },

    {
        link:"/images/picture-5.png",
        alt:"Dust bin",
        className: "",
    },
    {
        link:"/images/picture-6.png",
        alt:"Dust bin",
        className: "",
    },

]

export const howItWorksSteps = [ 
    {
        stepSVG:"/images/works-1.svg",
        title:"Log in",
        sub:"to your dashboard",
        invert: true
    },
    {
        stepSVG:"/images/works-2.svg",
        title:"Go to available task and",
        sub:"Schedule waste pick up",
        invert: false
    },
    {
        stepSVG:"/images/works-3.svg",
        title:"Complete the three simple steps process",
        sub:"1. Select waste type; 2. Enter information; 3. Select preferred date",
        invert: false
    },
    {
        stepSVG:"/images/works-4.svg",
        title:"Preview",
        sub:"your waste pick up information and schedule waste pick up",
        invert: true
    },
    {
        stepSVG:"/images/works-5.svg",
        title:"Our agent will be at your location the scheduled day to collect and credit your wallet with appropriate balance.",
        sub:"",
        invert:false,
    },
]