import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

// access the native window object.
declare const window: any;

/**
 * @author: Shoukath Mohammed
 */
@Injectable({
  providedIn: 'root'
})
export class UtilService {

  /**
   * @constructor
   */
  constructor() { }

  /**
   * @public
   * @description:  takes the unformatted string
   * and formats it by replacing the the arbitary
   * text inside the curly braces with the dynamic
   * values.
   *
   * This is similar to `String.format` but it doesn't
   * extract the arguments directly instead it expects
   * the second argument to be an array of dynamic values
   * corresponding to their indexes in the string to format.
   *
   * If there are no dynamic values to be replaced,
   * the second argument can be passed as false
   *
   * @return: {string} formatted string
   */
  public static format(key: string,
    args: any[] | null, strConst: any): string {

    let str: string = strConst ? strConst[key] : key;

    // in case if URL doesn't exist return empty
    if (!str) { return ''; }

    // if there are no arguments return the URL itself
    if (!args) { return str; }

    // construct the url by replacing the arbitary
    // text inside the curly braces
    for (let i = 0; i < (<any[]>args).length; i++) {
      str = str.replace(new RegExp('\\{' + i + '\\}', 'gi'),
        (<any[]>args)[i]);
    }
    return str;
  }

  /**
   * @public
   * @param: {content<string>}
   * @return: boolean
   *
   * @description: returns if the given string has
   * embedded HTML
   */
  public static isHTML(content: string): boolean {
    const re: Function = RegExp.prototype.test.bind(/(<([^>]+)>)/i);
    return re(content);
  }

  /**
   * @public
   * @param: {arr<Subscription[]>}
   * @return: void
   * @description: unsubscribes active subscriptions on the page.
   */
  public static unsubscribe(arr: Subscription[]): void {
    if (!Array.isArray(arr)) { return; }

    // safely unsubscribe the subscriptions
    for (let i = 0; i < arr.length; i++) {
      if (!!arr[i]) {
        arr[i].unsubscribe();
      }
    }
  }

  /**
   * @public
   * @return: string - device type based on user agent.
   * @description: a helper function that detects the
   * device type based on the device's user agent.
   */
  public static getDeviceType(): string {
    // Other
    let userAgent: string = 'DESKTOP';
    const ua: string = window.navigator.userAgent;
    // ANDROID
    if (/Android/i.test(ua)) {
      // ANDROID MOBILE
      if (/Mobile/i.test(ua)) {
        userAgent = 'AND_MOBILE';
        // ANDROID GLASS
      } else if (/Glass/i.test(ua)) {
        userAgent = 'AND_GLASS';
        // ANDROID TABLET
      } else {
        userAgent = 'AND_TABLET';
      }
      // iOS Mobile
    } else if (/iPhone|iPod/i.test(ua)) {
      userAgent = 'IOS_MOBILE';
      // iOS Tablet
    } else if (/iPad/i.test(ua)) {
      userAgent = 'IOS_TABLET';
      // Windows
    } else if (/IEMobile/i.test(ua)) {
      userAgent = 'WIN_MOBILE';
      // Other identified vendor
    } else if (/webOS|BlackBerry|Opera Mini/i.test(ua)) {
      userAgent = 'OTH_MOBILE';
    }
    return userAgent;
  }
}
