import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskListService } from 'src/app/services/task-list.service';
import { HouseholdMembersService } from 'src/app/services/household-members.service';
import { HouseholdMember } from 'src/app/models/household-member';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  taskModel: Task;
  householdMemberModel:HouseholdMember[];

  constructor(private taskService: TaskListService, private householdMemberService: HouseholdMembersService) {
    //initialize empty array
    this.taskModel = <Task>{};
   }


  ngOnInit() {
      this.householdMemberService.get().subscribe(taskData => {
        this.householdMemberModel = <HouseholdMember[]><any>taskData;
      });
    }
  

  addTask() {

    const subs = this.taskService.post(this.taskModel).subscribe(res => {
      subs.unsubscribe();
    });
  }
}
