import { useEffect, useState, useCallback } from "react";

const KEY = "rz_logged_in";

function read() {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

export function useFakeAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(read());
    const onStorage = (e) => {
      if (!e || e.key === KEY) setIsLoggedIn(read());
    };
    const onCustom = () => setIsLoggedIn(read());
    window.addEventListener("storage", onStorage);
    window.addEventListener("rz-auth-change", onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("rz-auth-change", onCustom);
    };
  }, []);

  const login = useCallback(() => {
    try {
      window.localStorage.setItem(KEY, "1");
    } catch {}
    window.dispatchEvent(new Event("rz-auth-change"));
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    try {
      window.localStorage.removeItem(KEY);
    } catch {}
    window.dispatchEvent(new Event("rz-auth-change"));
    setIsLoggedIn(false);
  }, []);

  return { isLoggedIn, login, logout };
}
