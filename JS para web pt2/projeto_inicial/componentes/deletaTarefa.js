const deletarTarefa = (atualiza, id) => {
    const index = id
    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefaCadastradas.splice(index, 1)
    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastradas))
    atualiza()
}

const BotaoDeleta = (atualiza, id) => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.classList.add('check-button')
    botaoDeleta.innerText = "Deletar"
    botaoDeleta.addEventListener('click', () => deletarTarefa(atualiza, id))
    return botaoDeleta
}


export default BotaoDeleta