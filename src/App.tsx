// Exemplo de um componente de CLASSE:

import Card from "./components/Card"
import User from "./components/User"

/*

import React from "react";

class App extends React.Component {
  render() {
    return <h1>Esse é um componente de classe</h1>
  }
}

*/

// Exemplo de um componente de FUNÇÃO: 

const App = () => {

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

export default App