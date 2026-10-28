# Repository Lab6Web - JavaScript DOM & Event Handling

**Nama:** Naufal Fikri  
**NIM:** 312510350  
**Mata Kuliah:** Pemrograman Web (Pertemuan 7)  

---

## 1. Tujuan Praktikum
1. Memahami DOM sebagai representasi dokumen HTML yang dapat diakses melalui JavaScript.
2. Menggunakan ID, class, dan selector CSS untuk memilih elemen HTML.
3. Mengubah teks, atribut, kelas CSS, dan gaya elemen melalui JavaScript.
4. Menangani event pengguna menggunakan `addEventListener()`.
5. Membuat validasi form dan menampilkan pesan sesuai kondisi input.
6. Mengembangkan halaman interaktif dengan minimal tiga fungsi yang berjalan benar.

---

## 2. Struktur File
```text
lab6_dom_event/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 3. Latihan & Fitur yang Diimplementasikan
- **Latihan 1:** Mengubah teks elemen HTML menggunakan `textContent`.
- **Latihan 2:** Event `click` untuk mengubah teks dan waktu aksi (`new Date().toLocaleTimeString()`).
- **Latihan 3:** Mengubah kelas CSS menggunakan `classList.toggle()`.
- **Latihan 4:** Event `input` untuk menghitung jumlah karakter secara real-time.
- **Latihan 5:** Validasi form pendaftaran (Nama, Email regex, Usia 17-100) dan `preventDefault()`.
- **Latihan 6 & Eksperimen Mandiri:** Aplikasi To-Do List dengan penambahan fitur tandai selesai dan **tombol hapus task**.
- **Mini Project:** Form Pendaftaran Workshop interaktif:
  - Validasi nama minimal 3 karakter, email, dan pilihan sesi.
  - Live character counter.
  - Dynamic display pilihan sesi (`change` event).
  - Tombol reset form.

---

## 4. Jawaban Pertanyaan Evaluasi

1. **Apa yang dimaksud dengan DOM dan apa manfaatnya?**
   - *DOM (Document Object Model)* adalah antarmuka pemrograman yang merepresentasikan dokumen HTML dalam bentuk pohon objek (tree node). Manfaatnya memungkinkan bahasa pemrograman seperti JavaScript untuk mengubah struktur, gaya, dan konten halaman secara dinamis.

2. **Apa perbedaan `getElementById()`, `querySelector()`, dan `querySelectorAll()`?**
   - `getElementById()`: Memilih satu elemen spesifik berdasarkan atribut `id`.
   - `querySelector()`: Memilih elemen **pertama** yang cocok dengan selector CSS (bisa berdasarkan tag, class, id, dll).
   - `querySelectorAll()`: Memilih **semua** elemen yang cocok dengan selector CSS dan mengembalikannya dalam bentuk `NodeList`.

3. **Apa fungsi `addEventListener()` dan sebutkan tiga contoh event?**
   - Fungsi: Menghubungkan suatu event pada elemen dengan fungsi handler yang akan dijalankan ketika event tersebut terjadi.
   - Contoh event: `click`, `input`, `submit` (serta `change`, `keydown`).

4. **Mengapa `event.preventDefault()` digunakan pada event submit form?**
   - Untuk mencegah perilaku default browser yang memuat ulang (*reload*) halaman saat form dikirimkan, sehingga proses validasi dapat dilakukan terlebih dahulu menggunakan JavaScript.

5. **Apa perbedaan `textContent` dan `innerHTML` dari sisi penggunaan dan keamanan?**
   - `textContent`: Membaca/menulis teks polos. Aman dari serangan XSS (*Cross-Site Scripting*).
   - `innerHTML`: Membaca/menulis tag markup HTML. Rentan XSS jika digunakan untuk memasukkan input pengguna yang tidak terfilter.

6. **Bagaimana `classList.toggle()` membantu mengubah tampilan elemen?**
   - `classList.toggle()` secara otomatis menambahkan class ke elemen jika class tersebut belum ada, atau menghapusnya jika class tersebut sudah ada, sehingga mempermudah pembuatan efek saklar (toggle) tampilan.

7. **Sebutkan minimal tiga skenario pengujian validasi form.**
   - Skenario 1: Mengirim form saat semua input masih kosong.
   - Skenario 2: Mengisi email dengan format tidak valid (misal: `tanpa@domain`).
   - Skenario 3: Mengisi usia di luar rentang yang diizinkan (misal: `< 17` atau `> 100`).

---

## 5. Cara Menjalankan
1. *Clone* atau *extract* folder `lab6_dom_event`.
2. Buka file `index.html` menggunakan browser modern (Chrome, Firefox, Edge).
3. Buka *Developer Tools / Console* (F12) untuk melihat log jika diperlukan.
