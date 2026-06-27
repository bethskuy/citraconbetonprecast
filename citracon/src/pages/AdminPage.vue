<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
<<<<<<< HEAD
      <q-page class="bg-[#050b18] text-slate-100 min-h-screen py-10 px-4 sm:px-8 relative overflow-hidden">
    <!-- Ambient Lights -->
    <div class="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-900/15 blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-red-900/10 blur-[120px] pointer-events-none"></div>
=======
      <q-page class="bg-slate-50 text-slate-800 min-h-screen py-10 px-4 sm:px-8 relative overflow-hidden">
    <!-- Ambient Lights -->
    <div class="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-red-100/30 blur-[120px] pointer-events-none"></div>
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241

    <!-- Container -->
    <div class="max-w-7xl mx-auto relative z-10">
      
      <!-- HEADER -->
<<<<<<< HEAD
      <div class="flex flex-col justify-center items-center gap-4 mb-10 pb-6 border-b border-slate-800 relative text-center">
        <div class="w-full">
          <div class="flex flex-col items-center justify-center text-center">
            <div class="flex items-center justify-center gap-3">
              <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Selamat Datang di Halaman Admin Citracon
              </h1>
            </div>
            <p class="text-sm text-slate-400 mt-2">Kelola data katalog produk dan pantau pesanan/leads masuk secara real-time.</p>
=======
      <div class="flex flex-col justify-center items-center gap-4 mb-10 pb-6 border-b border-slate-200 relative text-center">
        <div class="w-full">
          <div class="flex flex-col items-center justify-center text-center">
            <div class="flex items-center justify-center gap-3">
              <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0b1c3f]">
                Selamat Datang di Halaman Admin Citracon
              </h1>
            </div>
            <p class="text-sm text-slate-500 mt-2">Kelola data katalog produk dan pantau pesanan/leads masuk secara real-time.</p>
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
          </div>
        </div>
        <div v-if="isAuthenticated" class="sm:absolute sm:top-2 sm:right-0">
          <button 
            @click="logout" 
<<<<<<< HEAD
            class="text-xs bg-[#0c1527] hover:bg-[#12203b] text-slate-300 font-bold px-4 py-2.5 rounded-full border border-slate-800 transition-all cursor-pointer shadow-sm"
=======
            class="text-xs bg-white hover:bg-slate-100 text-slate-700 font-bold px-4 py-2.5 rounded-full border border-slate-200 transition-all cursor-pointer shadow-sm"
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
          >
            🚪 Keluar
          </button>
        </div>
      </div>

      <!-- LOGIN CONTAINER -->
      <div v-if="!isAuthenticated" class="max-w-md mx-auto my-12">
<<<<<<< HEAD
        <q-card class="bg-[#0c1527]/85 border border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur-md">
=======
        <q-card class="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl">
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
          <q-card-section class="text-center pb-2">
            <div class="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-[#d21d1d] to-blue-600 flex items-center justify-center text-3xl shadow-lg mb-4">
              🔑
            </div>
<<<<<<< HEAD
            <h2 class="text-xl font-bold text-white">Login Admin Panel</h2>
            <p class="text-xs text-slate-400 mt-1">Masukkan kata sandi admin untuk mengakses dasbor</p>
=======
            <h2 class="text-xl font-bold text-[#0b1c3f]">Login Admin Panel</h2>
            <p class="text-xs text-slate-500 mt-1">Masukkan kata sandi admin untuk mengakses dasbor</p>
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
          </q-card-section>

          <q-card-section class="space-y-4">
            <div>
<<<<<<< HEAD
              <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Kata Sandi</label>
=======
              <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Kata Sandi</label>
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
              <input 
                v-model="password" 
                type="password" 
                @keyup.enter="login"
<<<<<<< HEAD
                class="w-full bg-[#050b18] border border-slate-800 rounded-xl px-4 py-3 text-white font-medium focus:outline-none focus:border-[#d21d1d] focus:bg-[#070e1e] transition-all"
