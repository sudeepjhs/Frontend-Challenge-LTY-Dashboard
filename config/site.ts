export type SiteConfig = typeof siteConfig;
import { LuBarChart2 } from "react-icons/lu";
import { PiUsersThree } from "react-icons/pi";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import {
  MdOutlinePermMedia,
  MdOutlineContactSupport,
  MdDashboard,
} from "react-icons/md";

export const siteConfig = {
  name: "LYT",
  description: "Make beautiful websites regardless of your design experience.",
  sidebarItems: [
    {
      label: "Dashboard",
      href: "/",
      Icon: MdDashboard,
    },
    {
      label: "Analytics",
      href: "/analytics",
      Icon: LuBarChart2,
    },
    {
      label: "Communities",
      href: "/communities",
      Icon: PiUsersThree,
    },
    {
      label: "Notifications",
      href: "/notifications",
      Icon: IoNotificationsOutline,
    },
    {
      label: "Media",
      href: "/media",
      Icon: MdOutlinePermMedia,
    },
    {
      label: "Support",
      href: "/support",
      Icon: MdOutlineContactSupport,
    },
    {
      label: "Settings",
      href: "/settings",
      Icon: IoSettingsOutline,
    },
  ],
};
