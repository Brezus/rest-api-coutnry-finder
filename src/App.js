import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import {useState} from 'react'
import styled from 'styled-components'
import useToggle from "./hooks/useToggle";


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
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <App>
          <Nav toggleTheme={themeToggler} theme={theme} darkmode={darkmode}/>
          <Main />
        </App>
      </>
    </ThemeProvider>
    
  );
}

export default App;
