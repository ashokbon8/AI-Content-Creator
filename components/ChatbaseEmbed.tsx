"use client";

import { useEffect } from "react";

const ChatbaseEmbed = () => {
  useEffect(() => {
    window.embeddedChatbotConfig = {
      chatbotId: "ovbho5wpUTjf5qmaFHSIt",
      domain: "www.chatbase.co",
    };

    let scriptTimeout: number;

    const loadChatbase = () => {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.chatbotId = window.embeddedChatbotConfig.chatbotId;
      script.domain = window.embeddedChatbotConfig.domain;
      script.defer = true;
      script.id = "chatbase-script";
      document.body.appendChild(script);
    };

    // Delay Chatbase script loading by 3 seconds to avoid blocking main thread page load / performance metrics
    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        scriptTimeout = window.setTimeout(loadChatbase, 3000);
      } else {
        const handleLoad = () => {
          scriptTimeout = window.setTimeout(loadChatbase, 3000);
        };
        window.addEventListener("load", handleLoad);
        return () => {
          window.removeEventListener("load", handleLoad);
          if (scriptTimeout) window.clearTimeout(scriptTimeout);
        };
      }
    }

    return () => {
      if (scriptTimeout) window.clearTimeout(scriptTimeout);
      const existingScript = document.getElementById("chatbase-script");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null;
};

export default ChatbaseEmbed;
