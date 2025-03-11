function adicionarTarefa() {
    // Adiciona uma mensagem de tarefa adiocionada
    let mensagem = "Tarefa adicionada com sucesso!";

    //pega o input do usuario pelo id 
    let inputTarefa = document.getElementById("inputTarefa")
    // Recebe o valor digitado pelo usuario
    let tarefa = inputTarefa.value
    //recebe a mensagem de sucesso
    document.getElementById("mensagem").textContent = mensagem;

    // pega pelo id a lista no index
    let listaTarefas = document.getElementById("listaTarefas")
    //cria um elemento de lista
    let novaTarefa = document.createElement("li")

    //sobrescrecve o valor digitado pelo usuario
    novaTarefa.textContent = tarefa

    //adiciona a lista uma nova tarefa
    listaTarefas.appendChild(novaTarefa)

    //apaga o input depois de adicionada tarefa com sucesso
    inputTarefa.value = ""
}