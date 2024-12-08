import React from 'react'

function Progress({index,numQuestion}) {
  return (
    <header className='progress'>
        <p>Question <strong>{index}</strong> / {numQuestion} </p>
    </header>
  )
}

export default Progress