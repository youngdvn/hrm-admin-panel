import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordPage() {
  return (
    <div className="w-full overflow-hidden rounded-xl border bg-background shadow-sm md:grid md:grid-cols-2">
      <div className="relative hidden md:flex min-h-auto flex-col justify-between bg-linear-to-br from-emerald-700 via-emerald-600 to-teal-500 p-6 text-white md:p-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">HRM Panel</p>
          <h1 className="mt-3 max-w-sm text-3xl font-semibold leading-tight">
            Recover Your Account
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90">
            Enter your work email and we will send instructions to reset your password securely.
          </p>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-lg bg-white/15 p-3 backdrop-blur">
              <p className="text-xs text-white/80">Security</p>
              <p className="mt-1 text-lg font-semibold">High</p>
            </div>
            <div className="rounded-lg bg-white/15 p-3 backdrop-blur">
              <p className="text-xs text-white/80">Reset time</p>
              <p className="mt-1 text-lg font-semibold">2 min</p>
            </div>
            <div className="rounded-lg bg-white/15 p-3 backdrop-blur">
              <p className="text-xs text-white/80">Support</p>
              <p className="mt-1 text-lg font-semibold">24/7</p>
            </div>
          </div>
          <ul className="space-y-1 text-sm text-white/90">
            <li>- Protected reset links</li>
            <li>- Activity and login checks</li>
            <li>- Fast account recovery flow</li>
          </ul>
        </div>
      </div>

      <Card className="w-full rounded-none border-0 shadow-none">
        <div className="flex min-h-auto flex-col gap-4 justify-center px-4 py-8">
          <CardHeader>
            <CardTitle className="text-lg">Forgot password</CardTitle>
            <CardDescription>
              Enter your email to receive a reset instruction
            </CardDescription>
            <CardAction>
              <Button variant="link" asChild>
                <Link href="/login">Back to login</Link>
              </Button>
            </CardAction>
          </CardHeader>

          <CardContent >
            <form className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" />
              </div>

              <div className="flex flex-col gap-2">
                <Button className="w-full" size={"lg"} type="button">Send reset link</Button>
                <Button className="w-full" variant="secondary" size={"lg"} type="button" asChild>
                  <Link href="/register">Create new account</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}
