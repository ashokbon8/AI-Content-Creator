import Template from "@/app/(data)/Template";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import Image from "next/image";
import React from "react";
import CopyButton from "./_components/CopyButton";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

// Separate component for copy to avoid async hydration issues
async function History() {
  const user = await currentUser();

  // Fetching the history list from the database
  const HistoryList: HISTORY[] = (await db
    .select({
      id: AIOutput.id,
      formData: AIOutput.formData,
      aiResponse: AIOutput.aiResponse,
      createdAt: AIOutput.createdAt,
      templateSlug: AIOutput.templateSlug,
      createdBy: AIOutput.createdBy,
    })
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress ?? ""))
    .orderBy(desc(AIOutput.createdAt))
  ).map(item => ({
    id: item.id,
    formData: item.formData ?? "",
    aiResponse: item.aiResponse ?? "",
    createdAt: item.createdAt ?? "",
    templateSlug: item.templateSlug ?? "",
    createdBy: item.createdBy ?? ""
  }));

  // Function to get the template name and icon by its slug from the actual database
  const GetTemplateData = (slug: string) => {
    const template = Template?.find((item) => item?.slug === slug);
    return {
      name: template?.name || "Unknown Template",
      icon: template?.icon || "https://cdn-icons-png.flaticon.com/128/11497/11497847.png"
    };
  };

  return (
    <div className="m-2 sm:m-5 p-4 sm:p-5 border rounded-lg bg-white shadow-sm">
      <h2 className="font-bold text-2xl sm:text-3xl">History</h2>
      <p className="text-gray-500 text-sm sm:text-base">Search your previously generated AI content history</p>

      {/* Responsive Table for Medium and Desktop Screens */}
      <div className="hidden md:block">
        <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-4 rounded-t-md text-gray-700">
          <h2 className="col-span-2">TEMPLATE</h2>
          <h2 className="col-span-2">AI RESPONSE</h2>
          <h2>DATE</h2>
          <h2>WORDS</h2>
          <h2>COPY</h2>
        </div>

        {HistoryList.length > 0 ? (
          HistoryList.map((item: HISTORY) => {
            const { name, icon } = GetTemplateData(item.templateSlug);
            const wordCount = item.aiResponse?.split(/\s+/).filter(Boolean).length || 0;
            return (
              <div key={item?.id} className="grid grid-cols-7 my-2 py-4 px-4 border-b items-center hover:bg-gray-50 transition-colors">
                <h2 className="col-span-2 flex gap-2 items-center font-medium">
                  <Image
                    src={icon}
                    width={25}
                    height={25}
                    alt={name}
                    className="object-contain"
                  />
                  {name}
                </h2>
                <h2 className="col-span-2 line-clamp-3 text-sm text-gray-600 pr-4">{item?.aiResponse}</h2>
                <h2 className="text-sm text-gray-500">{new Date(item?.createdAt).toLocaleDateString()}</h2>
                <h2 className="text-sm font-semibold">{wordCount}</h2>
                <h2>
                  <CopyButton text={item?.aiResponse} />
                </h2>
              </div>
            );
          })
        ) : (
          <p className="text-center mt-5 text-gray-500 py-10">No history found for your account.</p>
        )}
      </div>

      {/* Card Layout for Mobile and Tablet Screens */}
      <div className="block md:hidden mt-5 space-y-4">
        {HistoryList.length > 0 ? (
          HistoryList.map((item: HISTORY) => {
            const { name, icon } = GetTemplateData(item.templateSlug);
            const wordCount = item.aiResponse?.split(/\s+/).filter(Boolean).length || 0;
            return (
              <div key={item?.id} className="p-4 border rounded-xl bg-gray-50 shadow-sm flex flex-col gap-3">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={icon}
                      width={24}
                      height={24}
                      alt={name}
                      className="object-contain"
                    />
                    <span className="font-bold text-gray-900 text-sm">{name}</span>
                  </div>
                  <span className="text-xs text-gray-500">{new Date(item?.createdAt).toLocaleDateString()}</span>
                </div>
                <div>
                  <p className="line-clamp-4 text-xs text-gray-700 whitespace-pre-line leading-relaxed">
                    {item?.aiResponse}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t mt-1">
                  <span className="text-xs text-gray-500 font-medium">
                    {wordCount} words
                  </span>
                  <CopyButton text={item?.aiResponse} />
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center mt-5 text-gray-500 py-10">No history found for your account.</p>
        )}
      </div>
    </div>
  );
}

export default History;
