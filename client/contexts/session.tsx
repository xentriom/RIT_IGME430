import { createContext, useState, useEffect } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { Session } from "../types";

export type SessionContextValue =
  | {
      isLoggedIn: true;
      session: Session;
      setSession: Dispatch<SetStateAction<Session | null>>;
    }
  | {
      isLoggedIn: false;
      session: null;
      setSession: Dispatch<SetStateAction<Session | null>>;
    };

export const SessionContext = createContext<SessionContextValue>({
  isLoggedIn: false,
  session: null,
  setSession: () => undefined,
});

export default function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch("/api/session");
        if (!res.ok) return setSession(null);
        const data = await res.json();
        setSession(data);
      } catch {
        setSession(null);
      }
    };

    fetchSession();

    // Refresh session every 5 minutes
    const interval = setInterval(fetchSession, 1000 * 60 * 5);
    return () => clearInterval(interval);
  }, []);

  const value: SessionContextValue =
    session === null
      ? { isLoggedIn: false, session: null, setSession }
      : { isLoggedIn: true, session, setSession };

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}
