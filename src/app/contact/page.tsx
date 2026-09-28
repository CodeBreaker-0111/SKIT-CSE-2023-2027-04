"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"
import {
  ChevronDown,
  Globe,
  Sparkles,
  UsersRound,
} from "lucide-react"

import { PageContainer } from "@/components/layout/page-container"
import { ContactForm } from "./contact-form"

function FaqItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left text-lg font-semibold text-slate-900 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>{question}</span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-4 shrink-0 text-slate-400"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ContactPage() {
  const { t } = useTranslation()

  const faqs = [
    {
      question: t(
        "contact.faq.q1",
        "Is NagarSeva an official municipal service?"
      ),
      answer: t(
        "contact.faq.a1",
        "No. NagarSeva is currently a civic technology project and workflow demonstration unless adopted by a participating authority."
      ),
    },
    {
      question: t(
        "contact.faq.q2",
        "Does the contact form send messages?"
      ),
      answer: t(
        "contact.faq.a2",
        "No. This page currently demonstrates the user interface only. A production backend can be connected later."
      ),
    },
    {
      question: t(
        "contact.faq.q3",
        "Are homepage statistics real?"
      ),
      answer: t(
        "contact.faq.a3",
        "No. All dashboards, AI-generated insights and impact metrics are illustrative demonstrations and are labelled accordingly."
      ),
    },
  ] as const

  return (
    <main className="bg-gradient-to-b from-white via-emerald-50/20 to-slate-50 py-6 md:py-6 lg:py-0">
      <PageContainer size="default">

        {/* Page Header */}
        <header className="mx-auto max-w-3xl py-2 md:py-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
            {t("contact.eyebrow", "Project Contact")}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            {t(
              "contact.title",
              "Let's Build More Responsive Communities"
            )}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {t(
              "contact.description",
              "NagarSeva explores how AI-assisted civic reporting helps residents and local authorities collaborate from issue reporting through transparent resolution."
            )}
          </p>
        </header>

        {/* Main Contact Layout */}
        <div className="mt-10 grid grid-cols-1 items-start gap-8 md:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT SIDE */}
          <aside className="space-y-6">

            {/* About NagarSeva Card */}
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <Sparkles className="h-5 w-5" />
              </div>

              <h2 className="mt-4 text-xl font-semibold text-slate-900">
                About NagarSeva
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                NagarSeva is an AI-powered civic issue reporting platform
                designed to connect citizens with municipal authorities through
                transparent, accessible and trackable civic workflows.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  AI Powered
                </span>

                <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  GIS Enabled
                </span>

                <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Civic Technology
                </span>
              </div>
            </div>

            {/* Project Developer Card */}
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <UsersRound className="h-5 w-5" />
              </div>

              <h2 className="mt-4 text-xl font-semibold text-slate-900">
                Project Developer
              </h2>

              <div className="mt-4 space-y-1 text-sm text-slate-600">
                <p className="text-base font-bold text-slate-900">
                  Aaditya Bansal
                </p>

                <p className="font-medium text-slate-700">
                  B.Tech Computer Science & Engineering
                </p>

                <p className="text-slate-500">
                  SKIT Jaipur
                </p>

                <div className="mt-3">
                  <span className="inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                    AI/ML • GIS • Web Development • Civic Technology
                  </span>
                </div>

                <a
                  href="https://www.linkedin.com/in/aadityabansal111/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-medium text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  LinkedIn Profile ↗
                </a>
              </div>
            </div>

            {/* Connect Card */}
            <div
              id="project-links"
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                Connect with the Team
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Explore the project, connect with the team and follow our work
                in AI-powered civic technology.
              </p>

              <div className="mt-5 space-y-4">

                {/* GitHub */}
                <a
                  href="https://github.com/CodeBreaker-0111/SKIT-CSE-2023-2027-04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 transition-colors hover:text-emerald-700"
                >
                  <Globe className="h-5 w-5 text-emerald-700" />

                  <span className="text-sm font-medium underline decoration-slate-300 hover:decoration-emerald-500 sm:text-base">
                    GitHub Repository
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/aadityabansal111/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 transition-colors hover:text-emerald-700"
                >
                  <UsersRound className="h-5 w-5 text-emerald-700" />

                  <span className="text-sm font-medium underline decoration-slate-300 hover:decoration-emerald-500 sm:text-base">
                    Team Lead — LinkedIn
                  </span>
                </a>

              </div>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  Project
                </p>

                <p className="mt-2 text-sm font-semibold text-slate-900">
                  SKIT CSE Team #04
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Swami Keshvanand Institute of Technology, Jaipur
                </p>
              </div>
            </div>

          </aside>

          {/* RIGHT SIDE */}
          <ContactForm />

        </div>

        {/* FAQ Section */}
        <section className="mt-14">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
              {t("contact.faq.eyebrow", "Quick Answers")}
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-slate-900 lg:text-3xl">
              {t(
                "contact.faq.title",
                "Frequently Asked Questions"
              )}
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-4xl space-y-4">
            {faqs.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

        </section>

      </PageContainer>
    </main>
  )
}