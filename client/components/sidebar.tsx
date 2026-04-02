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

const sidebarItems = [
  {
    icon: HomeIcon,
    label: "Home",
    href: "/",
  },
  {
    icon: SearchIcon,
    label: "Explore",
    href: "/",
  },
  {
    icon: BellIcon,
    label: "Notifications",
    href: "/",
  },
  {
    icon: UserPlusIcon,
    label: "Follow",
    href: "/",
  },
  {
    icon: MessageCircleIcon,
    label: "Chat",
    href: "/",
  },
  {
    icon: SparklesIcon,
    label: "Myna",
    href: "/",
  },
  {
    icon: BookmarkIcon,
    label: "Bookmarks",
    href: "/",
  },
  {
    icon: RocketIcon,
    label: "Creator Studio",
    href: "/",
  },
  {
    icon: CrownIcon,
    label: "Premium",
    href: "/premium",
  },
  {
    icon: UserIcon,
    label: "Profile",
    href: "/profile",
  },
];

export function Sidebar() {
  const { isLoggedIn, session } = useContext(SessionContext);

  return (
    <div className="flex flex-col items-center overflow-y-hidden px-2 py-4">
      <div className="flex flex-col gap-4">
        <div className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary select-none">
          C
        </div>
        <div className="flex flex-col gap-0.5">
          {sidebarItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon-lg" asChild>
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
      <div className="mt-auto">
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
