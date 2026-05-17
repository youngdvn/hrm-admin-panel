import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-md">
      <h1 className="text-2xl font-semibold">Forgot password</h1>
      <p className="mt-2 text-sm text-muted-foreground">Mock forgot-password page in auth layout.</p>
      <Button className="mt-6" asChild>
        <Link href="/login">Back to login</Link>
      </Button>
    </div>
  )
}