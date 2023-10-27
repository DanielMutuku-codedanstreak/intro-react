import React from 'react'

export default function Landing(props) {
  return (
    <div className='bg-light' id='landing'>
        <h1>React Intro</h1>
        <h2>By {props.name}</h2>
        <div className='container mx-5 mt-3'>
            <div className='row'>
                <div className='md-6'>
                    <img src='../public/images/me-8.jpeg'/>
                </div>
                <div className='md-6'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
