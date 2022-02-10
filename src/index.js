import "./style.scss"
{
  const g = (v) => document.getElementById(v)
  const d = decodeURIComponent
  const e = encodeURIComponent
  const v = "value"
  const f = [
    [(v) => d(escape(atob(v))), (v) => btoa(unescape(e(v)))],
    [d, e],
  ]
  let s = 0
  g("s").onchange = function () {
    s = this[v]
  }
  g("D").onclick = () => {
    g("e")[v] = f[s][0](g("d")[v])
  }
  g("E").onclick = () => {
    g("d")[v] = f[s][1](g("e")[v])
  }
}
