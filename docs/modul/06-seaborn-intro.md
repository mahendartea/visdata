# Pengenalan Seaborn

Jika Matplotlib adalah "mesin", maka Seaborn adalah "interface mewah"-nya. Seaborn dirancang khusus untuk memvisualisasikan data statistik dan bekerja sangat baik dengan Pandas DataFrame.

## Mengapa Seaborn?

1.  **Sintaks Lebih Ringkas**: Melakukan plot regresi linear atau distribusi kompleks hanya butuh 1 baris kode.
2.  **Integrasi Pandas**: Cukup oper nama kolom DataFrame sebagai argumen `x` dan `y`.
3.  **Estetika**: Default style yang jauh lebih modern dan enak dipandang.

## Hello Seaborn

```python
import seaborn as sns
import matplotlib.pyplot as plt

# Mengaktifkan tema default Seaborn
sns.set_theme(style="darkgrid")

# Load built-in dataset
tips = sns.load_dataset("tips")

# Mari lirik datanya
print(tips.head())

# Membuat scatter plot dengan coloring otomatis berdasarkan kategori
sns.relplot(
    data=tips,
    x="total_bill", y="tip", col="time",
    hue="smoker", style="smoker", size="size",
)

plt.show()
```

Perhatikan betapa banyaknya informasi yang dimuat dalam satu perintah `relplot`: posisi (x,y), warna (hue), bentuk (style), ukuran marker (size), bahkan memecah grafik menjadi kolom terpisah (col).