=======
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-[#d21d1d] focus:bg-white transition-all"
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                placeholder="Masukkan kata sandi..."
              >
            </div>
          </q-card-section>

          <q-card-section class="pt-2">
            <button 
              @click="login" 
<<<<<<< HEAD
              class="w-full bg-[#d21d1d] hover:bg-[#b21818] text-white font-bold py-3 rounded-xl transition-all duration-200 cursor-pointer shadow-lg shadow-red-900/20 active:scale-[0.98]"
=======
              class="w-full bg-[#d21d1d] hover:bg-[#b21818] text-white font-bold py-3 rounded-xl transition-all duration-200 cursor-pointer shadow-lg shadow-red-900/10 active:scale-[0.98]"
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
            >
              Masuk Dasbor 🚀
            </button>
          </q-card-section>
        </q-card>
      </div>

      <!-- MAIN CMS DASHBOARD -->
      <div v-else>
        <!-- STATS CARDS -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
<<<<<<< HEAD
          <div class="bg-[#0c1527]/50 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition-all flex items-center gap-4 shadow-lg">
            <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-450 flex items-center justify-center text-2xl font-bold">📦</div>
            <div>
              <div class="text-2xl font-black text-white">{{ products.length }}</div>
              <div class="text-xs text-slate-400 font-medium">Total Produk Katalog</div>
            </div>
          </div>
          <div class="bg-[#0c1527]/50 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition-all flex items-center gap-4 shadow-lg">
            <div class="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-450 flex items-center justify-center text-2xl font-bold">📨</div>
            <div>
              <div class="text-2xl font-black text-white">{{ leads.length }}</div>
              <div class="text-xs text-slate-400 font-medium">Total Pesanan Masuk (Leads)</div>
            </div>
          </div>
          <div class="bg-[#0c1527]/50 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition-all flex items-center gap-4 shadow-lg">
            <div class="w-12 h-12 rounded-xl bg-red-500/10 text-red-450 flex items-center justify-center text-2xl font-bold">🔥</div>
            <div>
              <div class="text-2xl font-black text-white">{{ activeTab === 'leads' ? leads.length : products.length }}</div>
              <div class="text-xs text-slate-400 font-medium">Item Sedang Dikelola</div>
=======
          <div class="bg-white border border-slate-200/60 rounded-2xl p-5 hover:border-slate-300 shadow-sm transition-all flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-2xl font-bold">📦</div>
            <div>
              <div class="text-2xl font-black text-slate-800">{{ products.length }}</div>
              <div class="text-xs text-slate-500 font-medium">Total Produk Katalog</div>
            </div>
          </div>
          <div class="bg-white border border-slate-200/60 rounded-2xl p-5 hover:border-slate-300 shadow-sm transition-all flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-2xl font-bold">📨</div>
            <div>
              <div class="text-2xl font-black text-slate-800">{{ leads.length }}</div>
              <div class="text-xs text-slate-500 font-medium">Total Pesanan Masuk (Leads)</div>
            </div>
          </div>
          <div class="bg-white border border-slate-200/60 rounded-2xl p-5 hover:border-slate-300 shadow-sm transition-all flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center text-2xl font-bold">🔥</div>
            <div>
              <div class="text-2xl font-black text-slate-800">{{ activeTab === 'leads' ? leads.length : products.length }}</div>
              <div class="text-xs text-slate-500 font-medium">Item Sedang Dikelola</div>
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
            </div>
          </div>
        </div>

        <!-- TABS HEADER -->
<<<<<<< HEAD
        <div class="flex gap-2 p-1 bg-[#0c1527]/85 border border-slate-800 rounded-xl max-w-md mb-8">
          <button 
            @click="activeTab = 'leads'"
            :class="activeTab === 'leads' ? 'bg-[#d21d1d] text-white shadow-md' : 'text-slate-400 hover:text-slate-200'"
=======
        <div class="flex gap-2 p-1 bg-slate-200/60 border border-slate-300/40 rounded-xl max-w-md mb-8">
          <button 
            @click="activeTab = 'leads'"
            :class="activeTab === 'leads' ? 'bg-[#d21d1d] text-white shadow-md' : 'text-slate-600 hover:text-slate-900'"
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
            class="flex-1 text-[11px] sm:text-xs font-bold py-2.5 rounded-lg transition-all cursor-pointer border-0"
          >
            📨 Pesanan ({{ leads.length }})
          </button>
          <button 
            @click="activeTab = 'products'"
            :class="activeTab === 'products' ? 'bg-[#d21d1d] text-white shadow-md' : 'text-slate-400 hover:text-slate-200'"
            class="flex-1 text-[11px] sm:text-xs font-bold py-2.5 rounded-lg transition-all cursor-pointer border-0"
          >
            📦 Produk ({{ products.length }})
          </button>
          <button 
            @click="activeTab = 'website'"
            :class="activeTab === 'website' ? 'bg-[#d21d1d] text-white shadow-md' : 'text-slate-400 hover:text-slate-200'"
            class="flex-1 text-[11px] sm:text-xs font-bold py-2.5 rounded-lg transition-all cursor-pointer border-0"
          >
            ⚙️ Tampilan Web
          </button>
        </div>
<<<<<<< HEAD
        <div v-if="activeTab === 'leads'" class="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl text-slate-800">
=======

        <!-- LEADS MANAGER TAB -->
        <div v-if="activeTab === 'leads'" class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-bold text-[#0b1c3f] flex items-center gap-2">
              <span>📨</span> Daftar Konsultasi / Pesanan Pelanggan
            </h3>
            <button 
              @click="fetchLeads" 
              class="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer border border-slate-250"
            >
              🔄 Refresh Data
            </button>
          </div>

          <div v-if="leads.length === 0" class="text-center py-16 text-slate-400">
            <span class="text-4xl block mb-3">📭</span>
            Belum ada data konsultasi/pesanan masuk di database.
          </div>

          <div v-else class="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table class="w-full border-collapse text-left text-xs sm:text-sm text-slate-700">
              <thead>
<<<<<<< HEAD
                <tr class="border-b border-slate-200 bg-slate-50 font-bold text-slate-650">
=======
                <tr class="border-b border-slate-200 bg-slate-50 font-bold text-slate-600">
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                  <th class="p-4">Tanggal Masuk</th>
                  <th class="p-4">Nama Pelanggan</th>
                  <th class="p-4">Kontak WhatsApp</th>
                  <th class="p-4">Produk Ditanyakan</th>
                  <th class="p-4">Alamat Kirim / Proyek</th>
                  <th class="p-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="lead in leads" :key="lead.id" class="border-b border-slate-100 hover:bg-slate-50 transition-all">
                  <td class="p-4 text-xs text-slate-500 whitespace-nowrap">{{ formatDate(lead.created_at) }}</td>
                  <td class="p-4 font-bold text-slate-800">{{ lead.name }}</td>
                  <td class="p-4">
                    <div class="flex items-center gap-2">
                      <span class="font-semibold text-slate-700">{{ lead.phone }}</span>
                      <a 
                        :href="`https://wa.me/${cleanPhone(lead.phone)}?text=${encodeURIComponent('Halo ' + lead.name + ', saya Admin CITRACon menindaklanjuti konsultasi Anda untuk produk ' + lead.product_name)}`" 
                        target="_blank"
                        class="px-2 py-1 rounded bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors text-xs font-bold no-underline"
                      >
                        💬 Chat WA
                      </a>
                    </div>
                  </td>
                  <td class="p-4">
                    <span class="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20 text-xs font-semibold">
                      {{ lead.product_name || 'Umum' }}
                    </span>
                  </td>
                  <td class="p-4 max-w-xs truncate text-xs text-slate-500" :title="lead.address">{{ lead.address }}</td>
                  <td class="p-4 text-center">
                    <button 
                      @click="deleteLead(lead.id)"
                      class="px-2 py-1 rounded bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-600 transition-all font-bold cursor-pointer text-xs"
                    >
                      🗑️ Hapus
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- PRODUCTS MANAGER TAB -->
<<<<<<< HEAD
        <div v-if="activeTab === 'products'" class="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl text-slate-800">
=======
        <div v-if="activeTab === 'products'" class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 class="text-lg font-bold text-[#0b1c3f] flex items-center gap-2">
              <span>📦</span> Daftar Katalog Produk
            </h3>
            <button 
              @click="openAddProductModal" 
              class="text-xs bg-[#d21d1d] hover:bg-[#b21818] text-white font-extrabold px-4 py-2.5 rounded-full shadow-md transition-all cursor-pointer border-0 uppercase tracking-wider"
            >
              ➕ Tambah Produk Baru
            </button>
          </div>

<<<<<<< HEAD
          <div v-if="products.length === 0" class="text-center py-16 text-slate-400">
=======
          <div v-if="products.length === 0" class="text-center py-16 text-slate-450">
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
            <span class="text-4xl block mb-3">📭</span>
            Katalog produk kosong. Klik Tambah Produk Baru untuk mengunggah produk pertama.
          </div>

          <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <q-card 
              v-for="p in products" 
              :key="p.id" 
              class="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div>
                <div class="h-44 overflow-hidden relative bg-slate-100">
                  <img 
                    :src="p.image" 
                    class="w-full h-full object-cover"
                    @error="p.image = 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800'"
                  >
                  <div class="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-lg shadow-sm">
                    {{ p.icon || '📦' }}
                  </div>
                  <div class="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-xs font-semibold text-slate-300">
                    ID: {{ p.id }}
                  </div>
                </div>
                
                <q-card-section class="p-4">
                  <h4 class="text-base font-bold text-[#0b1c3f] leading-snug">{{ p.name }}</h4>
<<<<<<< HEAD
                  <div class="text-xs text-red-650 font-semibold mt-1">{{ p.specs }}</div>
=======
                  <div class="text-xs text-red-600 font-semibold mt-1">{{ p.specs }}</div>
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                  <p class="text-xs text-slate-600 line-clamp-3 mt-3 leading-relaxed">{{ p.detailed_desc }}</p>
                </q-card-section>
              </div>

              <q-card-actions class="p-4 pt-0 flex gap-2">
                <button 
                  @click="openEditProductModal(p)"
                  class="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-bold transition-all text-xs cursor-pointer"
                >
                  ✏️ Edit Detail
                </button>
                <button 
                  @click="deleteProduct(p.id)"
                  class="px-3 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-600 font-bold transition-all text-xs cursor-pointer"
                >
                  🗑️
                </button>
              </q-card-actions>
            </q-card>
          </div>
        </div>

        <!-- WEBSITE CONFIGURATION CMS TAB -->
<<<<<<< HEAD
        <div v-if="activeTab === 'website'" class="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl space-y-8 text-slate-800">
=======
        <div v-if="activeTab === 'website'" class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-8">
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
          <div class="flex justify-between items-center pb-4 border-b border-slate-200">
            <h3 class="text-lg font-bold text-[#0b1c3f] flex items-center gap-2">
              <span>⚙️</span> Pengaturan Tampilan & Konten Website
            </h3>
            <button 
              @click="saveSiteSettings" 
              :disabled="isSavingSettings"
              class="text-xs bg-[#d21d1d] hover:bg-[#b21818] text-white font-extrabold px-6 py-2.5 rounded-full shadow-md transition-all cursor-pointer border-0 uppercase tracking-wider disabled:opacity-50"
            >
              <span v-if="isSavingSettings">💾 Menyimpan...</span>
              <span v-else>💾 Simpan Perubahan</span>
            </button>
          </div>

          <!-- Section 1: Hero Carousel Banner -->
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <h4 class="text-sm font-bold text-[#d21d1d] uppercase tracking-wider">1. Banner Slides (Slider Hero Depan)</h4>
              <button @click="addSlide" class="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-250 cursor-pointer">
                ➕ Tambah Slide
              </button>
            </div>
            <div class="grid grid-cols-1 gap-6">
<<<<<<< HEAD
              <div v-for="(slide, sIdx) in siteSettings.hero_slides" :key="sIdx" class="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 relative">
                <button @click="removeSlide(sIdx)" class="absolute top-4 right-4 bg-red-500/10 hover:bg-red-500/20 text-red-650 border border-red-500/20 px-2 py-1 rounded text-xs cursor-pointer">
=======
              <div v-for="(slide, sIdx) in siteSettings.hero_slides" :key="sIdx" class="bg-slate-50 border border-slate-200 rounded-2xl p-4 relative">
                <button @click="removeSlide(sIdx)" class="absolute top-4 right-4 bg-red-500/10 hover:bg-red-500/20 text-red-600 border border-red-500/20 px-2 py-1 rounded text-xs cursor-pointer">
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                  Hapus
                </button>
                <div class="text-xs font-bold text-slate-500 mb-3">Slide #{{ sIdx + 1 }}</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">URL Gambar (Latar Belakang)</label>
<<<<<<< HEAD
                    <input v-model="slide.image" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]" placeholder="Contoh: hero-precast-1.png or URL eksternal">
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Judul Banner (Mendukung HTML)</label>
                    <input v-model="slide.title" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]" placeholder="Contoh: MEMBANGUN FONDASI, <span class='text-[#d21d1d]'>MENJAMIN KUALITAS</span>">
                  </div>
                  <div class="md:col-span-2">
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Deskripsi Pendek</label>
                    <textarea v-model="slide.desc" rows="2" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]" placeholder="Tulis deskripsi singkat slide..."></textarea>
