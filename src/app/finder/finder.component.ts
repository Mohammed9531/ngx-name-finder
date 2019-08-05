import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { STEP_ONE, STEP_TWO } from './../shared/constants/steps.constants';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

/**
 * @constant
 */
const defaults: any = {
  count: 0,
  result: '',
  stepOne: [],
  stepTwo: [],
  activeStep: 1,
  totalLength: 0
};

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {
  /**
   * @public
   * @type: any
   */
  public steps: any;

  /**
   * @public
   * @type: any[]
   */
  public finderSteps: any[];

  /**
   * @public
   * @type: FormGroup
   */
  public nameFinderForm: FormGroup;

   /**
   * @constructor
   * @param: {router<Router>}
   * @param: {ajax<AjaxService>}
   * @param: {profileService<ProfileService>}
   */
  constructor(private fb: FormBuilder) {}

  /**
   * @public
   * @type: method<life cycle hook>
   * @return: void
   * @description: N/A
   */
  public ngOnInit(): void {
    this.steps = _.extend({}, defaults);
    this.buildForm();
  }

  /**
   * @public
   * @returns: void
   * @description: a helper method that
   * sets the group data.
   */
  public setGroupData(step: any, stepType: string): void {
    this.steps.count += 1;
    this.steps[stepType].push(step);

    if (this.steps.count === this.steps.totalLength) {
      if (this.steps.activeStep === 2) {
        this.steps.count = 0;
        this.steps.activeStep += 1;
        this.finderSteps = STEP_TWO;
      } else {
        this.getResult();
        this.steps.activeStep = 0;
      }
    }
  }

  /**
   * @public
   * @returns: void
   * @description: a helper method that
   * determines the result.
   */
  public getResult(): void {
    const arr: string[] = [];
    const stps: any = this.steps;

    for (let i = 0; i < stps.stepOne.length; i++) {
      for (let j = 0; j < stps.stepOne[i].group.length; j++) {
        for (let k = 0; k < stps.stepTwo[i].group.length; k++) {
          if (stps.stepOne[i].group[j] === stps.stepTwo[i].group[k]) {
            arr.push(stps.stepTwo[i].group[k]);
          }
        }
      }
    }
    this.steps.result = arr.join('');
  }

  /**
   * @public
   * @returns: string
   * @description: a helper method that
   * joins the letter array.
   */
  public getLetters(arr: string[]): string {
    return arr.join(' ');
  }

  /**
   * @public
   * @returns: void
   * @description: a helper method that
   * builds the finder form.
   */
  public buildForm(): void {
    this.nameFinderForm = this.fb.group({
      count: new FormControl('', [Validators.required])
    });
  }

  /**
   * @public
   * @returns: void
   * @description: a helper method that
   * resets the finder.
   */
  public resetFinder(): void {
    this.finderSteps = null;
    this.nameFinderForm.reset();
    this.steps = _.extend({}, defaults);
  }

  /**
   * @public
   * @param: {e<MouseEvent>}
   * @return: void
   * @description: a helper method that
   * gets triggered on form submission.
   */
  public onSubmit(e: any): void {
    if (this.nameFinderForm.valid) {
      this.steps.activeStep += 1;
      this.finderSteps = STEP_ONE;
      this.steps.totalLength = +this.nameFinderForm.get('count').value;
    }
  }
}
