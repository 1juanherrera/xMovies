

export const Button = ({ text, id, onClick, className }) => {
    return (
        <button className={`btn ${className}`} id={ id } onClick={() => onClick()}>
            { text }
        </button>
    )
}

export const ButtonOutline = ({ text, id, onClick, className }) => {
    return (
        <button className={`btn__outline ${className}`} id={ id } onClick={() => onClick()}>
            { text }
        </button>
    )
}

export const ButtonViewMore = ({ text, id, onClick, className }) => {
    return (
        <button className={`btn__outline ${className}`} id={ id }>
            { text }
        </button>
    )
}