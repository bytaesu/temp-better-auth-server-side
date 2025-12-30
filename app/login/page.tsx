"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { authClient } from "@/lib/auth-client";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="p-6 flex flex-col items-center">
      <div className="pb-6 w-full max-w-md">
        <Link href={"/"} passHref>
          <Button variant={"link"}>
            <ArrowLeftIcon /> Back to home
          </Button>
        </Link>
      </div>

      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="font-mono font-normal">BETTER-AUTH.</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <Separator />
          <div>
            <CurrentUser />
          </div>
          <Separator />
          <div className="space-y-2">
            <SignIn />
            <SignOut />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;

const SignIn = () => {
  return (
    <div>
      <Button
        onClick={async () => {
          await authClient.signIn.social({
            provider: "github",
            callbackURL: "/dashboard",
          });
        }}
      >
        Sign In
      </Button>
    </div>
  );
};

const SignOut = () => {
  return (
    <div>
      <Button
        onClick={async () => {
          await authClient.signOut();
        }}
      >
        Sign Out
      </Button>
    </div>
  );
};

const CurrentUser = () => {
  const { data, error, isPending } = authClient.useSession();

  if (error) {
    return <div>Error</div>;
  }

  if (isPending) {
    return <div>Pending</div>;
  }

  return (
    <div>
      <p className="font-mono text-xs pb-2">
        {data?.user?.email ?? "User not found"}
      </p>
      <Avatar>
        <AvatarImage src={data?.user?.image ?? "B"} alt="B" />
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
    </div>
  );
};
