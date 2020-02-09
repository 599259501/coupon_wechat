import {IMiddleware} from './IMiddleware';
import {PageContainer} from '../../core/container';

export class CheckLogin implements IMiddleware{
  container: PageContainer;

  constructor(container: PageContainer){
    this.container = container;
  }

  handler(context: any): any{
    console.log("context=", context);
  }
}