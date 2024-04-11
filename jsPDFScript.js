// Contenido de jsPDFScript.js
function generarPDF() {
  var pago = document.getElementById("pago").value;
  var total = document.getElementById("total").value;
  var devuelta = document.getElementById("devuelta").innerText;

  var pdf = new jsPDF();

  pdf.text("Calculadora de Devuelta en Pesos Colombianos", 10, 10);
  pdf.text("Cantidad pagada: " + pago + " COP", 10, 20);
  pdf.text("Total de la compra: " + total + " COP", 10, 30);
  pdf.text(devuelta, 10, 40);

  pdf.save("devuelta.pdf");
}
