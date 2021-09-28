/**
 * Stub of some data class to house our example problem, written in TypeScript (that will be compiled to JavaScript). This will operate
 *
 * 1. Describe a use case where the static function implemented below might be used and why it would be useful.
 *
 * 2. What's wrong with `setBitMask` in its current implementation? Can you come up with an example problem and a solution to rectify the problem?
 */
export class DataModel {

  /**
   * Helper for setting bitwise data based on masks so we can control individual bits in said data.
   *
   * @param data THe bitwise data that should be manipulated.
   * @param mask The bitwise mask to inform what bits to manipulate.
   * @param enableMask Optional parameter, that if set to true, will forcefully set the mask bits in the bitwise data to true.
   */
  public static setBitMask(data: number, mask: number, enableMask?: boolean): number {
    if (!!enableMask) {
      return data | mask;
    }

    return data & ~mask;
  }

  constructor() {
  }

}
