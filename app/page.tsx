import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import Main from '@/components/ui/main'
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Main/>
    </ThemeProvider>
  )
}
