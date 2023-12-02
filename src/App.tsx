import { useEffect, useState } from "react"
import { LoginPage } from "./pages/login"
import Nav from "./components/navbar"

const App = () => {


  const [theme, setTheme] = useState(() => {
		const initialTheme = localStorage.getItem("theme");
		return initialTheme ? initialTheme : "light";
	});

	function toggleTheme() {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === "light" ? "dark" : "light";
			localStorage.setItem("theme", newTheme);
			return newTheme;
		});
	}




  return (
    <div className={`h-full w-full mx-auto py-2 ${theme}`}>
      fafa
      <span>fafa</span>
    <Nav
      darkMode={theme} 
      toggleDarkMode={toggleTheme} 
    />

    <LoginPage/>
    </div>
  )
}

export default App
