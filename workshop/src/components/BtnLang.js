import React, { PureComponent } from 'react'

export class BtnLang extends PureComponent {
  render() {
    return (
      <>
        <button id='btnLang' onClick={this.props.changeLang} >
          {this.props.lang}
        </button>
      </>
    )
  }
}



export default BtnLang
