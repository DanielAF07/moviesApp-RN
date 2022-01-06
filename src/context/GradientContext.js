import React, { createContext, useState } from "react";

export const GradientContext = createContext()

initialState = {
    primary: 'transparent',
    secondary: 'transparent'
}

const GradientProvider = ({children}) => {
    const [colors, setColors ] = useState(initialState)
    const [prevColors, setPrevColors] = useState({
        primary: 'transparent',
        secondary: 'transparent'
    })

    const setMainColors = (colors) => {
        setColors(colors)
    }

    const setLastColors = (colors) => {
        setPrevColors(colors)
    }

    return (
        <GradientContext.Provider
            value={{
                colors,
                prevColors,
                setMainColors,
                setLastColors
            }}
        >
            {children}
        </GradientContext.Provider>
    );
};

export default GradientProvider;