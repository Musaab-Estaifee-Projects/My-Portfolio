import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[3px] focus:outline-none md:w-60"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#BD6F2F_0%,#D13372_25%,#6222BA_50%,#461885_75%,#BD6F2F_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg border-none bg-slate-950 px-7 text-sm font-semibold text-white backdrop-blur-3xl hover:bg-transparent hover:outline-none transition duration-400 gap-4 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;

// #BD6F2F_0%,#D13372_50%,#6222BA_75%,#461885_100%
