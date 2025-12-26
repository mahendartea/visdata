# Kustomisasi Grafik Matplotlib

Grafik default Matplotlib seringkali terlihat kaku. Di sini kita akan belajar cara memolesnya agar layak publikasi.

## Mengatur Limit dan Ticks

Kadang auto-scaling Matplotlib tidak sesuai keinginan kita.

```python
x = np.linspace(0, 10, 100)
y = np.sin(x)

fig, ax = plt.subplots()
ax.plot(x, y)

# Mengatur batas sumbu
ax.set_xlim(0, 2 * np.pi) # Hanya tampilkan satu gelombang penuh
ax.set_ylim(-1.5, 1.5)

# Mengatur ticks (penanda pada sumbu)
ax.set_xticks([0, np.pi, 2*np.pi])
ax.set_xticklabels(['0', '$\pi$', '$2\pi$']) # Support LaTeX formatting!

plt.show()
```

## Anotasi Teks

Menambahkan panah atau teks untuk menyoroti poin penting.

```python
fig, ax = plt.subplots()
ax.plot(x, y)

# Menambah anotasi dengan panah
ax.annotate('Puncak Lokal',
            xy=(np.pi/2, 1),      # Titik yang ditunjuk
            xytext=(np.pi/2, 1.5), # Posisi teks
            arrowprops=dict(facecolor='black', shrink=0.05))

plt.show()
```

## Styling dengan Style Sheets

Matplotlib memiliki tema bawaan yang bisa langsung digunakan.

```python
print(plt.style.available) # Lihat daftar style yang ada

plt.style.use('ggplot') # Gunakan style 'ggplot'
# atau 'seaborn-v0_8-darkgrid', 'bmh', 'grayscale'

# Plot ulang grafik Anda, tampilannya akan berubah drastis!
```
