type Props = {
    roles: {
        id: number;
        job: string;
    }[]
}

const UserRoles = ({ roles }: Props) => {
    return (
        <ul>
            {
                roles.map((role, index) => (
                    <li key={index}>
                        {role.job}
                    </li>
                ))
            }
        </ul>
    )
}

export default UserRoles