function* gen(x) {
    var y = yield x + 2;
    return y;
}

function* each(n) {
    for (var i = 0; i < 10; i++) {
        yield i + n;
    }
}

var e = each(1);

console.log(e.next());
console.log(e.next());
console.log(e.next());
console.log(e.next());

console.log(e.next());






// var g = gen(1);
// var val = g.next(1);
// console.log(val);

// val = g.next(1);
// console.log(val);

// val = g.next(1);
// console.log(val);