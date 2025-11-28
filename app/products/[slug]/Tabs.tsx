"use client";
import { useState } from "react";

const Tabs = ({ tabs }: { tabs: { label: string; content: React.ReactNode }[] }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full">
      {/* Tab Header */}
      <div className="flex space-x-6 border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`pb-2 px-2 text-sm font-medium ${
              activeTab === index
                ? "border-b-2 border-[#9A0417] text-[#9A0417]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
