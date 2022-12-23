import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title :string = 'Task Tracker';
  showAddTask :boolean=true;
  subscription !: Subscription;

  constructor(private UiService:UiService , private router:Router){
    this.subscription=this.UiService
    .onToggle()
    .subscribe(value=>(this.showAddTask=value));
  }
  
  ngOnInit():void{}

  toggleAddTask(){
  this.UiService.toggleAddTask();
  }
  hasRouter(route:string){
    return this.router.url===route;
  }
}
