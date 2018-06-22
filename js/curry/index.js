function abc(a, b, c) {
  return a + b + c;
}

function abcdef(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}


function curry() {
    var str = this(...arguments);

    if (String(str).indexOf('undefined') === -1) {
        return str;
    } else {
        return curry.bind(this, ...arguments);
    }
}

function assert (a, b) {
  if (a !== b) {
    throw new Error();
  }
}

abc.curry = curry;
abcdef.curry = curry;


assert(abc.curry('A', 'B', 'C'), 'ABC');
assert(abc.curry('A')('B')('C'), 'ABC');
assert(abc.curry('A', 'B')('C'), 'ABC');
assert(abcdef.curry('A')('B')('C')('D')('E')('F'), 'ABCDEF');
assert(abcdef.curry('A', 'B', 'C')('D', 'E', 'F'), 'ABCDEF');
