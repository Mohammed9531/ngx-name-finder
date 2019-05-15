import * as _ from 'lodash';
import { filter } from 'rxjs/operators';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

// access to the native window object.
declare const window: any;

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  /**
   * @public
   * @type: any
   */
  public buildInfo: any;

  /**
   * @public
   * @type: number
   */
  public currentYear: number;

  /**
   * @public
   * @type: string | null
   */
  public dynamicClassName: string | null = null;

  /**
   * @constructor
   * @param: {router<Router>}
   * @param: {route<ActivatedRoute>}
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  /**
   * @public
   * @type: method<life cycle hook>
   * @return: void
   * @description: N/A
   */
  public ngOnInit(): void {
    this.subscribeToRouterEvents();
    this.currentYear = new Date().getFullYear();
    this.buildInfo = _.get(window, 'gcp.buildInfo');
  }

  /**
   * @public
   * @type: method<life cycle hook>
   * @return: void
   * @description: N/A
   */
  public ngAfterViewInit(): void {
    window.onbeforeunload = () => window.scroll(0, 0);
  }

  /**
   * @public
   * @return: void
   * @description: a helper method that
   * subcribes to the router events and
   * appends a class to the body element
   * from the route data.
   */
  public subscribeToRouterEvents(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).forEach(e => {
      const firstChild: any = this.route.root.firstChild;

      if (!firstChild) { return; }
      const data: any = firstChild.snapshot.data;
      this.updateClass(data);
    });
  }

  /**
   * @public
   * @return: void
   * @description: a helper method that
   * updates the class name based on the
   * route data.
   */
  public updateClass(data: any): void {
    this.dynamicClassName = data['bgClass'] || null;
  }
}
