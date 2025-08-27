// types/index.ts

// Perbarui interface ini untuk menyertakan semua data yang dibutuhkan
export interface Registration {
  id: string;
  nama: string;
  lulusan: string; 
  tujuan: string;
  foto: string;
  statusDonasi: 'membutuhkan' | 'terdanai';
  
  // TAMBAHKAN DUA BARIS INI
  donasiTerkumpul: number;
  targetDonasi: number;
}
