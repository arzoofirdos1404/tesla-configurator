import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { CarConfigOptions, configsModel } from '../../models/modelOptions';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../../services/storage.service';
import { CommonService } from '../../services/common.service';



@Component({
  selector: 'app-second-step',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, MatSelectModule, 
    MatFormFieldModule, MatInputModule, MatCheckboxModule],
  templateUrl: './second-step.component.html',
  styleUrl: './second-step.component.scss'
})
export class SecondStepComponent {

  configOptions!: CarConfigOptions;
  config!: configsModel;
  selectedDetails: string = '';
  selectedConfig!:string;
  towHitch!: Boolean;
  yoke!: Boolean;
  modelCode!:string;
  selectedColorCode!: string;
  selectedImageUrl!: string;
  constructor(private http:HttpClient,private storageService: StorageService,private commonService: CommonService) {}
  
  ngOnInit(): void {
    const model = this.storageService.retrieveModel();
    const modeldesc = this.storageService.retrieveSelectedModel();
    const colorDesc = this.storageService.retrieveSelectedColor();
    this.modelCode = model?.code || '';
    this.selectedColorCode = model?.colors.find(color => color.description === colorDesc)?.code || '';
    this.loadConfigOptions(this.modelCode);
    this.selectedImageUrl =this.commonService.fetchImageUrl(this.modelCode,this.selectedColorCode);
  }

loadConfigOptions(modelCode: string): void {
        this.http.get<CarConfigOptions>(`/options/${modelCode}`).subscribe(
        (options) => {
          this.configOptions = options;
          this.selectedConfig = this.storageService.retrieveSelectedConfig() || '';
          
        },
        (error) => {
          console.error('Error loading options:', error);
        }
      );
  }

  onconfigSelection(event: any): void {
   this.config = this.configOptions.configs.find(config => config.description === event.value) || 
    { id: 0,
      description: '',
      range: 0,
      speed: 0,
      price: 0}
    this.storageService.storeConfig(this.config);
    this.storageService.storeSelectedConfig(event.value);
  }
}
