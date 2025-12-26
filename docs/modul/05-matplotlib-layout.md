# Subplot dan Layout Kompleks

Jarang sekali analisis data hanya membutuhkan satu grafik. Kita sering perlu membandingkan beberapa grafik sekaligus.

## `plt.subplots()` untuk Grid Sederhana

Cara termudah membuat grid grafik (misal: 2 baris, 2 kolom).

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)

# Membuat 4 axes dalam grid 2x2
fig, axs = plt.subplots(2, 2, figsize=(10, 8))

# axs adalah array numpy 2D, kita akses dengan indeks [baris, kolom]
axs[0, 0].plot(x, np.sin(x))
axs[0, 0].set_title("Sinus")

axs[0, 1].plot(x, np.cos(x), 'tab:orange')
axs[0, 1].set_title("Cosinus")

axs[1, 0].plot(x, np.tan(x), 'tab:green')
axs[1, 0].set_title("Tangen")

axs[1, 1].plot(x, -np.sin(x), 'tab:red')
axs[1, 1].set_title("Negatif Sinus")

# Mengatur layout agar tidak tumpang tindih labelnya
plt.tight_layout()
plt.show()
```

## `GridSpec` untuk Layout Tak Beraturan

Bagaimana jika satu grafik butuh tempat lebih luas (misal: satu grafik lebar di atas, dua kecil di bawah)? Gunakan `GridSpec`.

```python
fig = plt.figure(figsize=(10, 6))
gs = fig.add_gridspec(2, 2)

# Definisikan Axes berdasarkan slicing grid
ax1 = fig.add_subplot(gs[0, :]) # Baris 0, semua kolom (span selebar figure)
ax2 = fig.add_subplot(gs[1, 0]) # Baris 1, kolom 0
ax3 = fig.add_subplot(gs[1, 1]) # Baris 1, kolom 1

ax1.plot(x, np.sin(x))
ax1.set_title("Grafik Utama Lebar")

ax2.hist(np.random.randn(100))
ax3.scatter(np.random.rand(10), np.random.rand(10))

plt.tight_layout()
plt.show()
```
