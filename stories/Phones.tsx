import React from 'react'

export const Phones = ({cars}) => {
    return (
        <div> 
            {cars.map(home => {
                return <div>{home.car}</div>
            })} 
        </div>
    )
}
