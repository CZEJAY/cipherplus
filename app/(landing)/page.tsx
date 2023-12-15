
import Landing from './components/Landing'
import BentoGrid from './components/BentoGrid'
import { Separator } from '@/components/ui/separator'
import Users from './components/Users'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-14 ">
      <Landing />
      <BentoGrid />
      <Separator />
      <Users />
    </main>
  )
}
