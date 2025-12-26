# Best Practices Visualisasi Data

Membuat grafik itu mudah, membuatnya *efektif* itu sulit. Hindari menjebak audiens dengan visualisasi yang membingungkan atau menyesatkan.

## 1. Pilih Grafik yang Tepat

- **Perbandingan**: Bar chart, Column chart.
- **Distribusi**: Histogram, Boxplot, density plot.
- **Hubungan/Korelasi**: Scatter plot.
- **Komposisi (Part-to-whole)**: Stacked bar chart, Treemap (Hindari Pie Chart jika kategori > 3).
- **Tren Waktu**: Line chart.

## 2. Hindari "Chart Junk"

Jangan tambahkan elemen dekoratif yang tidak perlu, seperti:
- Efek 3D pada grafik 2D (sangat buruk untuk keakuratan pembacaan).
- Background pattern yang ramai.
- Grid line yang terlalu tebal.

> "Simplicity is the ultimate sophistication."

## 3. Perhatikan Skala dan Sumbu

- **Bar Chart**: Harus selalu mulai dari 0. Memotong sumbu Y di bar chart bisa membesar-besarkan perbedaan yang sebenarnya kecil (misleading).
- **Line Chart**: Boleh tidak mulai dari 0 jika tujuannya melihat tren fluktuasi, asalkan diberi keterangan jelas.

## 4. Warna yang Aksesibel

- Jangan hanya mengandalkan warna hijau vs merah (banyak orang buta warna parsial kesulitan membedakannya). Gunakan kombinasi Biru/Oranye atau palet "Colorblind Friendly".
- Gunakan warna untuk menonjolkan data, bukan sekadar dekorasi.

## 5. Konteks adalah Raja

Sebuah grafik tanpa judul, label sumbu, dan keterangan satuan adalah grafik yang bisu. Selalu pastikan audiens tahu:
- Apa yang mereka lihat? (Judul)
- Apa satuannya? (Label Sumbu: $, kg, tahun)
- Dari mana datanya? (Sumber/Caption)
