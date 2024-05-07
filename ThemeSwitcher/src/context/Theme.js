import {createContext,useContext} from "react";

export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{

    },
    ligthTheme:()=>{

    }
})

// COntext provider in same file just variant of previous approach
export const ThemeProvider=ThemeContext.Provider


// custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}


// Provider se wrap karo or fir useCOntext se Context ko use karo