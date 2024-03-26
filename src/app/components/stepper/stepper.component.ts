import { Component } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  name = 'Angular';


  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }

  private stepper!: Stepper;
  ngOnInit() {
    const stepperElement = document.querySelector('#stepper1');
    if (stepperElement !== null) {
      this.stepper = new Stepper(stepperElement, {
        linear: false,
        animation: true
      })
    }
  }
}


