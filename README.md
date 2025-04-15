# pemrogramvisual2P3
app cuaca 
# 🌤️ Weather App

 📝 *Deskripsi*
*WeatherApp* adalah aplikasi desktop berbasis Windows Forms yang memungkinkan pengguna untuk:
- Melihat informasi cuaca terkini berdasarkan *lokasi GPS*,
- Memilih secara manual *provinsi, kota, dan kecamatan* dari seluruh wilayah Indonesia,
- Menampilkan informasi seperti suhu, kelembaban, dan kondisi cuaca saat ini.
Aplikasi ini terintegrasi dengan *OpenWeatherMap API* untuk mengambil data cuaca secara real-time.


 💡 *Fitur Utama*
1. 🔍 *Cari Cuaca Manual*
   - Pilih provinsi → kota → kecamatan dari seluruh Indonesia
   - Dapatkan informasi cuaca langsung berdasarkan kota yang dipilih

2. 📍 *Gunakan Lokasi Saya (GPS)*
   - Menggunakan koordinat geografis (latitude & longitude) dari perangkat
   - Menampilkan cuaca sesuai lokasi pengguna saat ini

3. 🌐 *Terintegrasi dengan OpenWeatherMap*
   - Menampilkan data real-time: suhu, deskripsi cuaca, kelembaban, dan lokasi

---

 🛠️ *Teknologi yang Digunakan*
- *Bahasa Pemrograman*: C#  
- *Framework*: .NET Framework (Windows Forms)  
- *API Cuaca*: [OpenWeatherMap](https://openweathermap.org/)  
- *Library Tambahan*:  
  - `Newtonsoft.Json` – untuk parsing JSON  
  - `System.Device.Location` – untuk mendapatkan koordinat GPS  
- *Struktur Data Wilayah*: `indonesia_data.json` (berisi data provinsi, kota, dan kecamatan)

---

 ▶️ *Cara Menggunakan Aplikasi*

 *1. Jalankan Aplikasi*
1. Pilih *Provinsi → Kota → Kecamatan*
2. Klik *Cari Cuaca* untuk melihat kondisi terkini
3. Atau klik *Gunakan Lokasi Saya* untuk ambil lokasi GPS
4. Data cuaca akan muncul di bawah dalam format ramah pengguna

# 📌 *Catatan*
- Pastikan komputer pengguna *terhubung internet*
- Fungsi GPS memerlukan *izin lokasi* dan perangkat yang mendukung
- Gunakan *API Key pribadi* dari OpenWeatherMap agar aplikasi bisa mengambil data
cd weather-app
open index.html

