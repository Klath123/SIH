const QRCode = require("qrcode");

async function generatePassportQR(data) {
  // `data` can be { wallet, tokenId, expiry }
  return await QRCode.toDataURL(JSON.stringify(data));
}

module.exports = { generatePassportQR };
