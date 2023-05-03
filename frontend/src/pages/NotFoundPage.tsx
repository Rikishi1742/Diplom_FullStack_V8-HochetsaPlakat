import React from 'react'

type Props = {}

function NotFoundPage({}: Props) {
  return (
    <div className='Container' style={{height: "90vh", justifyContent: "center"}}>
      <div>
        <h2 style={{textAlign: "center", color: "#fff"}}>404</h2>
        <p>Page not found</p>
      </div>
    </div>
  )
}

export default NotFoundPage