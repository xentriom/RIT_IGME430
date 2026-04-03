import {
  HomeIcon,
  SearchIcon,
  BellIcon,
  UserPlusIcon,
  MessageCircleIcon,
  SparklesIcon,
  BookmarkIcon,
  RocketIcon,
  CrownIcon,
  UserIcon,
  ZapIcon,
  SquareArrowOutUpRightIcon,
  SettingsIcon,
  LogInIcon,
  LogOutIcon,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "./ui/dropdown-menu";
import { useContext } from "react";
import { SessionContext } from "../contexts/session";
import { cn } from "../lib/utils";

const sidebarItems = [
  {
    icon: HomeIcon,
    label: "Home",
    href: "/",
    showOnMobile: true,
  },
  {
    icon: SearchIcon,
    label: "Explore",
    href: "/",
    showOnMobile: true,
  },
  {
    icon: BellIcon,
    label: "Notifications",
    href: "/",
    showOnMobile: false,
  },
  {
    icon: UserPlusIcon,
    label: "Follow",
    href: "/",
    showOnMobile: false,
  },
  {
    icon: MessageCircleIcon,
    label: "Chat",
    href: "/",
    showOnMobile: true,
  },
  {
    icon: SparklesIcon,
    label: "Myna",
    href: "/",
    showOnMobile: true,
  },
  {
    icon: BookmarkIcon,
    label: "Bookmarks",
    href: "/",
    showOnMobile: false,
  },
  {
    icon: RocketIcon,
    label: "Creator Studio",
    href: "/",
    showOnMobile: false,
  },
  {
    icon: CrownIcon,
    label: "Premium",
    href: "/premium",
    showOnMobile: true,
  },
  {
    icon: UserIcon,
    label: "Profile",
    href: "/profile",
    showOnMobile: true,
  },
];

export function Sidebar() {
  const { isLoggedIn, session } = useContext(SessionContext);

  return (
    <div className="flex flex-row items-center overflow-y-hidden border-border px-2 py-4 max-sm:border-t sm:flex-col">
      <div className="flex flex-row gap-4 max-sm:flex-1 sm:flex-col">
        <div className="hidden size-9 shrink-0 items-center justify-center rounded-lg bg-primary select-none sm:inline-flex">
          C
        </div>
        <div className="flex flex-row items-center gap-0.5 max-sm:w-full max-sm:justify-evenly sm:flex-col">
          {sidebarItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className={cn(!item.showOnMobile && "hidden sm:inline-flex")}
                  asChild
                >
                  <a href={item.href}>
                    <item.icon className="size-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">{item.label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
      <div className="ml-auto sm:mt-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://placehold.co/40" />
              <AvatarFallback className="uppercase">
                {isLoggedIn ? session.username.charAt(0) : "G"}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side="right"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="size-8 rounded-lg">
                  <AvatarImage src="https://placehold.co/40" />
                  <AvatarFallback className="rounded-lg">
                    {isLoggedIn ? session.displayName.charAt(0) : "G"}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {isLoggedIn ? session.displayName : "Guest User"}
                  </span>
                  <span className="truncate text-xs">
                    {isLoggedIn ? `@${session.username}` : "000000000000000000000000"}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {(!isLoggedIn || session.plan === "free") && (
              <>
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <a href="/premium">
                      <CrownIcon />
                      Upgrade to Premium
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
              </>
            )}
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ZapIcon /> Business
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SquareArrowOutUpRightIcon /> Ads
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon /> Settings & Privacy
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {isLoggedIn ? (
                <a href="/auth/logout" className="inline-flex items-center gap-2">
                  <LogOutIcon /> Log out
                </a>
              ) : (
                <a href="/auth/login" className="inline-flex items-center gap-2">
                  <LogInIcon /> Log in
                </a>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
