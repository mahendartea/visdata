# Pengantar Visualisasi Data

## Mengapa Visualisasi Data Penting?

Visualisasi data adalah seni dan sains untuk menerjemahkan informasi abstrak menjadi representasi visual. Otak manusia memproses gambar 60.000 kali lebih cepat daripada teks. Dengan visualisasi yang tepat, kita dapat:

- **Mengidentifikasi Pola**: Tren yang tersembunyi dalam ribuan baris data tabel menjadi jelas secara instan.
- **Mengkomunikasikan Insight**: Menjelaskan temuan kompleks kepada stakeholder non-teknis dengan mudah.
- **Mendeteksi Anomali**: Menemukan data outlier atau kesalahan data dengan cepat.

## Ekosistem Visualisasi Data di Python

Python memiliki ekosistem yang sangat kaya (dan kadang membingungkan) untuk visualisasi. Dalam modul ini, kita akan fokus pada "The Big Three":

1.  **Matplotlib**: Kakek dari semua library plot di Python. Sangat *powerful*, bisa dikustomisasi hingga pixel terkecil, namun sintaksnya bisa sedikit *verbose*.
2.  **Seaborn**: Dibangun di atas Matplotlib. Menyediakan antarmuka high-level untuk menggambar grafik statistik yang menarik dan informatif. "Matplotlib with sensible defaults".
3.  **Plotly**: Library untuk membuat grafik interaktif (bisa di-zoom, hover, klik) yang sangat cocok untuk dashboard web.

## Kapan Menggunakan Apa?

| Library | Kegunaan Utama | Kelebihan | Kekurangan |
| :--- | :--- | :--- | :--- |
| **Matplotlib** | Dasar, Publikasi Ilmiah | Kontrol penuh, tidak tergantung browser | Sintaks agak rumit, gaya default kurang modern |
| **Seaborn** | Analisis Statistik Eksploratif | Cepat, indah secara default, mudah untuk statistik | Kurang interaktif |
| **Plotly** | Presentasi Web, Dashboard | Interaktif, modern | File output lebih besar (HTML/JS) |

---

Selanjutnya, mari kita siapkan lingkungan kerja kita.
