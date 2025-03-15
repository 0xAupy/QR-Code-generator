let qrInstance = null;

// Generate QR code function
function generateQR() {
  const text = document.getElementById("user-input").value;
  const qrCodeDiv = document.getElementById("qrcode");
  const size = document.getElementById("qr-size").value;
  const downloadBtn = document.getElementById("download-btn");

  // Clear previous QR code
  qrCodeDiv.innerHTML = "";

  if (text.trim() === "") {
    alert("Please enter text or a number.");
    return;
  }

  // Create new QR code with white foreground for dark theme
  qrInstance = new QRCode(qrCodeDiv, {
    text: text,
    width: parseInt(size),
    height: parseInt(size),
    colorDark: "#ffffff",
    colorLight: "#2d2d2d",
  });

  // Show download button
  downloadBtn.style.display = "block";
}

// Download QR code function
function downloadQR() {
  if (!qrInstance) return;

  // Get the QR code image
  const qrImg = document.querySelector("#qrcode img");
  if (!qrImg) return;

  // Create a temporary link
  const link = document.createElement("a");
  link.href = qrImg.src;
  link.download = "qrcode.png";

  // Simulate click
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Generate button click
  document.getElementById("generate-btn").addEventListener("click", generateQR);

  // Download button click
  document.getElementById("download-btn").addEventListener("click", downloadQR);

  // Enter key press in input field
  document
    .getElementById("user-input")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        generateQR();
      }
    });
});
