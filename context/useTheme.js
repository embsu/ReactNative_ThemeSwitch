import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// Now only useTheme needs to import which will provide ThemeContext (and all state
//     varibles and functions declared under ThemeProvider).

export const useTheme = () => {
    return useContext(ThemeContext);
    }