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
} from "react-router-dom";
import CountryDetails from './components/CountryDetails';


const AppCont = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 3em;
    background-color: ${({theme}) => theme.background};
  ` 
  
function App() {
  const [theme, setTheme] = useState('light');
  const [darkmode, setDarkmode] = useToggle(false)
  function themeToggler() {
    theme === 'light' ? setTheme('dark') : setTheme('light')
    theme === 'light' ? setDarkmode(false) : setDarkmode(true)
  }
  
  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles/>
            <AppCont>
              <Nav toggleTheme={themeToggler} theme={theme} darkmode={darkmode}/>
              <Switch>
                <Route exact path='/'>
                  <Main />
                </Route>
                <Route path='/:countryName'>
                  <CountryDetails/>
                </Route>
              </Switch>
            </AppCont>
      </ThemeProvider>
    </Router>
    
  );
}

export default App;