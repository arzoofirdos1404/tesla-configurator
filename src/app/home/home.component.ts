import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { FirstStepComponent } from '../step-components/first-step/first-step.component';
import { SecondStepComponent } from '../step-components/second-step/second-step.component';
import { ThirdStepComponent } from '../step-components/third-step/third-step.component';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonService } from '../services/common.service';
import {
  CarConfigOptions,
  CarModelOptions,
  configsModel,
} from '../models/modelOptions';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    CommonModule,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
