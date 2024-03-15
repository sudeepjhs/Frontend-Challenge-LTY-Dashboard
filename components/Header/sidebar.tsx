"use client";
import React, { HTMLAttributes, ReactNode } from "react";
import { Link } from "@nextui-org/react";
import Box from "../Container/Box";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { IoLogOutOutline } from "react-icons/io5";

interface SidebarLinkProps extends HTMLAttributes<HTMLUListElement> {
  children?: ReactNode;
  label: string | number;
  Icon: JSX.Element;
  href?: string;
  isActive: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  label,
  Icon,
  isActive,
  href,
}) => {
  return (
    <li
      className={clsx(
        !isActive && "hover:bg-secondary hover:text-white",
        isActive && "text-white bg-secondary"
      )}
    >
      <Link
        href={href}
        as={NextLink}
        className={clsx(
          "py-3 flex hover:text-white w-full h-full",
          !isActive && "text-black dark:text-white",
          isActive && "text-white font-medium"
        )}
      >
        <div className="w-1/4 flex flex-row-reverse px-2">{Icon}</div>
        <div className="mx-1">{label}</div>
      </Link>
    </li>
  );
};

export const Sidebar = () => {
  const pathname = usePathname() || null;
  return (
    <Box className="h-screen flex flex-col light:bg-white">
      {/* Sidebar content */}
      <div className="text-xl flex-shrink-0 text-center py-5 font-bold text-secondary tracking-wide">
        LYT
      </div>
      <ul className="flex flex-col gap-2 flex-grow">
        {siteConfig.sidebarItems.map(({ label, href, Icon }) => {
          return (
            <SidebarLink
              key={`${href}-${label}`}
              label={label}
              Icon={<Icon size={"20px"} />}
              isActive={href === pathname}
              href={href}
            />
          );
        })}
      </ul>
      <div className="text-secondary flex flex-shrink-0 py-3 hover:bg-secondary hover:text-white">
        <div className="w-1/4 flex flex-row-reverse px-2">
          <IoLogOutOutline size={"20px"} />
        </div>
        <div className="mx-1 text-center">Log-out</div>
      </div>
    </Box>
  );
};
