"use client";
import React from "react";
import { Tab } from "@headlessui/react";

interface TabsProps {
  pages: {
    title: string;
    content: React.ReactNode;
  }[];
  color?: "indigo" | "lime" | "red" | "orange" | "green";
  variant?: "contained" | "outlined";
}

function Tabs({ pages, color = "indigo", variant = "contained" }: TabsProps) {
  const titles = pages.map((page) => page.title);
  const contents = pages.map((page) => page.content);

  const bgColor = {
    indigo: {
      active: "bg-indigo-600 text-white",
      inActive: "bg-indigo-50 text-indigo-600 dark:bg-gray-900 dark:text-white",
    },
    lime: {
      active: "bg-lime-600 text-white",
      inActive: "bg-lime-50 text-lime-600 dark:bg-gray-900 dark:text-white",
    },
    red: {
      active: "bg-red-600 text-white",
      inActive: "bg-red-50 text-red-600 dark:bg-gray-900 dark:text-white",
    },
    orange: {
      active: "bg-orange-600 text-white",
      inActive: "bg-orange-50 text-orange-600 dark:bg-gray-900 dark:text-white",
    },
    green: {
      active: "bg-green-600 text-white",
      inActive: "bg-green-50 text-green-600 dark:bg-gray-900 dark:text-white",
    },
  };

  const borderColor = {
    indigo: {
      active: "border border-indigo-600",
      inActive:
        "border-b border-indigo-100 text-indigo-600 dark:border-gray-900 dark:text-white",
    },
    lime: {
      active: "border border-lime-600",
      inActive:
        "border-b border-lime-100 text-lime-600 dark:border-gray-900 dark:text-white",
    },
    red: {
      active: "border border-red-600",
      inActive:
        "border-b border-red-100 text-red-600 dark:border-gray-900 dark:text-white",
    },
    orange: {
      active: "border border-orange-600",
      inActive:
        "border-b border-orange-100 text-orange-600 dark:border-gray-900 dark:text-white",
    },
    green: {
      active: "border border-green-600",
      inActive:
        "border-b border-green-100 text-green-600 dark:border-gray-900 dark:text-white",
    },
  };

  const variantClass = {
    contained: bgColor[color],
    outlined: borderColor[color],
  };

  return (
    <Tab.Group>
      {/* bagian list */}

      <div className={`${bgColor[color].inActive} p-1 rounded max-w-fit mx-auto mb-3`}>
        <Tab.List className="flex divide-x-2 divide-transparent">
          {titles.map((list, i) => (
            <Tab key={i}>
              {({ selected }) => (
                <div
                  className={`${
                    selected
                      ? variantClass[variant].active
                      : variantClass[variant].inActive
                  } cursor-pointer p-1 px-3 rounded`}
                >
                  {list}
                </div>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      {/* bagian panel */}

      <Tab.Panels>
        {contents.map((panel, i) => (
          <Tab.Panel key={i}>{panel}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Tabs;
