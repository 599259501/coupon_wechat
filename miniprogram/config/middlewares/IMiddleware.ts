export interface IMiddleware{
  handler(context: any): any;
}