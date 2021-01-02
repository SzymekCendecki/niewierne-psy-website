import React, { PureComponent } from 'react'
import About from './About'
import Games from './Games'
import Programs from './Programs'

export class MainContainer extends PureComponent {
  
  render() {
   return (
      <>
        <div id="mainContainer" className="mainContainer">
          <About title={this.props.all.aboutTitle} description={this.props.all.aboutDescription}/>
          <Games games={this.props.all.games} />
          <Programs programs={this.props.all.programs} />
        </div>
      </>
    )
  }
}

export default MainContainer
