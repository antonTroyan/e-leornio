import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import Game from '@/components/ui/main'
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <Game />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
