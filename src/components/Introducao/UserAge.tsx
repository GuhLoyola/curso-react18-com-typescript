type Props = {
    age: number;
}

const UserAge = ({ age }: Props) => {
    return (
        <h4>Eu tenho {age} anos</h4>
    )
}

export default UserAge