import { Component, OnInit } from '@angular/core';
import { TaskListService } from 'src/app/services/task-list.service';
import { Task } from 'src/app/models/task';
import { HouseholdMember } from 'src/app/models/household-member';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  householdMembers:HouseholdMember[];

  constructor(private taskListService:TaskListService) { }

  ngOnInit() {
    this.taskListService.get().subscribe(taskData => {
      this.tasks = <Task[]><any>taskData;
    });
  }

}
