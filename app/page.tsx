import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-evenly py-32 px-16 bg-white dark:bg-black space-y-6">
        <div>
          <p className="font-mono">BETTER-AUTH.</p>
          <Link href={"/login"} passHref>
            <Button size={"lg"}>Continue</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
