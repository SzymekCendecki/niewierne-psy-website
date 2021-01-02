import { txtPL, txtEN } from './components/txt'

import Header from './components/Header'
import Nav from './components/Nav'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'
import './App.css';

import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        all: txtPL
    };

    this.changeLang = this.changeLang.bind(this)
}


changeLang(lang){
  if(this.state.all.lang === 'EN'){
    this.setState({
      all: txtEN
    });
  }else{
    this.setState({
      all: txtPL
    });
   
  }
}
 render() {
   return (
      <>
        <Header />
        <Nav changeLang = {this.changeLang} lang={this.state.all.lang}/>
        <MainContainer all={this.state.all}/>
        <Footer />
      </>
    )
  }
}

export default App


//https://blog.bitsrc.io/react-communication-between-components-c0cfccfa996a