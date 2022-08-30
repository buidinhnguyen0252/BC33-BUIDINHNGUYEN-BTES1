(tinhDTB = (...e) => {
  let n = 0;
  return (
    e.map((e) => {
      n += parseFloat(e);
    }),
    (n / e.length).toFixed(2)
  );
}),
  (document.querySelector("#btnKhoi1").onclick = () => {
    let e = document.querySelector("#inpToan").value,
      n = document.querySelector("#inpLy").value,
      t = document.querySelector("#inpHoa").value;
    document.querySelector("#tbKhoi1").innerHTML = tinhDTB(e, n, t);
  }),
  (document.querySelector("#btnKhoi2").onclick = () => {
    let e = document.querySelector("#inpVan").value,
      n = document.querySelector("#inpSu").value,
      t = document.querySelector("#inpDia").value,
      d = document.querySelector("#inpEnglish").value;
    document.querySelector("#tbKhoi2").innerHTML = tinhDTB(e, n, t, d);
  });
