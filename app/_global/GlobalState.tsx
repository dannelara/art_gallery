"use client";
import React, { useContext } from "react";

const GlobalStateContext = React.createContext<any>(null);

export const GlobalStatePovider = ({
    children,
}: {
    children: JSX.Element | JSX.Element[];
}) => {
    const [theme, setTheme] = React.useState<"light" | "dark">();

    React.useEffect(() => {
        const localTheme = localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")!) : "light";

        if (localTheme === "dark") {
            document.querySelector("html")?.classList.add("dark");
        } else {
            document.querySelector("html")?.classList.remove("dark");
        }
        setTheme(localTheme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => {
            const next = prev === "light" ? "dark" : "light";
            localStorage.setItem("theme", JSON.stringify(next));
            return next;
        });
    };

    const state = {
        theme,
        toggleTheme,
    };

    return (
        <GlobalStateContext.Provider value={state}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalStateContext);
