import Image from 'next/image'
import { Separator } from "@/components/ui/libs/separator"
import Game from '@/components/ui/game'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/libs/toaster"

export default function Home() {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <main className="flex min-h-screen flex-col items-center justify-between">
              <Game />
              <Toaster />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
