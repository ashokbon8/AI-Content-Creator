"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Button
      variant="ghost"
      className="text-primary hover:text-primary-foreground hover:bg-primary font-medium text-xs sm:text-sm py-1 h-auto"
      onClick={handleCopy}
    >
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
}
