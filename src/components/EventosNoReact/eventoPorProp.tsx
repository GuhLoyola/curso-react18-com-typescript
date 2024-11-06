import Button from "./Button"

const EventoPorProp = () => {

    const handleClick = (label: string) => alert(label)

    return (
        <div className="container">
            <Button onClick={handleClick} />
        </div>
    )
}

export default EventoPorProp