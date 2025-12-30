import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <div>
        <p className="font-mono underline">no session</p>
        <Button asChild>
          <Link href={"/login"}>Login</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <pre className="text-xs">{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};

export default Page;
