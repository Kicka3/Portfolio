import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/Header";


function App() {
    return (
        <div className="App">
            <Header/>
        </div>
    );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;