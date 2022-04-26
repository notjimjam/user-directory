import React, {useState} from 'react'
import './Card.css'
import data from '../data'

function Card(props) {
    const users = props.data.slice(0, data.length)
    const [index, setIndex] = useState(0)
    let user = users[index]
    console.log(user)

  return (
    <div className='card'>
        <h2 className='card-name'>{user.name.first} {user.name.last}</h2>

        <br />
        <p><span className='card-titles'>From:</span> {user.city}</p>
        <p><span className='card-titles'>Job Title:</span> {user.title}</p>
        <p><span className='card-titles'>Employer:</span> {user.employer}</p>
        <br />
        <p className='card-titles'>Favorite Movies:</p>
        <ol className='card-list'>
            <li>{user.favoriteMovies[0]}</li>
            <li>{user.favoriteMovies[1]}</li>
            <li>{user.favoriteMovies[2]}</li>
        </ol>
        <div>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>

    </div>
  )
}

export default Card