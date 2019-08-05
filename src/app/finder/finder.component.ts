import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { STEP_ONE } from './../shared/constants/finder-steps/step-one.constants';

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
  public steps: any = {
    count: 0,
    stepOne: [],
    stepTwo: [],
    totalLength: 0
  };

  /**
   * @public
   * @type: any[]
   */
  public finderSteps: any[];

  /**
   * @public
   * @type: any[]
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
    this.finderSteps = STEP_ONE;
  }

  /**
   * @public
   * @returns: string
   * @description: a helper method that
   * joins the letter array.
   */
  public setGroupData(step: any, i: number): void {
    this.steps.stepOne.push(step);

    console.log(this.steps.stepOne);
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

  public buildForm(): void {
    this.nameFinderForm = this.fb.group({

    });
  }

  /**
   * @public
   * @param: {form<FormGroup>}
   * @param: {e<MouseEvent>}
   * @return: void
   * @description: a helper method that
   * gets triggered on form submission.
   */
  public onSubmit(value: any): void {

  }
}
