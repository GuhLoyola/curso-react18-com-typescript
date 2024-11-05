import UserAge from "./UserAge"
import UserEmail from "./UserEmail"
import UserName from "./UserName"
import UserRoles from "./UserRoles"

type Props = {
    name: string;
    email: string;
    age: number;
    role: {
        id: number,
        job: string
    }[]
}

const User = (props: Props) => {
    return (
        <>
            <UserName name={props.name} />
            <UserEmail email={props.email} />
            <UserAge age={props.age} />
            <UserRoles roles={props.role} />
        </>
    )
}

export default User