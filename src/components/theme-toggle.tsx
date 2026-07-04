"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch: theme is only known on the client.
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="glass inline-flex size-10 cursor-pointer items-center justify-center rounded-full text-muted-fg transition-colors duration-200 hover:text-accent"
    >
      {mounted ? (
        isDark ? <Sun className="size-4.5" /> : <Moon className="size-4.5" />
      ) : (
        <span className="size-4.5" />
      )}
    </button>
  );
}
