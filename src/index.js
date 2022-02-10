import "./style.scss"
{
  const g = (q) => document.getElementById(q)
  const a = (q, w, e) => document.getElementById(q).addEventListener(w, e)
  const func = [
    [
      (v) => decodeURIComponent(escape(atob(v))),
      (v) => btoa(unescape(encodeURIComponent(v))),
    ],
    [(v) => decodeURI(v), (v) => encodeURI(v)],
  ]
  let sel = 0
  a("s", "change", function () {
    sel = this.value
  })
  a("D", "click", () => {
    g("e").value = func[sel][0](g("d").value)
  })
  a("E", "click", () => {
    g("d").value = func[sel][1](g("e").value)
  })
}
