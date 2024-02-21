import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [AsyncPipe, JsonPipe,  RouterModule, HomeComponent,RouterLink,RouterOutlet, RouterLinkActive]
})
export class AppComponent {
  name = 'Angular';
  title = 'Tesla Configuration';
}
