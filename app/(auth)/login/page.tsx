"use client"

import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { FormEvent, useState } from "react"
import { toast } from "sonner"
import { useAuthStore } from "@/app/stores/auth-store"
import { login } from "@/lib/auth"

const DEFAULT_EMAIL = "emilys"
const DEFAULT_PASSWORD = "emilyspass"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get("redirect") || "/"
  const [username, setUsername] = useState(DEFAULT_EMAIL)
  const [password, setPassword] = useState(DEFAULT_PASSWORD)

  const setToken = useAuthStore((state) => state.setTokens)

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const payload = await login({
        username, password
      })
      console.log(payload)
      setToken(payload.accessToken, payload.refreshToken)
      console.log("aaaa", useAuthStore.getState())
      toast.success("Login Successfully")
      router.push("/")

    }
    catch (err) {
      toast.error("Invalid Payload")
      console.log(err)
    }
  }

  return (
    <div className="w-full overflow-hidden rounded-xl border bg-background shadow-sm md:grid md:grid-cols-2">
      <div className="hidden relative md:flex min-h-auto flex-col justify-between bg-linear-to-br from-emerald-700 via-emerald-600 to-teal-500 p-6 text-white md:min-h-100 md:p-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">HRM Panel</p>
          <h1 className="mt-3 max-w-sm text-3xl font-semibold leading-tight">
            Human Resource Management System
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90">
            Manage employee lifecycle, attendance, payroll, and team performance in one workspace.
          </p>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-lg bg-white/15 p-3 backdrop-blur">
              <p className="text-xs text-white/80">Employees</p>
              <p className="mt-1 text-lg font-semibold">1,284</p>
            </div>
            <div className="rounded-lg bg-white/15 p-3 backdrop-blur">
              <p className="text-xs text-white/80">On time</p>
              <p className="mt-1 text-lg font-semibold">96%</p>
            </div>
            <div className="rounded-lg bg-white/15 p-3 backdrop-blur">
              <p className="text-xs text-white/80">Open roles</p>
              <p className="mt-1 text-lg font-semibold">14</p>
            </div>
          </div>
          <ul className="space-y-1 text-sm text-white/90">
            <li>- Smart attendance tracking</li>
            <li>- Payroll and benefits overview</li>
            <li>- Team analytics dashboard</li>
          </ul>
        </div>
      </div>
      <Card className="w-full rounded-none border-0 shadow-none">
        <div className="flex min-h-auto flex-col gap-4 justify-center px-4 py-8">
          <CardHeader>
            <CardTitle className="text-lg">Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>
              <Button variant="link" asChild>
                <Link href="/register">Sign Up</Link>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="username">Username / Email</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    className="w-full"
                    placeholder="Enter username or password"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a href="/forgot-password" className="underline-offset-4 hover:underline text-sm ml-auto">
                      Forgot Password
                    </a>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    className="w-full"
                    placeholder="******"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Button className="w-full" size={"lg"} type="submit">Login</Button>
                  <Button className="w-full" size={"lg"} variant="secondary" type="button">
                    Login with Google
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}
