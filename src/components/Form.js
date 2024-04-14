import React from 'react'

export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit} className='searchForm'>
      <input type="text" placeholder='Enter username or email' onChange={props.onChange} value={props.value}/>
      <button type='submit'>Search User</button>
    </form>
  )
}
