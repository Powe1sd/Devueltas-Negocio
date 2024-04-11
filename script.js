function calcularDevuelta() {
  var total = parseFloat(document.getElementById("total").value);
  var pago = parseFloat(document.getElementById("pago").value);

  if (isNaN(total) || isNaN(pago)) {
    alert("Por favor ingrese números válidos.");
    return;
  }

  var devuelta = pago - total;

  if (devuelta < 0) {
    alert("La cantidad pagada es insuficiente.");
    return;
  }

  // Obtener la parte entera de la devolución
  var devueltaEntera = Math.floor(devuelta);
  // Obtener la parte decimal de la devolución
  var devueltaDecimal = devuelta - devueltaEntera;

  // Formatear la devolución con tres decimales si es necesario
  var devueltaFormateada = devueltaEntera + devueltaDecimal.toFixed(3).slice(1);

  document.getElementById("devuelta").innerText = devueltaFormateada + " COP";
  document.getElementById("resultado").style.display = "block";
}






