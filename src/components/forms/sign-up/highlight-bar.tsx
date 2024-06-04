"use client";

import React from "react";
import { useAuthContextHook } from "@/context/use-auth-context";
import { cn } from "@/lib/utils";

export const HighlightBar = () => {
  const { currentStep } = useAuthContextHook();

  return (
    <div className="grid grid-cols-2 gap-3">
      <div
        className={cn(
          "rounded-full h-2 col-span-1",
          currentStep == 1 ? "bg-orange" : "bg-platinum"
        )}
      ></div>
      <div
        className={cn(
          "rounded-full h-2 col-span-1",
          currentStep == 2 ? "bg-orange" : "bg-platinum"
        )}
      ></div>
    </div>
  );
};
