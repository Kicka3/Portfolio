import './App.css';
import styled from 'styled-components';
// import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import Skills from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";
import {Contact} from "./layout/sections/contacts/Contacts";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/Footer/Footer";
import {NewFooter} from "./layout/Footer/NewFooter";


function App() {
    return (
        <div className="App">
            {/*<Header/>*/}
            <Main/>
            <Skills/>
            <Works/>
            <AboutMe/>
            <Contact/>
            <Slogan/>
            {/*<Footer/>*/}
            <NewFooter/>
        </div>
    );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;