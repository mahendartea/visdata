# Cheat Sheet Visualisasi Data Python

Rangkuman sintaks penting untuk kebutuhan cepat Anda (Copy-Paste friendly!).

## Matplotlib

```python
import matplotlib.pyplot as plt

# Setup dasar
fig, ax = plt.subplots(figsize=(10, 6))

# Plotting
ax.plot(x, y, label='Line')
ax.scatter(x, y, label='Scatter')
ax.bar(categories, values, label='Bar')

# Kustomisasi
ax.set_title("Judul")
ax.set_xlabel("Sumbu X")
ax.set_ylabel("Sumbu Y")
ax.legend()
ax.grid(True)

plt.show()
```

## Seaborn

```python
import seaborn as sns

sns.set_theme()

# Distribusi
sns.displot(df, x="col", kind="kde")
sns.boxplot(data=df, x="cat_col", y="num_col")

# Hubungan
sns.scatterplot(data=df, x="x", y="y", hue="group")
sns.lmplot(data=df, x="x", y="y") # Scatter + Regresi linear

# Matriks
sns.heatmap(df.corr(), annot=True)
```

## Plotly Express

```python
import plotly.express as px

# Scatter
fig = px.scatter(df, x="x", y="y", color="group", size="size_col", hover_name="id")

# Bar
fig = px.bar(df, x="cat", y="val", color="sub_cat", barmode="group")

# Tampilkan
fig.show()
```
