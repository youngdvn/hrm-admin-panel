import Link from "next/link"

import { Button } from "@/components/ui/button"

type LoginPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams
  const redirect = typeof params.redirect === "string" ? params.redirect : "/"

  return (
    <div className="w-full max-w-md">
      <h1 className="text-2xl font-semibold">Login</h1>
      <p className="mt-2 text-sm text-muted-foreground">Mock login for FE flow testing.</p>

      <form action="/api/mock-login" method="post" className="mt-6">
        <input type="hidden" name="redirect" value={redirect} />
        <Button type="submit">Sign in (mock)</Button>
      </form>

      <div className="mt-6 flex gap-4 text-sm">
        <Link href="/register" className="underline underline-offset-4">Register</Link>
        <Link href="/forgot-password" className="underline underline-offset-4">Forgot password</Link>
      </div>
    </div>
  )
}