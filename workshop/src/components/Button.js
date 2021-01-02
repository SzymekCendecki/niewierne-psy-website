import React, { PureComponent } from 'react'

export class Button extends PureComponent {

  render(props) {
    return (
      <>
        <a href={this.props.url} rel="noreferrer" target='_blank'>
          <button className="btn">
            <p>  
              {this.props.name} 
            </p>
          </button>
        </a>
      </>
    )
  }
}

export default Button