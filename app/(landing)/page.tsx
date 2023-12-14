
import Landing from './components/Landing'
import BentoGrid from './components/BentoGrid'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-14 ">
      <Landing />
      <BentoGrid />
    </main>
  )
}
