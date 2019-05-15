import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'finder-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
   * @constructor
   * @param: {router: Router}
   */
  constructor(private router: Router) { }

  /**
   * @public
   * @type: method<life cycle hook>
   * @return: void
   * @description: N/A
   */
  public ngOnInit() {}

  /**
   * @public
   * @return: void
   * @description: a helper method that navigates
   * user to the requested route.
   */
  public goTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}
