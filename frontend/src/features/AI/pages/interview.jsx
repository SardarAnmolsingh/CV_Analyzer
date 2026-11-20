import React, { useState, useEffect } from 'react'
import { useInterview } from '../Hooks/useinterview'
import { useParams } from 'react-router'

const NAV_ITEMS = [
    {
        id: 'technical',
        label: 'Technical Questions',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
    },
    {
        id: 'behavioral',
        label: 'Behavioral Questions',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
    },
    {
        id: 'roadmap',
        label: 'Road Map',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
        ),
    },
]

const SEVERITY_STYLES = {
    high: 'bg-red-500/10 text-red-400 border-red-500/30',
    medium: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    low: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
}

// ── Sub-components ────────────────────────────────────────────────────────────
const QuestionCard = ({ item, index }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden transition-colors hover:border-zinc-700">
            <div
                onClick={() => setOpen((o) => !o)}
                className="flex items-start gap-3 p-4 cursor-pointer select-none"
            >
                <span className="shrink-0 rounded-md bg-indigo-500/15 px-2 py-0.5 text-xs font-semibold text-indigo-400">
                    Q{index + 1}
                </span>
                <p className="flex-1 text-sm font-medium text-zinc-100 leading-relaxed">
                    {item.question}
                </p>
                <span
                    className={`shrink-0 text-zinc-400 transition-transform duration-200 ${
                        open ? 'rotate-180 text-zinc-200' : ''
                    }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </span>
            </div>

            {open && (
                <div className="border-t border-zinc-800 bg-zinc-950/50 px-4 py-4 space-y-4">
                    <div className="space-y-1.5">
                        <span className="inline-block rounded-md bg-sky-500/15 px-2 py-0.5 text-xs font-medium text-sky-400">
                            Intention
                        </span>
                        <p className="text-sm text-zinc-300 leading-relaxed">
                            {item.intention}
                        </p>
                    </div>
                    <div className="space-y-1.5">
                        <span className="inline-block rounded-md bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-400">
                            Model Answer
                        </span>
                        <p className="text-sm text-zinc-300 leading-relaxed">
                            {item.answer}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

const RoadMapDay = ({ day }) => (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 space-y-3">
        <div className="flex items-center gap-3">
            <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-400">
                Day {day.day}
            </span>
            <h3 className="text-base font-semibold text-zinc-100">
                {day.focus}
            </h3>
        </div>
        <ul className="space-y-2 pl-1">
            {day.tasks.map((task, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                    <span>{task}</span>
                </li>
            ))}
        </ul>
    </div>
)

// ── Main Component ────────────────────────────────────────────────────────────
const Interview = () => {
    const [activeNav, setActiveNav] = useState('technical')
    const { report, getReportById, loading, getResumePdf } = useInterview()
    const { interviewId } = useParams()

    useEffect(() => {
        if (interviewId) {
            getReportById(interviewId)
        }
    }, [interviewId])

    if (loading || !report) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-100">
                <h1 className="text-lg font-medium animate-pulse text-zinc-400">
                    Loading your interview plan...
                </h1>
            </main>
        )
    }

    const scoreColor =
        report.matchScore >= 80
            ? 'border-emerald-500 text-emerald-400'
            : report.matchScore >= 60
            ? 'border-amber-500 text-amber-400'
            : 'border-red-500 text-red-400'

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
            <div className="mx-auto flex max-w-7xl flex-col lg:flex-row min-h-screen">

                {/* ── Left Nav ── */}
                <nav className="flex flex-col justify-between gap-6 p-6 lg:w-64 lg:shrink-0 border-b lg:border-b-0 lg:border-r border-zinc-800">
                    <div className="space-y-2">
                        <p className="px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                            Sections
                        </p>
                        <div className="flex flex-col gap-1">
                            {NAV_ITEMS.map((item) => {
                                const isActive = activeNav === item.id
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveNav(item.id)}
                                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-left ${
                                            isActive
                                                ? 'bg-indigo-500/15 text-indigo-400'
                                                : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
                                        }`}
                                    >
                                        <span className="shrink-0">{item.icon}</span>
                                        {item.label}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <button
                        onClick={() => getResumePdf(interviewId)}
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 active:scale-[0.99] cursor-pointer"
                    >
                        <svg
                            className="h-3.5 w-3.5 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M10.6144 17.7956 11.492 15.7854C12.2731 13.9966 13.6789 12.5726 15.4325 11.7942L17.8482 10.7219C18.6162 10.381 18.6162 9.26368 17.8482 8.92277L15.5079 7.88394C13.7092 7.08552 12.2782 5.60881 11.5105 3.75894L10.6215 1.61673C10.2916.821765 9.19319.821767 8.8633 1.61673L7.97427 3.75892C7.20657 5.60881 5.77553 7.08552 3.97685 7.88394L1.63658 8.92277C.868537 9.26368.868536 10.381 1.63658 10.7219L4.0523 11.7942C5.80589 12.5726 7.21171 13.9966 7.99275 15.7854L8.8704 17.7956C9.20776 18.5682 10.277 18.5682 10.6144 17.7956ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899Z" />
                        </svg>
                        Download Resume
                    </button>
                </nav>

                {/* ── Center Content ── */}
                <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
                    {activeNav === 'technical' && (
                        <section className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-zinc-100">
                                    Technical Questions
                                </h2>
                                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400">
                                    {report.technicalQuestions.length} questions
                                </span>
                            </div>
                            <div className="space-y-3">
                                {report.technicalQuestions.map((q, i) => (
                                    <QuestionCard key={i} item={q} index={i} />
                                ))}
                            </div>
                        </section>
                    )}

                    {activeNav === 'behavioral' && (
                        <section className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-zinc-100">
                                    Behavioral Questions
                                </h2>
                                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400">
                                    {report.behavioralQuestions.length} questions
                                </span>
                            </div>
                            <div className="space-y-3">
                                {report.behavioralQuestions.map((q, i) => (
                                    <QuestionCard key={i} item={q} index={i} />
                                ))}
                            </div>
                        </section>
                    )}

                    {activeNav === 'roadmap' && (
                        <section className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-zinc-100">
                                    Preparation Road Map
                                </h2>
                                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400">
                                    {report.preparationPlan.length}-day plan
                                </span>
                            </div>
                            <div className="space-y-4">
                                {report.preparationPlan.map((day) => (
                                    <RoadMapDay key={day.day} day={day} />
                                ))}
                            </div>
                        </section>
                    )}
                </main>

                {/* ── Right Sidebar ── */}
                <aside className="flex flex-col gap-6 p-6 lg:w-72 lg:shrink-0 border-t lg:border-t-0 lg:border-l border-zinc-800">
                    {/* Match Score */}
                    <div className="flex flex-col items-center text-center space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                            Match Score
                        </p>
                        <div
                            className={`flex h-28 w-28 items-baseline justify-center rounded-full border-4 bg-zinc-900/50 pt-8 ${scoreColor}`}
                        >
                            <span className="text-3xl font-bold">{report.matchScore}</span>
                            <span className="text-sm font-medium ml-0.5">%</span>
                        </div>
                        <p className="text-xs text-zinc-400">
                            Strong match for this role
                        </p>
                    </div>

                    <hr className="border-zinc-800" />

                    {/* Skill Gaps */}
                    <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                            Skill Gaps
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {report.skillGaps.map((gap, i) => (
                                <span
                                    key={i}
                                    className={`rounded-md border px-2.5 py-1 text-xs font-medium ${
                                        SEVERITY_STYLES[gap.severity] ||
                                        'bg-zinc-800 text-zinc-300 border-zinc-700'
                                    }`}
                                >
                                    {gap.skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default Interview