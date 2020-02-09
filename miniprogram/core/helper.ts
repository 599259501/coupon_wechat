
//const path = require('path');

const exceptionAbort = (code: number, msg: string,data: Object)=>{
 throw {
   code,
   msg,
   data
 };
}

const objectGet = (obj: any, key:string, defaultValue:any=""):any => {
  if (!obj || !(obj instanceof Object) || !obj.hasOwnProperty(key)) {
    return defaultValue;
  }

  return obj[key];
}

const arrayGet = (arr: Array<number>, key:number, defaultValue=""):any => {
  if (!(arr instanceof Array) || arr.indexOf(key) == -1) {
    return defaultValue;
  }

  return arr[key];
}

const appPath = (): string => {
  // return path.resolve(__dirname, '..');
  return "";
}

export {
  exceptionAbort,
  objectGet,
  arrayGet,
  appPath,
}