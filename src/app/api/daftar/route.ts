import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import path from 'path';
import fs from 'fs/promises';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const nama = formData.get('nama') as string;
    const email = formData.get('email') as string;
    const telepon = formData.get('telepon') as string;
    const alamatLengkap = formData.get('alamatLengkap') as string;
    const tanggalLahirStr = formData.get('tanggalLahir') as string;
    const lulusan = formData.get('lulusan') as string;
    const gajiOrtuStr = formData.get('gajiOrtu') as string;
    const namaOrtu = formData.get('namaOrtu') as string;
    const tujuan = formData.get('tujuan') as string;
    const bersedia = formData.get('bersedia') === 'true';

    const requiredFields = { nama, email, telepon, alamatLengkap, tanggalLahirStr, lulusan, gajiOrtuStr, namaOrtu, tujuan };
    for (const [key, value] of Object.entries(requiredFields)) {
      if (!value) {
        return NextResponse.json({ error: `Field '${key}' wajib diisi.` }, { status: 400 });
      }
    }

    const foto = formData.get('foto') as File | null;

    if (!foto || foto.size === 0) {
      return NextResponse.json({ error: 'Foto wajib diupload.' }, { status: 400 });
    }

    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedMimeTypes.includes(foto.type)) {
      return NextResponse.json({ error: 'Format file tidak valid. Gunakan JPG, PNG, atau WebP.' }, { status: 400 });
    }

    const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
    if (foto.size > maxSizeInBytes) {
      return NextResponse.json({ error: 'Ukuran file terlalu besar. Maksimal 2MB.' }, { status: 400 });
    }

    const buffer = Buffer.from(await foto.arrayBuffer());
    const filename = `${Date.now()}-${foto.name.replace(/\s+/g, '-')}`;
    const uploadDir = path.join(process.cwd(), 'public/uploads');

    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(path.join(uploadDir, filename), buffer);

    const fotoUrl = `/uploads/${filename}`;

    const gajiOrtu = parseInt(gajiOrtuStr.replace(/\D/g, ''), 10);
    const tanggalLahir = new Date(tanggalLahirStr);

    if (isNaN(gajiOrtu)) {
        return NextResponse.json({ error: 'Format gaji orang tua tidak valid.' }, { status: 400 });
    }
    if (isNaN(tanggalLahir.getTime())) {
        return NextResponse.json({ error: 'Format tanggal lahir tidak valid.' }, { status: 400 });
    }

    // --- Simpan ke Database ---
    const newRegistration = await prisma.registration.create({
      data: {
        nama,
        email,
        telepon,
        alamatLengkap,
        tanggalLahir,
        lulusan,
        gajiOrtu,
        namaOrtu,
        tujuan,
        bersedia,
        foto: fotoUrl,
      },
    });

    return NextResponse.json(newRegistration, { status: 201 });
  } catch (error) {
    console.error('Error saat menyimpan data:', error);
    if (error instanceof Error) {
        return NextResponse.json({ error: `Gagal menyimpan data: ${error.message}` }, { status: 500 });
    }
    return NextResponse.json({ error: 'Gagal menyimpan data karena kesalahan server' }, { status: 500 });
  }
}
