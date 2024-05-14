import React from 'react'


// COntainer sirf height width or thodi styling dene ke kam ata he
function Container({children}) {
  return (
    <div className=' w-full max-w-7xl mx-auto px-4 '>
        {children}
    </div>
  )
}

export default Container