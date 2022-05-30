import React from 'react'
import { Prueba } from './Prueba'

export const App = () => {
    const nums = [1,2,3,4,5,6,7,8];
    return (
        <div className="uk-grid-row-large uk-grid-column-medium uk-child-width-1-2@s uk-child-width-1-4@m uk-grid">
            {
                nums.map(value => (
                    <Prueba
                        key={value}
                        number={value} 
                    />
                ))
            }
        </div>
    )
}
