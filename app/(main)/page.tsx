import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="p-6">
      <div className="max-w-xl space-y-4">
        <h1 className="text-2xl font-semibold">Main page</h1>
        <p className="text-sm text-muted-foreground">
          You are in main layout. Middleware allows this route only when mock cookie exists.
        </p>

        <form action="/api/mock-logout" method="post">
          <Button type="submit" variant="destructive">Sign out (mock)</Button>
        </form>
      </div>
    </div>
  )
}