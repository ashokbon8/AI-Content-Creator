"use client";

import React from "react";
import { UserProfile } from "@clerk/nextjs";

function SettingsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Account Settings
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-500">
          Manage your account credentials, security configurations, and user profile details.
        </p>
      </div>

      <div className="flex justify-center border border-gray-200 rounded-2xl bg-white p-2 sm:p-6 shadow-sm overflow-hidden">
        <div className="w-full flex justify-center [&_.cl-card]:shadow-none [&_.cl-card]:border-none [&_.cl-rootBox]:w-full [&_.cl-userProfile-root]:w-full [&_.cl-navbarLink--active]:text-teal-600 [&_.cl-navbarLink--active]:border-teal-600">
          <UserProfile routing="hash" />
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
