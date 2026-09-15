import React, {memo} from 'react'

const Child = () => {
    console.log("hiii");
  return (
    <div>
      
    </div>
  )
}
//memo is used to optimize component liek if we connect child component to parent normaly it will render every time so to optimize it will use memo so it will render only once
export default memo(Child)
