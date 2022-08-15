import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    isLoading: true,
    teamsList: [],
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedTeamsList = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsList: updatedTeamsList, isLoading: false})
  }

  renderTeamsList = () => {
    const {teamsList} = this.state

    return (
      <ul className="teams-list">
        {teamsList.map(team => (
          <TeamCard teamData={team} key={team.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Bars" color="#fff9f6" height={50} width={190} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-container">
        <div className="dashboard-heading-container">
          <img
            alt="ipl logo"
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div className="teams-list-container">
          {isLoading ? this.renderLoader() : this.renderTeamsList()}
        </div>
      </div>
    )
  }
}

export default Home
