import { MouseEvent } from "react"

const PropagacaoDeEventos = () => {

  const handleClick = (e: MouseEvent) => {
    // Interromper a propagação
    e.stopPropagation()
    alert('Cliquei no botão')
  }

  return (
    <div onClick={() => alert('Cliquei na div')} style={{ padding: 30, backgroundColor: 'blueviolet', borderRadius: '8px' }}>
      <button onClick={handleClick} >
        Clique Aqui
      </button>
    </div>
  )
}

export default PropagacaoDeEventos