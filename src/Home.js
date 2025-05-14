import * as React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import MenuAppBar from './MenuAppBar';
import Cadastro from './Cadastro';

function App() {
  return (
      <div className="App">
        <MenuAppBar />
        <main className="descript">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <h1>Lorem Ipsum</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th</p>
          <div className="container-btn">
            <a href="/Cadastro" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="success" className="btn cadastro">
                Cadastrar-se
              </Button>
            </a>
            <a href="/login" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" color="error" className="btn login"> Login </Button>
            </a>              
          </div>
        </main>
      </div>
);
}

export default App;