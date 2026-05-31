import MainLayout from "@/app/layouts/MainLayout"

export default function MainGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <MainLayout>{children}</MainLayout>
}