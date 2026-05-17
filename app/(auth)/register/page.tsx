import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md">
      <h1 className="text-2xl font-semibold">Register</h1>
      <p className="mt-2 text-sm text-muted-foreground">Mock register page in auth layout.</p>
      <Button className="mt-6" asChild>
        <Link href="/login">Back to login</Link>
      </Button>
    </div>
  )
}