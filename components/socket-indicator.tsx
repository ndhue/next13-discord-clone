"use client";

import { useSocket } from "@/components/providers/socket-provider";
import { Badge } from "@/components/ui/badge";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge 
        variant="outline" 
        className="h-5 bg-yellow-600 text-white border-none"
      >
      </Badge>
    )
  }

  return (
    <Badge 
      variant="outline" 
      className="h-5 bg-emerald-600 text-white border-none"
    >
    </Badge>
  )
}