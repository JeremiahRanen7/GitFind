import React from 'react'

export default function GitUser(props) {
  return (
    <div className='gituser'>
      <img src={props.logo} alt="User" width={50} height={50} className='userLogo'/>
      <a href={props.user} target='_blank' type='button' rel="noopener noreferrer" className='btn btn-light btn-sm my-3'>{props.username} <i class="fa-solid fa-eye"></i></a>
    </div>
  )
}
