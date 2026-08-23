function gen() {
  const text = document.getElementById('text').value;
  console.log('Generating QR for:', text);
  document.getElementById('qrcode').innerText = 'QR Code generated for: ' + text;
}
