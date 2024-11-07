"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  User,
  Bell,
  Mail,
  Shield,
  CreditCard,
  UserRoundSearch,
} from "lucide-react";
import { AccountForm } from "./account/account-form";
import ProfileForm from "./profile/profile-form";

type SettingsPage =
  | "account"
  | "profile"
  | "notifications"
  | "email"
  | "security"
  | "billing";

export function SettingsLayout() {
  const [currentPage, setCurrentPage] = useState<SettingsPage>("profile");

  const settingsNavItems = [
    {
      title: "Profile",
      icon: User,
      page: "profile" as SettingsPage,
    },
    {
      title: "Account",
      icon: UserRoundSearch,
      page: "account" as SettingsPage,
    },
    {
      title: "Notifications",
      icon: Bell,
      page: "notifications" as SettingsPage,
    },
    {
      title: "Email",
      icon: Mail,
      page: "email" as SettingsPage,
    },
    {
      title: "Security",
      icon: Shield,
      page: "security" as SettingsPage,
    },
    {
      title: "Billing",
      icon: CreditCard,
      page: "billing" as SettingsPage,
    },
  ];

  return (
    <div className="flex flex-col m-4">
      <div className="m-6">
        <h1 className="font-bold text-4xl">Settings</h1>
        <p className="text-gray-500">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <hr />

      <div className="flex my-2">
        {/* Settings Navigation */}
        <div className="w-64 p-6">
          <nav className="space-y-2">
            {settingsNavItems.map((item) => (
              <Button
                key={item.title}
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  currentPage === item.page
                )}
                onClick={() => setCurrentPage(item.page)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8">
          {currentPage === "profile" && <ProfileForm />}
          {currentPage === "account" && <AccountForm />}
          {currentPage === "notifications" && (
            <div>Notifications Settings Content</div>
          )}
          {currentPage === "email" && <div>Email Settings Content</div>}
          {currentPage === "security" && <div>Security Settings Content</div>}
          {currentPage === "billing" && <div>Billing Settings Content</div>}
        </div>
      </div>
    </div>
  );
}
