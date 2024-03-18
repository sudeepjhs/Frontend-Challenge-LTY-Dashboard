export type SiteConfig = typeof siteConfig;
import {
  FluentPeopleCommunity16Regular,
  IcBaselineDashboard,
  UimAnalytics,
} from "@/components/icons";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineContactSupport, MdOutlinePermMedia } from "react-icons/md";

export const siteConfig = {
  name: "LYT",
  description: "Make beautiful websites regardless of your design experience.",
  sidebarItems: [
    {
      label: "Dashboard",
      href: "/",
      Icon: IcBaselineDashboard,
    },
    {
      label: "Analytics",
      href: "/analytics",
      Icon: UimAnalytics,
    },
    {
      label: "Communities",
      href: "/communities",
      Icon: FluentPeopleCommunity16Regular,
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
