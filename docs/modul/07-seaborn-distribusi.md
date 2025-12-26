# Visualisasi Distribusi Data (Seaborn)

Langkah pertama dalam Exploratory Data Analysis (EDA) biasanya adalah memahami sebaran data. Apakah normal? Menceng (skewed)? Ada outlier?

## Histogram dan KDE (Kernel Density Estimate)

Fungsi `displot` adalah "pisau lipat Swiss Army" untuk distribusi di Seaborn.

```python
import seaborn as sns
penguins = sns.load_dataset("penguins")

# Histogram sederhana
sns.displot(penguins, x="flipper_length_mm")

# Histogram + KDE (garis halus estimasi densitas)
sns.displot(penguins, x="flipper_length_mm", kde=True)

# Membedakan berdasarkan kategori (hue)
sns.displot(penguins, x="flipper_length_mm", hue="species", kind="kde", fill=True)
```

## ECDF Plot

Empirical Cumulative Distribution Function, alternatif yang bagus untuk histogram jika Anda ingin melihat proporsi data di bawah nilai tertentu.

```python
sns.displot(penguins, x="flipper_length_mm", hue="species", kind="ecdf")
```
