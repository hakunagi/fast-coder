import "./style.scss"
let w = window
let d = decodeURIComponent
let e = encodeURIComponent
let v = "value"
let f = [
  [(v) => d(escape(atob(v))), (v) => btoa(unescape(e(v)))],
  [d, e],
]
let s = 0

w.s.onchange = () => (s = w.s[v])
w.D.onclick = () => (w.e[v] = f[s][0](w.d[v]))
w.E.onclick = () => (w.d[v] = f[s][1](w.e[v]))
w.d.onfocus = () => w.d.select()
w.e.onfocus = () => w.e.select()
