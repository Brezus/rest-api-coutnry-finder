import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import {useState} from 'react'
import styled from 'styled-components'
import useToggle from "./hooks/useToggle";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetails from './components/CountryDetails';

function App() {
  const [theme, setTheme] = useState('light');
  const [darkmode, setDarkmode] = useToggle(false)
  function themeToggler() {
    theme === 'light' ? setTheme('dark') : setTheme('light')
    theme === 'light' ? setDarkmode(false) : setDarkmode(true)
  }
  const App = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 3em;
    background-color: ${({theme}) => theme.background};
  `

  const routes = [
    {
      path: '/',
      component: Main
    },
    {
      path: '/:countryName',
      component: CountryDetails
    }
  ]
  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles/>
            <App>
              <Nav toggleTheme={themeToggler} theme={theme} darkmode={darkmode}/>
              <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
              </Switch>
            </App>
      </ThemeProvider>
    </Router>
    
  );
}

export default App;
