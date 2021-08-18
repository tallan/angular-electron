import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 12 Electron Webpack5 Demo';
  constructor(private es: ElectronService) {}

  ngOnInit() {
    this.es.isElectronApp ? this.title = "Electron Application" : this.title = "Standard Angular Web Application";
  }
}