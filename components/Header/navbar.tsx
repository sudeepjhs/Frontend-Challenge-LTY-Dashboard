import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User,
} from "@nextui-org/react";
import { IoLogOutOutline, IoSearchOutline } from "react-icons/io5";
import { siteConfig } from "@/config/site";
import { SidebarLink } from "./sidebar";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100 rounded-sm",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search"
      startContent={
        <IoSearchOutline className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar
      maxWidth="2xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <p>Metrics looking good, Snow!</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="center"
      >
        <NavbarItem className="hidden md:flex">{searchInput}</NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <Popover placement="bottom">
            <PopoverTrigger>
              <User
                name="Snow Olohijere"
                description="uch231@gmail.com"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
                className="cursor-pointer"
              />
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2 w-full">
                <ThemeSwitch />
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        {searchInput}
        <ul className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.sidebarItems.map(({ label, href, Icon }, i) => {
            return (
              <SidebarLink
                key={`${href}-${label}`}
                label={label}
                Icon={<Icon />}
                isActive={i == 0}   //{href === pathname}
                href={href}
              />
            );
          })}
        </ul>
        <div className="text-secondary flex flex-shrink-0 py-3 hover:bg-secondary hover:text-white">
          <div className="w-1/4 flex flex-row-reverse px-2">
            <IoLogOutOutline size={24} />
          </div>
          <div className="mx-1 text-center text-xl">Log-out</div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
