interface ButtonProps {
    onClick?: () => any
    buttonName: string
    color: string
    background: string
    borderColor: string
}

export default function Button({ onClick, buttonName = 'button', color = 'black', background = 'white', borderColor }: ButtonProps) {
    return (
        <button
            style={{ color: color, background: background, borderColor: borderColor }}
            onClick={onClick}
        >
            {buttonName}
        </button>
    )
}
