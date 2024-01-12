
import React from 'react'

const RightCard = () => {
  return (
    <div className='flex flex-wrap max-w-[17rem] gap-2'>
        <div className="flex p-2 border rounded bg-light-2 dark:bg-dark-4">
            <span>React Js Developer</span>
        </div>
        <div className="flex p-2 border rounded bg-light-2 dark:bg-dark-4">
            <span>React Native</span>
        </div>
        <div className="flex p-2 border rounded bg-light-2 dark:bg-dark-4">
            <span>Flutter Developer</span>
        </div>
    </div>
  )
}

export default RightCard