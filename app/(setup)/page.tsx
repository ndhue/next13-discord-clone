import { redirect } from "next/navigation";
import { Menu } from "lucide-react"
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

const SetupPage = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return (
    <div className="h-full">
      <div className="flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <NavigationSidebar />
      </div>
        <div className="flex h-screen">
          <div className="m-auto text-zinc-500/70 dark:text-zinc-300/50 text-xl font-bold text-center">
            <h3>Nothing here</h3>
            <p>Create your server!</p>
          </div>
        </div>
    </div>
  );
};

export default SetupPage;
