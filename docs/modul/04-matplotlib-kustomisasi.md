# Kustomisasi Grafik Matplotlib

Grafik default Matplotlib seringkali terlihat kaku dan kurang menarik. Di modul ini kita akan belajar cara memolesnya agar layak publikasi atau presentasi profesional.

## Dataset untuk Praktik

Kita akan melanjutkan menggunakan dataset penjualan dari modul sebelumnya. Pastikan Anda sudah mendownload [penjualan.csv](/datasets/penjualan.csv).

```python
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

df = pd.read_csv('penjualan.csv')
```

## 1. Mengatur Ukuran Figure

Ukuran default sering terlalu kecil untuk presentasi atau terlalu besar untuk laporan.

```python
# Ukuran dalam inches (lebar, tinggi)
fig, ax = plt.subplots(figsize=(12, 6))  # Landscape untuk presentasi
# fig, ax = plt.subplots(figsize=(8, 10))  # Portrait untuk laporan

penjualan_bulanan = df.groupby('bulan')['penjualan'].sum()
ax.plot(penjualan_bulanan.index, penjualan_bulanan.values, marker='o')
ax.set_title("Tren Penjualan Bulanan")

plt.tight_layout()
plt.show()
```

## 2. Mengatur Limit dan Ticks Sumbu

Kontrol penuh atas rentang dan penanda sumbu.

```python
fig, ax = plt.subplots(figsize=(10, 6))

penjualan_bulanan = df.groupby('bulan')['penjualan'].sum()
ax.plot(penjualan_bulanan.index, penjualan_bulanan.values, 
        marker='o', linewidth=2, markersize=10, color='#E63946')

# Mengatur batas sumbu Y
ax.set_ylim(200, 500)  # Fokus pada rentang data yang relevan

# Mengatur ticks manual
bulan_urut = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni']
ax.set_xticks(range(len(bulan_urut)))
ax.set_xticklabels(bulan_urut, rotation=45, ha='right')

# Mengatur ticks Y dengan interval tertentu
ax.set_yticks(range(200, 501, 50))

ax.set_title("Tren Penjualan dengan Custom Ticks", fontsize=14, fontweight='bold')
ax.set_ylabel("Total Penjualan (Unit)")
ax.grid(True, alpha=0.3, linestyle='--')

plt.tight_layout()
plt.show()
```

## 3. Warna dan Gaya Garis

Matplotlib mendukung berbagai cara untuk menentukan warna.

```python
fig, ax = plt.subplots(figsize=(10, 6))

# Berbagai cara menentukan warna:
# 1. Nama warna: 'red', 'blue', 'green'
# 2. Hex code: '#FF6B6B'
# 3. RGB tuple: (0.2, 0.4, 0.6)
# 4. Warna dari palette: 'tab:blue', 'tab:orange'

laptop = df[df['produk'] == 'Laptop'].groupby('bulan')['penjualan'].sum()
mouse = df[df['produk'] == 'Mouse'].groupby('bulan')['penjualan'].sum()
keyboard = df[df['produk'] == 'Keyboard'].groupby('bulan')['penjualan'].sum()

ax.plot(laptop.index, laptop.values, 
        color='#E63946', linewidth=2.5, linestyle='-', marker='o', label='Laptop')
ax.plot(mouse.index, mouse.values, 
        color='#457B9D', linewidth=2.5, linestyle='--', marker='s', label='Mouse')
ax.plot(keyboard.index, keyboard.values, 
        color='#2A9D8F', linewidth=2.5, linestyle='-.', marker='^', label='Keyboard')

ax.set_title("Penjualan per Produk", fontsize=16, fontweight='bold')
ax.set_ylabel("Penjualan (Unit)", fontsize=12)
ax.legend(loc='upper left', fontsize=11, framealpha=0.9)
ax.grid(True, alpha=0.3)

plt.xticks(rotation=45)
plt.tight_layout()
plt.show()
```

::: tip Gaya Garis
- `'-'` : solid line
- `'--'` : dashed line
- `'-.'` : dash-dot line
- `':'` : dotted line
- Marker: `'o'` (circle), `'s'` (square), `'^'` (triangle), `'*'` (star)
:::

## 4. Anotasi dan Teks

Menambahkan panah atau teks untuk menyoroti poin penting.

