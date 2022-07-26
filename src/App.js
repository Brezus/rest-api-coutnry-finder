import "./App.css"
import Nav from "./components/Nav"
import Main from "./components/Main"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./components/Themes"
import styled from "styled-components"
import useToggle from "./hooks/useToggle"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import CountryDetails from "./components/CountryDetails"
import { useEffect } from "react"

const AppCont = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2em;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-family: "Nunito Sans", sans-serif;
  min-height: 100vh;
  padding-bottom: 2em;
  @media (min-width: 1440px) {
    gap: 3em;
    padding-bottom: 4em;
  }
`

function App() {
  const [darkMode, toggleDarkMode] = useToggle(
    JSON.parse(localStorage.getItem("theme")) || false
  )

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <Router>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <AppCont>
          <Nav toggleTheme={toggleDarkMode} darkMode={darkMode} />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/:countryName">
              <CountryDetails />
            </Route>
          </Switch>
        </AppCont>
      </ThemeProvider>
    </Router>
  )
}

export default App
