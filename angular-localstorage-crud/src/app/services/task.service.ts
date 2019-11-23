import { Injectable } from '@angular/core';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[];

  constructor() {
    /*  this.tasks = [
        {title: 'write', description: 'I have to write', hide: true},
        {title: 'write 2', description: 'I have to write 2', hide: true}
      ];*/
   }

    //Obtener tareas
    getTasks(){
     return this.tasks;
    }

    //Agregar tareas
    addTask(task: Task){
      this.tasks.push(task);
    }

    //Eliminar tareas
    deleteTask(task: Task){
        for(let i =0; i<this.tasks.length; i++)
        {
          if(task == this.tasks[i]){
            this.tasks.splice(i, 1);
          }
        }
    }

}
