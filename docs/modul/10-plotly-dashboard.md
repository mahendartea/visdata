# Plotly Lanjut: Animasi dan Dashboard

## Animasi Grafik

Salah satu fitur paling "wow" dari Plotly adalah kemampuannya membuat animasi berdasarkan waktu atau urutan tertentu.

```python
import plotly.express as px

df = px.data.gapminder()

fig = px.scatter(df, x="gdpPercap", y="lifeExp", animation_frame="year",
           animation_group="country",
           size="pop", color="continent", hover_name="country",
           log_x=True, size_max=55, range_x=[100,100000], range_y=[25,90])

fig.show()
```
Anda akan melihat tombol "Play" di bawah grafik. Klik untuk melihat evolusi data dari tahun ke tahun.

## Membuat Dashboard Sederhana

Meskipun untuk dashboard *full-blown* kita biasanya menggunakan framework seperti **Dash** atau **Streamlit**, kita bisa menyusun layout sederhana langsung di Jupyter menggunakan library bantu atau subplot Plotly.

Namun, untuk materi ini kita akan fokus pada bagaimana mengekspor grafik Plotly agar bisa ditempel di website atau laporan HTML.

### Export ke HTML

Grafik interaktif Plotly dapat disimpan sebagai file HTML mandiri.

```python
fig.write_html("grafik_saya.html")
```
File ini bisa Anda buka di browser apapun, kirim ke atasan via email, atau embed di website tanpa perlu server Python aktif di belakangnya!
