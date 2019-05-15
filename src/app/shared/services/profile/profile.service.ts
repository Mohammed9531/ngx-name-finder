import { Injectable } from '@angular/core';

/**
 * @author: Shoukath Mohammed
 */
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  /**
   * @private
   * @type: any
   */
  private cachedResponse: any;

  /**
   * @constructor
   */
  constructor() { }

  /**
   * @public
   * @param: {response<any>}
   * @returns: void
   * @description: a setter for the bcc response.
   */
  public setBccResponse(response: any): void {
    this.cachedResponse = response;
  }

  /**
   * @public
   * @returns: any
   * @description: a getter method for the bcc
   * response.
   */
  public getBccResponse(): any {
    return this.cachedResponse;
  }
}
