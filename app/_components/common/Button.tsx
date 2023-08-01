import React from 'react';

const Button = ({ icon, text, type, variant }: { icon?: React.ReactNode, text: string, type: "PRIMARY" | "SECONDARY", variant: "FILLED" | "OUTLINED" }) => {
    return (
        <div className={`flex px-[1.88rem]  text-base items-center font-semibold rounded-xl  gap-3 h-16 cursor-pointer justify-center  ${type === "PRIMARY" ? variant === "FILLED" ? "bg-purple text-white" : "border-2 border-purple dark:text-white" : variant === "FILLED" ? "bg-white text-black" : ""
            }`}>
            {text}
        </div>
    );
};

export default Button;