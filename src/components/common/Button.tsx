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
            style={{ color: color, background: background, borderColor: borderColor, borderRadius: '20px', padding: '10px 20px', cursor: 'pointer' }}
            onClick={onClick}
        >
            {buttonName}
        </button>
    )
}
