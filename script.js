// Latihan 1: Mengubah teks dengan DOM
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

// Latihan 2: Event click
const tombolAksi = document.getElementById("tombolAksi");

tombolAksi.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

// Latihan 3: Mengubah kelas dan gaya CSS
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});

// Latihan 4: Event input dan penghitung karakter
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});

// Latihan 5: Validasi form pendaftaran
const formPendaftaran = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

formPendaftaran.addEventListener("submit", function (event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    pesanForm.className = "pesan-notif";

    if (nama === "") {
        pesanForm.textContent = "Nama wajib diisi.";
        pesanForm.classList.add("pesan-error");
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
        pesanForm.classList.add("pesan-error");
    } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
        pesanForm.textContent = "Usia harus berupa bilangan bulat 17-100.";
        pesanForm.classList.add("pesan-error");
    } else {
        pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
        pesanForm.classList.add("pesan-sukses");
        formPendaftaran.reset();
    }
});

// Latihan 6 & Eksperimen Mandiri 1: Daftar tugas sederhana (To-do List) + Hapus Item
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();
    pesanTugas.className = "pesan-notif";

    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        pesanTugas.classList.add("pesan-error");
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const containerAksi = document.createElement("div");
    const selesai = document.createElement("button");
    const hapus = document.createElement("button");

    label.textContent = teks + " ";
    selesai.type = "button";
    selesai.textContent = "Tandai selesai";
    
    hapus.type = "button";
    hapus.textContent = "Hapus";
    hapus.className = "btn-hapus";

    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");
        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai"
            : "Tandai selesai";
    });

    hapus.addEventListener("click", function () {
        daftarTugas.removeChild(item);
        pesanTugas.textContent = "Tugas berhasil dihapus.";
        pesanTugas.className = "pesan-notif pesan-sukses";
    });

    containerAksi.append(selesai, hapus);
    item.append(label, containerAksi);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    pesanTugas.classList.add("pesan-sukses");
    inputTugas.focus();
});

// Mini Project: Form Pendaftaran Workshop
const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");
const charWorkshop = document.getElementById("charWorkshop");
const infoSesi = document.getElementById("infoSesi");
const pesanWorkshop = document.getElementById("pesanWorkshop");
const btnResetWorkshop = document.getElementById("btnResetWorkshop");

// Fitur Interaktif 1: Penghitung Karakter Nama Live
namaWorkshop.addEventListener("input", function () {
    charWorkshop.textContent = namaWorkshop.value.length;
});

// Fitur Interaktif 2: Event Change Dropdown Sesi
sesiWorkshop.addEventListener("change", function () {
    if (sesiWorkshop.value !== "") {
        infoSesi.textContent = "Anda memilih: " + sesiWorkshop.value;
    } else {
        infoSesi.textContent = "";
    }
});

// Fitur Interaktif 3: Validasi Form Submit (Nama Min. 3 karakter, Email, Sesi)
formWorkshop.addEventListener("submit", function (e) {
    e.preventDefault();
    const namaVal = namaWorkshop.value.trim();
    const emailVal = emailWorkshop.value.trim();
    const sesiVal = sesiWorkshop.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    pesanWorkshop.className = "pesan-notif";

    if (namaVal.length < 3) {
        pesanWorkshop.textContent = "Nama wajib diisi minimal 3 karakter.";
        pesanWorkshop.classList.add("pesan-error");
    } else if (!polaEmail.test(emailVal)) {
        pesanWorkshop.textContent = "Format email tidak valid.";
        pesanWorkshop.classList.add("pesan-error");
    } else if (sesiVal === "") {
        pesanWorkshop.textContent = "Silakan pilih sesi workshop.";
        pesanWorkshop.classList.add("pesan-error");
    } else {
        pesanWorkshop.textContent = `Pendaftaran berhasil! Terima kasih ${namaVal}, konfirmasi dikirim ke ${emailVal}.`;
        pesanWorkshop.classList.add("pesan-sukses");
    }
});

// Fitur Interaktif 4: Tombol Reset
btnResetWorkshop.addEventListener("click", function () {
    formWorkshop.reset();
    charWorkshop.textContent = "0";
    infoSesi.textContent = "";
    pesanWorkshop.textContent = "Form telah di-reset.";
    pesanWorkshop.className = "pesan-notif";
});
