import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  //   template: ``,
  templateUrl: './body.component.html',
})
export class BodyComponent {

  showCard = true;

  phrase: any = {
    message: 'I am strill training Angular',
    author: 'Daniel Minguella'
  }

  heroes: string[] = ['Batman', 'Superman', 'Spiderman', 'Captain America'];

}
