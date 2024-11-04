const UserRoles = () => {

    const roles = [
        { id: 1, job: 'CEO' },
        { id: 2, job: 'CTO' },
        { id: 3, job: 'Admin' }
    ]

    const filteredRoles = roles.filter(value => value.id === 1)

    return (
        <ul>
            {
                filteredRoles.map((role, index) => (
                    <li key={index}>
                        {role.job}
                    </li>
                ))
            }
        </ul>
    )
}

export default UserRoles