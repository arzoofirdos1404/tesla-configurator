
export class configsModel {
  id!: number;
  description!: string;
  range!: number;
  speed!: number;
  price!: number;
}

export class CarConfigOptions {
  configs!: configsModel[];
  towHitch!: boolean;
  yoke!: boolean;
}

export class colorsModel {
  code!: string;
  description!: string;
  price!: number
}

export class CarModelOptions {
  code!: string;
  description!: string;
  colors!: colorsModel[];
}

export class ModelResponse {
  code!: string;
  description!: string;
  colors!: {
    code: string,
    description: string,
    price: number
  }[]
}

export class ModelSelected {
  code: string = '';
  color: string = '';
  config: string = '';
  tow: boolean = false;
  yoke: boolean = false;

  step1IsValid() {
    return !this.areNullOrEmpty([this.code, this.color]);
  }

  step2IsValid() {
    return !this.areNullOrEmpty([this.code, this.color, this.config]);
  }

  private isNullOrEmpty(test: string){
    return test === null || test.length == 0;
  }

  private areNullOrEmpty(tests: string[]){
    for (let test of tests){
      if (this.isNullOrEmpty(test))
        return true;
    }
    return false;
  }

}

