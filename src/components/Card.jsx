import React, {useState} from 'react'
import '../styles/Card.css'
import data from '../data'
import Form from './Form'

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
    <div id='card'>
        {/* <Form /> */}
        <div id='card-main'>
            <div>
                <h1 className='card-count'>{index + 1}/{users.length}</h1>
                <h2 className='card-name'>{user.name.first} {user.name.last}</h2>
            </div>
            <div className='details'>
                <p><span className='card-titles'>From:</span> {user.city}, {user.country}</p>
                <p><span className='card-titles'>Job Title:</span> {user.title}</p>
                <p><span className='card-titles'>Employer:</span> {user.employer}</p>
            </div>
            <div className='movies'>
                <p className='card-titles'>Favorite Movies:</p>
                <p className='movie'>1. {user.favoriteMovies[0]}</p>
                <p className='movie'>2. {user.favoriteMovies[1]}</p>
                <p className='movie'>3. {user.favoriteMovies[2]}</p>
                
            </div>
        </div>

        <div className='btn-container'>
            {index === 0 ? <button className=' index-btn hide'></button> : <button className='index-btn' onClick={prev}>{'<'} Previous</button>}
            <div className='edit-container'>
                <button className='info-btn'>Edit</button>
                <button className='info-btn' onClick={deleteHandler}>Delete</button>
                <button className='info-btn'>New</button>
            </div>
            {index === data.length - 1 ? <p className='index-btn hide'></p> : <button className='index-btn' onClick={next}>Next {'>'}</button>}
        </div>

    </div>
  )
}

export default Card