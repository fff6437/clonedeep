cloneDeep = (obj) => {
    let isObject = Object.prototype.toString.call(obj) === "[object Object]";
        isArray = Object.prototype.toString.call(obj) === "[object Array]";
    if (isObject) {
        let newObj = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = cloneDeep(obj[key]);
            }
        }
        return newObj;
    } else if (isArray) {
        let newArr = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newArr[key] = cloneDeep(obj[key]);
            }
        }
        return newArr;
    } else {
        return obj;
    }
}