# Matplotlib: Konsep Dasar Plotting

Matplotlib adalah fondasi visualisasi data di Python. Memahaminya sama dengan memahami cara kerja library lain di "bawah kap mesin". Di modul ini, kita akan belajar membuat berbagai jenis grafik dasar dengan contoh nyata.

## Anatomi Figure Matplotlib

Sebelum menyalin kode, pahami hierarki objek di Matplotlib:

1.  **Figure**: Kanvas keseluruhan (jendela atau gambar itu sendiri). Bisa menampung satu atau lebih Axes.
2.  **Axes**: Area plot dimana data digambar (apa yang biasanya kita sebut sebagai "grafik" itu sendiri). Memiliki sumbu X, Y, judul, dll.
3.  **Axis**: Sumbu (garis bilangan) yang menangani limit dan ticks.

::: tip Analogi
**Figure** adalah *meja kerja*. **Axes** adalah *kertas gambar* di atas meja tersebut.
:::

## Persiapan Dataset

Untuk contoh-contoh di bawah, kita akan menggunakan dataset penjualan produk. Download dataset: [penjualan.csv](/datasets/penjualan.csv)

```python
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

# Load dataset
df = pd.read_csv('penjualan.csv')
print(df.head())
```

## 1. Line Plot - Tren Penjualan

Line plot sangat cocok untuk menampilkan data time-series atau tren.

```python
# Agregasi data per bulan
penjualan_bulanan = df.groupby('bulan')['penjualan'].sum()

# Membuat Figure dan Axes
fig, ax = plt.subplots(figsize=(10, 6))

# Plotting data
ax.plot(penjualan_bulanan.index, penjualan_bulanan.values, 
        marker='o', linewidth=2, markersize=8, color='#2E86AB')

# Kustomisasi
ax.set_title("Tren Penjualan Bulanan", fontsize=16, fontweight='bold')
ax.set_xlabel("Bulan", fontsize=12)
ax.set_ylabel("Total Penjualan (Unit)", fontsize=12)
ax.grid(True, alpha=0.3)

# Rotasi label x-axis agar tidak tumpang tindih
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()
```

::: details Output yang Diharapkan
Grafik garis dengan marker bulat di setiap titik data, menunjukkan fluktuasi penjualan dari Januari hingga Juni.
:::

## 2. Bar Chart - Perbandingan Kategori

Bar chart ideal untuk membandingkan nilai antar kategori.

```python
# Total revenue per produk
revenue_produk = df.groupby('produk')['revenue'].sum().sort_values(ascending=False)

fig, ax = plt.subplots(figsize=(10, 6))

# Membuat bar chart horizontal (lebih mudah dibaca untuk label panjang)
bars = ax.barh(revenue_produk.index, revenue_produk.values, color='#A23B72')

# Menambahkan nilai di ujung bar
for i, bar in enumerate(bars):
    width = bar.get_width()
    ax.text(width, bar.get_y() + bar.get_height()/2, 
            f'Rp {width/1e6:.1f}M',
            ha='left', va='center', fontsize=10, fontweight='bold')

ax.set_title("Total Revenue per Produk", fontsize=16, fontweight='bold')
ax.set_xlabel("Revenue (Rupiah)", fontsize=12)
ax.set_ylabel("Produk", fontsize=12)

plt.tight_layout()
plt.show()
```

## 3. Scatter Plot - Hubungan Dua Variabel

Scatter plot menunjukkan korelasi antara dua variabel numerik.

```python
fig, ax = plt.subplots(figsize=(10, 6))

# Scatter plot dengan warna berbeda per kategori
for kategori in df['kategori'].unique():
    data = df[df['kategori'] == kategori]
    ax.scatter(data['penjualan'], data['revenue'], 
               label=kategori, alpha=0.6, s=100)

ax.set_title("Hubungan Penjualan vs Revenue", fontsize=16, fontweight='bold')
ax.set_xlabel("Jumlah Penjualan (Unit)", fontsize=12)
ax.set_ylabel("Revenue (Rupiah)", fontsize=12)
ax.legend(title='Kategori')
ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()
```

## 4. Histogram - Distribusi Data

Histogram menunjukkan distribusi frekuensi data.

```python
fig, ax = plt.subplots(figsize=(10, 6))

# Histogram penjualan
ax.hist(df['penjualan'], bins=15, color='#F18F01', edgecolor='black', alpha=0.7)

ax.set_title("Distribusi Jumlah Penjualan", fontsize=16, fontweight='bold')
ax.set_xlabel("Jumlah Penjualan (Unit)", fontsize=12)
ax.set_ylabel("Frekuensi", fontsize=12)
ax.grid(True, alpha=0.3, axis='y')

plt.tight_layout()
plt.show()
```

## 5. Pie Chart - Komposisi Data

Pie chart menunjukkan proporsi bagian terhadap keseluruhan (gunakan hanya untuk 3-5 kategori).

```python
# Total penjualan per kategori
penjualan_kategori = df.groupby('kategori')['penjualan'].sum()

fig, ax = plt.subplots(figsize=(8, 8))

colors = ['#FF6B6B', '#4ECDC4']
explode = (0.05, 0)  # "meledakkan" slice pertama

ax.pie(penjualan_kategori.values, labels=penjualan_kategori.index, 
       autopct='%1.1f%%', startangle=90, colors=colors, explode=explode,
       textprops={'fontsize': 12, 'fontweight': 'bold'})

ax.set_title("Proporsi Penjualan per Kategori", fontsize=16, fontweight='bold', pad=20)

plt.tight_layout()
plt.show()
```

## State-based vs Object-Oriented

Anda mungkin sering melihat kode seperti `plt.plot()` tanpa membuat `fig` atau `ax`. Itu adalah cara "State-based" (mirip MATLAB).

```python
# ❌ State-based (kurang fleksibel)
plt.plot(x, y)
plt.title("Judul")

# ✅ Object-Oriented (lebih fleksibel dan eksplisit)
fig, ax = plt.subplots()
ax.plot(x, y)
ax.set_title("Judul")
```

Untuk fleksibilitas maksimal, **selalu gunakan Object-Oriented Style** (`fig, ax = plt.subplots()`), terutama saat Anda ingin membuat subplot yang kompleks.

## Latihan Praktik

::: warning Tugas
1. Buat line plot yang menampilkan tren revenue (bukan penjualan) per bulan
2. Buat bar chart vertikal yang membandingkan total penjualan per bulan
3. Buat scatter plot untuk melihat hubungan antara penjualan Mouse vs Keyboard
:::

## Rangkuman

| Jenis Plot | Kegunaan | Fungsi Matplotlib |
|------------|----------|-------------------|
| Line Plot | Tren waktu, data kontinu | `ax.plot()` |
| Bar Chart | Perbandingan kategori | `ax.bar()` atau `ax.barh()` |
| Scatter Plot | Hubungan 2 variabel | `ax.scatter()` |
| Histogram | Distribusi data | `ax.hist()` |
| Pie Chart | Proporsi/komposisi | `ax.pie()` |
