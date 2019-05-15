import * as _ from 'lodash';

/**
 * @author: Shoukath Mohammed
 * @constant
 */
const INV_OPTIONS: any[] = [
  {
    key: 'Invalidate',
    value: 'INV'
  },
  {
    key: 'Invalidate for specific URL(s)',
    value: 'INV_URL'
  }
];

/**
 * @constant
 */
const ENVS: string[] = [
  'QA1',
  'QA2',
  'QA3',
  'QA4',
  'SIT1',
  'SIT2',
  'SIT3',
  'SIT4',
  'Beta',
  'Production'
];


/**
 * @export
 * @constant
 */
export const environment: any = {
  assetsType: ENVS,
  invOptions: INV_OPTIONS
};
