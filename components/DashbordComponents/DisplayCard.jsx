import React from 'react'

const DisplayCard = ({object , cardOption , open }) => {
  return (
    <div>
      {open === cardOption}
    </div>
  )
}

export default DisplayCard