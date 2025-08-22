// src/lib/duitku.service.ts

import CryptoJS from 'crypto-js';
import axios from 'axios';

const DUITKU_CONFIG = {
  merchantCode: process.env.DUITKU_MERCHANT_CODE!,
  apiKey: process.env.DUITKU_API_KEY!,
  baseUrl: 'https://passport.duitku.com/webapi/api/merchant/v2',
  callbackUrl: `${process.env.NEXT_PUBLIC_APP_URL}/api/callback`,
  returnUrl: `${process.env.NEXT_PUBLIC_APP_URL}/payment/status`,
};

// Structure definition for customer data
interface CustomerData {
  nama: string;
  whatsapp: string;
  email?: string;
  alamat: string;
}

// internal function to generate MD5 signature
function generateSignature(merchantCode: string, paymentAmount: number, merchantOrderId: string, apiKey: string): string {
  const stringToHash = merchantCode + merchantOrderId + paymentAmount + apiKey;
  return CryptoJS.MD5(stringToHash).toString();
}

// function to create Duitku payment
export async function createDuitkuPayment(
  customerData: CustomerData,
  orderId: string,
  amount: number,
  productTitle: string,
  paymentMethod: string
) {
  try {
    // Create signature for Duitku
    const signature = generateSignature(
      DUITKU_CONFIG.merchantCode,
      amount,
      orderId,
      DUITKU_CONFIG.apiKey
    );

    const { nama, alamat, whatsapp, email } = customerData;
    const [firstName, ...lastNameParts] = nama.split(' ');
    const lastName = lastNameParts.join(' ') || '-';

    // prepare the request body
    const requestBody = {
      merchantCode: DUITKU_CONFIG.merchantCode,
      paymentAmount: amount,
      paymentMethod: paymentMethod,
      merchantOrderId: orderId,
      productDetails: productTitle,
      customerVaName: nama,
      email: email || `${whatsapp}@example.com`,
      phoneNumber: whatsapp,
      itemDetails: [
        { name: productTitle, price: amount, quantity: 1 }
      ],
      customerDetail: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: whatsapp,
      },
      callbackUrl: DUITKU_CONFIG.callbackUrl,
      returnUrl: DUITKU_CONFIG.returnUrl,
      signature: signature,
      expiryPeriod: 1440 // expire in 24 hours
    };

    const response = await axios.post(
      `${DUITKU_CONFIG.baseUrl}/inquiry`,
      requestBody
    );

    return response.data;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Duitku API error:', error.response?.data);
    } else {
      console.error('Unknown error in Duitku service:', error);
    }
    throw new Error('Gagal membuat permintaan pembayaran ke Duitku.');
  }
}
