"use client";

import qs from "query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Video, VideoOff, Phone, PhoneOff } from "lucide-react";


import { ActionTooltip } from "@/components/action-tooltip";

export const ChatVideoButton = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const isVideo = searchParams?.get("video");
  const isAudio = searchParams?.get("audio");

  const onClickVideo = () => {
    const url = qs.stringifyUrl({
      url: pathname || "",
      query: {
        video: isVideo ? undefined : true,
      }
    }, { skipNull: true });

    router.push(url);
  }

  const onClickAudio = () => {
    const url = qs.stringifyUrl({
      url: pathname || "",
      query: {
        audio: isAudio ? undefined : true,
      }
    }, { skipNull: true });

    router.push(url);
  }
  
  const Icon = isVideo ? VideoOff : Video;
  const IconAudio = isAudio ? PhoneOff : Phone;

  const tooltipLabel = isVideo ? "End video call" : "Start video call";
  const tooltipLabelAudio = isAudio ? "End call" : "Start call";

  return (
    <>
    <ActionTooltip side="bottom" label={tooltipLabelAudio}>
      <button onClick={onClickAudio} className="hover:opacity-75 transition mr-4">
        <IconAudio className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
      </button>
    </ActionTooltip>
      <ActionTooltip side="bottom" label={tooltipLabel}>
      <button onClick={onClickVideo} className="hover:opacity-75 transition mr-4">
        <Icon className="h-8 w-8 text-zinc-500 dark:text-zinc-400" />
      </button>
    </ActionTooltip>
    </>
  )
}