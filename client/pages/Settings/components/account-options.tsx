import { UserIcon, KeyIcon, DownloadIcon, HeartCrackIcon, ChevronRightIcon } from "lucide-react";

export function AccountOptions({
  setOption,
}: {
  setOption: (option: "info" | "pass" | "data" | "deactivation") => void;
}) {
  return (
    <>
      <div className="flex flex-col gap-2 p-4">
        <h2 className="text-2xl font-bold">Account</h2>
        <p className="text-sm text-muted-foreground">
          See information about your account, download an archive of your data, or learn about your
          account deactivation options
        </p>
      </div>
      <div className="*:hover:bg-muted">
        <button onClick={() => setOption("info")} className="w-full text-left">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <UserIcon />
              <div className="flex flex-col">
                <span>Account Information</span>
                <p className="text-sm text-muted-foreground">
                  See your account information like your phone number and email address.
                </p>
              </div>
            </div>
            <ChevronRightIcon />
          </div>
        </button>
        <button onClick={() => setOption("pass")} className="w-full text-left">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <KeyIcon />
              <div className="flex flex-col">
                <span>Change your password</span>
                <p className="text-sm text-muted-foreground">Change your password at any time.</p>
              </div>
            </div>
            <ChevronRightIcon />
          </div>
        </button>
        <button onClick={() => setOption("data")} className="w-full text-left">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <DownloadIcon />
              <div className="flex flex-col">
                <span>Download an archive of your data</span>
                <p className="text-sm text-muted-foreground">
                  Get insights into the type of information stored for your account.
                </p>
              </div>
            </div>
            <ChevronRightIcon />
          </div>
        </button>
        <button onClick={() => setOption("deactivation")} className="w-full text-left">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <HeartCrackIcon />
              <div className="flex flex-col">
                <span>Deactivate your account</span>
                <p className="text-sm text-muted-foreground">
                  Find out how you can deactivate your account.
                </p>
              </div>
            </div>
            <ChevronRightIcon />
          </div>
        </button>
      </div>
    </>
  );
}
