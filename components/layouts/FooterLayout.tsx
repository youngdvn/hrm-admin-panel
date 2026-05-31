import Link from "next/link";

export default function FooterLayout() {
    return (
        <footer className="px-6 py-4 border-gray-300 border-t bg-white/90">
            <div className="flex items-center justify-between gap-4 text-sm">
                <p className="text-slate-500 italic">Copyright 2026 - HRM Panel</p>
                <Link href="https://github.com/youngdvn/hrm-admin-panel" className="underline-none hover:text-primary">
                    <p className="font-semibold text-sm">Created by YoungD</p>
                </Link>
            </div>
        </footer>)
}