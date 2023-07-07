function generarPorcentaje() {
  const nombre = document.getElementById("nombreInput").value;
  const resultadoElemento = document.getElementById("resultado");

  if (nombre === "Lucas") {
    resultadoElemento.innerText = "Lucas es 100% kbrazo";
  } else {
    const porcentaje = Math.floor(Math.random() * 101);
    resultadoElemento.innerText = nombre + " es " + porcentaje + "% cool";
  }
}
