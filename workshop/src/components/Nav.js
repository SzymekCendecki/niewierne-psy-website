import React, { PureComponent } from 'react'
import BtnLang from './BtnLang'

export class Nav extends PureComponent {
  
render() {
   return (
      <nav className='nav'>
        <BtnLang  changeLang = {this.props.changeLang} lang={this.props.lang} />      
      </nav>
    )
  }
}

export default Nav
