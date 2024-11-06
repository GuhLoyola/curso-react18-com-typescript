type Props = {
    name: string
}

const UserName = ({ name }: Props) => {
    return (
        <h4>Meu nome é {name.toUpperCase()}</h4>
    )
}

export default UserName