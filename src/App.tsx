// Exemplo de um componente de CLASSE:

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

      <User name="Gustavo" email="gustavo.loyola@gmail.com" age={21} role={[{ id: 1, job: 'CEO' }]} />

      <User name="João" age={18} role={[{ id: 1, job: 'Admin' }]} />

      {/* Também da pra usar o operador ternário */}
    </>
  )



}

export default App