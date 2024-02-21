import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CarConfigOptions, CarModelOptions, ModelResponse, configsModel } from '../../models/modelOptions';
import { CommonService } from '../../services/common.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-third-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './third-step.component.html',
  styleUrl: './third-step.component.scss'
})
export class ThirdStepComponent implements OnInit {

  selectedConfigs: configsModel | null = null;
  model!: CarModelOptions;
  selectedColorCode!:string;
  modelCode!: string;
  selectedColor!:string;
  selectedImageUrl!: string;
  modeldesc!: string;

  constructor(private commonService: CommonService, private storageService: StorageService,) { }

  ngOnInit(): void {
    const model = this.storageService.retrieveModel();
    this.modeldesc = this.storageService.retrieveSelectedModel() || '';
    const colorDesc = this.storageService.retrieveSelectedColor();
    const configDesc = this.storageService.retrieveSelectedConfig();
    this.modelCode = model?.code || '';
    this.selectedColorCode = model?.colors.find(color => color.description === colorDesc)?.code || '';
    const selectedConfigs = this.storageService.retrieveSelectedConfig();
    this.selectedConfigs = this.storageService.retrieveConfig() || {id:0,description:'',range:0,speed:0,price:0};
    this.selectedColor = this.storageService.retrieveSelectedColor() || '';
    this.selectedImageUrl =this.commonService.fetchImageUrl(this.modelCode,this.selectedColorCode);
  }

  getPriceByColorCode(colorCode: string, model: CarModelOptions) {
    const color = model.colors.find(color => color.description === colorCode);
    return color ? color.price : null;
  }

  getDescByColorCode(colorCode: string, model: CarModelOptions) {
    const color = model.colors.find(color => color.description === colorCode);
    return color ? color.description : null;
  }

  getTotalCost(): number {
    let total = 0;
  
    if (this.selectedConfigs) {
      total += this.selectedConfigs.price || 0;
      total += this.getPriceByColorCode(this.selectedColor, this.model) || 0;
  
      // if (this.selectedConfigs.towHatch) {
      //   total += 1000;
      // }
      // if (this.selectedConfigs.yoke) {
      //   total += 1000;
      // }
    }
  
    return total;
  }
  

}
