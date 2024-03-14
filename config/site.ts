export type SiteConfig = typeof siteConfig;
import { LuBarChart2 } from 'react-icons/lu';
import { PiUsersThree } from "react-icons/pi";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePermMedia, MdOutlineContactSupport, MdDashboard } from "react-icons/md";

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	sidebarItems: [
		{
			label: "Dashboard",
			href: "/",
			Icon: MdDashboard
		},
		{
			label: "Analytics",
			href: "/analytics",
			Icon: LuBarChart2
		},
		{
			label: "Communities",
			href: "/communities",
			Icon: PiUsersThree
		},
		{
			label: "Notifications",
			href: "/notifications",
			Icon: IoNotificationsOutline
		},
		{
			label: "Media",
			href: "/media",
			Icon: MdOutlinePermMedia
		},
		{
			label: "Support",
			href: "/support",
			Icon: MdOutlineContactSupport
		},
		{
			label: "Settings",
			href: "/settings",
			Icon: IoSettingsOutline
		}
	],
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Docs",
			href: "/docs",
		},
		{
			label: "Pricing",
			href: "/pricing",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};
