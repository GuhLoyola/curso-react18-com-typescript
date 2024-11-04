import UserAge from "./UserAge"
import UserEmail from "./UserEmail"
import UserName from "./UserName"
import UserRoles from "./UserRoles"

const User = () => {
    return (
        <>
            <UserName />
            <UserEmail />
            <UserAge />
            <UserRoles />
        </>
    )
}

export default User