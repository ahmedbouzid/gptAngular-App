import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cuurentAction: any;
  constructor(private router: Router) {}
  action = [
    { route: '/index', titre: 'index', icon: 'house' },
    { route: '/gpt', titre: 'gpt', icon: 'person' },
  ];

  handleAction(action: any) {
    this.router.navigate([action.route]);
    this.cuurentAction = action;
  }
}
