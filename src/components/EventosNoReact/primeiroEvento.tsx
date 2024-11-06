const PrimeiroEvento = () => {

    function click() {
        alert('Eu sou um evento de uma função externa 😀😀')
    }

    function dizerNome(nome: string) {
        alert('Eu sou uma função que recebe um parâmetro 😉')
        alert(`Olá, meu nome é ${nome}`)
    }

    return (
        <div className="container">
            <button onClick={click}>
                Evento função externa
            </button>

            <button
                onClick={() => alert('Eu também sou um evento, mas sou uma função dentro do evento de onClick 😀')}>
                Evento função inline
            </button>

            <button onClick={() => dizerNome('Gustavo')}>
                Evento com parâmetro
            </button>


            {/* 
            
           Jeito errado de se passar um evento:
            
           => Não se chama uma função diretamente no eventHandler, vc passa ela como referência ou
                usa uma arrow function antes

            <button onClick={click()}>
                Clique aqui
            </button>
            
            */}
        </div>
    )
}

export default PrimeiroEvento