=======
                    <input v-model="slide.image" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]" placeholder="Contoh: hero-precast-1.png atau URL eksternal">
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Judul Banner (Mendukung HTML)</label>
                    <input v-model="slide.title" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]" placeholder="Contoh: MEMBANGUN FONDASI, <span class='text-[#d21d1d]'>MENJAMIN KUALITAS</span>">
                  </div>
                  <div class="md:col-span-2">
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Deskripsi Pendek</label>
                    <textarea v-model="slide.desc" rows="2" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]" placeholder="Tulis deskripsi singkat slide..."></textarea>
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 2: Profil & Visi Misi -->
          <div class="pt-6 border-t border-slate-200 space-y-4">
            <h4 class="text-sm font-bold text-[#d21d1d] uppercase tracking-wider">2. Profil Perusahaan & Visi Misi</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="md:col-span-2">
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Judul Profil (Tentang Kami)</label>
<<<<<<< HEAD
                <input v-model="siteSettings.profile_title" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]">
              </div>
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Paragraf Deskripsi 1 (Mendukung HTML)</label>
                <textarea v-model="siteSettings.profile_desc_1" rows="4" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]"></textarea>
              </div>
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Paragraf Deskripsi 2 (Mendukung HTML)</label>
                <textarea v-model="siteSettings.profile_desc_2" rows="4" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]"></textarea>
              </div>
              <div class="md:col-span-2">
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Pernyataan Visi</label>
                <textarea v-model="siteSettings.visi_text" rows="3" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]"></textarea>
=======
                <input v-model="siteSettings.profile_title" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]">
              </div>
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Paragraf Deskripsi 1 (Mendukung HTML)</label>
                <textarea v-model="siteSettings.profile_desc_1" rows="4" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]"></textarea>
              </div>
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Paragraf Deskripsi 2 (Mendukung HTML)</label>
                <textarea v-model="siteSettings.profile_desc_2" rows="4" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]"></textarea>
              </div>
              <div class="md:col-span-2">
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Pernyataan Visi</label>
                <textarea v-model="siteSettings.visi_text" rows="3" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]"></textarea>
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
              </div>
              <div class="md:col-span-2 space-y-2">
                <div class="flex justify-between items-center">
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Butir-Butir Misi Kami</label>
                  <button @click="addMisi" class="text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded cursor-pointer border border-slate-250">
                    ➕ Tambah Misi
                  </button>
                </div>
                <div class="space-y-2">
                  <div v-for="(misi, mIdx) in siteSettings.misi_items" :key="mIdx" class="flex gap-2 items-center">
                    <span class="text-xs text-slate-500 font-bold">#{{ mIdx + 1 }}</span>
<<<<<<< HEAD
                    <input v-model="siteSettings.misi_items[mIdx]" type="text" class="flex-grow bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]">
