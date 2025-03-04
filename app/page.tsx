"use client";

import Header from "@/components/header";
import styles from "../app/page.module.css";
import TokensTab from "@/components/tokens-tab";
import TasksTab from "@/components/tasks-tab";
import PuzzleTab from "@/components/puzzle-tab";
import AccountTab from "@/components/account-tab";
import { useState } from "react";
import { FriendsTab } from "@/components/friends-tab";
// import { useUser } from "@/lib/hooks/use-user";

export default function Page() {
  // const {user, friends, loading} = useUser('current')
  // State for active tab
  const [activeTab, setActiveTab] = useState("friends");

  // Mock data
  const userData = {
    name: "Alex Johnson",
    email: "alex@example.com",
    tokens: 250,
    level: 3,
    friends: [
      {
        id: 1,
        name: "Jamie Smith",
        status: "active",
        tokens: 50,
        claimed: false, // This determines if the "Claim" button should be active
      },
      {
        id: 2,
        name: "Morgan Lee",
        status: "active",
        tokens: 50,
        claimed: true, // Already claimed
      },
      {
        id: 3,
        name: "Taylor Brown",
        status: "pending",
        tokens: 0,
        claimed: false, // Not claimable yet
      }
    ],
    tasks: [
      { id: 1, title: "Complete Profile", reward: 20, completed: true },
      { id: 2, title: "Refer a Friend", reward: 50, completed: false },
      { id: 3, title: "Daily Login Streak", reward: 10, completed: true },
    ]
  };
  

  // Render the active tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "friends":
        return <FriendsTab friends={userData.friends} />;
      case "tokens":
        return <TokensTab userData={userData} />;
      case "tasks":
        return <TasksTab tasks={userData.tasks} />;
      case "puzzle":
        return <PuzzleTab />;
      case "account":
        return <AccountTab userData={userData} />;
      default:
        return <FriendsTab friends={userData.friends} />;
    }
  };

  return (
    <div>
      <Header />

      <main className={styles.main}>
        <section className={`${styles.section} ${styles.container}`}>
          <div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-4 mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {userData.level}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {userData.name}
                  </h2>
                  <div className="flex items-center">
                    <span className="text-blue-400 font-bold mr-2">
                      {userData.tokens} tokens
                    </span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-400 ml-2">
                      {userData.friends.length} referrals
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mb-4 overflow-x-auto">
              {["friends", "tokens", "tasks", "puzzle", "account"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 font-medium rounded-t-lg mr-1 transition-all duration-200 
              ${
                activeTab === tab
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                )
              )}
            </div>

            {renderTabContent()}
          </div>
        </section>
      </main>
    </div>
  );
}
