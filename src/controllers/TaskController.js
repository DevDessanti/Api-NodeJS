const database = require('../database/connection')

class TaskController {
    novaTarefa(request, response){
        const {tarefa, descricao, responsavel} = request.body
            
        console.log(tarefa, descricao, responsavel);

        database.insert({tarefa,descricao,responsavel}).table("tasks").then(data=>{
            console.log(data);
            response.json({message:"Tarefa criada com sucesso!"})
        }).catch(error=>{
            console.log(error);
        })
    }

    listarTarefa(request, response){
        database.select("*").table("tasks").then(tarefas=>{
            console.log(tarefas);
            response.json(tarefas)
        }).catch(error=>{
            console.log(error);
        })
    }

    listarUmaTarefa(request, response){
        const id = request.params.id;

        database.select("*").table("tasks").where({id:id}).then(umaTarefa=>{
            console.log(id);
            response.json(umaTarefa)
        }).catch(error=>{
            console.log(error);
            response.json({message:"ID não encontrado!"})
        })
    }

    deletarUmaTarefa(request, response){
        const id = request.params.id

        database.delete("*").table("tasks").where({id:id}).then(tarefa=>{
            console.log(tarefa);
            response.json(tarefa)
        }).catch(error=>{
            console.log(error);
        })
    }

    atualizaTarefa(request, response){
        const id = request.params.id;
        const {descricao} = request.body;

        database.where({id:id}).update({descricao:descricao}).table("tasks").then(data=>{
            response.json({message:"Tarefa atualizada com sucesso!"})
        }).catch(error=>{
            console.log(error);
        })
    }
}

module.exports = new TaskController()