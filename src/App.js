import "./App.css"
import Nav from "./components/Nav"
import Main from "./components/Main"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./components/Themes"
import styled from "styled-components"
import useToggle from "./hooks/useToggle"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import CountryDetails from "./components/CountryDetails"
import { useEffect } from "react"
import CDetails2 from "./components/CDetails2"

const AppCont = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 3em;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-family: "Nunito Sans", sans-serif;
  min-height: 100vh;
  padding-bottom: 4em;
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
            <Route path="/border-country/:countryCode">
              <CDetails2 />
            </Route>
          </Switch>
        </AppCont>
      </ThemeProvider>
    </Router>
  )
}

export default App
