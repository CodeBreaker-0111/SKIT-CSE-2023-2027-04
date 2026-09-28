"use client"

import Link from "next/link"
import { Menu, X, Languages } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"
import { doc, updateDoc } from "firebase/firestore"

import { Button } from "@/components/ui/button"
import { NAV_LINKS, SITE } from "@/constants"
import { cn } from "@/lib/utils"
import { AuthControls } from "@/features/auth/components/auth-controls"
import { useAuth } from "@/features/auth/hooks/use-auth"
import { db } from "@/firebase"

import Image from "next/image";

function LanguageSelector() {
  const { i18n } = useTranslation()
  const { user } = useAuth()

  const handleLanguageChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value
    i18n.changeLanguage(newLang)
    if (user) {
      const userRef = doc(db, "users", user.uid)
      await updateDoc(userRef, { preferredLanguage: newLang })
    } else {
      localStorage.setItem("preferredLanguage", newLang)
    }
  }

  return (
    <div className="relative flex items-center gap-1 px-2.5 py-1 text-xs text-foreground focus-within:ring-2 focus-within:ring-emerald-500/30 rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md shrink-0">
      <Languages className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
      <select
        value={i18n.language}
        onChange={handleLanguageChange}
        className="bg-transparent font-medium border-none outline-none cursor-pointer pr-1 py-0.5 text-xs focus:ring-0"
        aria-label="Select Language"
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="gu">ગુજરાતી</option>
        <option value="mr">मराठी</option>
        <option value="bn">বাংলা</option>
        <option value="ta">தமிழ்</option>
        <option value="te">తెలుగు</option>
        <option value="kn">ಕನ್ನಡ</option>
        <option value="ml">മലയാളം</option>
      </select>
    </div>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation()
  const { isAdmin } = useAuth()

  const getTranslationKey = (label: string) => {
    switch (label) {
      case "Home": return "navbar.home"
      case "Report Issue": return "navbar.report"
      case "Live Map": return "navbar.map"
      case "Dashboard": return "navbar.dashboard"
      case "My Reports": return "navbar.myReports"
      default: return ""
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="flex items-center transition-transform duration-300 hover:scale-[1.02]"
        >
          <Image
            src="/logo.png"
            alt="NagarSeva"
            width={320}
            height={90}
            priority
            className="h-18 w-auto md:h-22 lg:h-19"
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            const translationKey = getTranslationKey(link.label)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-muted text-foreground font-semibold"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {translationKey ? t(translationKey) : link.label}
                </Link>
              </li>
            )
          })}
          {isAdmin && (
            <li>
              <Link
                href="/admin"
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname.startsWith("/admin")
                    ? "bg-muted text-foreground font-semibold"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {t("navbar.adminPanel", { defaultValue: "Admin Panel" })}
              </Link>
            </li>
          )}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSelector />
          <AuthControls />
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border/60 md:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            const translationKey = getTranslationKey(link.label)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-muted text-foreground font-semibold"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {translationKey ? t(translationKey) : link.label}
                </Link>
              </li>
            )
          })}
          {isAdmin && (
            <li>
              <Link
                href="/admin"
                className={cn(
                  "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname.startsWith("/admin")
                    ? "bg-muted text-foreground font-semibold"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {t("navbar.adminPanel", { defaultValue: "Admin Panel" })}
              </Link>
            </li>
          )}
          <li className="pt-2 flex flex-col gap-3">
            <div className="flex items-center justify-between border-t border-border/40 pt-3 pb-1">
              <span className="text-xs text-muted-foreground font-medium">Language / भाषा</span>
              <LanguageSelector />
            </div>
            <AuthControls />
          </li>
        </ul>
      </div>
    </header>
  )
}

