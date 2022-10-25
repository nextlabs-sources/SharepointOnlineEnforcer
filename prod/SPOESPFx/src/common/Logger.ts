import { STOP_LOG } from './constants';

export default class Logger {
  public static printMessage(...args: any[]): void {
    if (!STOP_LOG) {
      console.log(...args);
    }
  }

  public static printTrace(...args: any[]): void {
    if (!STOP_LOG) {
      console.log(...args);
    }
  }

  public static printError(...args: any[]): void {
    if (!STOP_LOG) {
      console.error(...args);
    }
  }

  public static printWarn(...args: any[]): void {
    if (!STOP_LOG) {
      console.warn(...args);
    }
  }
}
