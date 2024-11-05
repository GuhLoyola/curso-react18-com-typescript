import UserAge from "./UserAge"
import UserEmail from "./UserEmail"
import UserName from "./UserName"
import UserRoles from "./UserRoles"

type Props = {
    name: string;
    email?: string;
    age: number;
    role: {
        id: number,
        job: string
    }[]
}

const User = ({ name, age, role, email }: Props) => {
    return (
        <>
            <UserName name={name} />
            {email && <UserEmail email={email} />}
            <UserAge age={age} />
            <UserRoles roles={role} />
        </>
    )
}

export default User