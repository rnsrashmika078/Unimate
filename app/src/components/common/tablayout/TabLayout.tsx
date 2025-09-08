"use client";

import React, { useState } from "react";

type Tab = {
    label: string;
    content?: React.ReactNode;
};

const TabLayout = ({ tabs }: { tabs: Tab[] }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Tabs Header */}
            <div className="flex border rounded-t-xl border-[var(--border-color)] transition-all">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 text-sm font-medium transition-colors duration-200
              ${
                  activeTab === index
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
              }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div
                className="flex justify-center item-center relative p-4 rounded-b-xl shadow-sm"
                style={{ background: "var(--tab-gradient-background)" }}
            >
                {/* Tab Content */}
                <div>{tabs[activeTab].content}</div>
            </div>
        </div>
    );
};

export default TabLayout;
