var h = void 0, m = !0, n = null, p = !1;
function aa() {
    return function () {
    }
}
function ba(a) {
    return function () {
        return this[a]
    }
}
var q, r = this;
function ca() {
}
function da(a) {
    var b = typeof a;
    if ("object" == b)if (a) {
        if (a instanceof Array)return"array";
        if (a instanceof Object)return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c)return"object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return"array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return"function"
    } else return"null";
    else if ("function" == b && "undefined" == typeof a.call)return"object";
    return b
}
function s(a) {
    return a !== h
}
function t(a) {
    return"array" == da(a)
}
function ea(a) {
    var b = da(a);
    return"array" == b || "object" == b && "number" == typeof a.length
}
function u(a) {
    return"string" == typeof a
}
function y(a) {
    return"number" == typeof a
}
function z(a) {
    return"function" == da(a)
}
function fa(a) {
    var b = typeof a;
    return"object" == b && a != n || "function" == b
}
function A(a) {
    return a[ga] || (a[ga] = ++ha)
}
var ga = "closure_uid_" + (1E9 * Math.random() >>> 0), ha = 0;
function ia(a, b, c) {
    return a.call.apply(a.bind, arguments)
}
function ja(a, b, c) {
    if (!a)throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function () {
        return a.apply(b, arguments)
    }
}
function ka(a, b, c) {
    ka = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
    return ka.apply(n, arguments)
}
function la(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
        var b = Array.prototype.slice.call(arguments);
        b.unshift.apply(b, c);
        return a.apply(this, b)
    }
}
var ma = Date.now || function () {
    return+new Date
};
function B(a, b) {
    function c() {
    }

    c.prototype = b.prototype;
    a.Ta = b.prototype;
    a.prototype = new c
};
var na = {}, oa, pa, qa;
function ra(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function sa(a) {
    if (!ta.test(a))return a;
    -1 != a.indexOf("&") && (a = a.replace(ua, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(va, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(wa, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(xa, "&quot;"));
    return a
}
var ua = /&/g, va = /</g, wa = />/g, xa = /\"/g, ta = /[&<>\"]/;
function ya(a) {
    return String(a).replace(/\-([a-z])/g, function (a, c) {
        return c.toUpperCase()
    })
}
function za(a) {
    var b = u(h) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return a.replace(RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
        return b + e.toUpperCase()
    })
};
var C = Array.prototype, Aa = C.indexOf ? function (a, b, c) {
    return C.indexOf.call(a, b, c)
} : function (a, b, c) {
    c = c == n ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (u(a))return!u(b) || 1 != b.length ? -1 : a.indexOf(b, c);
    for (; c < a.length; c++)if (c in a && a[c] === b)return c;
    return-1
}, Ba = C.forEach ? function (a, b, c) {
    C.forEach.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
}, Ca = C.filter ? function (a, b, c) {
    return C.filter.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = [], f = 0, g = u(a) ?
        a.split("") : a, k = 0; k < d; k++)if (k in g) {
        var l = g[k];
        b.call(c, l, k, a) && (e[f++] = l)
    }
    return e
}, Da = C.map ? function (a, b, c) {
    return C.map.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = Array(d), f = u(a) ? a.split("") : a, g = 0; g < d; g++)g in f && (e[g] = b.call(c, f[g], g, a));
    return e
};
function Ea(a, b) {
    0 <= Aa(a, b) || a.push(b)
}
function Fa(a, b) {
    var c = Aa(a, b);
    0 <= c && C.splice.call(a, c, 1)
}
function Ga(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
        return c
    }
    return[]
}
function Ha(a, b, c, d) {
    C.splice.apply(a, Ia(arguments, 1))
}
function Ia(a, b, c) {
    return 2 >= arguments.length ? C.slice.call(a, b) : C.slice.call(a, b, c)
};
function D(a, b) {
    this.x = s(a) ? a : 0;
    this.y = s(b) ? b : 0
}
q = D.prototype;
q.d = function () {
    return new D(this.x, this.y)
};
q.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
q.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
q.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
q.translate = function (a, b) {
    a instanceof D ? (this.x += a.x, this.y += a.y) : (this.x += a, y(b) && (this.y += b));
    return this
};
q.scale = function (a, b) {
    var c = y(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this
};
function Ja(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
q = Ja.prototype;
q.d = function () {
    return new Ja(this.top, this.right, this.bottom, this.left)
};
q.contains = function (a) {
    return!this || !a ? p : a instanceof Ja ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};
q.expand = function (a, b, c, d) {
    fa(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
    return this
};
q.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
q.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
q.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
q.translate = function (a, b) {
    a instanceof D ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, y(b) && (this.top += b, this.bottom += b));
    return this
};
q.scale = function (a, b) {
    var c = y(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this
};
function E(a, b) {
    this.width = a;
    this.height = b
}
q = E.prototype;
q.d = function () {
    return new E(this.width, this.height)
};
function Ka(a) {
    return a.width * a.height
}
q.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
q.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
q.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
q.scale = function (a, b) {
    var c = y(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this
};
Ja.prototype.size = function () {
    return new E(this.right - this.left, this.bottom - this.top)
};
function La() {
}
La.prototype.m = ca;
function F(a) {
    return a.mc ? a.mc : a
}
function Ma(a, b) {
    Na(b, a);
    b.mc = F(a);
    return b
};
var H = new La;
H.ua = aa();
H.hd = function () {
    var a = this.za, b = this.ob(), c = this.T || 1, d = c / a, e;
    if (this.a) {
        this.Xa && this.Xa.contains(b) && (e = Ka(this.Xa.size()) / Ka(b.size())) && 1.6 > e && 0.5 < e ? b = this.Xa : 1 != this.le && 0 != this.b.length && (this instanceof Oa || b.expand(12, 12, 12, 12));
        this.Xa = b;
        var f = b.size();
        e = f.d().scale(c).ceil();
        if (this.a.width != e.width || this.a.height != e.height)this.a.width = e.width, this.a.height = e.height, this.qb = 1;
        var g = this.n.d();
        this.i[I] && (g = this.i[I]);
        0 != e.width ? g.scale(f.width * d / e.width) : g.scale(1 / a);
        a = J(this);
        this.Db =
            (a.left - b.left) * c;
        this.Eb = (a.top - b.top) * c;
        b = this.j().d();
        a = this.P;
        b.width *= a.x;
        b.height *= a.y;
        b = b.scale(c);
        c = this.c.d();
        this.i[K] && (c = this.i[K]);
        c.x *= d;
        c.y *= d;
        c.x -= b.width + this.Db;
        c.y -= b.height + this.Eb;
        Pa(this.a, 100 * ((this.Db + b.width) / e.width), 100 * ((this.Eb + b.height) / e.height), m);
        !this.N[K] && (!this.N[I] && !this.N[Qa]) && (d = -(this.C %= 360), s(this.i[Qa]) && (d = -this.i[Qa]), Ra(this.a, Sa(new Ta, 0.1).translate(c.x, c.y).scale(g.x, g.y).rotate(d)));
        this.qb && (d = this.a.getContext("2d"), c = this.T || 1, d.clearRect(0,
            0, e.width, e.height), d.save(), d.translate(this.Db, this.Eb), d.scale(c, c), e = this.j(), g = this.P, d.translate(e.width * g.x, e.height * g.y), this.k.yc.call(this, d), d.restore(), this.qb = 0)
    }
};
H.update = aa();
H.yc = function (a) {
    if (this.p && (this.f != this.aa && (this.aa && L.Tc.call(this), this.f && L.gc.call(this)), !this.qa && !this.hb && !(0 == this.u || 1 == this.Mb))) {
        1 != this.u && (a.globalAlpha *= this.u);
        if (this.f) {
            L.oc.call(this.f);
            var b = this.aa, c = this.n;
            a.save();
            a.save();
            a.translate(b.Lc.x, b.Lc.y);
            a.rotate(-b.Mc);
            this.Pa && a.rotate((this.C %= 360) * Math.PI / 180);
            a.beginPath();
            a.moveTo(0, 0);
            a.lineTo(b.Qb / c.x, 0);
            a.lineTo(b.Qb / c.x, b.Pb / c.y);
            a.lineTo(0, b.Pb / c.y);
            a.closePath();
            a.restore();
            a.clip()
        }
        b = new D(0, 0);
        this.k.m.call(this,
            a);
        for (var d = 0, e; e = this.b[d]; d++) {
            var f = Ua(e, b).d(), g = e.C %= 360, c = e.n;
            a.save();
            a.translate(f.x, f.y);
            a.scale(c.x, c.y);
            0 != g && a.rotate(-g * Math.PI / 180);
            this.k.yc.call(e, a);
            a.restore()
        }
        1 != this.u && (a.globalAlpha /= this.u);
        this.aa && a.restore()
    }
};
function M(a, b) {
    this.x = a;
    this.y = b
}
B(M, D);
M.prototype.d = function () {
    return new M(this.x, this.y)
};
M.prototype.scale = D.prototype.scale;
M.prototype.rotate = function (a) {
    var b = Math.cos(a);
    a = Math.sin(a);
    var c = this.y * b + this.x * a;
    this.x = this.x * b - this.y * a;
    this.y = c;
    return this
};
function N() {
    0 != Va && (this.$d = Error().stack, Wa[A(this)] = this)
}
var Va = 0, Wa = {};
N.prototype.xc = p;
N.prototype.wc = function () {
    if (!this.xc && (this.xc = m, this.V(), 0 != Va)) {
        var a = A(this);
        delete Wa[a]
    }
};
N.prototype.V = function () {
    if (this.Qc)for (; this.Qc.length;)this.Qc.shift()()
};
function O(a, b) {
    this.type = a;
    this.currentTarget = this.target = b
}
q = O.prototype;
q.V = aa();
q.wc = aa();
q.Y = p;
q.defaultPrevented = p;
q.tb = m;
q.stopPropagation = function () {
    this.Y = m
};
q.preventDefault = function () {
    this.defaultPrevented = m;
    this.tb = p
};
var Xa = 0;
function Za() {
}
q = Za.prototype;
q.key = 0;
q.ra = p;
q.Za = p;
q.ib = function (a, b, c, d, e, f) {
    if (z(a))this.Ic = m; else if (a && a.handleEvent && z(a.handleEvent))this.Ic = p; else throw Error("Invalid listener argument");
    this.ea = a;
    this.Sc = b;
    this.src = c;
    this.type = d;
    this.capture = !!e;
    this.Kb = f;
    this.Za = p;
    this.key = ++Xa;
    this.ra = p
};
q.handleEvent = function (a) {
    return this.Ic ? this.ea.call(this.Kb || this.src, a) : this.ea.handleEvent.call(this.ea, a)
};
var $a, ab, bb, cb, db, eb;
function fb() {
    return r.navigator ? r.navigator.userAgent : n
}
db = cb = bb = ab = $a = p;
var gb;
if (gb = fb()) {
    var hb = r.navigator;
    $a = 0 == gb.indexOf("Opera");
    ab = !$a && -1 != gb.indexOf("MSIE");
    cb = (bb = !$a && -1 != gb.indexOf("WebKit")) && -1 != gb.indexOf("Mobile");
    db = !$a && !bb && "Gecko" == hb.product
}
var ib = $a, P = ab, Q = db, R = bb, jb = cb, kb, lb = r.navigator;
kb = lb && lb.platform || "";
eb = -1 != kb.indexOf("Mac");
var mb = -1 != kb.indexOf("Win");
function nb() {
    var a = r.document;
    return a ? a.documentMode : h
}
var ob;
a:{
    var pb = "", qb;
    if (ib && r.opera)var rb = r.opera.version, pb = "function" == typeof rb ? rb() : rb; else if (Q ? qb = /rv\:([^\);]+)(\)|;)/ : P ? qb = /MSIE\s+([^\);]+)(\)|;)/ : R && (qb = /WebKit\/(\S+)/), qb)var sb = qb.exec(fb()), pb = sb ? sb[1] : "";
    if (P) {
        var tb = nb();
        if (tb > parseFloat(pb)) {
            ob = String(tb);
            break a
        }
    }
    ob = pb
}
var ub = {};
function S(a) {
    var b;
    if (!(b = ub[a])) {
        b = 0;
        for (var c = ra(String(ob)).split("."), d = ra(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var g = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), v = RegExp("(\\d*)(\\D*)", "g");
            do {
                var x = l.exec(g) || ["", "", ""], w = v.exec(k) || ["", "", ""];
                if (0 == x[0].length && 0 == w[0].length)break;
                b = ((0 == x[1].length ? 0 : parseInt(x[1], 10)) < (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? -1 : (0 == x[1].length ? 0 : parseInt(x[1], 10)) > (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? 1 : 0) || ((0 == x[2].length) <
                    (0 == w[2].length) ? -1 : (0 == x[2].length) > (0 == w[2].length) ? 1 : 0) || (x[2] < w[2] ? -1 : x[2] > w[2] ? 1 : 0)
            } while (0 == b)
        }
        b = ub[a] = 0 <= b
    }
    return b
}
var vb = r.document, wb = !vb || !P ? h : nb() || ("CSS1Compat" == vb.compatMode ? parseInt(ob, 10) : 5);
function xb(a, b) {
    for (var c in a)b.call(h, a[c], c, a)
}
var yb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Na(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)a[c] = d[c];
        for (var f = 0; f < yb.length; f++)c = yb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var zb = !P || P && 9 <= wb, Ab = P && !S("9");
!R || S("528");
Q && S("1.9b") || P && S("8") || ib && S("9.5") || R && S("528");
Q && !S("8") || P && S("9");
function Bb(a) {
    Bb[" "](a);
    return a
}
Bb[" "] = ca;
function Cb(a, b) {
    a && this.ib(a, b)
}
B(Cb, O);
q = Cb.prototype;
q.target = n;
q.relatedTarget = n;
q.offsetX = 0;
q.offsetY = 0;
q.clientX = 0;
q.clientY = 0;
q.screenX = 0;
q.screenY = 0;
q.button = 0;
q.keyCode = 0;
q.charCode = 0;
q.ctrlKey = p;
q.altKey = p;
q.shiftKey = p;
q.metaKey = p;
q.Dd = p;
q.ca = n;
q.ib = function (a, b) {
    var c = this.type = a.type;
    O.call(this, c);
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
        if (Q) {
            var e;
            a:{
                try {
                    Bb(d.nodeName);
                    e = m;
                    break a
                } catch (f) {
                }
                e = p
            }
            e || (d = n)
        }
    } else"mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    this.relatedTarget = d;
    this.offsetX = R || a.offsetX !== h ? a.offsetX : a.layerX;
    this.offsetY = R || a.offsetY !== h ? a.offsetY : a.layerY;
    this.clientX = a.clientX !== h ? a.clientX : a.pageX;
    this.clientY = a.clientY !== h ? a.clientY : a.pageY;
    this.screenX = a.screenX ||
        0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.Dd = eb ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.ca = a;
    a.defaultPrevented && this.preventDefault();
    delete this.Y
};
q.stopPropagation = function () {
    Cb.Ta.stopPropagation.call(this);
    this.ca.stopPropagation ? this.ca.stopPropagation() : this.ca.cancelBubble = m
};
q.preventDefault = function () {
    Cb.Ta.preventDefault.call(this);
    var a = this.ca;
    if (a.preventDefault)a.preventDefault(); else if (a.returnValue = p, Ab)try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)a.keyCode = -1
    } catch (b) {
    }
};
q.V = aa();
var Db = {}, T = {}, Eb = {}, Fb = {};
function U(a, b, c, d, e) {
    if (t(b)) {
        for (var f = 0; f < b.length; f++)U(a, b[f], c, d, e);
        return n
    }
    a = Gb(a, b, c, p, d, e);
    b = a.key;
    Db[b] = a;
    return b
}
function Gb(a, b, c, d, e, f) {
    if (!b)throw Error("Invalid event type");
    e = !!e;
    var g = T;
    b in g || (g[b] = {Q: 0, B: 0});
    g = g[b];
    e in g || (g[e] = {Q: 0, B: 0}, g.Q++);
    var g = g[e], k = A(a), l;
    g.B++;
    if (g[k]) {
        l = g[k];
        for (var v = 0; v < l.length; v++)if (g = l[v], g.ea == c && g.Kb == f) {
            if (g.ra)break;
            d || (l[v].Za = p);
            return l[v]
        }
    } else l = g[k] = [], g.Q++;
    v = Hb();
    g = new Za;
    g.ib(c, v, a, b, e, f);
    g.Za = d;
    v.src = a;
    v.ea = g;
    l.push(g);
    Eb[k] || (Eb[k] = []);
    Eb[k].push(g);
    a.addEventListener ? (a == r || !a.Fb) && a.addEventListener(b, v, e) : a.attachEvent(b in Fb ? Fb[b] : Fb[b] = "on" + b,
        v);
    return g
}
function Hb() {
    var a = Ib, b = zb ? function (c) {
        return a.call(b.src, b.ea, c)
    } : function (c) {
        c = a.call(b.src, b.ea, c);
        if (!c)return c
    };
    return b
}
function Jb(a, b, c, d, e) {
    if (t(b))for (var f = 0; f < b.length; f++)Jb(a, b[f], c, d, e); else a = Gb(a, b, c, m, d, e), Db[a.key] = a
}
function Kb(a, b, c, d, e) {
    if (t(b))for (var f = 0; f < b.length; f++)Kb(a, b[f], c, d, e); else {
        d = !!d;
        a:{
            f = T;
            if (b in f && (f = f[b], d in f && (f = f[d], a = A(a), f[a]))) {
                a = f[a];
                break a
            }
            a = n
        }
        if (a)for (f = 0; f < a.length; f++)if (a[f].ea == c && a[f].capture == d && a[f].Kb == e) {
            Lb(a[f].key);
            break
        }
    }
}
function Lb(a) {
    var b = Db[a];
    if (b && !b.ra) {
        var c = b.src, d = b.type, e = b.Sc, f = b.capture;
        c.removeEventListener ? (c == r || !c.Fb) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Fb ? Fb[d] : Fb[d] = "on" + d, e);
        c = A(c);
        Eb[c] && (e = Eb[c], Fa(e, b), 0 == e.length && delete Eb[c]);
        b.ra = m;
        if (b = T[d][f][c])b.Oc = m, Mb(d, f, c, b);
        delete Db[a]
    }
}
function Mb(a, b, c, d) {
    if (!d.mb && d.Oc) {
        for (var e = 0, f = 0; e < d.length; e++)d[e].ra ? d[e].Sc.src = n : (e != f && (d[f] = d[e]), f++);
        d.length = f;
        d.Oc = p;
        0 == f && (delete T[a][b][c], T[a][b].Q--, 0 == T[a][b].Q && (delete T[a][b], T[a].Q--), 0 == T[a].Q && delete T[a])
    }
}
function Nb(a) {
    var b = 0;
    if (a != n) {
        if (a = A(a), Eb[a]) {
            a = Eb[a];
            for (var c = a.length - 1; 0 <= c; c--)Lb(a[c].key), b++
        }
    } else xb(Db, function (a, c) {
        Lb(c);
        b++
    })
}
function Ob(a, b, c, d, e) {
    var f = 1;
    b = A(b);
    if (a[b]) {
        var g = --a.B, k = a[b];
        k.mb ? k.mb++ : k.mb = 1;
        try {
            for (var l = k.length, v = 0; v < l; v++) {
                var x = k[v];
                x && !x.ra && (f &= Pb(x, e) !== p)
            }
        } finally {
            a.B = Math.max(g, a.B), k.mb--, Mb(c, d, b, k)
        }
    }
    return Boolean(f)
}
function Pb(a, b) {
    a.Za && Lb(a.key);
    return a.handleEvent(b)
}
function Ib(a, b) {
    if (a.ra)return m;
    var c = a.type, d = T;
    if (!(c in d))return m;
    var d = d[c], e, f;
    if (!zb) {
        var g;
        if (!(g = b))a:{
            g = ["window", "event"];
            for (var k = r; e = g.shift();)if (k[e] != n)k = k[e]; else {
                g = n;
                break a
            }
            g = k
        }
        e = g;
        g = m in d;
        k = p in d;
        if (g) {
            if (0 > e.keyCode || e.returnValue != h)return m;
            a:{
                var l = p;
                if (0 == e.keyCode)try {
                    e.keyCode = -1;
                    break a
                } catch (v) {
                    l = m
                }
                if (l || e.returnValue == h)e.returnValue = m
            }
        }
        l = new Cb;
        l.ib(e, this);
        e = m;
        try {
            if (g) {
                for (var x = [], w = l.currentTarget; w; w = w.parentNode)x.push(w);
                f = d[m];
                f.B = f.Q;
                for (var G = x.length -
                    1; !l.Y && 0 <= G && f.B; G--)l.currentTarget = x[G], e &= Ob(f, x[G], c, m, l);
                if (k) {
                    f = d[p];
                    f.B = f.Q;
                    for (G = 0; !l.Y && G < x.length && f.B; G++)l.currentTarget = x[G], e &= Ob(f, x[G], c, p, l)
                }
            } else e = Pb(a, l)
        } finally {
            x && (x.length = 0)
        }
        return e
    }
    c = new Cb(b, this);
    return e = Pb(a, c)
};
function Qb() {
    N.call(this)
}
B(Qb, N);
q = Qb.prototype;
q.Fb = m;
q.Tb = n;
q.addEventListener = function (a, b, c, d) {
    U(this, a, b, c, d)
};
q.removeEventListener = function (a, b, c, d) {
    Kb(this, a, b, c, d)
};
q.dispatchEvent = function (a) {
    var b = a.type || a, c = T;
    if (b in c) {
        if (u(a))a = new O(a, this); else if (a instanceof O)a.target = a.target || this; else {
            var d = a;
            a = new O(b, this);
            Na(a, d)
        }
        var d = 1, e, c = c[b], b = m in c, f;
        if (b) {
            e = [];
            for (f = this; f; f = f.Tb)e.push(f);
            f = c[m];
            f.B = f.Q;
            for (var g = e.length - 1; !a.Y && 0 <= g && f.B; g--)a.currentTarget = e[g], d &= Ob(f, e[g], a.type, m, a) && a.tb != p
        }
        if (p in c)if (f = c[p], f.B = f.Q, b)for (g = 0; !a.Y && g < e.length && f.B; g++)a.currentTarget = e[g], d &= Ob(f, e[g], a.type, p, a) && a.tb != p; else for (e = this; !a.Y && e && f.B; e = e.Tb)a.currentTarget =
            e, d &= Ob(f, e, a.type, p, a) && a.tb != p;
        a = Boolean(d)
    } else a = m;
    return a
};
q.V = function () {
    Qb.Ta.V.call(this);
    Nb(this);
    this.Tb = n
};
var Rb, Sb, Tb, Ub, Vb, Wb = fb();
Sb = (Rb = R && jb && /(ipod|iphone|ipad)/i.test(Wb)) && z(Object.freeze);
Tb = R && jb && /(android)/i.test(Wb);
Ub = R && /playbook/i.test(Wb);
Vb = s(document.ontouchmove);
function Xb(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
q = Xb.prototype;
q.d = function () {
    return new Xb(this.left, this.top, this.width, this.height)
};
function Yb(a) {
    return new Xb(a.left, a.top, a.right - a.left, a.bottom - a.top)
}
function Zb(a, b) {
    var c = Math.max(a.left, b.left), d = Math.min(a.left + a.width, b.left + b.width);
    if (c <= d) {
        var e = Math.max(a.top, b.top), f = Math.min(a.top + a.height, b.top + b.height);
        if (e <= f)return new Xb(c, e, d - c, f - e)
    }
    return n
}
q.contains = function (a) {
    return a instanceof Xb ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
q.j = function () {
    return new E(this.width, this.height)
};
q.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
q.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
q.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
q.translate = function (a, b) {
    a instanceof D ? (this.left += a.x, this.top += a.y) : (this.left += a, y(b) && (this.top += b));
    return this
};
q.scale = function (a, b) {
    var c = y(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c;
    return this
};
var $b;
function ac(a, b) {
    var c;
    c = a.className;
    c = u(c) && c.match(/\S+/g) || [];
    for (var d = Ia(arguments, 1), e = c.length + d.length, f = c, g = 0; g < d.length; g++)0 <= Aa(f, d[g]) || f.push(d[g]);
    a.className = c.join(" ");
    return c.length == e
};
var bc = !P || P && 9 <= wb;
!Q && !P || P && P && 9 <= wb || Q && S("1.9.1");
P && S("9");
function cc(a) {
    return a ? new dc(ec(a)) : $b || ($b = new dc)
}
function fc(a, b) {
    xb(b, function (b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in gc ? a.setAttribute(gc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}
var gc = {cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width"};
function hc(a) {
    a = a.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new E(a.clientWidth, a.clientHeight)
}
function ic(a, b, c) {
    return jc(document, arguments)
}
function jc(a, b) {
    var c = b[0], d = b[1];
    if (!bc && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', sa(d.name), '"');
        if (d.type) {
            c.push(' type="', sa(d.type), '"');
            var e = {};
            Na(e, d);
            delete e.type;
            d = e
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (u(d) ? c.className = d : t(d) ? ac.apply(n, [c].concat(d)) : fc(c, d));
    2 < b.length && kc(a, c, b, 2);
    return c
}
function kc(a, b, c, d) {
    function e(c) {
        c && b.appendChild(u(c) ? a.createTextNode(c) : c)
    }

    for (; d < c.length; d++) {
        var f = c[d];
        ea(f) && !(fa(f) && 0 < f.nodeType) ? Ba(lc(f) ? Ga(f) : f, e) : e(f)
    }
}
function mc(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b)
}
function nc(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}
function oc(a) {
    a && a.parentNode && a.parentNode.removeChild(a)
}
function pc(a, b) {
    if (a.contains && 1 == b.nodeType)return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;)b = b.parentNode;
    return b == a
}
function ec(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function qc(a, b) {
    if ("textContent"in a)a.textContent = b; else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;)a.removeChild(a.lastChild);
        a.firstChild.data = b
    } else {
        for (var c; c = a.firstChild;)a.removeChild(c);
        a.appendChild(ec(a).createTextNode(String(b)))
    }
}
function lc(a) {
    if (a && "number" == typeof a.length) {
        if (fa(a))return"function" == typeof a.item || "string" == typeof a.item;
        if (z(a))return"function" == typeof a.item
    }
    return p
}
function dc(a) {
    this.na = a || r.document || document
}
function rc(a, b) {
    var c;
    c = a.na;
    var d = b && "*" != b ? b.toUpperCase() : "";
    c = c.querySelectorAll && c.querySelector && d ? c.querySelectorAll(d + "") : c.getElementsByTagName(d || "*");
    return c
}
q = dc.prototype;
q.tc = function (a, b, c) {
    return jc(this.na, arguments)
};
q.createElement = function (a) {
    return this.na.createElement(a)
};
q.createTextNode = function (a) {
    return this.na.createTextNode(String(a))
};
q.appendChild = function (a, b) {
    a.appendChild(b)
};
q.append = function (a, b) {
    kc(ec(a), a, arguments, 1)
};
q.contains = pc;
function sc(a, b, c) {
    var d;
    a:if (d = ya(c), a.style[d] === h && (c = (R ? "Webkit" : Q ? "Moz" : P ? "ms" : ib ? "O" : n) + za(c), a.style[c] !== h)) {
        d = c;
        break a
    }
    d && (a.style[d] = b)
}
function tc(a, b) {
    var c = ec(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, n)) ? c[b] || c.getPropertyValue(b) || "" : ""
}
function uc(a, b) {
    return tc(a, b) || (a.currentStyle ? a.currentStyle[b] : n) || a.style && a.style[b]
}
function vc(a) {
    var b = a.getBoundingClientRect();
    P && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}
function wc(a) {
    if (P && !(P && 8 <= wb))return a.offsetParent;
    var b = ec(a), c = uc(a, "position"), d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)if (c = uc(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))return a;
    return n
}
function xc(a) {
    var b = document.body, c = yc(a), d = yc(b), e;
    if (P) {
        e = zc(b, "borderLeft");
        var f = zc(b, "borderRight"), g = zc(b, "borderTop"), k = zc(b, "borderBottom");
        e = new Ja(g, f, k, e)
    } else e = tc(b, "borderLeftWidth"), f = tc(b, "borderRightWidth"), g = tc(b, "borderTopWidth"), k = tc(b, "borderBottomWidth"), e = new Ja(parseFloat(g), parseFloat(f), parseFloat(k), parseFloat(e));
    var f = c.y - d.y - e.top, g = b.clientHeight - a.offsetHeight, k = b.scrollLeft, l = b.scrollTop, k = k + (c.x - d.x - e.left - (b.clientWidth - a.offsetWidth) / 2);
    a = new D(k, l + (f - g / 2));
    b.scrollLeft =
        a.x;
    b.scrollTop = a.y
}
function yc(a) {
    var b, c = ec(a), d = uc(a, "position"), e = Q && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new D(0, 0), g;
    b = c ? ec(c) : document;
    if (g = P)if (g = !(P && 9 <= wb))g = "CSS1Compat" != cc(b).na.compatMode;
    g = g ? b.body : b.documentElement;
    if (a == g)return f;
    if (a.getBoundingClientRect)b = vc(a), c = cc(c).na, a = !R && "CSS1Compat" == c.compatMode ? c.documentElement : c.body, c = c.parentWindow || c.defaultView, a = new D(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop),
        f.x = b.left + a.x, f.y = b.top + a.y; else if (c.getBoxObjectFor && !e)b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY; else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
            if (R && "fixed" == uc(b, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        } while (b && b != a);
        if (ib || R && "absolute" == d)f.y -= c.body.offsetTop;
        for (b = a; (b = wc(b)) && b != c.body && b != g;)if (f.x -= b.scrollLeft, !ib || "TR" != b.tagName)f.y -= b.scrollTop
    }
    return f
}
function Ac(a, b, c) {
    if (b instanceof E)c = b.height, b = b.width; else if (c == h)throw Error("missing height argument");
    a.style.width = Bc(b);
    a.style.height = Bc(c)
}
function Bc(a) {
    "number" == typeof a && (a = Math.round(a) + "px");
    return a
}
function Cc(a) {
    if ("none" != uc(a, "display"))return Dc(a);
    var b = a.style, c = b.display, d = b.visibility, e = b.position;
    b.visibility = "hidden";
    b.position = "absolute";
    b.display = "inline";
    a = Dc(a);
    b.display = c;
    b.position = e;
    b.visibility = d;
    return a
}
function Dc(a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = R && !b && !c;
    return(!s(b) || d) && a.getBoundingClientRect ? (a = vc(a), new E(a.right - a.left, a.bottom - a.top)) : new E(b, c)
}
function Ec(a) {
    var b = cc(h), c = n;
    if (P)b = c = b.na.createStyleSheet(), P ? b.cssText = a : b.innerHTML = a; else {
        var d = rc(b, "head")[0];
        d || (c = rc(b, "body")[0], d = b.tc("head"), c.parentNode.insertBefore(d, c));
        var e = c = b.tc("style");
        P ? e.cssText = a : e.innerHTML = a;
        b.appendChild(d, c)
    }
    return c
}
var Fc = {thin: 2, medium: 4, thick: 6};
function zc(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : n))return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : n, d;
    if (c in Fc)d = Fc[c]; else if (/^\d+px?$/.test(c))d = parseInt(c, 10); else {
        d = a.style.left;
        var e = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = d;
        a.runtimeStyle.left = e;
        d = c
    }
    return d
};
var Gc, Hc, Ic, Jc, Kc, Lc, Mc;
(function () {
    var a = R ? "Webkit" : Q ? "Moz" : ib ? "O" : P ? "ms" : "", b = ic("div").style;
    Gc = "-" + a.toLowerCase() + "-transform";
    Hc = function (a) {
        return b[a] !== h ? a : p
    };
    Ic = function (b) {
        var d = b.charAt(0).toLowerCase() + b.substr(1), e = a + b;
        return Hc(b) ? b : Hc(d) ? d : Hc(e) ? e : h
    }
})();
var Nc = function () {
    var a = Ic("BorderRadius");
    return function (b, c, d, e) {
        e = e ? "%" : "px";
        d = s(d) ? d : c;
        c = (t(c) ? c.join(e + " ") : c) + e + "/" + ((t(d) ? d.join(e + " ") : d) + e);
        c != b.cd && (b.style[a] = b.cd = c)
    }
}();
function Ta(a) {
    this.zb = [];
    this.precision = 1;
    this.eb = m;
    this.ge && Sa(this, a)
}
function Oc(a, b) {
    a.eb = b;
    return a
}
Ta.prototype.scale = function (a, b) {
    this.zb.push("scale(" + a + "," + b + ")");
    return this
};
Ta.prototype.rotate = function (a, b) {
    var c;
    c = this.eb && (Rb || Ub) ? "rotate3d(0, 0, 1, " + a + (b ? b : "deg") + ")" : "rotate(" + a + (b ? b : "deg") + ")";
    0 != a && this.zb.push(c);
    return this
};
Ta.prototype.translate = function (a, b, c) {
    var d = 1 / this.precision, e = "translate";
    if (this.eb && (Rb || Ub))e += "3d";
    e += "(" + a * d + "px," + b * d + "px";
    if (this.eb && (Rb || Ub))e += "," + (c ? c : 0) * d + "px";
    this.zb.push(e + ")");
    return this
};
function Sa(a, b) {
    if (1 != a.precision) {
        var c = 1 / a.precision;
        a.scale(c, c);
        a.precision = 1
    }
    1 != b && (a.scale(b, b), a.precision = b);
    return a
}
Ta.prototype.toString = function () {
    1 != this.precision && Sa(this, 1);
    return this.zb.join(" ")
};
var Ra = function () {
    var a = Ic("Transform");
    return function (b, c) {
        var d = c.toString();
        d != b.Qd && (b.style[a] = b.Qd = d);
        oa = 1
    }
}(), Pa = function () {
    var a = Ic("TransformOrigin");
    return function (b, c, d, e) {
        e = e ? "%" : "px";
        c = c + e + " " + d + e;
        c != b.Rd && (b.style[a] = b.Rd = c)
    }
}();
(function () {
    function a(a, b) {
        if (!a.length)return a;
        for (var e = a.split("),"), f = 0; f < e.length - 1; f++)e[f] += ")";
        e = Ca(e, function (a) {
            return-1 == a.indexOf(b)
        });
        return e.join(",")
    }

    var b = Ic("Transition");
    Jc = !!b && !ib;
    Kc = function (c, d, e, f) {
        if (b) {
            var g = a(c.style[b], d);
            g.length && (g += ", ");
            g += d + " " + e + "s cubic-bezier(" + f[1] + "," + f[2] + "," + f[3] + "," + f[4] + ")";
            c.style[b] = g
        }
    };
    Lc = function (c, d) {
        b && c && (c.style[b] = a(c.style[b], d))
    };
    Mc = function (a, b, e) {
        if (a.Sd != b || a.pd != e)a.Sd = b, a.pd = e, Ac(a, b, e)
    }
})();
var L = new La;
L.ua = function () {
    for (var a = 0, b, c = 0; b = this.b[c]; c++)b = b instanceof V ? b.v : b, b == this.a.childNodes[a] ? a++ : (pc(this.J, b) && oc(b), L.ad(this.J, b, a++))
};
L.jd = function () {
    var a = this.j(), b = this.za, c = this.c, d = this.T || 1, e = this.ic;
    this.i[K] && (c = this.i[K]);
    var f = Math.round(a.width * d), g = Math.round(a.height * d), k = this.n.d();
    this.i[I] && (k = this.i[I].d());
    0 != f ? k.scale(a.width / (f * b / d)) : k.scale(1 / b);
    Mc(this.a, f, g);
    Pa(this.a, 100 * this.P.x, 100 * this.P.y, m);
    f = this.P.x * a.width * d;
    g = this.P.y * a.height * d;
    a = c.x * d / b - f;
    b = c.y * d / b - g;
    c = this.I ? this.I.Ab : 0;
    (0 != f - c || 0 != g - c) && (this.a == this.J && this.b.length) && L.wd.call(this);
    this.a != this.J && !this.N[K] && (!this.N[I] && !this.N[Qa]) && Ra(this.J,
        Oc(new Ta, e).translate(f - c, g - c));
    this.f != this.aa && (this.aa && L.Tc.call(this), this.f && L.gc.call(this));
    e = Oc(Sa(new Ta, 0.1), e);
    this.f && (L.oc.call(this.f), Sa(Sa(e, 0.1).translate(-this.f.ud - f, -this.f.vd - g).rotate(this.f.Mc, "rad").translate(f, g), 1));
    f = -(this.C %= 360);
    s(this.i[Qa]) && (f = -this.i[Qa]);
    e.translate(a, b).scale(k.x, k.y).rotate(f);
    !this.N[K] && (!this.N[I] && !this.N[Qa]) && Ra(this.a, e)
};
L.update = function () {
    if (this.a) {
        L.jd.call(this);
        if (!this.N[Pc]) {
            var a = this.u;
            s(this.i[Pc]) && (a = this.i[Pc]);
            if (this.l & Qc) {
                var b = this.a.style;
                "opacity"in b ? b.opacity = a : "MozOpacity"in b ? b.MozOpacity = a : "filter"in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * a + ")")
            }
        }
        this.l & Rc && (this.a.style.display = this.hb ? "none" : "block");
        this.qa || this.k.m.call(this, this.a)
    }
};
L.oc = function () {
    if (s(this.$b) && this.$b.p) {
        var a = this.$b, b = J(this), c = new D(b.left, b.top), d = new D(b.right, b.top), e = new D(b.right, b.bottom), b = a.getParent(), c = Sc(this, c, b), d = Sc(this, d, b), e = Sc(this, e, b), b = Math.atan2(c.y - d.y, d.x - c.x), f = d.x - c.x, g = c.y - d.y, k = e.x - d.x, l = e.y - d.y, d = Math.cos(b), e = Math.sin(b);
        this.Qb = Math.round(Math.sqrt(f * f + g * g));
        this.Pb = Math.round(Math.sqrt(k * k + l * l));
        F(a.k) == L && (f = a.v, Ac(f, this.Qb, this.Pb), Ra(f, Oc(Sa(new Ta, 0.1), this.ic).translate(c.x, c.y).rotate(-b, "rad")));
        F(this.k) == L && (this.a.style.display =
            "none");
        this.Lc = Tc(a, c.d());
        this.td = m;
        this.ud = d * c.x - e * c.y;
        this.vd = d * c.y + e * c.x;
        this.Mc = b
    }
};
L.ad = function (a, b, c) {
    c == h || a.childNodes.length <= c ? a.appendChild(b) : a.insertBefore(b, a.childNodes[c])
};
L.wd = function () {
    this.J = ic("div");
    for (var a = document.createDocumentFragment(), b; b = this.a.firstChild;)this.a.removeChild(b), a.appendChild(b);
    this.J.appendChild(a);
    this.a.appendChild(this.J)
};
L.Tc = function () {
    if (this.a != this.v) {
        if (F(this.k) == L) {
            oc(this.a);
            var a = this.v, b = a.parentNode;
            b && b.replaceChild(this.a, a);
            this.v = this.a
        }
        this.aa.Mb = 0;
        this.aa = n
    }
};
L.gc = function () {
    if (F(this.k) == L) {
        this.v = ic("div");
        this.v.style.cssText = "position:absolute;overflow:hidden;";
        Pa(this.v, 0, 0);
        var a = this.a, b = a.parentNode;
        b && b.replaceChild(this.v, a);
        this.v.appendChild(this.a)
    }
    this.f.Mb = 1;
    this.f.$b = this;
    this.aa = this.f;
    W(this.f, Uc)
};
function Vc(a, b) {
    a != n && this.append.apply(this, arguments)
}
Vc.prototype.Ja = "";
Vc.prototype.append = function (a, b, c) {
    this.Ja += a;
    if (b != n)for (var d = 1; d < arguments.length; d++)this.Ja += arguments[d];
    return this
};
Vc.prototype.toString = ba("Ja");
P && S(8);
(function () {
    var a = [
        [],
        []
    ], b = [
        [],
        []
    ];
    pa = function (c, d, e) {
        Ea((e ? b : a)[d || 0], c)
    };
    qa = function () {
        for (var c, d = 0; 2 > d; d++) {
            for (; a[d].length;)c = a[d][0], c.update(d), c.l = 0, c == a[d][0] && a[d].shift();
            a[d] = []
        }
        b = [
            [],
            []
        ]
    }
})();
var Uc = 1, Qc = 16, Rc = 32, K = 1, I = 2, Qa = 4, Pc = 5, Wc;
var Xc = new Vc;
Xc.append(".", "lime-director", " {position:absolute; -webkit-transform-origin: 0 0; -moz-transform-origin: 0 0; -o-transform-origin: 0 0; image-rendering:  optimizeSpeed; overflow: hidden;}.", "lime-director", " div, .", "lime-director", " img, .", "lime-director", " canvas {-webkit-transform-origin: 0 0; -moz-transform-origin: 0 0; -o-transform-origin: 0 0; position: absolute; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; -moz-user-select: none; -webkit-user-select: none; -webkit-user-drag: none;}.",
    "lime-scene", " {position:absolute; width:100%; height:100%; left: 0px; top: 0px; overflow: hidden; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;}.", "lime-fps", " {float: left; background: #333; color: #fff; position: absolute; top:0px; left: 0px; padding:2px 4px;}div.", "lime-layer", " {position: absolute; left: 0px; top: 0px; width:0px; height:0px; border: none !important;}.", "lime-cover", " {position: absolute; left: 0px; top: 0px;}.", "lime-button", " {cursor: pointer;}");
Wc = Xc.toString();
Ec(Wc);
function V() {
    N.call(this);
    this.b = [];
    this.g = n;
    this.ha = {};
    this.i = {};
    this.N = {};
    this.ac = {};
    this.ic = m;
    this.p = p;
    this.Wb = this.Gb = n;
    this.w = {};
    this.Yb(1);
    this.L(0, 0);
    this.G(0, 0);
    this.za = 1;
    this.Xb(0.5, 0.5);
    this.C = 0;
    this.i[Qa] || W(this, Uc);
    this.lc = 0;
    W(this, 7);
    this.u = 1;
    Yc(this);
    Zc(this, F(this.sa[0]));
    W(this, 64)
}
B(V, Qb);
q = V.prototype;
q.sa = [L, H];
function Zc(a, b) {
    if (!a.k || F(a.k) != b) {
        for (var c = -1, d = 0; d < a.sa.length; d++)if (F(a.sa[d]) == b) {
            c = d;
            break
        }
        if (-1 != c) {
            a.k = a.sa[d];
            W(a, 64);
            for (d = 0; c = a.b[d]; d++)Zc(c, b)
        }
    }
}
q.Pa = function () {
    return!(this.g && F(this.g.k) == H)
};
function $c(a) {
    return a.Pa() ? (a.Pa() ? ad(a) : bd(a), a) : a.g ? $c(a.g) : n
}
function cd(a) {
    if (!a.g || a instanceof Oa)return[];
    var b = a.g.b.indexOf(a);
    a = cd(a.g);
    a.push(b);
    return a
}
function dd(a, b) {
    if (a == b)return 0;
    for (var c = cd(a), d = cd(b), e = 0; ;) {
        if (c.length <= e)return 1;
        if (d.length <= e)return-1;
        if (c[e] == d[e])e++; else return c[e] > d[e] ? -1 : 1
    }
}
q.Fb = p;
function W(a, b, c, d) {
    b && !a.l && pa(a, c, d);
    a.l |= b;
    if (64 == b)for (c = 0; d = a.b[c]; c++)d instanceof V && W(d, 64);
    if (!s(a.l) || !b)a.l = 0;
    b && a.qa && (a.td = p, W(a.qa, -1));
    return a
}
q.Yb = function (a, b) {
    this.n = 1 == arguments.length && y(a) ? new M(a, a) : 2 == arguments.length ? new M(arguments[0], arguments[1]) : a;
    this.i[I] || W(this, 2)
};
q.L = function (a, b) {
    this.c = 2 == arguments.length ? new D(arguments[0], arguments[1]) : a;
    return this.i[K] ? this : W(this, Uc)
};
function Yc(a) {
    if (n != a.f) {
        if (a.f) {
            var b = a.f;
            delete b.$a;
            ed(b, b.getParent());
            delete a.f.qa
        }
        a.f = n;
        a.f && (b = a.f, b.$a = m, b.p && fd(b, b.getParent()), a.f.qa = a);
        W(a, 4)
    }
}
q.Xb = function (a, b) {
    this.P = 2 == arguments.length ? new M(arguments[0], arguments[1]) : a;
    W(this, Uc)
};
function gd(a, b) {
    a.hb = b;
    W(a, Rc);
    a.kc = 0
}
q.j = ba("o");
q.G = function (a, b) {
    var c = this.o, d, e;
    d = 2 == arguments.length ? new E(arguments[0], arguments[1]) : a;
    var f = this.P;
    if (c && this.b.length)for (var g = 0; g < this.b.length; g++) {
        var k = this.b[g];
        if (k.nd) {
            var l = k.lc;
            if (0 != l) {
                var v = hd(k);
                e = c.width;
                var x = v.left + f.x * c.width, w = v.right - v.left, G = e - v.right - f.x * c.width;
                l & 1 && (e -= x);
                l & 2 && (e -= w);
                l & 4 && (e -= G);
                e != c.width && (e = (d.width - e) / (c.width - e), l & 1 && (x *= e), l & 2 && (w *= e));
                e = c.height;
                var G = v.top + f.y * c.height, Ya = v.bottom - v.top, v = e - v.bottom - f.y * c.height;
                l & 8 && (e -= G);
                l & 16 && (e -= Ya);
                l & 32 &&
                (e -= v);
                e != c.height && (e = (d.height - e) / (c.height - e), l & 8 && (G *= e), l & 16 && (Ya *= e));
                l = k.P;
                k.G(w, Ya);
                k.L(x + l.x * w - f.x * d.width, G + l.y * Ya - f.y * d.height)
            }
        }
    }
    this.o = d;
    return W(this, 2)
};
function id(a) {
    a.T || jd(a);
    return a.T
}
function jd(a) {
    var b = s(a.T) ? a.T : a.za;
    a.g && a.g.T && (b = a.za * a.g.T);
    if (b != a.T) {
        a.T = b;
        for (var b = 0, c; c = a.b[b]; b++)c instanceof V && jd(c);
        W(a, 2)
    }
}
q.nd = ba("lc");
q.Z = function (a) {
    if (!this.p)return a;
    a = this.getParent().Z(a);
    return Tc(this, a)
};
function Tc(a, b) {
    if (!a.getParent())return n;
    b.x -= a.c.x;
    b.y -= a.c.y;
    b.x /= a.n.x;
    b.y /= a.n.y;
    if (0 != a.C) {
        var c = b.d(), d = a.C * Math.PI / 180, e = Math.cos(d), d = Math.sin(d);
        b.x = e * c.x - d * c.y;
        b.y = e * c.y + d * c.x
    }
    return b
}
q.lb = function (a) {
    return!this.p ? a : this.getParent().lb(Ua(this, a))
};
function Ua(a, b) {
    if (!a.getParent())return b;
    var c = b.d();
    if (0 != a.C) {
        var d = -a.C * Math.PI / 180, e = Math.cos(d), d = Math.sin(d);
        c.x = e * b.x - d * b.y;
        c.y = e * b.y + d * b.x
    }
    c.x *= a.n.x;
    c.y *= a.n.y;
    c.x += a.c.x;
    c.y += a.c.y;
    return c
}
function Sc(a, b, c) {
    return!a.p ? b : c.Z(a.lb(b))
}
function kd(a, b) {
    a.u = b;
    var c = a.hb;
    0 == a.u && !c ? (gd(a, m), a.kc = 1) : 0 != a.u && (c && a.kc) && gd(a, p);
    if (s(a.i[Pc]))return a;
    W(a, Qc);
    return a
}
function ad(a) {
    function b() {
        this.a = this.v = this.J = ic(c);
        this.ab && ac(this.a, this.ab);
        this.l |= -1
    }

    var c = F(a.k) == H ? "canvas" : "div";
    if (a.a) {
        if (a.a.tagName.toLowerCase() != c) {
            var d = a.v;
            b.call(a);
            d.parentNode && d.parentNode.replaceChild(a.v, d)
        }
    } else b.call(a)
}
function bd(a) {
    a.v && (oc(a.v), delete a.a, delete a.v, delete a.J)
}
q.ua = function () {
    this.l &= -65;
    this.Pa() ? ad(this) : bd(this);
    if (this.g && this.g.l & 64)this.g.ua(); else if (this.Pa()) {
        for (var a = 0, b; b = this.b[a]; a++)b instanceof V && b.ua();
        this.k.ua.call(this)
    }
};
q.update = function (a) {
    var b, c;
    a = a || 0;
    A(this);
    this.l & 64 && this.ua();
    var d = F(this.k) == L || a;
    if (d) {
        for (var e in this.ac)delete this.i[e], delete this.N[e], b = parseInt(e, 10) == Pc ? "opacity" : Gc, Lc(this.a, b), this.a != this.J && Lc(this.Zd, b);
        b = 0;
        for (e in this.ha)c = this.ha[e], c[3] || (c[3] = 1, e == K && this.Ed != this.c && (W(this, Uc, 0, m), b = 1), e == I && this.Id != this.n && (W(this, 2, 0, m), b = 1), e == Pc && this.Bd != this.u && (W(this, Qc, 0, m), b = 1), e == Qa && this.Hd != this.C && (W(this, 128, 0, m), b = 1));
        if (!b)for (e in this.ha) {
            c = this.ha[e];
            b = parseInt(e,
                10) == Pc ? "opacity" : Gc;
            if (F(this.k) == L || "opacity" != b)this.i[e] = c[0], Kc(this.a, b, c[1], c[2]), this.a != this.J && b == Gc && Kc(this.J, b, c[1], c[2]);
            delete this.ha[e]
        }
        this.Ed = this.c;
        this.Id = this.n;
        this.Bd = this.u;
        this.Hd = this.C;
        this.ac = {}
    }
    a ? this.k.hd.call(this) : (F(this.k) == H && (c = $c(this), c.qb = 1, c == this && (this.l == Uc && !this.f) && (c.qb = 0), pa($c(this), 1)), this.k.update.call(this));
    if (d)for (e in this.i)this.i[e] && (this.N[e] = m);
    if (this.la)for (e = 0; e < this.la.length; e++)W(this.la[e], 7);
    W(this, 0, a)
};
q.getParent = function () {
    return this.g ? this.g : n
};
q.appendChild = function (a, b) {
    a instanceof V && a.getParent() ? a.getParent().removeChild(a) : a.parentNode && oc(a);
    a.g = this;
    b == h ? this.b.push(a) : Ha(this.b, b, 0, a);
    F(this.k) != L && Zc(a, F(this.k));
    a instanceof V && (jd(a), this.p && ld(a));
    return W(this, 64)
};
q.removeChild = function (a) {
    a = this.b.indexOf(a);
    if (0 <= a && this.b.length > a) {
        var b = 0 <= a && this.b.length > a ? this.b[a] : n;
        b.qa && Yc(b.qa);
        b instanceof V ? (this.p && md(b), bd(b), b.g = n) : oc(b);
        this.b.splice(a, 1);
        a = W(this, 64)
    } else a = this;
    return a
};
q.addEventListener = function (a) {
    Vb && "mouse" == a.substring(0, 5) || (s(this.w[a]) || (this.w[a] = [0, 0]), this.p && 0 == this.w[a][0] && (this.w[a][0] = 1, this.D().xa.rb(this, a)), this.w[a][1]++)
};
q.removeEventListener = function (a) {
    Vb && "mouse" == a.substring(0, 5) || (this.p && 1 == this.w[a][1] && (this.w[a][0] = 0, this.D().xa.sb(this, a)), this.w[a][1]--, this.w[a][1] || delete this.w[a])
};
q.D = function () {
    return!this.p ? n : this.Gb
};
q.gb = function () {
    return!this.p ? n : this.Wb
};
function md(a) {
    var b;
    a.$a || ed(a, a.getParent());
    for (var c = 0; b = a.b[c]; c++)b instanceof V && md(b);
    for (var d in a.w) {
        a.w[d][0] = 0;
        if (!a.D())debugger;
        a.D().xa.sb(a, d)
    }
    nd(a.D().xa, a);
    a.p = p;
    a.Gb = n;
    a.Wb = n
}
function ld(a) {
    a.p = m;
    a.Gb = a.g.D();
    a.Wb = a.g.gb();
    for (var b = 0, c; c = a.b[b]; b++)c instanceof V && ld(c);
    for (var d in a.w)a.w[d][0] = 1, a.D().xa.rb(a, d);
    a.$a && (a.$a = m, a.p && fd(a, a.getParent()));
    nd(a.D().xa, a)
}
function fd(a, b) {
    b.la || (b.la = []);
    Ea(b.la, a);
    !b && !(b.getParent()instanceof Oa) && fd(a, b.getParent())
}
function ed(a, b) {
    b && b.la && (Fa(b.la, a), ed(a, b.getParent()))
}
function J(a) {
    var b = a.j();
    a = a.P;
    return new Ja(-b.height * a.y, b.width * (1 - a.x), b.height * (1 - a.y), -b.width * a.x)
}
function hd(a, b) {
    var c = b || J(a), d = new D(c.left, c.top), e = new D(c.right, c.top), f = new D(c.left, c.bottom), c = new D(c.right, c.bottom), d = Ua(a, d), e = Ua(a, e), f = Ua(a, f), c = Ua(a, c);
    return new Ja(Math.floor(Math.min(d.y, e.y, f.y, c.y)), Math.ceil(Math.max(d.x, e.x, f.x, c.x)), Math.ceil(Math.max(d.y, e.y, f.y, c.y)), Math.floor(Math.min(d.x, e.x, f.x, c.x)))
}
q.ob = function () {
    var a = J(this);
    a.left == a.right && this.b.length && (a = hd(this.b[0], this.b[0].ob()));
    for (var b = 0, c; c = this.b[b]; b++)if (1 != c.Mb) {
        var d = a;
        c = hd(c, c.ob());
        d.left = Math.min(d.left, c.left);
        d.top = Math.min(d.top, c.top);
        d.right = Math.max(d.right, c.right);
        d.bottom = Math.max(d.bottom, c.bottom)
    }
    return a
};
q.ba = function (a) {
    this.ac[a] = 1
};
q.Na = function (a) {
    var b = this.Z(a.U);
    return J(this).contains(b) ? (a.position = b, m) : p
};
function od(a, b) {
    Ea(b.ta, a);
    b.play()
};
function pd() {
    V.call(this);
    this.ab = "lime-layer"
}
B(pd, V);
pd.prototype.Na = function (a) {
    for (var b = 0, c; c = this.b[b]; b++)if (c.Na(a))return a.position = this.Z(a.U), m;
    return p
};
var X = new function () {
    this.S = [];
    this.wa = p;
    this.Hc = 0;
    this.Ib = 1E3 / 30;
    this.pa = 0
};
function qd(a, b) {
    this.q = this.Nc = a;
    this.Nb = s(b) ? b : -1;
    this.da = []
}
qd.prototype.Ba = function (a) {
    if (this.da.length)if (this.q > a)this.q -= a; else {
        var b = this.Nc + a - this.q;
        this.q = this.Nc - (a - this.q);
        0 > this.q && (this.q = 0);
        var c;
        for (a = this.da.length; 0 <= --a;)(c = this.da[a]) && (c[0] && z(c[1])) && c[1].call(c[2], b);
        -1 != this.Nb && (this.Nb--, 0 == this.Nb && X.bc(c[1], c[2]))
    }
};
X.S.push(new qd(0));
X.dc = r.mozRequestAnimationFrame || r.webkitRequestAnimationFrame;
X.ce = ba("Ib");
X.ke = function (a) {
    this.Ib = a;
    this.wa && (X.uc(), X.fc())
};
X.ub = function (a, b, c) {
    c = s(c) ? c : this.S[0];
    Ea(c.da, [1, a, b]);
    Ea(this.S, c);
    this.wa || X.fc()
};
X.bc = function (a, b) {
    for (var c = this.S.length; 0 <= --c;) {
        for (var d = this.S[c], e = d.da, f, g = e.length; 0 <= --g;)f = e[g], f[1] == a && f[2] == b && Fa(e, f);
        0 == e.length && 0 != c && Fa(this.S, d)
    }
    1 == this.S.length && 0 == this.S[0].da.length && X.uc()
};
X.fc = function () {
    this.wa || (this.pa = ma(), X.dc ? r.mozRequestAnimationFrame ? 11 <= ob ? (this.ka = ka(X.jc, this), r.mozRequestAnimationFrame(this.ka)) : (r.mozRequestAnimationFrame(), this.nc = ka(X.bd, this), r.addEventListener("MozBeforePaint", this.nc, p)) : (this.ka = ka(X.jc, this), r.webkitRequestAnimationFrame(this.ka)) : this.Hc = setInterval(ka(X.Pd, this), X.Ib), this.wa = m)
};
X.uc = function () {
    this.wa && (X.dc ? r.mozRequestAnimationFrame ? 11 <= ob ? r.mozCancelRequestAnimationFrame(this.ka) : r.removeEventListener("MozBeforePaint", this.nc, p) : r.webkitCancelRequestAnimationFrame(this.ka) : clearInterval(this.Hc), this.wa = p)
};
X.jc = function (a) {
    var b = r.performance, c;
    b && (c = b.now || b.webkitNow) ? a = b.timing.navigationStart + c.call(b) : a || (a = ma());
    b = a - this.pa;
    0 > b && (b = 1);
    X.Hb(b);
    this.pa = a;
    r.webkitRequestAnimationFrame ? r.webkitRequestAnimationFrame(this.ka) : r.mozRequestAnimationFrame(this.ka)
};
X.bd = function (a) {
    X.Hb(a.timeStamp - this.pa);
    this.pa = a.timeStamp;
    r.mozRequestAnimationFrame()
};
X.Pd = function () {
    var a = ma(), b = a - this.pa;
    0 > b && (b = 1);
    X.Hb(b);
    this.pa = a
};
X.Hb = function (a) {
    for (var b = this.S.slice(), c = b.length; 0 <= --c;)b[c].Ba(a);
    1 == oa && (/Firefox\/18./.test(fb()) && !na.Td) && (X.Pc ? (document.body.style.MozTransform = "", X.Pc = 0) : (document.body.style.MozTransform = "scale(1,1)", X.Pc = 1), oa = 0)
};
X.fd = function (a) {
    for (var b, c, d, e, f = this.S.length; 0 <= --f;) {
        b = this.S[f];
        for (e = b.da.length; 0 <= --e;)d = b.da[e], c = d[2], z(c.D) && (c = c.D(), c == a && (d[0] = m))
    }
};
X.ed = function (a, b) {
    X.Jd(a, b)
};
X.Jd = function (a, b) {
    X.ub(a, b, new qd(100, 1))
};
var rd;
function Y() {
    N.call(this);
    this.ta = [];
    this.Lb = [];
    this.yb = {};
    this.ee = p;
    this.r = 1;
    this.cb = sd;
    this.H = 0
}
B(Y, Qb);
q = Y.prototype;
q.scope = "";
q.s = function (a) {
    this.r = a;
    return this
};
q.play = function () {
    this.Vb = 0;
    this.zc = this.H = 1;
    X.ub(this.Ba, this);
    this.dispatchEvent({type: "start"})
};
q.stop = function () {
    if (0 != this.H) {
        var a = this.Lb;
        if (td(this) && this.ba)for (var b = a.length; 0 <= --b;)this.ba(a[b]);
        this.Lb = [];
        this.yb = {};
        this.H = 0;
        X.bc(this.Ba, this);
        this.dispatchEvent({type: "stop"})
    }
};
q.nb = function () {
    return{}
};
function ud(a, b) {
    var c = A(b);
    s(a.yb[c]) || (a.Oa(b), a.yb[c] = a.nb(b));
    return a.yb[c]
}
q.Oa = function (a) {
    vd.rb(this, a);
    this.H = 1;
    Ea(this.Lb, a);
    this.Zb && (!this.Vc && this.Ya) && this.Ya()
};
q.D = function () {
    return this.ta[0] ? this.ta[0].D() : n
};
q.Ba = function (a) {
    this.Zb && (!this.Vc && this.Ya) && this.Ya();
    this.zc && (delete this.zc, a = 1);
    this.Vb += a;
    this.be = a;
    a = this.Vb / (1E3 * this.r);
    if (isNaN(a) || 1 <= a)a = 1;
    a = this.ia(a, this.ta);
    1 == a && this.stop()
};
q.ia = function (a, b) {
    a = (0, this.cb[0])(a);
    isNaN(a) && (a = 1);
    for (var c = b.length; 0 <= --c;)this.update(a, b[c]);
    return a
};
function td(a) {
    return 0 < a.r && Jc && a.Cd && !Tb && !Q
}
var vd = new function () {
    this.e = {}
};
vd.rb = function (a, b) {
    if (a.scope.length) {
        var c = A(b);
        s(this.e[c]) || (this.e[c] = {});
        s(this.e[c][a.scope]) && this.e[c][a.scope].stop();
        this.e[c][a.scope] = a
    }
};
vd.me = function (a) {
    a = A(a);
    if (s(this.e[a]))for (var b in this.e[a])this.e[a][b].stop(), delete this.e[a][b]
};
(function () {
    function a(a) {
        var e, f, g, w;
        g = a;
        for (f = 0; 8 > f; f++) {
            w = ((b * g + c) * g + d) * g - a;
            if (5E-5 > (0 <= w ? w : 0 - w))return g;
            e = (3 * b * g + 2 * c) * g + d;
            if (1E-6 > (0 <= e ? e : 0 - e))break;
            g -= w / e
        }
        e = 0;
        f = 1;
        g = a;
        if (g < e)return e;
        if (g > f)return f;
        for (; e < f;) {
            w = ((b * g + c) * g + d) * g;
            if (5E-5 > (0 <= w - a ? w - a : 0 - (w - a)))break;
            a > w ? e = g : f = g;
            g = 0.5 * (f - e) + e
        }
        return g
    }

    var b = 0, c = 0, d = 0, e = 0, f = 0, g = 0;
    rd = function (k, l, v, x) {
        return[function (w) {
            d = 3 * k;
            c = 3 * (v - k) - d;
            b = 1 - d - c;
            g = 3 * l;
            f = 3 * (x - l) - g;
            e = 1 - g - f;
            return((e * a(w) + f) * a(w) + g) * a(w)
        }, k, l, v, x]
    }
})();
var sd = rd(0.42, 0, 0.58, 1);
function wd() {
    N.call(this)
}
B(wd, Qb);
wd.prototype.Gc = ca;
function xd(a) {
    if (a[0]instanceof wd)return a[0];
    t(a) || (a = Ga(arguments));
    return 2 < a.length ? new yd(a) : u(a[0]) && ("rgb(" == a[0].substring(0, 4) || "rgba(" == a[0].substring(0, 5) || "#" == a[0].substring(0, 1)) ? new yd(a[0]) : new zd(a[0])
}
wd.prototype.wb = ca;
wd.prototype.vb = ca;
function yd(a) {
    N.call(this);
    this.Ha = 1;
    this.Kd(a)
}
B(yd, wd);
q = yd.prototype;
q.id = "color";
q.Kd = function (a) {
    var b = a;
    u(a) ? this.Sa = a : (2 < arguments.length && (b = arguments), 3 <= b.length && (this.pb = b[0], this.fb = b[1], this.Wa = b[2]), 4 == b.length && (this.Ha = b[3]), this.Sa = 1 == this.Ha ? "rgb(" + this.pb + "," + this.fb + "," + this.Wa + ")" : "rgba(" + this.pb + "," + this.fb + "," + this.Wa + "," + this.Ha + ")")
};
q.wb = function (a) {
    a.style.background = this.Sa
};
q.vb = function (a) {
    a.fillStyle = this.Sa
};
q.d = function () {
    var a = new yd("");
    a.pb = this.pb;
    a.fb = this.fb;
    a.Wa = this.Wa;
    a.Ha = this.Ha;
    a.Sa = this.Sa;
    return a
};
function zd(a) {
    N.call(this);
    a && z(a.data) && (a = a.data());
    u(a) ? (this.O = a, 50 < this.O.length && (this.O = this.O.substr(-50)), Ad[this.O] ? this.z = Ad[this.O] : (this.z = new Image, this.z.src = a)) : (this.O = a.src, 50 < this.O.length && (this.O = this.O.substr(-50)), this.z = Ad[this.O] ? Ad[this.O] : a);
    Bd(this) || U(this.z, "load", this.qd, p, this);
    Ad[this.O] = this.z
}
B(zd, wd);
var Ad = {};
q = zd.prototype;
q.id = "image";
q.Gc = function (a) {
    var b = a.j(), c = this;
    !b.width && !b.height && (Bd(this) ? a.G(this.z.width, this.z.height) : U(this, "load", function () {
        var a = this.j();
        !a.width && !a.height && this.G(c.z.width, c.z.height)
    }, p, a));
    Bd(this) || U(this, "load", function () {
        W(a, 4)
    }, p, this)
};
q.qd = function (a) {
    this.dispatchEvent(a)
};
function Bd(a) {
    return!(!a.z || !a.z.width || !a.z.height)
}
q.G = function (a, b, c) {
    y(a) && (a = new E(a, b), b = c || p);
    this.o = a;
    this.Md = b;
    return this
};
function Cd(a, b) {
    var c = b.j().d();
    a.o && (a.Md ? (c.width *= a.o.width, c.height *= a.o.height) : c = a.o);
    var d = new D(0, 0);
    a.Sb && (a.fe ? (d.x = c.width * a.Sb.x, d.y = c.height * a.Sb.y) : d = a.Sb);
    return[c, d]
}
q.wb = function (a, b) {
    a.style.background = "url(" + this.z.src + ")";
    var c = Cd(this, b), d = c[0], c = c[1], e = id(b);
    a.style[Ic("BackgroundSize")] = d.width * e + "px " + d.height * e + "px";
    d = b.I ? b.I.Ab : 0;
    a.style.backgroundPosition = c.x * e - d + "px " + (c.y * e - d) + "px";
    this.je && (a.style.imageRendering = "optimizeQuality")
};
q.vb = function (a, b) {
    var c = b.j(), d = J(b);
    if (c.width && c.height)try {
        var e = this.z, f = Cd(this, b), g = f[0], k = f[1], l = a.createPattern(e, "repeat"), v = g.width / e.width, x = g.height / e.height;
        a.save();
        a.translate(d.left + k.x, d.top + k.y);
        a.scale(v, x);
        a.fillStyle = l;
        a.fillRect(-k.x / v, -k.y / x, c.width / v, c.height / x);
        a.restore()
    } catch (w) {
    }
};
H.t = {};
L.t = {};
function Z() {
    V.call(this);
    this.I = this.Ma = n
}
B(Z, V);
Z.prototype.id = "sprite";
Z.prototype.sa = [Ma(L, L.t), Ma(H, H.t)];
Z.prototype.Qa = function (a, b, c, d) {
    this.Ma = xd(Ga(arguments));
    this.Ma.Gc(this);
    W(this, 4);
    return this
};
L.t.m = function (a) {
    this.Ma === n || this.Ma.wb(a, this);
    this.I === n ? u("border-width") ? sc(a, 0, "border-width") : xb("border-width", la(sc, a)) : this.I.wb(a, this)
};
H.t.m = function (a) {
    var b = this.j(), c = this.Ma, d = this.I;
    if (c || d) {
        var e = J(this);
        c && (c.vb(a, this), "image" != c.id && "frame" != c.id && a.fillRect(e.left, e.top, b.width, b.height));
        if (d && (d.vb(a, this), "sprite" == this.id || "label" == this.id))c = d.Ab / 2, a.strokeRect(e.left + c, e.top + c, b.width - 2 * c, b.height - 2 * c)
    }
};
function Dd() {
    Y.call(this)
}
B(Dd, Y);
Dd.prototype.update = ca;
function Ed(a) {
    Y.call(this);
    var b = Ga(arguments);
    t(a) && (b = a);
    this.e = 2 < b.length ? [b.shift(), new Ed(b)] : b;
    this.s(this.e[0].r + this.e[1].r)
}
B(Ed, Y);
Ed.prototype.Oa = function (a) {
    Y.prototype.Oa.call(this, a);
    this.s(this.e[0].r + this.e[1].r);
    this.Aa = this.e[0].r / this.r;
    this.X = -1
};
Ed.prototype.stop = function () {
    this.X && -1 != this.X && this.e[this.X].stop(this.ta);
    Y.prototype.stop.apply(this, arguments)
};
Ed.prototype.ia = function (a, b) {
    if (0 == this.H)return a;
    for (var c = b.length; 0 <= --c;)ud(this, b[c]);
    var d = c = 0;
    a >= this.Aa ? (c = 1, d = 1 == this.Aa ? 1 : (a - this.Aa) / (1 - this.Aa)) : (c = 0, d = 0 != this.Aa ? a / this.Aa : 1);
    -1 == this.X && 1 == c && (this.e[0].H = 1, this.e[0].ia(1, b), this.e[0].stop());
    this.X != c && (-1 != this.X && (this.e[this.X].ia(1, b), this.e[this.X].stop()), this.e[c].H = 1);
    this.e[c].ia(d, b);
    this.X = c;
    return a
};
function Fd(a) {
    Y.call(this);
    var b = Ga(arguments);
    t(a) && (b = a);
    2 < b.length ? (this.ya = b.shift(), this.Da = new Fd(b)) : (this.ya = b[0], this.Da = b[1]);
    var b = this.ya.r, c = this.Da.r;
    this.s(Math.max(b, c));
    var d = new Dd;
    b > c ? this.Da = new Ed(this.Da, d.s(b - c)) : b < c && (this.ya = new Ed(this.ya, d.s(c - b)))
}
B(Fd, Y);
Fd.prototype.Oa = function (a) {
    Y.prototype.Oa.call(this, a);
    this.ya.H = 1;
    this.Da.H = 1
};
Fd.prototype.ia = function (a, b) {
    if (0 != this.H) {
        for (var c = b.length; 0 <= --c;)ud(this, b[c]);
        this.ya.ia(a, b);
        this.Da.ia(a, b);
        return a
    }
};
function Gd(a, b) {
    Y.call(this);
    this.n = 1 == arguments.length && y(a) ? new M(a, a) : 2 == arguments.length ? new M(arguments[0], arguments[1]) : a
}
B(Gd, Y);
Gd.prototype.scope = "scale";
Gd.prototype.nb = function (a) {
    var b = a.n, c = new M(this.n.x - b.x, this.n.y - b.y);
    td(this) && (a.ha[I] = [new M(b.x + c.x, b.y + c.y), this.r, this.cb, 0], W(a, 2));
    return{Wc: b, q: c}
};
Gd.prototype.update = function (a, b) {
    if (0 != this.H) {
        var c = ud(this, b);
        b.Yb(c.Wc.x + c.q.x * a, c.Wc.y + c.q.y * a)
    }
};
Gd.prototype.ba = function (a) {
    td(this) && (a.ba(I), W(a, 2))
};
function $(a) {
    Y.call(this);
    this.u = a
}
B($, Y);
$.prototype.scope = "fade";
$.prototype.nb = function (a) {
    var b = a.u;
    td(this) && (a.ha[Pc] = [this.u, this.r, this.cb, 0], W(a, Qc));
    return{Od: b, q: this.u - b}
};
$.prototype.update = function (a, b) {
    if (0 != this.H) {
        var c = ud(this, b);
        kd(b, c.Od + c.q * a)
    }
};
$.prototype.ba = function (a) {
    td(this) && (a.ba(Pc), W(a, Qc))
};
H.Ea = {};
L.Ea = {};
function Hd() {
    Z.call(this)
}
B(Hd, Z);
Hd.prototype.id = "circle";
Hd.prototype.sa = [Ma(L.t, L.Ea), Ma(H.t, H.Ea)];
Hd.prototype.Na = function (a) {
    var b = this.Z(a.U), c = this.o, d = this.P, e = 0.5 * c.width, f = 0.5 * c.height, g = b.x - c.width * (0.5 - d.x), c = b.y - c.height * (0.5 - d.y);
    return 1 > g * g / (e * e) + c * c / (f * f) ? (a.position = b, m) : p
};
L.Ea.m = function (a) {
    var b = this.j();
    L.t.m.call(this, a);
    Nc(a, 0.5 * b.width, 0.5 * b.height)
};
H.Ea.m = function (a) {
    this.j();
    var b = this.P, c = J(this), d = 0.5 * (c.right - c.left), c = 0.5 * (c.bottom - c.top);
    a.save();
    a.save();
    a.scale(d, c);
    a.translate(1 - 2 * b.x, 1 - 2 * b.y);
    a.beginPath();
    a.arc(0, 0, 1, 0, 2 * Math.PI, p);
    a.closePath();
    a.restore();
    a.clip();
    H.t.m.call(this, a);
    this.I && (a.lineWidth *= 2, a.stroke());
    a.restore()
};
function Id(a, b) {
    Y.call(this);
    this.c = 2 == arguments.length ? new D(arguments[0], arguments[1]) : a
}
B(Id, Y);
q = Id.prototype;
q.scope = "move";
q.nb = function (a) {
    var b = a.c, c = new D(this.c.x - b.x, this.c.y - b.y);
    td(this) && (a.ha[K] = [this.c, this.r, this.cb, 0], W(a, Uc));
    return{Xc: b, q: c}
};
q.Ya = function () {
    if (this.Zb && this.ta.length) {
        var a = this.ta[0].c, b = new D(this.c.x - a.x, this.c.y - a.y), c = new D(0, 0), a = b.x - c.x, b = b.y - c.y;
        this.s(this.Zb * Math.sqrt(a * a + b * b) / 100);
        this.Vc = 1
    }
};
q.update = function (a, b) {
    if (0 != this.H) {
        var c = ud(this, b);
        b.L(c.Xc.x + c.q.x * a, c.Xc.y + c.q.y * a)
    }
};
q.ba = function (a) {
    td(this) && (a.ba(K), W(a, Uc))
};
function Jd() {
    Z.call(this);
    this.Ua = 75;
    this.ec = this.ja = this.Yc = 20;
    this.Ka = document.createElement("canvas");
    this.Ka.width = 200;
    this.Ka.height = 200;
    this.ae = this.Ka.getContext("2d");
    this.appendChild(this.Ka)
}
B(Jd, Z);
Jd.prototype.s = function (a) {
    this.ja = a
};
Jd.prototype.start = function () {
    X.ub(this.m, this, new qd(1 / 33))
};
Jd.prototype.stop = function () {
    X.bc(this.m, this)
};
Jd.prototype.m = function () {
    var a = this.ja / this.ec, b = this.Ka.getContext("2d");
    b.clearRect(0, 0, 200, 200);
    var c = b.createRadialGradient(50, 50, this.Ua / 2, 100, 100, 2 * this.Ua);
    c.addColorStop(0, "rgb(255,0,0)");
    c.addColorStop(0.25, "rgb(125,125,0)");
    c.addColorStop(0.5, "rgb(0,255,0)");
    c.addColorStop(1, "rgb(0,0,255)");
    b.strokeStyle = c;
    b.clearRect(0, 0, 200, 200);
    this.ja < -1 / 33 && (this.ja = this.ec);
    b.beginPath();
    b.lineWidth = this.Yc;
    b.arc(100, 100, this.Ua, -90 * (Math.PI / 180), -(Math.PI / 180) * (360 * a + 90), m);
    b.stroke();
    b.lineWidth =
        1;
    b.strokeText(this.ja, 50, 100);
    b.stroke();
    this.ja -= 1 / 33
};
H.Fa = {};
L.Fa = {};
function Kd(a) {
    Z.call(this);
    this.Rb = p;
    W(this, 4);
    Ld(this, a);
    this.Jb = Md;
    W(this, 8);
    Nd(this, 14);
    Od(this, "#000");
    this.hc = "center";
    W(this, 8);
    this.Bc = "400";
    W(this, 8);
    a = [0, 0, 0, 0];
    s(h) && (a[1] = a[3] = h);
    s(h) && (a[2] = h);
    s(h) && (a[3] = h);
    this.A = a;
    W(this, 8);
    this.sd = p;
    this.Kc = 1.15;
    this.Ld(n);
    this.Qa(255, 255, 255, 0)
}
B(Kd, Z);
Kd.prototype.id = "label";
var Md = "Arial";
Kd.prototype.sa = [Ma(L.t, L.Fa), Ma(H.t, H.Fa)];
(function () {
    var a;
    Kd.prototype.measureText = function () {
        s(a) || (a = document.createElement("canvas").getContext("2d"));
        var b = Pd(this) * this.oa;
        this.Rb && (b *= ra(this.$).split("\n").length);
        a.font = this.oa + "px " + this.Jb;
        var c = a.measureText(this.$), c = R ? c.width : c.width + 1;
        Sb && (c += 1);
        var d = this.I ? this.I.Ab : 0;
        return new E(this.A[1] + this.A[3] + c + 2 * d, this.A[0] + this.A[2] + b + 2 * d)
    }
})();
Kd.prototype.j = function () {
    var a = V.prototype.j.call(this);
    return!a || !a.width && !a.height ? this.measureText() : a
};
function Ld(a, b) {
    a.$ = b + "";
    W(a, 4);
    delete a.cc;
    return a
}
function Nd(a, b) {
    a.oa = b;
    W(a, 8);
    return a
}
function Od(a, b) {
    a.Ac = b;
    W(a, 8);
    return a
}
function Pd(a) {
    var b = Math.abs(a.M.y) + 2 * a.R;
    return a.sd ? (a.Kc + b) / a.oa : a.Kc + b / a.oa
}
Kd.prototype.Ld = function (a, b, c, d) {
    1 == arguments.length && a === n ? (this.Ra = "#ccc", this.R = 0, this.xb(0, 0)) : 2 == arguments.length ? (this.Ra = a, this.R = b, this.xb(new M(0, 0))) : 3 == arguments.length ? (this.Ra = a, this.R = b, this.xb(c)) : (this.Ra = a, this.R = b, this.xb(c, d));
    W(this, 8)
};
Kd.prototype.xb = function (a, b) {
    this.M = 2 == arguments.length ? new M(arguments[0], arguments[1]) : a;
    W(this, 8)
};
Kd.prototype.update = function () {
    this.l & 4 && delete this.Jc;
    V.prototype.update.apply(this, arguments)
};
L.Fa.m = function (a) {
    L.t.m.call(this, a);
    var b = a.style;
    this.l & 4 && (this.Rb ? a.innerHTML = sa(this.$).replace(/\n/g, "<br/>") : qc(a, this.$));
    this.l & 8 && (b.lineHeight = Pd(this), b.padding = Da(this.A,function (a) {
        return a * id(this)
    }, this).join("px ") + "px", b.color = this.Ac, b.fontFamily = this.Jb, b.fontSize = this.oa * id(this) + "px", b.fontWeight = this.Bc, b.textAlign = this.hc, b.textShadow = this.R || this.M.x || this.M.y ? this.Ra + " " + this.M.x + "px " + this.M.y + "px " + this.R + "px" : "")
};
H.Fa.m = function (a) {
    H.t.m.call(this, a);
    var b = J(this), c = -b.left - this.A[3] + b.right - this.A[1] + Math.abs(this.M.x) + Math.abs(2 * this.R), d = 0;
    if (!this.cc) {
        var d = [], e = this.$.length, f = this.$.match(Q ? /[\s\.]+/g : /[\s-\.]+/g), g = 0;
        if (f)for (var k = 0; k < f.length; k++) {
            var l = f[k], l = this.$.indexOf(l, g) + l.length;
            d.push(this.$.substring(g, l));
            g = l
        }
        g != e && d.push(this.$.substring(g, e));
        this.cc = d;
        d = 1
    }
    f = this.I ? this.I.Ab : 0;
    a.save();
    e = this.hc;
    "left" == e ? a.translate(b.left + this.A[3] + f, b.top + this.A[0] + f) : "right" == e ? a.translate(b.right -
        this.A[1] - f, b.top + this.A[0] + f) : "center" == e && a.translate(0.5 * (b.left + this.A[3] + b.right - this.A[1]), b.top + this.A[0] + f);
    b = Pd(this);
    a.fillStyle = this.Ac;
    a.font = this.Bc + " " + this.oa + "px/" + b + " " + this.Jb;
    a.textAlign = e;
    a.textBaseline = "top";
    if (this.R || this.M.x || this.M.y)a.shadowColor = this.Ra, a.shadowOffsetX = this.M.x, a.shadowOffsetY = this.M.y, a.shadowBlur = this.R;
    if (d || c != this.Jc) {
        d = [];
        e = "";
        f = this.cc;
        for (g = 0; g < f.length; g++) {
            k = 0;
            if (this.Rb && (l = f[g].match(/\n/g)))k = l.length;
            "" == e ? e = f[g] : (l = a.measureText(ra(e + f[g])),
                l.width > c ? (d.push(ra(e)), k--, e = f[g]) : e += f[g]);
            for (l = 0; l < k; l++)d.push(ra(e)), e = ""
        }
        d.push(e);
        this.Ob = d;
        this.Jc = c
    }
    if (this.Ob) {
        c = b * this.oa;
        b = (s(this.R) ? Math.abs(this.R) : 0) + (s(this.M) ? Math.abs(this.M.y) / 2 : 0);
        c = R ? Math.floor(c) : Math.round(c);
        for (d = 0; d < this.Ob.length; d++)a.fillText(this.Ob[d], 0, c * d + b - 0.5)
    }
    a.restore()
};
function Oa() {
    V.call(this);
    this.Xb(0, 0);
    this.ab = "lime-scene";
    ad(this)
}
B(Oa, V);
Oa.prototype.gb = function () {
    return this
};
Oa.prototype.ob = function () {
    return J(this)
};
H.Cb = {};
L.Cb = {};
L.Cb.m = function (a) {
    this.j();
    L.t.m.call(this, a);
    Nc(a, [this.Fd * this.za, this.Fd * this.za])
};
H.Cb.m = function (a) {
    this.j();
    var b = J(this), c = this.de(), d = b.left, e = b.top, f = b.right - b.left, b = b.bottom - b.top;
    a.save();
    a.beginPath();
    a.moveTo(d + c, e);
    a.lineTo(d + f - c, e);
    a.quadraticCurveTo(d + f, e, d + f, e + c);
    a.lineTo(d + f, e + b - c);
    a.quadraticCurveTo(d + f, e + b, d + f - c, e + b);
    a.lineTo(d + c, e + b);
    a.quadraticCurveTo(d, e + b, d, e + b - c);
    a.lineTo(d, e + c);
    a.quadraticCurveTo(d, e, d + c, e);
    a.closePath();
    a.clip();
    H.t.m.call(this, a);
    this.I && (a.lineWidth *= 2, a.stroke());
    a.restore()
};
hv_DomainName = "hanvien.com";
hv_Port = 80;
hv_Witdh = 1024;
hv_Height = 768;
e5_card_width = 400;
e5_card_height = 558;
e5_card_radius = 10;
function Qd() {
    Z.call(this);
    this.Vd = this.Yd = e5_card_height;
    this.Ua = e5_card_radius;
    this.$c = "../assets/qs.png";
    this.Qa(this.$c);
    this.Zc = p;
    this.Ud = this.Xd = this.Wd = 0;
    this.Ga = this.c;
    U(this, ["mousedown", "touchstart"], this.zd)
}
B(Qd, Z);
Qd.prototype.zd = function (a) {
    console.log("down");
    this.Ga = this.c;
    var b = new Fd((new $(0.9)).s(0.2), (new Gd(0.5)).s(0.5));
    a.target && od(a.target, b);
    Rd(a);
    a.Ca(["mouseup", "touchend"], this.Ad);
    this.Zc = m
};
Qd.prototype.Ad = function (a) {
    console.log("up..");
    var b = this.Ga.x, c = this.Ga.y, b = new Fd(new $(1), new Gd(0.6), new Id(b, c));
    console.log(a.target);
    od(this, b);
    this.Ga = this.c;
    console.log(this.Ga)
};
function Sd() {
    Oa.call(this);
    this.a.style.cssText = "background:rgba(255,255,255,.8)"
}
B(Sd, Oa);
function Td(a, b, c, d) {
    N.call(this);
    this.target = d || a.ga;
    this.W = [];
    this.K = -1;
    this.y = this.x = 0;
    b || (b = this.target.lb(new D(0, 0)), this.x = a.U.x - b.x, this.y = a.U.y - b.y);
    a.Ca(["touchmove", "mousemove"], ka(this.yd, this));
    a.Ca(["touchend", "touchcancel", "mouseup"], ka(this.Gd, this));
    this.dd = c || n;
    this.dispatchEvent(new O(Ud))
}
B(Td, Qb);
var Ud = "start";
Td.prototype.V = function () {
    Td.Ta.V.call(this);
    this.W = this.target = this.ca = n
};
Td.prototype.Dc = ba("dd");
Td.prototype.yd = function (a) {
    a = a.U.d();
    a.x -= this.x;
    a.y -= this.y;
    a = this.target.getParent().Z(a);
    var b = this.Dc();
    b != n && (a.x < b.left ? a.x = b.left : a.x > b.right && (a.x = b.right), a.y < b.top ? a.y = b.top : a.y > b.bottom && (a.y = b.bottom));
    this.target.L(a);
    this.dispatchEvent(new O("move"));
    a = -1;
    for (var b = Yb(J(this.target)), c = [], d = 0; d < this.W.length; d++) {
        var e = this.W[d];
        if (!z(e.gd) || e.gd(this.target)) {
            var f = J(e), g = Sc(e, new D(f.left, f.top), this.target), e = Sc(e, new D(f.right, f.bottom), this.target), g = Yb(new Ja(Math.min(g.y, e.y),
                Math.max(g.x, e.x), Math.max(g.y, e.y), Math.min(e.x, g.x)));
            (e = Zb(b, g)) && c.push([e.width * e.height / (g.width * g.height), d])
        }
    }
    c.length && (c = c.sort(function (a, b) {
        return b[0] - a[0]
    }), a = c[0][1]);
    a != this.K && (-1 != this.K && z(this.W[this.K].Ec) && this.W[this.K].Ec(), this.K = a, -1 != this.K && z(this.W[this.K].Uc) && this.W[this.K].Uc(), a = new O("change"), a.Ia = -1 != this.K ? this.W[this.K] : n, this.dispatchEvent(a))
};
Td.prototype.Gd = function () {
    if (-1 != this.K) {
        var a = new O("drop");
        a.Ia = this.W[this.K];
        z(a.Ia.Uc) && a.Ia.Ec();
        this.dispatchEvent(a);
        if (!a.Y) {
            var b = Sc(a.Ia.getParent(), a.Ia.c, this.target.getParent()), b = (new Id(b)).s(0.5);
            b.Cd = s(h) ? h : m;
            od(this.target, b);
            z(a.xd) && U(b, "stop", a.xd, p, this.target)
        }
    } else this.dispatchEvent(new O("cancel"));
    this.dispatchEvent(new O("end"));
    X.ed(this.wc, this)
};
function Vd(a) {
    this.La = a;
    this.identifier = 0
}
Vd.prototype.Ca = function (a, b, c) {
    a = t(a) ? a : [a];
    for (var d = 0; d < a.length; d++)this.La.Ca(this, a[d], b);
    c && this.event.stopPropagation()
};
Vd.prototype.sb = function (a) {
    var b = s(a), c = t(a) ? a : [a];
    if (a = this.La.fa[this.identifier]) {
        var d = this;
        a = Ca(a, function (a) {
            return!s(d.ga) || a[0] == d.ga && (!b || 0 <= Aa(c, a[1])) ? (Kb(a[0], a[1], a[2]), p) : m
        });
        a.length ? this.La.fa[this.identifier] = a : delete this.La.fa[this.identifier]
    }
};
function Rd(a) {
    new Td(a, h, h, h)
}
Vd.prototype.d = function () {
    var a = new Vd(this.La);
    Na(a, this);
    return a
};
function Wd(a) {
    this.ma = a;
    this.F = {};
    this.fa = {}
}
Wd.prototype.rb = function (a, b) {
    s(this.F[b]) ? 0 <= Aa(this.F[b], a) || (this.F[b].push(a), this.F[b].sort(dd)) : (this.F[b] = [a], U("touch" == b.substring(0, 5) && a != this.ma ? document : "key" == b.substring(0, 3) ? window : this.ma.a.parentNode, b, this, p, this))
};
Wd.prototype.sb = function (a, b) {
    s(this.F[b]) && (Fa(this.F[b], a), this.F[b].length || (Kb(this.ma.a.parentNode, b, this, p, this), delete this.F[b]))
};
function nd(a, b) {
    for (var c in a.F) {
        var d = a.F[c];
        0 <= Aa(d, b) && d.sort(dd)
    }
}
Wd.prototype.Ca = function (a, b, c) {
    var d = a.identifier;
    s(this.fa[d]) || (this.fa[d] = []);
    this.fa[d].push([a.ga, b, c]);
    U(a.ga, b, ca)
};
Wd.prototype.handleEvent = function (a) {
    if (s(this.F[a.type])) {
        for (var b = this.F[a.type].slice(), c = p, d = 0, e = 0; !e;) {
            var f = new Vd(this);
            f.type = a.type;
            f.event = a;
            if ("touch" == a.type.substring(0, 5)) {
                var g = a.ca.changedTouches[d];
                f.U = new D(g.pageX, g.pageY);
                f.identifier = g.identifier;
                d++;
                d >= a.ca.changedTouches.length && (e = 1)
            } else f.U = new D(a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, a.clientY + document.body.scrollTop + document.documentElement.scrollTop), e = 1;
            if (s(this.fa[f.identifier])) {
                for (var g =
                    this.fa[f.identifier], k = 0; k < g.length; k++)if (g[k][1] == a.type || t(g[k][1]) && 0 <= Aa(g[k][1], a.type)) {
                    var l = g[k][0];
                    f.ga = l;
                    f.position = l.Z(f.U);
                    g[k][2].call(l, f);
                    c = m
                }
                if ("touchend" == a.type || "touchcancel" == a.type || "mouseup" == a.type || "keyup" == a.type)delete f.ga, f.sb()
            } else for (k = 0; k < b.length; k++)if (l = b[k], !((this.ma.h.length ? this.ma.h[this.ma.h.length - 1] : n) != l.gb() && l != this.ma) && !l.hb && l.p)if (f.ga = l, l.Na(f) || "key" == a.type.substring(0, 3))if (f.ga = l, l.dispatchEvent(f), c = m, f.event.Y)break
        }
        c && a.preventDefault()
    }
};
function Xd(a) {
    N.call(this);
    this.va = a || window;
    this.kb = U(this.va, "resize", this.od, p, this);
    this.o = hc(this.va || window);
    if (R && mb || ib && this.va.self != this.va.top)this.Bb = window.setInterval(ka(this.pc, this), Yd)
}
B(Xd, Qb);
var Yd = 500;
q = Xd.prototype;
q.kb = n;
q.va = n;
q.o = n;
q.Bb = n;
q.j = function () {
    return this.o ? this.o.d() : n
};
q.V = function () {
    Xd.Ta.V.call(this);
    this.kb && (Lb(this.kb), this.kb = n);
    this.Bb && (window.clearInterval(this.Bb), this.Bb = n);
    this.o = this.va = n
};
q.od = function () {
    this.pc()
};
q.pc = function () {
    var a = hc(this.va || window);
    if (!(a == this.o || (!a || !this.o ? 0 : a.width == this.o.width && a.height == this.o.height)))this.o = a, this.dispatchEvent("resize")
};
function Zd(a, b) {
    N.call(this);
    this.r = 1;
    this.he = a;
    this.Fc = b;
    this.kd = p
}
B(Zd, Qb);
Zd.prototype.s = function (a) {
    this.r = a;
    return this
};
Zd.prototype.start = function () {
    this.Fc.L(new D(0, 0));
    gd(this.Fc, p);
    this.finish()
};
Zd.prototype.finish = function () {
    this.dispatchEvent(new O("end"));
    this.kd = m
};
function $d(a, b, c) {
    V.call(this);
    this.p = m;
    this.Xb(0, 0);
    this.h = [];
    this.sc = [];
    this.ab = "lime-director";
    ad(this);
    a.appendChild(this.a);
    R && jb && (this.rc = document.createElement("div"), ac(this.rc, "lime-cover-below"), mc(this.rc, this.a), this.qc = document.createElement("div"), ac(this.qc, "lime-cover-above"), nc(this.qc, this.a));
    "absolute" != a.style.position && (a.style.position = "relative");
    a.style.overflow = "hidden";
    if (a == document.body) {
        Ec("html,body{margin:0;padding:0;height:100%;}");
        var d = document.createElement("meta");
        d.name = "viewport";
        var e = "width=device-width,initial-scale=1.0,minimum-scale=1,maximum-scale=1.0,user-scalable=no";
        /android/i.test(navigator.userAgent) && (e += ",target-densityDpi=device-dpi");
        d.content = e;
        document.getElementsByTagName("head").item(0).appendChild(d);
        if (jb && !r.navigator.Nd) {
            var f = this;
            setTimeout(function () {
                window.scrollTo(0, 0);
                f.jb()
            }, 100)
        }
    }
    var g;
    a = Cc(a);
    this.G(new E(g = b || a.width || 400, c || a.height * g / a.width || 400));
    this.vc && oc(this.md);
    this.vc = p;
    ae(this);
    b = new Xd;
    U(b, "resize", this.jb, p, this);
    U(r, "orientationchange", this.jb, p, this);
    X.ub(this.Ba, this);
    this.xa = new Wd(this);
    U(this, ["touchmove", "touchstart"], function (a) {
        a.event.preventDefault()
    }, p, this);
    U(this, ["mouseup", "touchend", "mouseout", "touchcancel"], aa(), p);
    this.jb()
}
B($d, V);
function ae(a) {
    a.rd = p;
    X.fd(a);
    if (a.rd) {
        a.Ub = new (a.ie || Sd);
        var b = a.Ub, c;
        b.G(a.j().d());
        s(h) && a.h.length && (c = a.h[a.h.length - 1], c = new h(c, b), s(h) && c.s(h), b.a.style.display = "none");
        a.h.push(b);
        a.a.appendChild(b.a);
        b.g = a;
        ld(b);
        c && c.start()
    } else a.Ub && (be(a), delete a.Ub)
}
q = $d.prototype;
q.D = function () {
    return this
};
q.gb = function () {
    return n
};
q.Ba = function (a) {
    this.vc && (this.Cc++, this.Va += a, 100 < this.Va && (this.ld = 1E3 * this.Cc / this.Va, qc(this.md, this.ld.toFixed(2)), this.Va = this.Cc = 0));
    qa()
};
function ce(a, b) {
    b.G(a.j().d());
    var c = n;
    a.h.length && (c = a.h[a.h.length - 1]);
    for (var d = [], e = a.h.length; 0 <= --e;)md(a.h[e]), d.push(a.h[e].a), a.h[e].g = n;
    a.h.length = 0;
    a.h.push(b);
    b.a.style.display = "none";
    a.a.appendChild(b.a);
    b.g = a;
    ld(b);
    c = new Zd(c, b);
    Jb(c, "end", function () {
        for (var a = d.length; 0 <= --a;)oc(d[a]);
        d.length = 0
    }, p, a);
    s(h) && c.s(h);
    c.start()
}
q.ua = function () {
    this.l &= -65
};
function be(a) {
    var b, c = a.h.length ? a.h[a.h.length - 1] : n;
    if (c !== n) {
        var d = function () {
            md(c);
            c.g = n;
            oc(c.a);
            this.h.pop();
            c = n
        };
        s(h) && 1 < a.h.length ? (b = new h(c, a.h[a.h.length - 2]), s(h) && b.s(h), Jb(b, "end", d, p, a)) : d.call(a);
        b && b.start()
    }
}
q.Dc = function (a) {
    var b = this.c, c = this.n;
    return new Ja(a.top - b.y / c.y, a.right - b.x / c.x, a.bottom - b.y / c.y, a.left - b.x / c.x)
};
q.Z = function (a) {
    a = a.d();
    a.x -= this.bb.x + this.c.x;
    a.y -= this.bb.y + this.c.y;
    a.x /= this.n.x;
    a.y /= this.n.y;
    return a
};
q.lb = function (a) {
    a = a.d();
    a.x *= this.n.x;
    a.y *= this.n.y;
    a.x += this.bb.x + this.c.x;
    a.y += this.bb.y + this.c.y;
    return a
};
q.update = function () {
    V.prototype.update.call(this);
    for (var a = this.sc.length; 0 <= --a;)this.sc[a].update()
};
q.jb = function () {
    var a = Cc(this.a.parentNode);
    this.a.parentNode == document.body && (window.scrollTo(0, 0), y(window.innerHeight) && (a.height = window.innerHeight));
    var b;
    b = this.j().d();
    b = b.scale(b.width / b.height > a.width / a.height ? a.width / b.width : a.height / b.height);
    var c = b.width / this.j().width;
    this.Yb(c);
    a.width / a.height < b.width / b.height ? this.L(0, (a.height - b.height) / 2) : this.L((a.width - b.width) / 2, 0);
    this.bb = yc(this.a.parentNode);
    jb && this.a.parentNode == document.body && (this.Rc && (b = this.Rc, oc(b.ownerNode || b.owningElement ||
        b)), this.Rc = Ec("html{height:" + (a.height + 120) + "px;overflow:hidden;}"))
};
function de(a) {
    var b = document.createElement("meta");
    b.name = "apple-mobile-web-app-capable";
    b.content = "yes";
    document.getElementsByTagName("head").item(0).appendChild(b);
    b = document.createElement("meta");
    b.name = "apple-mobile-web-app-status-bar-style";
    b.content = "black";
    document.getElementsByTagName("head").item(0).appendChild(b);
    b = p;
    s(localStorage) && (b = localStorage.getItem("_lime_visited"));
    /(ipod|iphone|ipad)/i.test(navigator.userAgent) && (!window.navigator.Nd && !b && a.a.parentNode == document.body) && (alert("Please install this page as a web app by clicking Share + Add to home screen."),
        s(localStorage) && localStorage.setItem("_lime_visited", m))
}
q.Na = function (a) {
    a && a.U && (a.position = this.Z(a.U));
    return m
};
function ee() {
    var a = u("hvBoard") ? document.getElementById("hvBoard") : "hvBoard";
    console.log(Cc(document.body));
    console.log(Cc(a));
    var b = new $d(a, hv_Witdh, hv_Height), c = new Oa, d = (new pd).L(512, 384), e = (new Hd).G(150, 150).Qa(255, 150, 0), f = Ld(Nd((new Kd).G(160, 50), 30), "TOUCH ME!"), g = Od(kd(Ld(Nd((new Kd).G(800, 70), 60), "Now move me around!"), 0).L(512, 80), "#999").Qa(200, 100, 0, 0.1), k = (new Z).Qa("../assets/bg_board.jpg").L(hv_Witdh / 2, hv_Height / 2);
    c.appendChild(k);
    d.appendChild(e);
    d.appendChild(f);
    c.appendChild(d);
    c.appendChild(g);
    e = (new Qd).L(hv_Witdh / 3, hv_Height / 3).G(e5_card_width, e5_card_height);
    c.appendChild(e);
    e = (new Jd).L(600, 400).G(200, 200);
    c.appendChild(e);
    e.start();
    de(b);
    U(d, ["mousedown", "touchstart"], function (a) {
        od(d, new Fd((new $(0.5)).s(0.2), (new Gd(1.5)).s(0.8)));
        od(g, new $(1));
        Rd(a);
        a.Ca(["mouseup", "touchend"], function () {
            od(d, new Fd(new $(1), new Gd(1), new Id(512, 384)));
            od(g, new $(0))
        })
    });
    ce(b, c);
    xc(a)
}
var fe = ["e5cards", "start"], ge = r;
!(fe[0]in ge) && ge.execScript && ge.execScript("var " + fe[0]);
for (var he; fe.length && (he = fe.shift());)!fe.length && s(ee) ? ge[he] = ee : ge = ge[he] ? ge[he] : ge[he] = {};
