// Fungsi untuk membuka formulir
function openForm(gameName) {
    document.getElementById("form-section").style.display = "flex"; // Menampilkan formulir
    document.getElementById("game-name").innerText = gameName; // Menampilkan nama game yang dipilih
}

// Fungsi untuk menutup formulir
function closeForm() {
    document.getElementById("form-section").style.display = "none"; // Menyembunyikan formulir
}

// Fungsi untuk menampilkan notifikasi
function showNotification() {
    const notification = document.getElementById("notification");
    notification.classList.add("show"); // Menampilkan notifikasi

    // Menyembunyikan notifikasi setelah 3 detik
    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
}

// Fungsi untuk menangani konfirmasi top-up
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara langsung
    
    closeForm(); // Menutup formulir terlebih dahulu
    
    setTimeout(showNotification, 500); // Menampilkan notifikasi setelah 0.5 detik (agar ada jeda setelah formulir tertutup)
});
