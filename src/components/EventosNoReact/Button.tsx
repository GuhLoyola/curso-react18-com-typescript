type Props = {
    onClick: (label: string) => void
}

const Button = ({ onClick }: Props) => {
    return (
        <button onClick={() => onClick('Meu texto do alert 😀')}>
            Meu texto do botão
        </button>
    )
}

export default Button