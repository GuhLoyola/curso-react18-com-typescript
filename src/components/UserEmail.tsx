type Props = {
    email: string
}

const UserEmail = ({ email }: Props) => {
    return (
        <h4>Meu email é {email}</h4>
    )
}

export default UserEmail