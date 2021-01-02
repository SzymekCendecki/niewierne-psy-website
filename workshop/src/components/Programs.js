import React, { PureComponent } from 'react'
import Button from './Button'

export class Programs extends PureComponent {

  render() {
    return (
      <>
        <div id='programs'>

          <p className='title'>
            {this.props.programs.title}
          </p>
           
            <div id='programsBtn'>
                <Button name={this.props.programs.converter} url='https://szymekcendecki.github.io/simple-converter/'/>
                <Button name={this.props.programs.converter2} url='https://szymekcendecki.github.io/simple-converter-ver2/' />
                <Button name={this.props.programs.scssLib} url='https://szymekcendecki.github.io/scss_css-library/' />
                <Button name={this.props.programs.atlas} url='https://szymekcendecki.github.io/atlas-85/'/>
            </div>

            <p id='programsDescription'>
              {this.props.programs.description}
            </p>
        </div>        
      </>
    )
  }
}

export default Programs