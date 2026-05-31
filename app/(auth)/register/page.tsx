import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterPage() {
  return (
    <div className="w-full overflow-hidden rounded-xl border bg-background shadow-sm md:grid md:grid-cols-2">
      <div className="relative md:flex hidden min-h-auto flex-col justify-between bg-linear-to-br from-emerald-700 via-emerald-600 to-teal-500 p-6 text-white md:p-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">HRM Panel</p>
          <h1 className="mt-3 max-w-sm text-3xl font-semibold leading-tight">
            Build Your Team Workspace
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90">
            Create your account to start managing people, attendance, and performance in one place.
          </p>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-lg bg-white/15 p-3 backdrop-blur">
              <p className="text-xs text-white/80">Set up</p>
              <p className="mt-1 text-lg font-semibold">5 min</p>
            </div>
            <div className="rounded-lg bg-white/15 p-3 backdrop-blur">
              <p className="text-xs text-white/80">Modules</p>
              <p className="mt-1 text-lg font-semibold">8+</p>
            </div>
            <div className="rounded-lg bg-white/15 p-3 backdrop-blur">
              <p className="text-xs text-white/80">Support</p>
              <p className="mt-1 text-lg font-semibold">24/7</p>
            </div>
          </div>
          <ul className="space-y-1 text-sm text-white/90">
            <li>- Employee directory and org chart</li>
            <li>- Attendance and leave workflows</li>
            <li>- Payroll and reporting tools</li>
          </ul>
        </div>
      </div>

      <Card className="w-full rounded-none border-0 shadow-none">
        <div className="flex min-h-auto flex-col justify-center gap-4 px-4 py-8">
          <CardHeader >
            <CardTitle className="text-lg">Create your account</CardTitle>
            <CardDescription>
              Enter your information to create a new account
            </CardDescription>
            <CardAction>
              <Button variant="link" asChild>
                <Link href="/login">Login</Link>
              </Button>
            </CardAction>
          </CardHeader>

          <CardContent >
            <form className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="fullName">Full name</Label>
                <Input id="fullName" name="fullName" type="text" placeholder="Enter your full name" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" placeholder="******" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="******" />
              </div>

              <div className="flex flex-col gap-2">
                <Button className="w-full" size={"lg"} type="button">Create account</Button>
                <Button className="w-full" size={"lg"} variant="secondary" type="button">
                  Register with Google
                </Button>
              </div>
            </form>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}
