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
      <h1>Esse é um componente de função</h1>

      <User />
    </>
  )
}

export default App