import { defineConfig } from 'vitepress'

export default defineConfig({
    base: '/visdata/',
    title: "Goa Ilmu Pemrograman",
    description: "Modul komprehensif pembelajaran visualisasi data Python di Goa Ilmu Pemrograman.",
    lang: 'id-ID',
    themeConfig: {
        nav: [
            { text: 'Beranda', link: '/' },
            { text: 'Mulai Belajar', link: '/modul/01-pengantar' },
            { text: 'Contekan', link: '/cheat-sheet' }
        ],

        sidebar: [
            {
                text: 'Pendahuluan',
                items: [
                    { text: '1. Pengantar Visualisasi Data', link: '/modul/01-pengantar' },
                    { text: '2. Persiapan Lingkungan Development', link: '/modul/02-persiapan' }
                ]
            },
            {
                text: 'Matplotlib: Fondasi Utama',
                items: [
                    { text: '3. Konsep Dasar Plotting', link: '/modul/03-matplotlib-dasar' },
                    { text: '4. Kustomisasi Grafik', link: '/modul/04-matplotlib-kustomisasi' },
                    { text: '5. Subplot dan Layout', link: '/modul/05-matplotlib-layout' }
                ]
            },
            {
                text: 'Seaborn: Statistik yang Indah',
                items: [
                    { text: '6. Pengenalan Seaborn', link: '/modul/06-seaborn-intro' },
                    { text: '7. Visualisasi Distribusi', link: '/modul/07-seaborn-distribusi' },
                    { text: '8. Visualisasi Kategorial & Hubungan', link: '/modul/08-seaborn-lanjut' }
                ]
            },
            {
                text: 'Visualisasi Interaktif',
                items: [
                    { text: '9. Dasar Plotly Express', link: '/modul/09-plotly-dasar' },
                    { text: '10. Dashboard Sederhana', link: '/modul/10-plotly-dashboard' }
                ]
            },
            {
                text: 'Penutup',
                items: [
                    { text: 'Best Practices', link: '/modul/11-best-practices' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],

        footer: {
            message: 'Dikembangkan oleh Mahendar Dwi Payana.',
            copyright: 'Copyright © 2024 Goa Ilmu Pemrograman'
        }
    }
})
