import AuthLayout from "@/app/layouts/AuthLayout"

export default function AuthGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AuthLayout>{children}</AuthLayout>
}