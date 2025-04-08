import { Component, importProvidersFrom } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {ThemePalette} from '@angular/material/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, RouterOutlet],
  standalone: true
})
export class AppComponent {
  title = 'zivu-front';
    task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };

}
