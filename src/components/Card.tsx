import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const Card = ({ children }: Props) => {
    return (
        <div style={
            { border: '1px solid blueviolet', width: '100%', height: '100%', borderRadius: '15px', textAlign: "center", backgroundColor: '#0e0e0e', cursor: 'pointer' }}>
            {children}
        </div>
    )
}

export default Card