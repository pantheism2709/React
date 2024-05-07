
import { useState ,useEffect } from "react";
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './context/Theme'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  // If we are not sure that methods that are coming from Context has definiton or not ... in such case we can ovverride definition by making the same name function and giving it definition

  useEffect(() => {

    document.querySelector('html').classList.remove("light","dark")

    document.querySelector('html').classList.add(themeMode)
   
  }, [themeMode])
  



  const ligthTheme=()=>{
    setThemeMode("light")
  }

  const darkTheme=()=>{
    setThemeMode("dark")
  }

  return (
    <ThemeProvider value={{themeMode,darkTheme,ligthTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* ThemeButton  */}

                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* Card */}
                       <Card/>
                    </div>
                </div>
            </div>
     
    </ThemeProvider>
  )
}

export default App
