import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, id, teamImageUrl} = teamData

  return (
    <li className="team-list-container">
      <Link to={`/team-matches/${id}`} className="team-item-link">
        <img alt={name} src={teamImageUrl} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