=======
                    <input v-model="siteSettings.misi_items[mIdx]" type="text" class="flex-grow bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]">
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                    <button @click="removeMisi(mIdx)" class="bg-red-500/10 hover:bg-red-500/20 text-red-650 border border-red-500/20 px-2.5 py-2 rounded-xl text-xs cursor-pointer">
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 3: Portofolio Proyek (Galeri Kerja) -->
          <div class="pt-6 border-t border-slate-200 space-y-4">
            <div class="flex justify-between items-center">
              <h4 class="text-sm font-bold text-[#d21d1d] uppercase tracking-wider">3. Portofolio Proyek (Galeri Kerja)</h4>
              <button @click="addPortfolioItem" class="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-250 cursor-pointer">
                ➕ Tambah Proyek
              </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<<<<<<< HEAD
              <div v-for="(item, pIdx) in siteSettings.portfolio_items" :key="pIdx" class="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 relative space-y-3">
                <button @click="removePortfolioItem(pIdx)" class="absolute top-4 right-4 bg-red-500/10 hover:bg-red-500/20 text-red-650 border border-red-500/20 px-2 py-1 rounded text-xs cursor-pointer">
=======
              <div v-for="(item, pIdx) in siteSettings.portfolio_items" :key="pIdx" class="bg-slate-50 border border-slate-200 rounded-2xl p-4 relative space-y-3">
                <button @click="removePortfolioItem(pIdx)" class="absolute top-4 right-4 bg-red-500/10 hover:bg-red-500/20 text-red-600 border border-red-500/20 px-2 py-1 rounded text-xs cursor-pointer">
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                  Hapus
                </button>
                <div class="text-xs font-bold text-slate-500">Proyek #{{ pIdx + 1 }}</div>
                <div class="grid grid-cols-1 gap-2.5">
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">Kategori</label>
<<<<<<< HEAD
                    <input v-model="item.category" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]" placeholder="Contoh: Jalan & Drainase">
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">Nama Proyek</label>
                    <input v-model="item.title" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]" placeholder="Contoh: Drainase Tol Trans-Jawa">
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">Deskripsi Ringkas</label>
                    <input v-model="item.desc" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]" placeholder="Detail singkat pengadaan...">
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">URL Gambar Proyek</label>
                    <input v-model="item.image" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]" placeholder="https://images.unsplash.com/...">
=======
                    <input v-model="item.category" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]" placeholder="Contoh: Jalan & Drainase">
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">Nama Proyek</label>
                    <input v-model="item.title" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]" placeholder="Contoh: Drainase Tol Trans-Jawa">
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">Deskripsi Ringkas</label>
                    <input v-model="item.desc" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]" placeholder="Detail singkat pengadaan...">
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">URL Gambar Proyek</label>
                    <input v-model="item.image" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]" placeholder="https://images.unsplash.com/...">
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 4: Maskot TRACON -->
          <div class="pt-6 border-t border-slate-200 space-y-4">
            <h4 class="text-sm font-bold text-[#d21d1d] uppercase tracking-wider">4. Maskot TRACON</h4>
            <div class="grid grid-cols-1 gap-4">
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Sub-judul Maskot</label>
<<<<<<< HEAD
                <input v-model="siteSettings.tracon_subtitle" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]">
=======
                <input v-model="siteSettings.tracon_subtitle" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]">
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
              </div>

              <!-- Profile Cards -->
              <div class="space-y-2">
                <div class="flex justify-between items-center">
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Kartu Tab Profil Maskot (Asal Nama, Nilai, dll)</label>
                  <button @click="addMascotProfileCard" class="text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded cursor-pointer border border-slate-250">
                    ➕ Tambah Kartu Profil
                  </button>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div v-for="(card, cIdx) in siteSettings.tracon_profile_cards" :key="cIdx" class="bg-slate-50 border border-slate-200 p-3 rounded-xl relative space-y-2 shadow-sm">
                    <button @click="removeMascotProfileCard(cIdx)" class="absolute top-2 right-2 bg-red-500/10 hover:bg-red-500/20 text-red-650 border border-red-500/20 px-2 py-0.5 rounded text-[10px] cursor-pointer">
                      ✕
                    </button>
<<<<<<< HEAD
                    <input v-model="card.title" type="text" class="w-11/12 bg-white border border-slate-200 rounded px-2 py-1 text-slate-900 text-xs font-bold focus:outline-none focus:bg-white focus:border-[#d21d1d]" placeholder="Judul Kartu">
                    <textarea v-model="card.desc" rows="2" class="w-full bg-white border border-slate-200 rounded px-2 py-1 text-slate-900 text-[11px] focus:outline-none focus:bg-white focus:border-[#d21d1d]" placeholder="Isi deskripsi..."></textarea>
=======
                    <input v-model="card.title" type="text" class="w-11/12 bg-white border border-slate-200 rounded px-2 py-1 text-slate-900 text-xs font-bold focus:outline-none focus:border-[#d21d1d]" placeholder="Judul Kartu">
                    <textarea v-model="card.desc" rows="2" class="w-full bg-white border border-slate-200 rounded px-2 py-1 text-slate-900 text-[11px] focus:outline-none focus:border-[#d21d1d]" placeholder="Isi deskripsi..."></textarea>
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                  </div>
                </div>
              </div>

              <!-- Philosophy Cards -->
              <div class="space-y-2 pt-4">
                <div class="flex justify-between items-center">
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Kartu Tab Filosofi Visual (Helm, Armor, dll)</label>
                  <button @click="addMascotPhilosophyCard" class="text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded cursor-pointer border border-slate-250">
                    ➕ Tambah Kartu Filosofi
                  </button>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div v-for="(card, cIdx) in siteSettings.tracon_philosophy_cards" :key="cIdx" class="bg-slate-50 border border-slate-200 p-3 rounded-xl relative space-y-2 shadow-sm">
                    <button @click="removeMascotPhilosophyCard(cIdx)" class="absolute top-2 right-2 bg-red-500/10 hover:bg-red-500/20 text-red-650 border border-red-500/20 px-2 py-0.5 rounded text-[10px] cursor-pointer">
                      ✕
                    </button>
                    <div class="flex gap-2">
<<<<<<< HEAD
                      <input v-model="card.icon" type="text" class="w-10 bg-white border border-slate-200 rounded px-1 py-1 text-slate-900 text-center text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]" placeholder="Ikon">
                      <input v-model="card.title" type="text" class="flex-grow bg-white border border-slate-200 rounded px-2 py-1 text-slate-900 text-xs font-bold focus:outline-none focus:bg-white focus:border-[#d21d1d]" placeholder="Nama Organ">
                    </div>
                    <textarea v-model="card.desc" rows="2" class="w-full bg-white border border-slate-200 rounded px-2 py-1 text-slate-900 text-[11px] focus:outline-none focus:bg-white focus:border-[#d21d1d]" placeholder="Isi deskripsi..."></textarea>
