import React, {useState} from 'react'
import './Card.css'
import data from '../data'

function Card(props) {
    const users = props.data.slice(0, data.length)
    const [index, setIndex] = useState(0)
    let user = users[index]

    const prev = () => {
        if (index > 0) {
          setIndex(index - 1) 
        }
    }

    const next = () => {
        if(index < users.length) {
            setIndex(index + 1)
        }
    }

    const deleteHandler = () => {
        data.splice(index, 1)
    }
    // console.log(user)

  return (
    <div className='card'>
        <div>
            <h1>{index + 1}/{users.length}</h1>
            <h2 className='card-name'>{user.name.first} {user.name.last}</h2>
        </div>

        <br />
        <div>
            <p><span className='card-titles'>From:</span> {user.city}</p>
            <p><span className='card-titles'>Job Title:</span> {user.title}</p>
            <p><span className='card-titles'>Employer:</span> {user.employer}</p>
        </div>

        <p className='card-titles'>Favorite Movies:</p>
        <p className='movies'>1. {user.favoriteMovies[0]}</p>
        <p className='movies'>2. {user.favoriteMovies[1]}</p>
        <p className='movies'>3. {user.favoriteMovies[2]}</p>
        <div className='btn-house'>
            <button className='btn-index' onClick={prev}>{'<'} Previous</button>
            <button className='btn-editors'>Edit</button>
            <button className='btn-editors' onClick={deleteHandler}>Delete</button>
            <button className='btn-editors'>New</button>
            <button className='btn-index' onClick={next}>Next {'>'}</button>
        </div>

    </div>
  )
}

export default Card