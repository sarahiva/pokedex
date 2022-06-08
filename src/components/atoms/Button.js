
export const Button = ({style='uk-button uk-button-default', text='Click', handle}) => {
    return (
        <button
            className={`${style} text-default mg`}
            onClick={handle}
        >
            {text}
        </button>
    )
}
