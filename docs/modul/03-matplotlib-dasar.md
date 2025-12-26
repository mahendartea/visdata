# Matplotlib: Konsep Dasar

Matplotlib adalah fondasi visualisasi data di Python. Memahaminya sama dengan memahami cara kerja library lain di "bawah kap mesin".

## Anatomi Figure Matplotlib

Sebelum menyalin kode, pahami hierarki objek di Matplotlib:
1.  **Figure**: Kanvas keseluruhan (jendela atau gambar itu sendiri). Bisa menampung satu atau lebih Axes.
2.  **Axes**: Area plot dimana data digambar (apa yang biasanya kita sebut sebagai "grafik" itu sendiri). Memiliki sumbu X, Y, judul, dll.
3.  **Axis**: Sumbu (garis bilangan) yang menangani limit dan ticks.

::: tip Analogi
**Figure** adalah *meja kerja*. **Axes** adalah *kertas gambar* di atas meja tersebut.
:::

## Line Plot Sederhana

Mari buat plot pertama kita.

```python
import matplotlib.pyplot as plt
import numpy as np

# Data dummy
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Membuat Figure dan Axes
fig, ax = plt.subplots()  # Cara modern (Object-Oriented Style)

# Plotting data
ax.plot(x, y, label='Sinus', color='blue', linestyle='--')

# Menambahkan label
ax.set_title("Grafik Sinus Sederhana")
ax.set_xlabel("Sumbu X (Radian)")
ax.set_ylabel("Amplitudo")
ax.legend() # Menampilkan legenda

plt.show()
```

## Scatter Plot (Diagram Tebar)

Digunakan untuk melihat hubungan antara dua variabel numerik.

```python
x = np.random.rand(50)
y = 2 * x + np.random.normal(0, 0.1, 50) # y linear terhadap x dengan noise

fig, ax = plt.subplots()
ax.scatter(x, y, color='red', alpha=0.5) # alpha untuk transparansi

ax.set_title("Korelasi Linear Positif")
plt.show()
```

## Bar Chart (Diagram Batang)

Untuk membandingkan kategori.

```python
kategori = ['A', 'B', 'C', 'D']
nilai = [23, 45, 12, 67]

fig, ax = plt.subplots()
ax.bar(kategori, nilai, color=['red', 'green', 'blue', 'orange'])

ax.set_title("Penjualan per Kategori")
plt.show()
```

## State-based vs Object-Oriented

Anda mungkin sering melihat kode seperti `plt.plot()` tanpa membuat `fig` atau `ax`. Itu adalah cara "State-based" (mirip MATLAB).
Untuk fleksibilitas maksimal, **selalu gunakan Object-Oriented Style** (`fig, ax = plt.subplots()`), terutama saat Anda ingin membuat subplot yang kompleks nanti.
