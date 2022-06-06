import React from 'react'

export const Button = ({style='uk-button uk-button-default', text='Click', handle}) => {
    return (
        <button
            className={style}
            onClick={handle}
        >
            {text}
        </button>
    )
}
