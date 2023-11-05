/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "../../inputs";

interface CardProps {
  color?: "indigo" | "lime" | "red" | "orange" | "green";
  icon?: React.ReactNode;
  title: string;
  description: string;
  button?: {
    title: string;
    onClick: () => void;
  };
}

const Card = ({
  icon,
  title,
  description,
  button,
  color = "indigo",
}: CardProps) => {
  const colorClass = {
    indigo: "text-indigo-500",
    lime: "text-lime-500",
    red: "text-red-500",
    orange: "text-orange-500",
    green: "text-green-500",
  };

  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* icon */}
      {icon && <div className={`${colorClass[color]} text-2xl`}>{icon}</div>}

      {/* title */}
      <h5 className="my-2 font-semibold text-base md:text-xl text-black dark:text-white">
        {title}
      </h5>

      {/* description */}
      <p className="my-2 font-normal text-sm md:text-base text-gray-600 dark:text-gray-400">
        {description}
      </p>

      {/* action */}
      {button?.title && (
        <div className="my-2">
          <Button color={color} onClick={button.onClick}>
            {button.title}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Card;
