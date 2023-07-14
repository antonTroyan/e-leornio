import Image from 'next/image'
import { Separator } from "@/components/ui/separator"

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-52">
      <div>
        <div className="space-y-1">
          <h4 className="text-2xl font-medium leading-none">Thin, flexible string or rope made from several twisted strands</h4>
          <p className="text-2xl text-muted-foreground">
            Hang the picture from a rail on a length of [...].
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-2xl">
          <div>Cord</div>
          <Separator orientation="vertical" />
          <div>Feather</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    </main>
  )
}
