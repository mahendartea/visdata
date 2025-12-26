# Persiapan Lingkungan Development

Sebelum mulai membuat grafik yang memukau, kita perlu menyiapkan "kanvas" dan "kuas" kita.

## 1. Instalasi Python

Pastikan Anda sudah menginstall Python (disarankan versi 3.9 ke atas). Cek versi Anda:

```bash
python --version
```

## 2. Membuat Virtual Environment

Sangat disarankan menggunakan virtual environment agar library project ini tidak bentrok dengan project lain.

```bash
# Membuat venv bernama 'venv'
python -m venv venv

# Mengaktifkan (Windows)
venv\Scripts\activate

# Mengaktifkan (Mac/Linux)
source venv/bin/activate
```

## 3. Instalasi Library

Kita akan menggunakan `pip` untuk menginstall library yang dibutuhkan. Salin perintah berikut:

```bash
pip install matplotlib seaborn plotly pandas numpy jupyterlab
```

- **pandas & numpy**: Untuk manipulasi data sebelum divisualisasikan.
- **jupyterlab**: Environment notebook yang interaktif, sangat cocok untuk eksperimen visualisasi.

## 4. Menyiapkan Jupyter Notebook

Jalankan Jupyter Lab:

```bash
jupyter lab
```

Browser akan terbuka. Buat notebook baru (kernel Python 3).

### Cek Instalasi

Di sel pertama notebook Anda, jalankan kode ini untuk memastikan semua berjalan lancar:

```python
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
import pandas as pd
import numpy as np

print("Semua library berhasil diimport!")
```

Jika tidak ada error, selamat! Anda siap untuk mulai melukis dengan data.
