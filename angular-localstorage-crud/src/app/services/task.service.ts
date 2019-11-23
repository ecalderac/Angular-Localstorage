import { Injectable } from '@angular/core';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[];

  constructor() {
      this.tasks = [
        //{title: 'write', description: 'I have to write', hide: true},
        //{title: 'write 2', description: 'I have to write 2', hide: true}
      ];
   }

    //Obtener tareas
    getTasks(){
      if(localStorage.getItem('tasks') === null){
        return this.tasks;
      }else{
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
        return this.tasks;
      }
     
    }

    //Agregar tareas
    addTask(task: Task){
      this.tasks.push(task);
      let tasks: Task[] = [];
      if(localStorage.getItem('tasks') === null){
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }

    
    }

    //Eliminar tareas
    deleteTask(task: Task){
        for(let i =0; i<this.tasks.length; i++)
        {
          if(task == this.tasks[i]){
            this.tasks.splice(i, 1);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
          }
        }
    }

}
