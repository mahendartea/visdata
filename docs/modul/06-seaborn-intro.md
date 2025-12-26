# Pengenalan Seaborn

Jika Matplotlib adalah "mesin", maka Seaborn adalah "interface mewah"-nya. Seaborn dirancang khusus untuk memvisualisasikan data statistik dan bekerja sangat baik dengan Pandas DataFrame.

## Mengapa Seaborn?

1.  **Sintaks Lebih Ringkas**: Melakukan plot regresi linear atau distribusi kompleks hanya butuh 1 baris kode.
2.  **Integrasi Pandas**: Cukup oper nama kolom DataFrame sebagai argumen `x` dan `y`.
3.  **Estetika**: Default style yang jauh lebih modern dan enak dipandang.
4.  **Statistik Built-in**: Otomatis menghitung dan menampilkan confidence interval, regresi, dll.

## Dataset untuk Praktik

Kita akan menggunakan dataset mahasiswa. Download: [mahasiswa.csv](/datasets/mahasiswa.csv)

```python
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

# Load dataset
df = pd.read_csv('mahasiswa.csv')
print(df.head())
print(df.info())
```

Output:
```
     nim            nama          jurusan   ipk  semester  usia jenis_kelamin
0  2021001    Andi Pratama     Informatika  3.45         6    21             L
1  2021002  Siti Nurhaliza  Sistem Informasi  3.78         6    20             P
...
```

## Mengaktifkan Tema Seaborn

```python
# Mengaktifkan tema default Seaborn
sns.set_theme(style="whitegrid")
# Pilihan style: 'darkgrid', 'whitegrid', 'dark', 'white', 'ticks'

# Atau dengan kontrol lebih detail
sns.set_theme(
    style="whitegrid",
    palette="husl",      # Color palette
    font_scale=1.2       # Ukuran font
)
```

## 1. Scatter Plot dengan Regresi (regplot)

Seaborn bisa langsung menambahkan garis regresi linear!

```python
plt.figure(figsize=(10, 6))

sns.regplot(data=df, x='semester', y='ipk', 
            scatter_kws={'alpha': 0.6, 's': 80},
            line_kws={'color': 'red', 'linewidth': 2})

plt.title('Hubungan Semester dengan IPK', fontsize=16, fontweight='bold')
plt.xlabel('Semester', fontsize=12)
plt.ylabel('IPK', fontsize=12)

plt.tight_layout()
plt.show()
```

::: tip Insight
Garis regresi dan confidence interval (area abu-abu) otomatis ditampilkan!
:::

## 2. Relational Plot dengan Faceting

`relplot` adalah fungsi yang sangat powerful untuk eksplorasi data multi-dimensi.

```python
# Scatter plot dengan pembagian berdasarkan jurusan
sns.relplot(
    data=df,
    x='semester', 
    y='ipk',
    hue='jenis_kelamin',    # Warna berdasarkan gender
    style='jenis_kelamin',  # Bentuk marker berbeda
    col='jurusan',          # Pisahkan plot per jurusan
    height=4,
    aspect=1.2
)

plt.suptitle('Analisis IPK Berdasarkan Semester dan Jurusan', 
             y=1.02, fontsize=14, fontweight='bold')
plt.tight_layout()
plt.show()
```

Perhatikan betapa banyaknya informasi yang dimuat dalam satu perintah `relplot`: 
- Posisi (x, y)
- Warna (hue)
- Bentuk (style)
- Memecah grafik menjadi kolom terpisah (col)

## 3. Count Plot - Menghitung Frekuensi

Untuk menghitung dan memvisualisasikan jumlah data per kategori.

```python
plt.figure(figsize=(10, 6))

sns.countplot(data=df, x='jurusan', hue='jenis_kelamin', palette='Set2')

plt.title('Distribusi Mahasiswa per Jurusan', fontsize=16, fontweight='bold')
plt.xlabel('Jurusan', fontsize=12)
plt.ylabel('Jumlah Mahasiswa', fontsize=12)
plt.xticks(rotation=15)
plt.legend(title='Jenis Kelamin')

plt.tight_layout()
plt.show()
```

## 4. Strip Plot - Alternatif Scatter untuk Kategori

Menampilkan semua data point untuk variabel kategorikal.

```python
plt.figure(figsize=(10, 6))

sns.stripplot(data=df, x='jurusan', y='ipk', 
              hue='jenis_kelamin', dodge=True, 
              alpha=0.7, size=6)

plt.title('Sebaran IPK per Jurusan', fontsize=16, fontweight='bold')
plt.xlabel('Jurusan', fontsize=12)
plt.ylabel('IPK', fontsize=12)
plt.xticks(rotation=15)

plt.tight_layout()
plt.show()
```

## 5. Swarm Plot - Strip Plot Tanpa Overlap

Seperti strip plot, tapi titik-titik tidak saling tumpang tindih.

```python
plt.figure(figsize=(10, 6))

sns.swarmplot(data=df, x='jurusan', y='ipk', 
              hue='jenis_kelamin', dodge=True, 
              palette='Set1')

plt.title('Distribusi IPK per Jurusan (Swarm Plot)', fontsize=16, fontweight='bold')
plt.xlabel('Jurusan', fontsize=12)
plt.ylabel('IPK', fontsize=12)
plt.xticks(rotation=15)

plt.tight_layout()
plt.show()
```

::: warning Perhatian
Swarm plot bagus untuk dataset kecil-menengah. Untuk dataset besar (>1000 data), gunakan violin plot atau box plot.
:::

## Perbandingan dengan Matplotlib

Mari bandingkan kode yang sama di Matplotlib vs Seaborn:

**Matplotlib (lebih panjang):**
```python
fig, ax = plt.subplots()
for gender in df['jenis_kelamin'].unique():
    data = df[df['jenis_kelamin'] == gender]
    ax.scatter(data['semester'], data['ipk'], label=gender, alpha=0.6)
ax.legend()
ax.set_xlabel('Semester')
ax.set_ylabel('IPK')
```

**Seaborn (lebih ringkas):**
```python
sns.scatterplot(data=df, x='semester', y='ipk', hue='jenis_kelamin', alpha=0.6)
```

## Latihan Praktik

::: warning Tugas
1. Buat count plot untuk menampilkan distribusi mahasiswa per semester
2. Buat scatter plot dengan regresi untuk melihat hubungan usia vs IPK
3. Gunakan `relplot` untuk membuat visualisasi multi-dimensi dengan minimal 3 variabel
4. Coba 3 tema Seaborn berbeda (`style` parameter) dan pilih favorit Anda
:::

## Rangkuman Fungsi Seaborn

| Fungsi | Kegunaan | Contoh |
|--------|----------|--------|
| `scatterplot()` | Scatter plot dasar | `sns.scatterplot(x='a', y='b', hue='c')` |
| `lineplot()` | Line plot dengan CI | `sns.lineplot(x='time', y='value')` |
| `regplot()` | Scatter + regresi | `sns.regplot(x='x', y='y')` |
| `relplot()` | Relational plot dengan faceting | `sns.relplot(x='x', y='y', col='category')` |
| `countplot()` | Bar chart frekuensi | `sns.countplot(x='category')` |
| `stripplot()` | Scatter untuk kategori | `sns.stripplot(x='cat', y='val')` |
| `swarmplot()` | Strip plot tanpa overlap | `sns.swarmplot(x='cat', y='val')` |
