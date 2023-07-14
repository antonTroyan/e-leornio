import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import Game from '@/components/ui/main'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <main className="flex min-h-screen flex-col items-center justify-between pt-52">
              <Game />
              <Toaster />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
