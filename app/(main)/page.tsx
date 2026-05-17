"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()

  const handleLogout = () => {
    document.cookie = "is_logged_in=; path=/; max-age=0; samesite=lax"
    router.push("/login")
    router.refresh()
  }

  return (
    <div className="p-6">
      <div className="max-w-xl space-y-4">
        <h1 className="text-2xl font-semibold">Main page</h1>
        <p className="text-sm text-muted-foreground">
          You are in main layout. Middleware allows this route only when login cookie exists.
        </p>

        <Button type="button" variant="destructive" onClick={handleLogout}>
          Sign out
        </Button>
      </div>
    </div>
  )
}
