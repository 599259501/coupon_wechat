"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptionAbort = function (code, msg, data) {
    throw {
        code: code,
        msg: msg,
        data: data
    };
};
exports.exceptionAbort = exceptionAbort;
var objectGet = function (obj, key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = ""; }
    if (!obj || !(obj instanceof Object) || !obj.hasOwnProperty(key)) {
        return defaultValue;
    }
    return obj[key];
};
exports.objectGet = objectGet;
var arrayGet = function (arr, key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = ""; }
    if (!(arr instanceof Array) || arr.indexOf(key) == -1) {
        return defaultValue;
    }
    return arr[key];
};
exports.arrayGet = arrayGet;
var appPath = function () {
    return "";
};
exports.appPath = appPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsSUFBTSxjQUFjLEdBQUcsVUFBQyxJQUFZLEVBQUUsR0FBVyxFQUFDLElBQVk7SUFDN0QsTUFBTTtRQUNKLElBQUksTUFBQTtRQUNKLEdBQUcsS0FBQTtRQUNILElBQUksTUFBQTtLQUNMLENBQUM7QUFDSCxDQUFDLENBQUE7QUF3QkMsd0NBQWM7QUF0QmhCLElBQU0sU0FBUyxHQUFHLFVBQUMsR0FBUSxFQUFFLEdBQVUsRUFBRSxZQUFtQjtJQUFuQiw2QkFBQSxFQUFBLGlCQUFtQjtJQUMxRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLFlBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2hFLE9BQU8sWUFBWSxDQUFDO0tBQ3JCO0lBRUQsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFBO0FBaUJDLDhCQUFTO0FBZlgsSUFBTSxRQUFRLEdBQUcsVUFBQyxHQUFrQixFQUFFLEdBQVUsRUFBRSxZQUFlO0lBQWYsNkJBQUEsRUFBQSxpQkFBZTtJQUMvRCxJQUFJLENBQUMsQ0FBQyxHQUFHLFlBQVksS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNyRCxPQUFPLFlBQVksQ0FBQztLQUNyQjtJQUVELE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLENBQUMsQ0FBQTtBQVVDLDRCQUFRO0FBUlYsSUFBTSxPQUFPLEdBQUc7SUFFZCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUMsQ0FBQTtBQU1DLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiXG4vL2NvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmNvbnN0IGV4Y2VwdGlvbkFib3J0ID0gKGNvZGU6IG51bWJlciwgbXNnOiBzdHJpbmcsZGF0YTogT2JqZWN0KT0+e1xuIHRocm93IHtcbiAgIGNvZGUsXG4gICBtc2csXG4gICBkYXRhXG4gfTtcbn1cblxuY29uc3Qgb2JqZWN0R2V0ID0gKG9iajogYW55LCBrZXk6c3RyaW5nLCBkZWZhdWx0VmFsdWU6YW55PVwiXCIpOmFueSA9PiB7XG4gIGlmICghb2JqIHx8ICEob2JqIGluc3RhbmNlb2YgT2JqZWN0KSB8fCAhb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9ialtrZXldO1xufVxuXG5jb25zdCBhcnJheUdldCA9IChhcnI6IEFycmF5PG51bWJlcj4sIGtleTpudW1iZXIsIGRlZmF1bHRWYWx1ZT1cIlwiKTphbnkgPT4ge1xuICBpZiAoIShhcnIgaW5zdGFuY2VvZiBBcnJheSkgfHwgYXJyLmluZGV4T2Yoa2V5KSA9PSAtMSkge1xuICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gIH1cblxuICByZXR1cm4gYXJyW2tleV07XG59XG5cbmNvbnN0IGFwcFBhdGggPSAoKTogc3RyaW5nID0+IHtcbiAgLy8gcmV0dXJuIHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLicpO1xuICByZXR1cm4gXCJcIjtcbn1cblxuZXhwb3J0IHtcbiAgZXhjZXB0aW9uQWJvcnQsXG4gIG9iamVjdEdldCxcbiAgYXJyYXlHZXQsXG4gIGFwcFBhdGgsXG59Il19