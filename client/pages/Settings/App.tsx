import { useState, Activity } from "react";
import { Sidebar } from "../../components/sidebar";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../../components/ui/input-group";
import { Search, ChevronLeftIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import { PasswordReset } from "./components/password-reset";
import { AccountOptions } from "./components/account-options";
import { Placeholder } from "./components/placeholder";

const tabs = [
  {
    label: "Account",
    value: "account",
    description:
      "See information about your account, download an archive of your data, or learn about your account deactivation options",
    action: "",
  },
  {
    label: "Monetization",
    value: "monetization",
    description: "Manage your monetization settings",
    action: "",
  },
  {
    label: "Premium",
    value: "premium",
    description: "Manage your premium settings",
    action: "/premium",
  },
  {
    label: "Creator Studio",
    value: "studio",
    description: "Manage your creator studio settings",
    action: "",
  },
  {
    label: "Security and account access",
    value: "security",
    description:
      "Manage your account’s security and keep track of your account’s usage including apps that you have connected to your account.",
    action: "",
  },
  {
    label: "Privacy and safety",
    value: "privacy",
    description: "Manage what information you see and share on Chitter.",
    action: "",
  },
  {
    label: "Help Center",
    value: "help",
    description: "Get help with your settings",
    action: "/",
  },
];

export default function App() {
  const [tab, setTab] = useState<(typeof tabs)[number]["value"]>(tabs[0].value);
  const [accountTab, setAccountTab] = useState<"info" | "pass" | "data" | "deactivation" | "list">(
    "list",
  );

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col-reverse border-border sm:flex-row sm:border-x">
        <Sidebar />
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden border-border sm:border-x md:flex-row">
          <div className="flex flex-col border-border max-md:border-b md:h-full md:min-h-0 md:w-full md:max-w-xs md:border-r">
            <div className="sticky top-0 z-10 hidden flex-col gap-2 bg-background/80 p-4 backdrop-blur-sm md:flex">
              <h1 className="text-2xl font-bold">Settings</h1>
              <InputGroup>
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="no-scrollbar flex w-full flex-row items-start overflow-x-auto md:min-h-0 md:flex-col md:overflow-y-auto">
              {tabs.map((t) => (
                <button
                  key={t.value}
                  onClick={() => {
                    if (t.action) {
                      window.location.href = t.action;
                    } else {
                      setTab(t.value);
                    }
                  }}
                  className={cn(
                    "shrink-0 text-left hover:bg-muted max-md:h-full md:w-full",
                    t.value === tab && "border-primary bg-muted max-md:border-b-2 md:border-r-2",
                  )}
                >
                  <div className="p-2 md:p-4">{t.label}</div>
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-4">
            {tabs.map((t) => (
              <Activity key={t.value} mode={t.value === tab ? "visible" : "hidden"}>
                {t.value === "account" ? (
                  <>
                    {["info", "pass", "data", "deactivation", "list"].map((at) => (
                      <Activity key={at} mode={at === accountTab ? "visible" : "hidden"}>
                        {at === "list" ? (
                          <AccountOptions setOption={setAccountTab} />
                        ) : at === "info" ? (
                          <div className="h-full">
                            <div className="flex items-center gap-2 p-2">
                              <Button variant="ghost" onClick={() => setAccountTab("list")}>
                                <ChevronLeftIcon />
                              </Button>
                              <h2 className="text-xl font-bold">Account Information</h2>
                            </div>
                            <Placeholder />
                          </div>
                        ) : at === "pass" ? (
                          <PasswordReset onBack={() => setAccountTab("list")} />
                        ) : at === "data" ? (
                          <div className="h-full">
                            <div className="flex items-center gap-2 p-2">
                              <Button variant="ghost" onClick={() => setAccountTab("list")}>
                                <ChevronLeftIcon />
                              </Button>
                              <h2 className="text-xl font-bold">
                                Download an archive of your data
                              </h2>
                            </div>
                            <Placeholder />
                          </div>
                        ) : at === "deactivation" ? (
                          <div className="h-full">
                            <div className="flex items-center gap-2 p-2">
                              <Button variant="ghost" onClick={() => setAccountTab("list")}>
                                <ChevronLeftIcon />
                              </Button>
                              <h2 className="text-xl font-bold">Deactivate your account</h2>
                            </div>
                            <Placeholder />
                          </div>
                        ) : null}
                      </Activity>
                    ))}
                  </>
                ) : (
                  <Placeholder />
                )}
              </Activity>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
