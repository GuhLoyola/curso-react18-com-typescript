import Card from './Card'
import User from './User'

const componenteFunção = () => {
    return (
        <>
            <h1>
                Meu primeiro componente de usuário
            </h1>

            <Card>
                <h2>Olá</h2>
                <User name="Gustavo" age={21} email="gustavo.loyola@gmail.com" role={[{ id: 1, job: 'CEO' }]} />
            </Card>


            {/* Também da pra usar o operador ternário */}
        </>
    )
}

export default componenteFunção