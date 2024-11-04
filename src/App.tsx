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

  const isLogged = true

  return (
    <>
      <h1>
        {isLogged ? 'Esse é um componente de função' : 'Não está logado'}
      </h1>

      {isLogged && <User />}

      {/* Também da pra usar o operador ternário */}
    </>
  )



}

export default App