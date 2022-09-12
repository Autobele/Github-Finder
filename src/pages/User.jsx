import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import GithubContext from '../context/github/GithubContext'

export default function User() {

  const {user, getUser} = useContext(GithubContext)
  const params = useParams()

  useEffect(() => {
    getUser(params.login)
  }, [])

  return (
    <div>User</div>
  )
}
