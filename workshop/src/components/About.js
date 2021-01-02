import React, { PureComponent } from 'react'

export class About extends PureComponent {
 
  render() {
    return (
      <>
        <div className="about">

          <p className='title'>
            {this.props.title}          
          </p> 

          <p className='aboutDescription'>
            {this.props.description}
          </p>      

        </div>
      </>
    )
  }
}

export default About


