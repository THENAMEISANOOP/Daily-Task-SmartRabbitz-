import React from 'react'

const child = ({minus}) => {
  return (
    <div>
        <button onClick={minus}>-</button>
      
    </div>
  )
}

export default React.memo(child)
