"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"

import { FOOTER_LINKS } from "@/constants"

export function Footer() {
  const year = new Date().getFullYear()
  const { t } = useTranslation()

  const techItems = [
    { id: "nextjs", label: t("footer.tech.items.nextjs", "Next.js 16") },
    { id: "react", label: t("footer.tech.items.react", "React + TypeScript") },
    { id: "firebase", label: t("footer.tech.items.firebase", "Firebase + Firestore") },
    { id: "ai", label: t("footer.tech.items.ai", "Google AI Studio") },
    { id: "maps", label: t("footer.tech.items.maps", "OpenStreetMap + Leaflet") },
    { id: "tailwind", label: t("footer.tech.items.tailwind", "Tailwind CSS") },
  ]

  const getTranslationKey = (label: string) => {
    switch (label) {
      case "Privacy":
        return "footer.privacy"
      case "Terms":
        return "footer.terms"
      case "Contact":
        return "footer.contact"
      default:
        return ""
    }
  }

  return (
    <footer className="mt-auto border-t border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* About */}
          <div>
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="NagarSeva"
                width={320}
                height={90}
                className="h-18 w-auto md:h-22 lg:h-32"
              />
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {t(
                "footer.about.desc",
                "NagarSeva is an AI-assisted civic reporting platform that empowers citizens and local authorities to collaborate through transparent issue reporting, multilingual accessibility, and real-time progress tracking."
              )}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900">
              {t("footer.tech.title", "Technology Stack")}
            </h3>

            <ul className="space-y-2 text-sm text-slate-600">
              {techItems.map((tech) => (
                <li
                  key={tech.id}
                  className="block transition-all duration-200 hover:translate-x-1 hover:text-emerald-600"
                >
                  {tech.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900">
              {t("footer.quick_links.title", "Quick Links")}
            </h3>

            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => {
                const translationKey = getTranslationKey(link.label)

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-emerald-600"
                    >
                      {translationKey ? t(translationKey) : link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Project Team */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900">
              Project Team
            </h3>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4">

              <div className="space-y-3">

                {/* Aaditya Bansal */}
                <a
                  href="https://www.linkedin.com/in/aadityabansal111/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-white/70 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    AB
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900">
                      Aaditya Bansal
                    </p>
                    <p className="text-xs text-slate-500">
                      Team Lead · AI/ML & GIS
                    </p>
                  </div>

                  <span className="ml-auto shrink-0 text-xs font-medium text-emerald-600">
                    LinkedIn ↗
                  </span>
                </a>

                {/* Anmol Gupta */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-white/70 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    AG
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900">
                      Anmol Gupta
                    </p>
                    <p className="text-xs text-slate-500">
                      Backend & Database
                    </p>
                  </div>

                  <span className="ml-auto shrink-0 text-xs font-medium text-emerald-600">
                    LinkedIn ↗
                  </span>
                </a>

                {/* Anshul Nagar */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-white/70 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    AN
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900">
                      Anshul Nagar
                    </p>
                    <p className="text-xs text-slate-500">
                      Frontend & UI
                    </p>
                  </div>

                  <span className="ml-auto shrink-0 text-xs font-medium text-emerald-600">
                    LinkedIn ↗
                  </span>
                </a>

                {/* Anushka Agrawal */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-white/70 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    AA
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900">
                      Anushka Agrawal
                    </p>
                    <p className="text-xs text-slate-500">
                      Testing & Integration
                    </p>
                  </div>

                  <span className="ml-auto shrink-0 text-xs font-medium text-emerald-600">
                    LinkedIn ↗
                  </span>
                </a>

              </div>

              {/* Project Info */}
              <div className="mt-4 border-t border-emerald-200 pt-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  Project
                </p>

                <p className="mt-2 text-sm font-semibold text-slate-900">
                  SKIT CSE Team #04
                </p>

                <a
                  href="https://github.com/CodeBreaker-0111/SKIT-CSE-2023-2027-04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
                >
                  GitHub Repository →
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">

          <p className="text-sm text-slate-500">
            {t("footer.copyright", { year })}
          </p>

          <span className="rounded-full bg-slate-200 px-4 py-1 text-xs font-medium text-slate-700">
            {t(
              "footer.challenge_tag",
              "Built with ❤️ for Bhartiya Janta"
            )}
          </span>

        </div>

      </div>
    </footer>
  )
}