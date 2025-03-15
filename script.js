function generateQR() {
  let input = document.getElementById("user-input").value;
  let qrCodeDiv = document.getElementById("qrcode");

  // Clear previous QR code
  qrCodeDiv.innerHTML = "";

  if (input.trim() === "") {
    alert("Please enter text or a number.");
    return;
  }

  new QRCode(qrCodeDiv, {
    text: input,
    width: 200,
    height: 200,
  });
}
