import React, { PureComponent } from 'react'
import Button from './Button'

export class Games extends PureComponent {
  render() {
    return (
      <>
        <div id='games'>

            <p className='title'>
                GRY
            </p>
           
            <div id='gamesBtn'>
                <Button name = {this.props.games.audacesRemastered} url = 'https://szymekcendecki.github.io/Audaces-remastered/' />
                <Button name = {this.props.games.audacesPowerfull} url = 'https://szymekcendecki.github.io/Audaces-powerfull/' />
                <Button name = {this.props.games.hellOfTheStars} url = 'https://szymekcendecki.github.io/Pieklo-z-gwiazd/' />
                <Button name = {this.props.games.pirateCruise} url = 'https://szymekcendecki.github.io/piracki-rejs/' />
                <Button name = {this.props.games.simpleGame} url = 'https://szymekcendecki.github.io/simpleGame/' />
                <Button name = {this.props.games.simpleGame2} url = 'https://szymekcendecki.github.io/simpleGame2/' />
            </div>

            <p id='gamesDescription'>
              Uwzględniono tylko grywalne wersje gier.
            </p>
        </div>        
      </>
    )
  }
}

export default Games