=======
                      <input v-model="card.icon" type="text" class="w-10 bg-white border border-slate-200 rounded px-1 py-1 text-slate-900 text-center text-xs focus:outline-none focus:border-[#d21d1d]" placeholder="Ikon">
                      <input v-model="card.title" type="text" class="flex-grow bg-white border border-slate-200 rounded px-2 py-1 text-slate-900 text-xs font-bold focus:outline-none focus:border-[#d21d1d]" placeholder="Nama Organ">
                    </div>
                    <textarea v-model="card.desc" rows="2" class="w-full bg-white border border-slate-200 rounded px-2 py-1 text-slate-900 text-[11px] focus:outline-none focus:border-[#d21d1d]" placeholder="Isi deskripsi..."></textarea>
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- Section 5: Kontak & Sosial Media -->
          <div class="pt-6 border-t border-slate-200 space-y-4">
            <h4 class="text-sm font-bold text-[#d21d1d] uppercase tracking-wider">5. Info Kontak & Koordinat Website</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Label Sales 1</label>
<<<<<<< HEAD
                <input v-model="siteSettings.contact_wa_1_label" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]" placeholder="Contoh: WhatsApp Sales 1">
              </div>
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Nomor WhatsApp Sales 1 (Kode Negara tanpa '+', misal: 62813...)</label>
                <input v-model="siteSettings.contact_wa_1_num" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]" placeholder="6281398354196">
              </div>
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Label Sales 2</label>
                <input v-model="siteSettings.contact_wa_2_label" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]" placeholder="Contoh: WhatsApp Sales 2">
              </div>
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Nomor WhatsApp Sales 2</label>
                <input v-model="siteSettings.contact_wa_2_num" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]" placeholder="6285695660902">
              </div>
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Username / Link Instagram</label>
                <input v-model="siteSettings.contact_instagram" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]">
              </div>
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Username / Link TikTok</label>
                <input v-model="siteSettings.contact_tiktok" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]">
              </div>
              <div class="md:col-span-2">
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Alamat Email Administrasi</label>
                <input v-model="siteSettings.contact_email" type="email" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]">
              </div>
              <div class="md:col-span-2">
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">URL Google Maps Embed (Src Iframe / Share Link)</label>
                <textarea v-model="siteSettings.contact_maps_url" rows="3" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-[#d21d1d]"></textarea>
              </div>
            </div>
          </div>

=======
                <input v-model="siteSettings.contact_wa_1_label" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]" placeholder="Contoh: WhatsApp Sales 1">
              </div>
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Nomor WhatsApp Sales 1 (Kode Negara tanpa '+', misal: 62813...)</label>
                <input v-model="siteSettings.contact_wa_1_num" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]" placeholder="6281398354196">
              </div>
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Label Sales 2</label>
                <input v-model="siteSettings.contact_wa_2_label" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]" placeholder="Contoh: WhatsApp Sales 2">
              </div>
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Nomor WhatsApp Sales 2</label>
                <input v-model="siteSettings.contact_wa_2_num" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]" placeholder="6285695660902">
              </div>
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Username / Link Instagram</label>
                <input v-model="siteSettings.contact_instagram" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]">
              </div>
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Username / Link TikTok</label>
                <input v-model="siteSettings.contact_tiktok" type="text" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]">
              </div>
              <div class="md:col-span-2">
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Alamat Email Administrasi</label>
                <input v-model="siteSettings.contact_email" type="email" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]">
              </div>
              <div class="md:col-span-2">
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">URL Google Maps Embed (Src Iframe / Share Link)</label>
                <textarea v-model="siteSettings.contact_maps_url" rows="3" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 text-xs focus:outline-none focus:border-[#d21d1d]"></textarea>
              </div>
            </div>
          </div>
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
          <div class="pt-6 border-t border-slate-200 flex justify-end">
            <button 
              @click="saveSiteSettings" 
              :disabled="isSavingSettings"
<<<<<<< HEAD
              class="bg-[#d21d1d] hover:bg-[#b21818] text-white font-extrabold px-8 py-3 rounded-full shadow-lg transition-all cursor-pointer border-0 uppercase tracking-wider disabled:opacity-50"
=======
              class="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-8 py-3 rounded-full shadow-lg transition-all cursor-pointer border-0 uppercase tracking-wider disabled:opacity-50"
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
            >
              <span v-if="isSavingSettings">💾 Menyimpan Perubahan...</span>
              <span v-else>💾 Simpan Semua Pengaturan</span>
            </button>
          </div>
        </div>
<<<<<<< HEAD
      </div>
    </div>
=======

      </div>

    </div>

    <!-- PRODUCT MANIPULATION MODAL DIALOG -->
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
    <q-dialog v-model="showProductModal" persistent max-width="800px">
      <q-card class="bg-white text-slate-800 border border-slate-200 rounded-3xl w-full max-w-[800px] overflow-hidden shadow-2xl">
        <q-card-section class="bg-slate-50 p-5 flex justify-between items-center border-b border-slate-200">
          <div class="text-base font-extrabold text-[#0b1c3f] flex items-center gap-2">
            <span>{{ isEditing ? '✏️ Edit Data' : '➕ Tambah' }} Produk CITRACon</span>
          </div>
          <button 
            @click="showProductModal = false" 
<<<<<<< HEAD
            class="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-550 flex items-center justify-center transition-colors cursor-pointer border-0"
=======
            class="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer border-0"
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
          >
            ✕
          </button>
        </q-card-section>

        <!-- Edit Dialog Body with Sub Tabs -->
        <q-card-section class="p-6 overflow-y-auto max-h-[70vh] space-y-6">
          
          <!-- Tab selector inside dialog -->
          <div class="flex gap-2 p-1 bg-slate-100 border border-slate-200 rounded-xl mb-4">
            <button 
              type="button"
              @click="dialogTab = 'general'"
              :class="dialogTab === 'general' ? 'bg-[#d21d1d] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'"
              class="flex-1 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors border-0"
            >
              Info Utama
            </button>
            <button 
              type="button"
              @click="dialogTab = 'specs'"
              :class="dialogTab === 'specs' ? 'bg-[#d21d1d] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'"
              class="flex-1 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors border-0"
            >
              Spesifikasi Teknis
            </button>
            <button 
              type="button"
              @click="dialogTab = 'sizes'"
              :class="dialogTab === 'sizes' ? 'bg-[#d21d1d] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'"
              class="flex-1 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors border-0"
            >
              Ukuran & Fitur
            </button>
          </div>

          <!-- TAB 1: General Info -->
          <div v-show="dialogTab === 'general'" class="space-y-4">
            <div class="grid grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">ID Produk</label>
                <input 
                  v-model.number="currentProduct.id" 
                  type="number"
                  :disabled="isEditing"
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-[#d21d1d] focus:bg-white transition-all disabled:opacity-55"
                  placeholder="ID Angka"
                >
              </div>
              <div class="col-span-2">
                <label class="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Nama Produk</label>
                <input 
                  v-model="currentProduct.name" 
                  type="text"
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-[#d21d1d] focus:bg-white transition-all"
                  placeholder="Nama produk precast..."
                >
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Sub-label (Mutu/Dimensi)</label>
                <input 
                  v-model="currentProduct.specs" 
                  type="text"
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-[#d21d1d] focus:bg-white transition-all"
                  placeholder="Contoh: Mutu K-350 / K-400"
                >
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Icon Emoji</label>
                <input 
                  v-model="currentProduct.icon" 
                  type="text"
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-[#d21d1d] focus:bg-white transition-all"
                  placeholder="Contoh: 🌊 atau 📦"
                >
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">URL Foto Utama</label>
              <input 
                v-model="currentProduct.image" 
                type="text"
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-[#d21d1d] focus:bg-white transition-all"
                placeholder="Contoh: /uditch.jpg atau URL online"
              >
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Deskripsi Detail</label>
              <textarea 
                v-model="currentProduct.detailed_desc" 
                rows="4"
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-[#d21d1d] focus:bg-white transition-all resize-none text-sm"
                placeholder="Tulis penjelasan lengkap kegunaan dan keunggulan produk..."
              ></textarea>
            </div>

            <div>
              <div class="flex justify-between items-center mb-2">
                <label class="text-xs font-bold text-slate-600 uppercase tracking-wider">Galeri Foto (Array URL)</label>
                <button 
                  type="button" 
                  @click="addGalleryField" 
                  class="text-xs text-blue-600 font-bold hover:underline cursor-pointer border-0 bg-transparent"
                >
                  ➕ Tambah Foto Galeri
                </button>
              </div>
              <div class="space-y-2">
                <div v-for="(img, idx) in currentProduct.gallery" :key="idx" class="flex gap-2">
                  <input 
                    v-model="currentProduct.gallery[idx]" 
                    type="text"
                    class="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#d21d1d] focus:bg-white"
                    placeholder="URL gambar..."
                  >
                  <button 
                    type="button" 
                    @click="removeGalleryField(idx)" 
<<<<<<< HEAD
                    class="px-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-650 font-bold rounded-xl cursor-pointer text-xs"
=======
                    class="px-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-600 font-bold rounded-xl cursor-pointer text-xs"
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 2: Technical Specifications -->
          <div v-show="dialogTab === 'specs'" class="space-y-4">
            <div class="bg-slate-50 p-4 border border-slate-200 rounded-2xl space-y-4">
              <h5 class="text-sm font-bold text-slate-800">Spesifikasi Teknik Bawaan</h5>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Mutu Beton</label>
                <input 
                  v-model="currentProduct.technical_specs.mutu_beton" 
                  type="text"
                  class="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#d21d1d]"
                  placeholder="Contoh: K-350 atau K-400 (SNI)"
                >
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Panjang Efektif</label>
                <input 
                  v-model="currentProduct.technical_specs.panjang_efektif" 
                  type="text"
                  class="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#d21d1d]"
                  placeholder="Contoh: 1200 mm"
                >
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Sistem Sambungan</label>
                <input 
                  v-model="currentProduct.technical_specs.sistem_sambungan" 
                  type="text"
                  class="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#d21d1d]"
                  placeholder="Contoh: Male-Female Joint"
                >
              </div>
              <div>
<<<<<<< HEAD
                <label class="block text-xs font-semibold text-slate-400 mb-1.5">Metode Cetak</label>
                <input 
                  v-model="currentProduct.technical_specs.metode_cetak" 
                  type="text"
                  class="w-full bg-[#0c1527] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#d21d1d] focus:bg-[#0d1628]"
=======
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Metode Cetak</label>
                <input 
                  v-model="currentProduct.technical_specs.metode_cetak" 
                  type="text"
                  class="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#d21d1d]"
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                  placeholder="Contoh: Centrifugal Spinning System"
                >
              </div>
              <div>
<<<<<<< HEAD
                <label class="block text-xs font-semibold text-slate-400 mb-1.5">Sertifikasi Teknis</label>
                <input 
                  v-model="currentProduct.technical_specs.sertifikasi" 
                  type="text"
                  class="w-full bg-[#0c1527] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#d21d1d] focus:bg-[#0d1628]"
=======
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Sertifikasi Teknis</label>
                <input 
                  v-model="currentProduct.technical_specs.sertifikasi" 
                  type="text"
                  class="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#d21d1d]"
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                  placeholder="Contoh: SNI Pracetak, TKDN Terverifikasi"
                >
              </div>
            </div>
          </div>

          <!-- TAB 3: Size Options & Features -->
          <div v-show="dialogTab === 'sizes'" class="space-y-6">
            
            <!-- Size Options Manager -->
            <div>
              <div class="flex justify-between items-center mb-3">
<<<<<<< HEAD
                <label class="text-xs font-bold text-slate-400 uppercase tracking-wider">Opsi Ukuran / Dimensi (Simulasi Tonase)</label>
=======
                <label class="text-xs font-bold text-slate-600 uppercase tracking-wider">Opsi Ukuran / Dimensi (Simulasi Tonase)</label>
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                <button 
                  type="button" 
                  @click="addSizeOption" 
                  class="text-xs text-[#d21d1d] font-bold hover:underline cursor-pointer border-0 bg-transparent"
                >
                  ➕ Tambah Opsi Ukuran
                </button>
              </div>

              <div class="space-y-3">
<<<<<<< HEAD
                <div v-for="(opt, idx) in currentProduct.size_options" :key="idx" class="flex flex-col sm:flex-row gap-3 p-3 bg-[#050b18] border border-slate-800 rounded-2xl relative">
=======
                <div v-for="(opt, idx) in currentProduct.size_options" :key="idx" class="flex flex-col sm:flex-row gap-3 p-3 bg-slate-50 border border-slate-200 rounded-2xl relative">
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                  <div class="flex-1">
                    <label class="block text-[10px] text-slate-500 font-semibold mb-1">Label Ukuran / Dimensi</label>
                    <input 
                      v-model="opt.label" 
                      type="text" 
<<<<<<< HEAD
                      class="w-full bg-[#0c1527] border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#d21d1d]"
=======
                      class="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none"
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                      placeholder="Contoh: U-Ditch 30 x 30 x 120 cm"
                    >
                  </div>
                  <div class="w-full sm:w-36">
                    <label class="block text-[10px] text-slate-500 font-semibold mb-1">Berat Per Unit (kg)</label>
                    <input 
                      v-model.number="opt.weight" 
                      type="number" 
<<<<<<< HEAD
                      class="w-full bg-[#0c1527] border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#d21d1d]"
=======
                      class="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none"
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                      placeholder="kg"
                    >
                  </div>
                  <div class="flex items-end justify-end sm:justify-start">
                    <button 
                      type="button" 
                      @click="removeSizeOption(idx)"
<<<<<<< HEAD
                      class="px-3 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-lg font-bold cursor-pointer text-xs"
=======
                      class="px-3 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-650 border border-red-500/20 rounded-lg font-bold cursor-pointer text-xs"
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                    >
                      ✕ Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Features List Manager -->
            <div>
              <div class="flex justify-between items-center mb-3">
<<<<<<< HEAD
                <label class="text-xs font-bold text-slate-400 uppercase tracking-wider">Daftar Keunggulan / Fitur</label>
=======
                <label class="text-xs font-bold text-slate-600 uppercase tracking-wider">Daftar Keunggulan / Fitur</label>
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                <button 
                  type="button" 
                  @click="addFeature" 
                  class="text-xs text-[#d21d1d] font-bold hover:underline cursor-pointer border-0 bg-transparent"
                >
                  ➕ Tambah Keunggulan
                </button>
              </div>

              <div class="space-y-3">
<<<<<<< HEAD
                <div v-for="(feat, idx) in currentProduct.features" :key="idx" class="flex flex-col gap-2 p-3 bg-[#050b18] border border-slate-800 rounded-2xl relative">
=======
                <div v-for="(feat, idx) in currentProduct.features" :key="idx" class="flex flex-col gap-2 p-3 bg-slate-50 border border-slate-200 rounded-2xl relative">
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                  <div>
                    <label class="block text-[10px] text-slate-500 font-semibold mb-1">Judul Keunggulan</label>
                    <input 
                      v-model="feat.title" 
                      type="text" 
<<<<<<< HEAD
                      class="w-full bg-[#0c1527] border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#d21d1d]"
=======
                      class="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none"
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                      placeholder="Contoh: Presisi Cetakan Baja"
                    >
                  </div>
                  <div>
                    <label class="block text-[10px] text-slate-500 font-semibold mb-1">Detail Keterangan</label>
                    <textarea 
                      v-model="feat.desc" 
                      rows="2"
<<<<<<< HEAD
                      class="w-full bg-[#0c1527] border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#d21d1d] resize-none"
=======
                      class="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none resize-none"
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                      placeholder="Tulis keterangan detail dari keunggulan ini..."
                    ></textarea>
                  </div>
                  <div class="text-right">
                    <button 
                      type="button" 
                      @click="removeFeature(idx)"
<<<<<<< HEAD
                      class="px-2 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-lg font-bold cursor-pointer text-[10px]"
=======
                      class="px-2 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-650 border border-red-500/20 rounded-lg font-bold cursor-pointer text-[10px]"
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
                    >
                      ✕ Hapus Keunggulan
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </q-card-section>

        <!-- Save Button -->
<<<<<<< HEAD
        <q-card-actions class="bg-[#050b18]/80 p-4 border-t border-slate-800 flex justify-end gap-3">
          <button 
            @click="showProductModal = false"
            class="px-4 py-2.5 rounded-full border border-slate-800 hover:bg-[#12203b] text-slate-350 bg-[#0c1527] text-xs font-bold transition-all cursor-pointer shadow-sm"
=======
        <q-card-actions class="bg-slate-50 p-4 border-t border-slate-200 flex justify-end gap-3">
          <button 
            @click="showProductModal = false"
            class="px-4 py-2.5 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 bg-white text-xs font-bold transition-all cursor-pointer shadow-sm"
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
          >
            Batal
          </button>
          <button 
            @click="saveProduct"
<<<<<<< HEAD
            class="px-6 py-2.5 rounded-full bg-[#d21d1d] hover:bg-[#b21818] text-white text-xs font-bold transition-all cursor-pointer shadow-md shadow-red-900/20"
=======
            class="px-6 py-2.5 rounded-full bg-[#d21d1d] hover:bg-[#b21818] text-white text-xs font-bold transition-all cursor-pointer shadow-md shadow-red-900/10"
>>>>>>> 2438076d32891732b5ee5c8911d9a5089deb4241
          >
            Simpan Perubahan 💾
          </button>
        </q-card-actions>
      </q-card>
    </q-dialog>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { supabase } from 'src/boot/supabase'

const $q = useQuasar()

// Auth State
const isAuthenticated = ref(sessionStorage.getItem('citracon_auth') === 'true')
const password = ref('')

// Tabs State
const activeTab = ref('leads')
const dialogTab = ref('general')

// Data List
const leads = ref([])
const products = ref([])

// Dialog Edit/Add State
const showProductModal = ref(false)
const isEditing = ref(false)
const currentProduct = ref({
  id: null,
  name: '',
  specs: '',
  icon: '📦',
  image: '',
  gallery: [],
  detailed_desc: '',
  features: [],
  technical_specs: {
    mutu_beton: '',
    panjang_efektif: '',
    sistem_sambungan: '',
    metode_cetak: '',
    sertifikasi: ''
  },
  size_options: []
})

// Login Check
function login() {
  if (password.value === 'admin123') {
    isAuthenticated.value = true
    sessionStorage.setItem('citracon_auth', 'true')
    password.value = ''
    fetchLeads()
    fetchProducts()
    fetchSiteSettings()
    $q.notify({
      color: 'positive',
      position: 'top',
      message: 'Login Berhasil! Selamat datang di Dasbor CMS CITRACon.',
      icon: 'lock_open'
    })
  } else {
    $q.notify({
      color: 'negative',
      position: 'top',
      message: 'Kata sandi salah! Coba lagi.',
      icon: 'lock'
    })
  }
}

function logout() {
  isAuthenticated.value = false
  sessionStorage.removeItem('citracon_auth')
  $q.notify({
    color: 'info',
    position: 'top',
    message: 'Anda telah keluar dari dasbor admin.',
    icon: 'exit_to_app'
  })
}

// Fetch Leads (Inquiries)
async function fetchLeads() {
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) {
    console.error('Error fetching leads:', error)
  } else {
    leads.value = data
  }
}

// Delete Lead
async function deleteLead(id) {
  if (!confirm('Apakah Anda yakin ingin menghapus data konsultasi ini?')) return

  const { error } = await supabase
    .from('leads')
    .delete()
    .eq('id', id)

  if (error) {
    $q.notify({
      color: 'negative',
      message: 'Gagal menghapus data.',
      icon: 'error'
    })
  } else {
    $q.notify({
      color: 'positive',
      message: 'Data konsultasi berhasil dihapus.',
      icon: 'check'
    })
    fetchLeads()
  }
}

// Fetch Products
async function fetchProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: true })
  if (error) {
    console.error('Error fetching products:', error)
  } else {
    products.value = data
  }
}

// Open Add Product Dialog
function openAddProductModal() {
  isEditing.value = false
  dialogTab.value = 'general'
  currentProduct.value = {
    id: products.value.length > 0 ? Math.max(...products.value.map(p => p.id)) + 1 : 1,
    name: '',
    specs: '',
    icon: '📦',
    image: '',
    gallery: [],
    detailed_desc: '',
    features: [],
    technical_specs: {
      mutu_beton: '',
      panjang_efektif: '',
      sistem_sambungan: '',
      metode_cetak: '',
      sertifikasi: ''
    },
    size_options: []
  }
  showProductModal.value = true
}

// Open Edit Product Dialog
function openEditProductModal(p) {
  isEditing.value = true
  dialogTab.value = 'general'
  
  // Clone to avoid editing directly
  currentProduct.value = JSON.parse(JSON.stringify(p))
  
  // Ensure default structures are safe
  if (!currentProduct.value.gallery) currentProduct.value.gallery = []
  if (!currentProduct.value.features) currentProduct.value.features = []
  if (!currentProduct.value.size_options) currentProduct.value.size_options = []
  if (!currentProduct.value.technical_specs) {
    currentProduct.value.technical_specs = {
      mutu_beton: '',
      panjang_efektif: '',
      sistem_sambungan: '',
      metode_cetak: '',
      sertifikasi: ''
    }
  }
  
  showProductModal.value = true
}

// Dynamic input managers
function addGalleryField() {
  currentProduct.value.gallery.push('')
}
function removeGalleryField(idx) {
  currentProduct.value.gallery.splice(idx, 1)
}

// Prevent null issues
function addSizeOption() {
  if (!currentProduct.value.size_options) currentProduct.value.size_options = []
  currentProduct.value.size_options.push({ label: '', weight: null })
}
function removeSizeOption(idx) {
  currentProduct.value.size_options.splice(idx, 1)
}

function addFeature() {
  if (!currentProduct.value.features) currentProduct.value.features = []
  currentProduct.value.features.push({ title: '', desc: '' })
}
function removeFeature(idx) {
  currentProduct.value.features.splice(idx, 1)
}

// Save or Update Product in Supabase
async function saveProduct() {
  const p = currentProduct.value
  if (!p.id || !p.name || !p.image) {
    $q.notify({
      color: 'negative',
      message: 'ID, Nama, dan Foto Utama wajib diisi!',
      icon: 'warning'
    })
    return
  }

  // Filter empty sizes or features
  p.size_options = p.size_options ? p.size_options.filter(x => x.label !== '') : []
  p.features = p.features ? p.features.filter(x => x.title !== '') : []
  p.gallery = p.gallery ? p.gallery.filter(x => x !== '') : []

  let query
  if (isEditing.value) {
    query = supabase.from('products').update(p).eq('id', p.id)
  } else {
    query = supabase.from('products').insert([p])
  }

  const { error } = await query

  if (error) {
    console.error('Error saving product:', error)
    $q.notify({
      color: 'negative',
      message: `Gagal menyimpan produk: ${error.message}`,
      icon: 'error'
    })
  } else {
    $q.notify({
      color: 'positive',
      message: `Produk ${p.name} berhasil disimpan!`,
      icon: 'check_circle'
    })
    showProductModal.value = false
    fetchProducts()
  }
}

// Delete Product
async function deleteProduct(id) {
  if (!confirm('Apakah Anda yakin ingin menghapus produk ini dari katalog?')) return

  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id)

  if (error) {
    $q.notify({
      color: 'negative',
      message: 'Gagal menghapus produk.',
      icon: 'error'
    })
  } else {
    $q.notify({
      color: 'positive',
      message: 'Produk berhasil dihapus.',
      icon: 'check'
    })
    fetchProducts()
  }
}

// Helpers
function formatDate(dateStr) {
  if (!dateStr) return '-'
  const d = new Date(dateStr)
  return d.toLocaleString('id-ID', { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

function cleanPhone(phone) {
  if (!phone) return ''
  let cleaned = phone.replace(/[^0-9]/g, '')
  if (cleaned.startsWith('0')) {
    cleaned = '62' + cleaned.slice(1)
  }
  return cleaned
}

// Site Settings Editor State (100% database-driven)
const siteSettings = ref({
  hero_slides: [],
  profile_title: '',
  profile_desc_1: '',
  profile_desc_2: '',
  visi_text: '',
  misi_items: [],
  portfolio_items: [],
  tracon_subtitle: '',
  tracon_profile_cards: [],
  tracon_philosophy_cards: [],
  contact_wa_1_label: '',
  contact_wa_1_num: '',
  contact_wa_2_label: '',
  contact_wa_2_num: '',
  contact_instagram: '',
  contact_tiktok: '',
  contact_email: '',
  contact_maps_url: ''
})

const isSavingSettings = ref(false)

async function fetchSiteSettings() {
  const { data, error } = await supabase
    .from('site_settings')
    .select('*')
    .eq('id', 1)
    .single()
  if (error) {
    console.error('Error fetching site settings:', error)
  } else if (data) {
    siteSettings.value = data
  }
}

async function saveSiteSettings() {
  isSavingSettings.value = true
  const { error } = await supabase
    .from('site_settings')
    .update(siteSettings.value)
    .eq('id', 1)

  isSavingSettings.value = false
  if (error) {
    $q.notify({
      color: 'negative',
      message: 'Gagal menyimpan pengaturan website.',
      icon: 'error'
    })
    console.error('Error saving settings:', error)
  } else {
    $q.notify({
      color: 'positive',
      message: 'Pengaturan website berhasil disimpan dan diperbarui!',
      icon: 'check'
    })
  }
}

// Slides Helpers
function addSlide() {
  if (!siteSettings.value.hero_slides) siteSettings.value.hero_slides = []
  siteSettings.value.hero_slides.push({
    image: '',
    title: '',
    desc: ''
  })
}

// Ensure first/second slides always have values when added
function removeSlide(idx) {
  siteSettings.value.hero_slides.splice(idx, 1)
}

// Misi Helpers
function addMisi() {
  if (!siteSettings.value.misi_items) siteSettings.value.misi_items = []
  siteSettings.value.misi_items.push('')
}

function removeMisi(idx) {
  siteSettings.value.misi_items.splice(idx, 1)
}

// Portfolio Helpers
function addPortfolioItem() {
  if (!siteSettings.value.portfolio_items) siteSettings.value.portfolio_items = []
  siteSettings.value.portfolio_items.push({
    category: '',
    title: '',
    desc: '',
    image: ''
  })
}

function removePortfolioItem(idx) {
  siteSettings.value.portfolio_items.splice(idx, 1)
}

// Mascot Profile Cards Helpers
function addMascotProfileCard() {
  if (!siteSettings.value.tracon_profile_cards) siteSettings.value.tracon_profile_cards = []
  siteSettings.value.tracon_profile_cards.push({
    title: '',
    desc: ''
  })
}

function removeMascotProfileCard(idx) {
  siteSettings.value.tracon_profile_cards.splice(idx, 1)
}

// Mascot Philosophy Cards Helpers
function addMascotPhilosophyCard() {
  if (!siteSettings.value.tracon_philosophy_cards) siteSettings.value.tracon_philosophy_cards = []
  siteSettings.value.tracon_philosophy_cards.push({
    title: '',
    icon: '🪖',
    desc: ''
  })
}

function removeMascotPhilosophyCard(idx) {
  siteSettings.value.tracon_philosophy_cards.splice(idx, 1)
}

onMounted(() => {
  if (isAuthenticated.value) {
    fetchLeads()
    fetchProducts()
    fetchSiteSettings()
  }
})
</script>

<style scoped>
/* Glassmorphism custom components */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>
