import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { lightTheme, darkTheme } from './Themes';
import { GlobalLayout } from "./GlobalStyle";


class NewsLatter extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      theme: 'light',
    }
  }

  toggleTheme = () => {
    if(this.state.theme === 'light') {
      this.setState({
        theme: 'dark',
      })
    } else {
      this.setState({
        theme: 'light',
      })
    }
    this.setState()
  }

  render() {
    // usando o pacote ThemeProvider
    return (
      <ThemeProvider theme={ this.state.theme === 'light' ? lightTheme : darkTheme }>
        <GlobalLayout />
        <div>
          <form class="form my-0 my-lg-0 lozano-search">
            
            <button class="button" type="button" onClick={this.toggleTheme}>Trocar tema</button>

            <h1 class="teste">Sign up to news latter</h1>

            <input id="Email" class="Email" type="email" placeholder="seuemail@email.com"></input>
            <button class="button" type="button">Sign up</button>
          </form>  

        </div>
      </ThemeProvider>
    )
  }
}

function App() {
  return (
    <div className="App">
     
      < NewsLatter />

    </div>
  );
}

export default App;
