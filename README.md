# Todo App - Vanilla JS with Drag & Drop, Theme Toggle, and Filters

Ini adalah aplikasi Todo sederhana yang dibangun menggunakan **HTML**, **CSS**, dan **JavaScript Vanilla**. Aplikasi ini mendukung fitur drag-and-drop untuk mengatur ulang urutan todo, filter berdasarkan status (all, completed, pending), toggle dark/light theme, dan juga menyimpan data secara lokal menggunakan `localStorage`.

## 🚀 Fitur Utama

- Tambah, edit, dan hapus todo
- Tandai todo sebagai selesai
- Filter todo berdasarkan status
- Urutkan todo secara manual (drag and drop)
- Mode gelap/terang (dark/light theme)
- State disimpan menggunakan `localStorage`
- Empty state untuk tampilan ketika daftar kosong

---

## 📁 Struktur Proyek

    /frontend
    ├── index.html                  
    ├── style.css                    
    ├── script.js                    
    └── README.md

---

## 🛠️ Pendekatan & Teknologi

### 1. **HTML**
- Menggunakan struktur dasar HTML dengan `<form>` untuk input todo, `<ul>` untuk menampilkan todo list, dan tombol-tombol tambahan untuk filter dan toggle tema.

### 2. **CSS**
- Menggunakan Flexbox dan Grid layout untuk menyusun elemen.
- CSS variable digunakan untuk memudahkan switch tema terang/gelap.
- Responsive design dan styling interaktif untuk pengalaman pengguna yang lebih baik.

### 3. **JavaScript**
- State todo disimpan sebagai array objek dengan properti `title` dan `completed`.
- Event delegation digunakan untuk menangani klik tombol dan perubahan input.
- Drag and drop diterapkan dengan menangkap `dragstart`, `dragover`, dan `drop` lalu menyusun ulang array `tasks`.
- Penyimpanan data dilakukan melalui `localStorage`, jadi data tetap ada setelah reload.

### 4. **Fitur UX tambahan**
- Empty state ditampilkan ketika daftar todo kosong.
- Input dibersihkan secara otomatis setelah menambahkan todo.
- Validasi input kosong.

---

## 🧪 Cara Menjalankan

1. Clone repo atau download file.
   
```bash
git clone https://github.com/renalfa/test-fleetify.git
cd frontend
```

2. Buka file `index.html` di browser.
3. Aplikasi langsung bisa digunakan tanpa instalasi tambahan.

---

## 📸 Tampilan

![Screenshot 2025-04-11 at 09 07 55](https://github.com/user-attachments/assets/41c5df9d-246c-4170-9eed-fe9c4ff968d1)
![Screenshot 2025-04-11 at 09 08 19](https://github.com/user-attachments/assets/d2ba853c-0e26-4f3b-b7bd-77e121635055)

