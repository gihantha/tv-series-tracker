import React from 'react'

import './ActionCard.css';

const ActionCard = () => {
  return (
    <div className='action-card'>
        Add Your Favourite Show
      <form className='action-card-form'>
        <div>
        <label >Title</label><br/>
            <input type='text' placeholder='Name of the show'/>
        </div>
        <div>
            <label >Year</label><br/>
            <input type="number" min="1950" max="2099" placeholder='Year of the show'/>
        </div>
        <div>
            <label >Description</label><br/>
            <input type='text' placeholder='Description of the show'/>
        </div>
        <div>
            <label >Rating</label><br/>
            <input type='number' placeholder='Rate'/>
        </div>
        <div>
            <label >Show Poster</label><br/>
            <input type="image" src="img_submit.gif" alt="Submit" width="48" height="48"/>
        </div>
        <button>Clear</button><br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ActionCard


