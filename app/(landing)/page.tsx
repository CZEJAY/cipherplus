import Landing from "./_components/Landing";
import BentoGrid from "./_components/BentoGrid";
import { Separator } from "@/components/ui/separator";
import Users from "./_components/Users";
import Header from "./_components/Header";

export default function Home() {
  return (
    <>
    <Header />
      <main className="flex min-h-screen flex-col items-center gap-14 pt-44 ">
        <Landing />
        <BentoGrid />
        <Separator />
        <Users />
      </main>
    </>
  );
}
