# Visualisasi Kategorial dan Hubungan

## Data Kategorik (Boxplot & Violinplot)

Untuk membandingkan data numerik antar grup kategori.

```python
import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")

# Boxplot: Menunjukkan kuartil dan outlier
plt.figure(figsize=(8, 6))
sns.boxplot(data=tips, x="day", y="total_bill", hue="sex")
plt.title("Sebaran Bill per Hari")
plt.show()

# Violinplot: Menggabungkan boxplot dan KDE
# Sangat berguna untuk melihat bentuk distribusi data di tiap kategori
sns.catplot(data=tips, kind="violin", x="day", y="total_bill", hue="sex", split=True)
```

## Pairplot: Melihat Segalanya Sekaligus

Jika Anda punya dataset dengan banyak variabel numerik, `pairplot` akan membuat scatter plot antar setiap pasang variabel. Sangat powerfull untuk melihat korelasi secara cepat.

```python
iris = sns.load_dataset("iris")
sns.pairplot(iris, hue="species")
```

## Heatmap: Visualisasi Matriks Korelasi

```python
numeric_iris = iris.select_dtypes(include=['float64', 'int64']) # Pilih kolom numerik saja
corr_matrix = numeric_iris.corr()

plt.figure(figsize=(8, 6))
sns.heatmap(corr_matrix, annot=True, cmap="coolwarm")
plt.title("Korelasi Fitur Iris")
plt.show()
```