```python
fig, ax = plt.subplots(figsize=(10, 6))

penjualan_bulanan = df.groupby('bulan')['penjualan'].sum()
ax.plot(penjualan_bulanan.index, penjualan_bulanan.values, 
        marker='o', linewidth=2, markersize=8, color='#F4A261')

# Cari nilai maksimum
max_idx = penjualan_bulanan.argmax()
max_bulan = penjualan_bulanan.index[max_idx]
max_nilai = penjualan_bulanan.values[max_idx]

# Anotasi dengan panah
ax.annotate(f'Puncak Penjualan\n{max_nilai} unit',
            xy=(max_idx, max_nilai),           # Titik yang ditunjuk
            xytext=(max_idx - 1, max_nilai + 30),  # Posisi teks
            fontsize=11,
            fontweight='bold',
            bbox=dict(boxstyle='round,pad=0.5', facecolor='yellow', alpha=0.7),
            arrowprops=dict(arrowstyle='->', connectionstyle='arc3,rad=0.3', 
                          color='red', lw=2))

# Menambahkan garis horizontal untuk rata-rata
rata_rata = penjualan_bulanan.mean()
ax.axhline(y=rata_rata, color='gray', linestyle='--', linewidth=1.5, alpha=0.7)
ax.text(0, rata_rata + 5, f'Rata-rata: {rata_rata:.0f}', 
        fontsize=10, color='gray')

ax.set_title("Analisis Penjualan Bulanan", fontsize=16, fontweight='bold')
ax.set_ylabel("Total Penjualan (Unit)", fontsize=12)
ax.grid(True, alpha=0.3)

plt.xticks(rotation=45)
plt.tight_layout()
plt.show()
```

## 5. Styling dengan Style Sheets

Matplotlib memiliki tema bawaan yang bisa langsung digunakan untuk mengubah tampilan keseluruhan.

```python
# Lihat daftar style yang tersedia
print(plt.style.available)

# Gunakan style tertentu
plt.style.use('seaborn-v0_8-darkgrid')
# Pilihan populer: 'ggplot', 'seaborn-v0_8-whitegrid', 'bmh', 'fivethirtyeight'

fig, ax = plt.subplots(figsize=(10, 6))

penjualan_bulanan = df.groupby('bulan')['penjualan'].sum()
ax.plot(penjualan_bulanan.index, penjualan_bulanan.values, 
        marker='o', linewidth=2.5, markersize=10)

ax.set_title("Grafik dengan Style 'seaborn-darkgrid'", fontsize=16, fontweight='bold')
ax.set_ylabel("Total Penjualan (Unit)", fontsize=12)

plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# Reset ke default
plt.style.use('default')
```

## 6. Menyimpan Grafik

Simpan grafik dalam berbagai format untuk berbagai keperluan.

```python
fig, ax = plt.subplots(figsize=(10, 6))

penjualan_bulanan = df.groupby('bulan')['penjualan'].sum()
ax.plot(penjualan_bulanan.index, penjualan_bulanan.values, 
        marker='o', linewidth=2, markersize=8)

ax.set_title("Tren Penjualan Bulanan", fontsize=16, fontweight='bold')
ax.set_ylabel("Total Penjualan (Unit)", fontsize=12)
ax.grid(True, alpha=0.3)

plt.xticks(rotation=45)
plt.tight_layout()

# Simpan dalam berbagai format
plt.savefig('penjualan.png', dpi=300, bbox_inches='tight')  # Untuk web/presentasi
plt.savefig('penjualan.pdf', bbox_inches='tight')           # Untuk publikasi
plt.savefig('penjualan.svg', bbox_inches='tight')           # Vector (scalable)

plt.show()
```

::: tip Parameter Penting `savefig()`
- `dpi`: Resolusi (dots per inch). 300 untuk print quality, 72-150 untuk web
- `bbox_inches='tight'`: Menghilangkan whitespace berlebih
- `transparent=True`: Background transparan (berguna untuk presentasi)
:::

## Latihan Praktik

::: warning Tugas
1. Buat bar chart dengan warna gradient untuk setiap bar
2. Tambahkan anotasi pada bar tertinggi dan terendah
3. Simpan hasilnya dalam format PNG dengan resolusi 300 dpi
4. Coba 3 style sheet berbeda dan pilih yang paling Anda sukai
:::

## Rangkuman Kustomisasi

| Aspek | Fungsi/Parameter | Contoh |
|-------|------------------|--------|
| Ukuran | `figsize=(w, h)` | `figsize=(10, 6)` |
| Warna | `color` | `color='#FF6B6B'` |
| Garis | `linestyle`, `linewidth` | `linestyle='--', linewidth=2` |
| Marker | `marker`, `markersize` | `marker='o', markersize=8` |
| Limit | `set_xlim()`, `set_ylim()` | `ax.set_ylim(0, 100)` |
| Ticks | `set_xticks()`, `set_xticklabels()` | `ax.set_xticks([0, 1, 2])` |
| Anotasi | `annotate()` | `ax.annotate('Text', xy=(x,y))` |
| Style | `plt.style.use()` | `plt.style.use('ggplot')` |
| Simpan | `savefig()` | `plt.savefig('plot.png', dpi=300)` |
