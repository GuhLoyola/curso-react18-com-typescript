import { FormEvent } from "react"

const RemovendoComportamentosPadrao = () => {

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('Formulário enviado')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button>Enviar</button>
    </form>
  )
}

export default RemovendoComportamentosPadrao