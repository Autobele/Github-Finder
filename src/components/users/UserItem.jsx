import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

export default function UserItem({ user: {login, avatar_url} }) {
  return (
    <div className="card shadow-md compact bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h14">
              <img src={avatar_url} alt="avatar-user"/>
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link to={`/user/${login}`} className="text-base-content text-opacity-40">
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}