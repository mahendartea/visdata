# Visualisasi Interaktif dengan Plotly

Plotly membawa grafik Anda "hidup". Tidak seperti Matplotlib yang menghasilkan gambar statis (PNG/JPG), Plotly menghasilkan HTML + JavaScript yang bisa diinteraksikan.

## Plotly Express

Plotly Express (`px`) adalah wrapper high-level yang sangat mirip dengan Seaborn namun menghasilkan grafik interaktif.

```python
import plotly.express as px

# Data
df = px.data.gapminder().query("year==2007")

# Scatter plot interaktif
fig = px.scatter(df, x="gdpPercap", y="lifeExp",
                 size="pop", color="continent",
                 hover_name="country", log_x=True, size_max=60,
                 title="Harapan Hidup vs GDP per Kapita (2007)")
fig.show()
```

Coba arahkan mouse Anda ke titik-titik di grafik, zoom in, atau klik pada legenda untuk menyembunyikan benua tertentu.

## Line Chart Interaktif

```python
df_indo = px.data.gapminder().query("country == 'Indonesia'")

fig = px.line(df_indo, x='year', y='lifeExp', markers=True,
              title='Perkembangan Harapan Hidup di Indonesia')
fig.show()
```

## 3D Plots

Karena interaktif, plot 3D di Plotly sangat berguna karena bisa diputar-putar (rotate).

```python
df = px.data.iris()
fig = px.scatter_3d(df, x='sepal_length', y='sepal_width', z='petal_width',
                    color='species', title='Iris Dataset dalam 3D')
fig.show()
```
