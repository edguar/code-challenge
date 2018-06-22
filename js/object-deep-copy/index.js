function deepCopy(obj) {
    var _return = Array.isArray(obj) ? [] : {};

    for (var key in obj) {
        var el = obj[key];
        _return[key] = typeof el === "object" ? deepCopy(el) : el;
    }

    return _return;
}
