import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  onShowFirstName = () => {
    const {isFirstName} = this.state
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  onShowLastName = () => {
    const {isLastName} = this.state
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state
    return (
      <div className="ShowHideContainer">
        <h1>Show/Hide</h1>
        <div>
          <button type="button" className="show" onClick={this.onShowFirstName}>
            Show/Hide Firstname
          </button>
          <button type="button" className="show" onClick={this.onShowLastName}>
            Show/Hide Lasttname
          </button>
        </div>
        <div className="names">
          {isFirstName && <p className="firstName">Joe</p>}
          {isLastName && <p className="LastName">Jonas</p>}
        </div>
      </div>
    )
  }
}
export default ShowHide
