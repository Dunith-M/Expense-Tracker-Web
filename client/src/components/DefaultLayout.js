import React from 'react'

function DefaultLayout(props) {
  return (
    <div classname='layout'>

        <div className='header'>
            <h1 className='logo'>Expense Tracker</h1>
        </div>

        <div className='content'>
            {props.children}
        </div>
      
    </div>
  )
}

export default DefaultLayout
