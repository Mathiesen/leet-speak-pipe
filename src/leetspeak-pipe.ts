import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leetspeak'
})
export class LeetspeakPipe implements PipeTransform {
  leetMap = new Map<string, string>();

  constructor() {
    this.leetMap.set("a", "4");
    this.leetMap.set("b", "8");
    this.leetMap.set("e", "3");
    this.leetMap.set("g", "6");
    this.leetMap.set("i", "!");
    this.leetMap.set("l", "1");
    this.leetMap.set("o", "0");
    this.leetMap.set("p", "9");
    this.leetMap.set("r", "Я");
    this.leetMap.set("q", "2");
    this.leetMap.set("s", "5");
    this.leetMap.set("t", "7");
    this.leetMap.set("q", "2");
  }

  transform(value: string): string {
    let leetString : string = "";
    for (let i = 0; i < value.length; i++){
      const char : string = value[i].toLowerCase();
      if(this.leetMap.has(char)){
        leetString = leetString.concat(<string>this.leetMap.get(char));
      } else {
        leetString = leetString.concat(char);
      }
    }
    return leetString;
  }

}
