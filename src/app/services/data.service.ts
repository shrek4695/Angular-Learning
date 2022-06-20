import { EventEmitter, Injectable } from "@angular/core";
import { LoggingServices } from "./logging.service";

@Injectable({providedIn: 'root'})
export class DataService {

    constructor(private loggingService: LoggingServices) {}
    tasks = [
        {
          name: 'Coding',
          status: 'active'
        },
        {
          name: 'Practise',
          status: 'inactive'
        },
        {
          name: 'Learn',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<string>();

      addTask(taskDetails:{name: string, status: string}) {
        this.tasks.push(taskDetails);
        this.loggingService.logStatus(taskDetails.status);
      }

      changeTaskStatus(updateInfo: {id: number, newStatus: string}) {
        this.tasks[updateInfo.id].status = updateInfo.newStatus;
        this.loggingService.logStatus(updateInfo.newStatus);
      }
}