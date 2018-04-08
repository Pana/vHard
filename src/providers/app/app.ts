import { Injectable } from '@angular/core';
import { LoggerProvider } from '../logger/logger';
import { PersistentProvider } from '../persistent/persistent';

@Injectable()
export class AppProvider {

  constructor(
    private logger: LoggerProvider,
    private persistent: PersistentProvider,
  ) {
    this.logger.info('AppProvider initialized.');
  }

  public load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.logger.info('App provider load');
      this.persistent.load();
      resolve();
    });
  }
}
