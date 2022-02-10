import "./style.scss"
{
  const func = [
    [(v) => atob(v), (v) => btoa(v)],
    [(v) => decodeURI(v), (v) => encodeURI(v)],
  ]
  let sel = 0
  document.getElementById("s").addEventListener("change", function () {
    sel = this.value
  })
  document.getElementById("D").addEventListener("click", () => {
    document.getElementById("e").value = func[sel][0](
      document.getElementById("d").value
    )
  })
  document.getElementById("E").addEventListener("click", () => {
    document.getElementById("d").value = func[sel][1](
      document.getElementById("e").value
    )
  })
}
