!(function(e, n) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = n())
    : 'function' == typeof define && define.amd
      ? define([], n)
      : 'object' == typeof exports ? (exports['cookie-man.js'] = n()) : (e['cookie-man.js'] = n())
})(window, function() {
  return (function(e) {
    var n = {}
    function t(o) {
      if (n[o]) return n[o].exports
      var r = (n[o] = { i: o, l: !1, exports: {} })
      return e[o].call(r.exports, r, r.exports, t), (r.l = !0), r.exports
    }
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: o })
      }),
      (t.r = function(e) {
        Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (t.n = function(e) {
        var n =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return t.d(n, 'a', n), n
      }),
      (t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
      }),
      (t.p = ''),
      t((t.s = 0))
    )
  })([
    function(e, n, t) {
      'use strict'
      var o
      function r(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[n] = t),
          e
        )
      }
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.clear = function() {
          return (
            document.cookie.split('; ').forEach(function(e) {
              var n = e.split('=')[0]
              document.cookie = n + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT;'
            }),
            u()
          )
        })
      var i = (n.getItem = function(e) {
          return document.cookie.split('; ').find(function(n) {
            return n.split('=')[0] === e
          })
        }),
        u = ((n.keys = function() {
          return document.cookie.split('; ').map(function(e) {
            return e.split('=')[0]
          })
        }),
        (n.length = function() {
          return document.cookie.split('; ').length
        })),
        c = ((n.removeItem = function(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ''
          if (!e || a(e)) return !1
          document.cookie =
            encodeURIComponent(e) +
            '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=' +
            t +
            '; path=' +
            n
        }),
        r((o = { path: '/', domain: '' }), 'max-age', 864e5),
        r(o, 'expires', new Date(2147483647e3)),
        r(o, 'secure', !1),
        o),
        a = ((n.setItem = function(e, n) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          if (!e) return !1
          var o = Object.assign({}, c, t)
          return (
            (document.cookie =
              encodeURIComponent(e) +
              '=' +
              encodeURIComponent(n) +
              '; path=' +
              o.path +
              '; domain=' +
              o.domain +
              '; max-age=' +
              o['max-age'] +
              ';\n    expires=' +
              o.expires +
              '; secure=' +
              o.secure +
              '\n  '),
            i(e)
          )
        }),
        (n.forEach = function(e) {
          document.cookie.split('; ').forEach(function(n, t) {
            var o = n.split('=')[0],
              r = n.split('=')[1]
            e.call(window, o, r, t)
          })
        }),
        (n.hasItem = function(e) {
          return (
            document.cookie.split('; ').findIndex(function(n) {
              return n.split('=')[0] === e
            }) > -1
          )
        }))
    }
  ])
})
