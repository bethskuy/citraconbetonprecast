<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="min-h-screen py-10 px-4 sm:px-8 relative overflow-hidden" style="background: linear-gradient(135deg, #080f20 0%, #0b1a38 50%, #0e1f42 100%)">
    <!-- Ambient Lights -->
    <div class="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(210,29,29,0.12) 0%, transparent 70%)"></div>
    <div class="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)"></div>
    <div class="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)"></div>

    <!-- Container -->
    <div class="max-w-7xl mx-auto relative z-10">
      
      <!-- HEADER -->
      <div class="flex flex-col justify-center items-center gap-4 mb-10 pb-6 border-b border-white/10 relative text-center">
        <div class="w-full">
          <div class="flex flex-col items-center justify-center text-center">
            <div class="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-1.5 mb-3">
              <span class="w-2 h-2 rounded-full bg-[#d21d1d] animate-pulse"></span>
              <span class="text-[11px] font-bold text-red-400 uppercase tracking-widest">Admin Panel</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Selamat Datang di <span class="text-[#ef4444]">CITRACon</span> Admin
            </h1>
            <p class="text-sm text-slate-400 mt-2">Kelola katalog produk dan pantau pesanan masuk secara real-time.</p>
          </div>
        </div>
        <div v-if="isAuthenticated" class="sm:absolute sm:top-2 sm:right-0">
          <button 
            @click="logout" 
            class="text-xs bg-white/10 hover:bg-red-500/20 text-slate-300 hover:text-red-400 font-bold px-4 py-2.5 rounded-full border border-white/20 hover:border-red-500/40 transition-all cursor-pointer"
          >
            🚪 Keluar
          </button>
        </div>
      </div>

      <!-- LOGIN CONTAINER -->
      <div v-if="!isAuthenticated" class="max-w-md mx-auto my-12">
        <div class="rounded-3xl p-8" style="background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15); backdrop-filter: blur(20px)">
          <div class="text-center mb-6">
            <div class="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl shadow-2xl mb-4" style="background: linear-gradient(135deg, #d21d1d, #ff6b6b)">
              🔑
            </div>
            <h2 class="text-xl font-extrabold text-white">Login Admin Panel</h2>
            <p class="text-sm mt-1" style="color: rgba(255,255,255,0.5)">Masukkan kata sandi untuk mengakses dasbor</p>
          </div>
          <div class="space-y-4">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider mb-2" style="color: rgba(255,255,255,0.6)">Kata Sandi</label>
              <input 
                v-model="password" 
                type="password" 
                @keyup.enter="login"
                class="w-full rounded-xl px-4 py-3 font-medium focus:outline-none transition-all text-white placeholder-slate-500"
                style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)"
                placeholder="Masukkan kata sandi..."
              >
            </div>
            <button 
              @click="login" 
              class="w-full text-white font-extrabold py-3 rounded-xl transition-all duration-200 cursor-pointer active:scale-[0.98] mt-2"
              style="background: linear-gradient(135deg, #d21d1d, #b21818); box-shadow: 0 8px 24px rgba(210,29,29,0.35)"
            >
              Masuk Dasbor 🚀
            </button>
          </div>
        </div>
      </div>

      <!-- MAIN CMS DASHBOARD -->
      <div v-else>
        <!-- STATS CARDS -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          <div class="premium-glow-card glow-blue rounded-2xl p-5 flex items-center gap-4 border cursor-pointer" style="background: #ffffff; border-color: rgba(0, 0, 0, 0.08)">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style="background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.15)">📦</div>
            <div>
              <div class="text-2xl font-black" style="color: #0b1c3f">{{ products.length }}</div>
              <div class="text-xs font-bold mt-0.5 text-slate-500">Total Produk Katalog</div>
            </div>
            <div class="ml-auto w-1 h-12 rounded-full" style="background: linear-gradient(180deg, #3b82f6, rgba(59,130,246,0))"></div>
          </div>
          <div class="premium-glow-card glow-green rounded-2xl p-5 flex items-center gap-4 border cursor-pointer" style="background: #ffffff; border-color: rgba(0, 0, 0, 0.08)">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style="background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.15)">📨</div>
            <div>
              <div class="text-2xl font-black" style="color: #0b1c3f">{{ leads.length }}</div>
              <div class="text-xs font-bold mt-0.5 text-slate-500">Pesanan Masuk (Leads)</div>
            </div>
            <div class="ml-auto w-1 h-12 rounded-full" style="background: linear-gradient(180deg, #10b981, rgba(16,185,129,0))"></div>
          </div>
          <div class="premium-glow-card glow-red rounded-2xl p-5 flex items-center gap-4 border cursor-pointer" style="background: #ffffff; border-color: rgba(0, 0, 0, 0.08)">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style="background: rgba(210,29,29,0.08); border: 1px solid rgba(210,29,29,0.15)">🔥</div>
            <div>
              <div class="text-2xl font-black" style="color: #0b1c3f">{{ activeTab === 'leads' ? leads.length : products.length }}</div>
              <div class="text-xs font-bold mt-0.5 text-slate-500">Item Sedang Dikelola</div>
            </div>
            <div class="ml-auto w-1 h-12 rounded-full" style="background: linear-gradient(180deg, #d21d1d, rgba(210,29,29,0))"></div>
          </div>
        </div>

        <!-- TABS HEADER -->
        <div class="flex gap-1.5 p-1.5 rounded-2xl max-w-lg mb-8" style="background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12)">
          <button 
            @click="activeTab = 'leads'"
            :class="activeTab === 'leads' ? 'bg-[#d21d1d] text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/10'"
            class="flex-1 text-[11px] sm:text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer border-0"
          >
            📨 Pesanan ({{ leads.length }})
          </button>
          <button 
            @click="activeTab = 'products'"
            :class="activeTab === 'products' ? 'bg-[#d21d1d] text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/10'"
            class="flex-1 text-[11px] sm:text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer border-0"
          >
            📦 Produk ({{ products.length }})
          </button>
          <button 
            @click="activeTab = 'website'"
            :class="activeTab === 'website' ? 'bg-[#d21d1d] text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/10'"
            class="flex-1 text-[11px] sm:text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer border-0"
          >
            ⚙️ Tampilan Web
          </button>
        </div>

        <!-- LEADS MANAGER TAB -->
        <div v-if="activeTab === 'leads'" class="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm shadow-slate-100">
          <div class="flex justify-between items-center mb-6">
            <div>
              <h3 class="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <span class="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-base">📨</span>
                Daftar Konsultasi / Pesanan
              </h3>
              <p class="text-xs text-slate-400 mt-1 ml-10">Data masuk dari form konsultasi website</p>
            </div>
            <button 
              @click="fetchLeads" 
              class="text-xs bg-slate-50 hover:bg-slate-100 text-slate-600 font-semibold px-3 py-2 rounded-lg transition-all cursor-pointer border border-slate-200 flex items-center gap-1.5"
            >
              🔄 Refresh
            </button>
          </div>

          <div v-if="leads.length === 0" class="text-center py-16">
            <div class="text-5xl mb-4">📭</div>
            <p class="text-slate-500 font-medium">Belum ada pesanan masuk</p>
            <p class="text-xs text-slate-400 mt-1">Data akan muncul ketika ada yang mengisi form konsultasi</p>
          </div>

          <div v-else class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="w-full border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr class="border-b border-slate-200 bg-slate-50">
                  <th class="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Tanggal</th>
                  <th class="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Nama</th>
                  <th class="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">WhatsApp</th>
                  <th class="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Produk</th>
                  <th class="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Alamat</th>
                  <th class="p-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="lead in leads" :key="lead.id" class="hover:bg-slate-50/80 transition-colors">
                  <td class="p-4 text-xs text-slate-400 whitespace-nowrap font-medium">{{ formatDate(lead.created_at) }}</td>
                  <td class="p-4 font-bold text-slate-900 text-sm">{{ lead.name }}</td>
                  <td class="p-4">
                    <div class="flex items-center gap-2">
                      <span class="font-medium text-slate-600 text-xs">{{ lead.phone }}</span>
                      <a 
                        :href="`https://wa.me/${cleanPhone(lead.phone)}?text=${encodeURIComponent('Halo ' + lead.name + ', saya Admin CITRACon menindaklanjuti konsultasi Anda untuk produk ' + lead.product_name)}`" 
                        target="_blank"
                        class="px-2.5 py-1 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors text-xs font-bold no-underline shadow-sm"
                      >
                        💬 WA
                      </a>
                    </div>
                  </td>
                  <td class="p-4">
                    <span class="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs font-semibold">
                      {{ lead.product_name || 'Umum' }}
                    </span>
                  </td>
                  <td class="p-4 max-w-xs truncate text-xs text-slate-500 font-medium" :title="lead.address">{{ lead.address }}</td>
                  <td class="p-4 text-center">
                    <button 
                      @click="deleteLead(lead.id)"
                      class="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 transition-all font-bold cursor-pointer text-xs"
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
        <div v-if="activeTab === 'products'" class="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm shadow-slate-100">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h3 class="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <span class="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-base">📦</span>
                Daftar Katalog Produk
              </h3>
              <p class="text-xs text-slate-400 mt-1 ml-10">Kelola semua produk precast yang ditampilkan di website</p>
            </div>
            <button 
              @click="openAddProductModal" 
              class="text-xs bg-[#d21d1d] hover:bg-[#b21818] text-white font-extrabold px-5 py-2.5 rounded-xl shadow-md shadow-red-100 transition-all cursor-pointer border-0 uppercase tracking-wider flex items-center gap-1.5"
            >
              ➕ Tambah Produk
            </button>
          </div>

          <div v-if="products.length === 0" class="text-center py-16">
            <div class="text-5xl mb-4">📭</div>
            <p class="text-slate-500 font-medium">Katalog produk kosong</p>
            <p class="text-xs text-slate-400 mt-1">Klik tombol Tambah Produk untuk memulai</p>
          </div>

          <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div 
              v-for="p in products" 
              :key="p.id" 
              class="bg-white border border-slate-200/80 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 group"
            >
              <div>
                <div class="h-44 overflow-hidden relative bg-gradient-to-br from-slate-100 to-slate-200">
                  <img 
                    :src="p.image" 
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    @error="p.image = 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800'"
                  >
                  <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div class="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white shadow-md flex items-center justify-center text-xl">
                    {{ p.icon || '📦' }}
                  </div>
                  <div class="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-xs font-bold text-white">
                    ID #{{ p.id }}
                  </div>
                </div>
                
                <div class="p-4">
                  <h4 class="text-sm font-extrabold text-slate-900 leading-snug">{{ p.name }}</h4>
                  <div class="inline-block text-[11px] text-[#d21d1d] font-bold mt-1 bg-red-50 border border-red-100 px-2 py-0.5 rounded-md">{{ p.specs }}</div>
                  <p class="text-xs text-slate-500 line-clamp-2 mt-2.5 leading-relaxed">{{ p.detailed_desc }}</p>
                </div>
              </div>

              <div class="p-4 pt-0 flex gap-2">
                <button 
                  @click="openEditProductModal(p)"
                  class="flex-1 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-100 font-bold transition-all text-xs cursor-pointer"
                >
                  ✏️ Edit
                </button>
                <button 
                  @click="deleteProduct(p.id)"
                  class="px-3 py-2 rounded-xl bg-red-50 hover:bg-red-100 border border-red-100 text-red-600 font-bold transition-all text-xs cursor-pointer"
                >
                  🗑️
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- WEBSITE CONFIGURATION CMS TAB -->
        <div v-if="activeTab === 'website'" class="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm shadow-slate-100 space-y-8">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-slate-100">
            <div>
              <h3 class="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <span class="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-base">⚙️</span>
                Pengaturan Tampilan & Konten
              </h3>
              <p class="text-xs text-slate-400 mt-1 ml-10">Ubah konten website secara langsung dari sini</p>
            </div>
            <button 
              @click="saveSiteSettings" 
              :disabled="isSavingSettings"
              class="text-xs bg-[#d21d1d] hover:bg-[#b21818] text-white font-extrabold px-6 py-2.5 rounded-xl shadow-md shadow-red-100 transition-all cursor-pointer border-0 uppercase tracking-wider disabled:opacity-50 flex items-center gap-2"
            >
              <span v-if="isSavingSettings">💾 Menyimpan...</span>
              <span v-else>💾 Simpan Perubahan</span>
            </button>
          </div>

          <!-- Section 1: Hero Carousel Banner -->
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <h4 class="text-sm font-bold text-[#d21d1d] uppercase tracking-wider">1. Banner Slides (Slider Hero Depan)</h4>
              <div class="flex gap-2">
                <button @click="addSlide" class="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-250 cursor-pointer">
                  ➕ Tambah Slide
                </button>
                <button @click="saveSiteSettings" :disabled="isSavingSettings" class="text-xs bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-lg border-0 cursor-pointer font-bold transition-all shadow-sm flex items-center gap-1">
                  <span>💾 Simpan</span>
                </button>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6">
              <div v-for="(slide, sIdx) in siteSettings.hero_slides" :key="sIdx" class="rounded-2xl p-4 relative" style="background: #0b1c3f; border: 1px solid rgba(255,255,255,0.12)">
                <button @click="removeSlide(sIdx)" class="absolute top-4 right-4 bg-red-500/20 hover:bg-red-500/40 text-red-400 border border-red-500/30 px-2 py-1 rounded text-xs cursor-pointer">
                  Hapus
                </button>
                <div class="text-xs font-bold text-slate-400 mb-3">Slide #{{ sIdx + 1 }}</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Gambar Banner (Latar Belakang)</label>
                    <div class="flex gap-2">
                      <input v-model="slide.image" type="text" class="flex-grow rounded-xl px-3 py-2 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Contoh: hero-precast-1.png atau URL eksternal">
                      <label class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-xl text-xs font-bold cursor-pointer transition-all flex items-center justify-center gap-1 shrink-0 border-0">
                        <span>📁 Upload</span>
                        <input type="file" class="hidden" accept="image/*" @change="(e) => uploadSlideImage(e, sIdx)">
                      </label>
                    </div>
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Judul Banner (Mendukung HTML)</label>
                    <input v-model="slide.title" type="text" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Contoh: MEMBANGUN FONDASI...">
                  </div>
                  <div class="md:col-span-2">
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Deskripsi Pendek</label>
                    <textarea v-model="slide.desc" rows="2" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none resize-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Tulis deskripsi singkat slide..."></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 2: Profil & Visi Misi -->
          <div class="pt-6 border-t border-white/10 space-y-4">
            <div class="flex justify-between items-center">
              <h4 class="text-sm font-bold text-[#d21d1d] uppercase tracking-wider">2. Profil Perusahaan & Visi Misi</h4>
              <button @click="saveSiteSettings" :disabled="isSavingSettings" class="text-xs bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-lg border-0 cursor-pointer font-bold transition-all shadow-sm flex items-center gap-1">
                <span>💾 Simpan</span>
              </button>
            </div>
            <div class="rounded-2xl p-5" style="background: #0b1c3f; border: 1px solid rgba(255,255,255,0.12)">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="md:col-span-2">
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Judul Profil (Tentang Kami)</label>
                  <input v-model="siteSettings.profile_title" type="text" class="w-full rounded-xl px-3 py-2.5 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)">
                </div>
                <div>
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Paragraf Deskripsi 1 (Mendukung HTML)</label>
                  <textarea v-model="siteSettings.profile_desc_1" rows="4" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none resize-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)"></textarea>
                </div>
                <div>
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Paragraf Deskripsi 2 (Mendukung HTML)</label>
                  <textarea v-model="siteSettings.profile_desc_2" rows="4" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none resize-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)"></textarea>
                </div>
                <div class="md:col-span-2">
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Pernyataan Visi</label>
                  <textarea v-model="siteSettings.visi_text" rows="3" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none resize-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)"></textarea>
                </div>
                <div class="md:col-span-2 space-y-2">
                  <div class="flex justify-between items-center">
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Butir-Butir Misi Kami</label>
                    <button @click="addMisi" class="text-[11px] bg-slate-800 hover:bg-slate-900 text-white px-3 py-1.5 rounded-xl font-bold border-0 cursor-pointer transition-all shadow-sm">
                      ➕ Tambah Misi
                    </button>
                  </div>
                  <div class="space-y-2">
                    <div v-for="(misi, mIdx) in siteSettings.misi_items" :key="mIdx" class="flex gap-2 items-center">
                      <span class="text-xs text-slate-400 font-bold">#{{ mIdx + 1 }}</span>
                      <input v-model="siteSettings.misi_items[mIdx]" type="text" class="flex-grow rounded-xl px-3 py-2 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)">
                      <button @click="removeMisi(mIdx)" class="bg-red-500/20 hover:bg-red-500/40 text-red-400 border border-red-500/30 px-2.5 py-2 rounded-xl text-xs cursor-pointer">
                        ✕
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 3: Portofolio Proyek (Galeri Kerja) -->
          <div class="pt-6 border-t border-white/10 space-y-4">
            <div class="flex justify-between items-center">
              <h4 class="text-sm font-bold text-[#ef4444] uppercase tracking-wider">3. Portofolio Proyek (Galeri Kerja)</h4>
              <div class="flex gap-2">
                <button @click="addPortfolioItem" class="text-xs bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-xl font-bold border-0 cursor-pointer transition-all shadow-sm">
                  ➕ Tambah Proyek
                </button>
                <button @click="saveSiteSettings" :disabled="isSavingSettings" class="text-xs bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-lg border-0 cursor-pointer font-bold transition-all shadow-sm flex items-center gap-1">
                  <span>💾 Simpan</span>
                </button>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="(item, pIdx) in siteSettings.portfolio_items" :key="pIdx" class="rounded-2xl p-4 relative space-y-3" style="background: #0b1c3f; border: 1px solid rgba(255,255,255,0.12)">
                <button @click="removePortfolioItem(pIdx)" class="absolute top-4 right-4 bg-red-500/20 hover:bg-red-500/40 text-red-400 border border-red-500/30 px-2 py-1 rounded text-xs cursor-pointer">
                  Hapus
                </button>
                <div class="text-xs font-bold text-slate-400">Proyek #{{ pIdx + 1 }}</div>
                <div class="grid grid-cols-1 gap-2.5">
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Kategori</label>
                    <input v-model="item.category" type="text" class="w-full rounded-xl px-3 py-1.5 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Contoh: Jalan & Drainase">
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Nama Proyek</label>
                    <input v-model="item.title" type="text" class="w-full rounded-xl px-3 py-1.5 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Contoh: Drainase Tol Trans-Jawa">
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Deskripsi Ringkas</label>
                    <input v-model="item.desc" type="text" class="w-full rounded-xl px-3 py-1.5 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Detail singkat pengadaan...">
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Gambar Proyek</label>
                    <div class="flex gap-2">
                      <input v-model="item.image" type="text" class="flex-grow rounded-xl px-3 py-1.5 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="https://...">
                      <label class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-all flex items-center justify-center gap-1 shrink-0 border-0">
                        <span>📁 Upload</span>
                        <input type="file" class="hidden" accept="image/*" @change="(e) => uploadPortfolioImage(e, pIdx)">
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 4: Maskot TRACON -->
          <div class="pt-6 border-t border-white/10 space-y-4">
            <div class="flex justify-between items-center">
              <h4 class="text-sm font-bold text-[#ef4444] uppercase tracking-wider">4. Maskot TRACON</h4>
              <button @click="saveSiteSettings" :disabled="isSavingSettings" class="text-xs bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-lg border-0 cursor-pointer font-bold transition-all shadow-sm flex items-center gap-1">
                <span>💾 Simpan</span>
              </button>
            </div>
            <div class="rounded-2xl p-5 space-y-4" style="background: #0b1c3f; border: 1px solid rgba(255,255,255,0.12)">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Sub-judul Maskot (Samping "MEMPERKENALKAN TRACON")</label>
                  <input v-model="siteSettings.tracon_subtitle" type="text" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)">
                </div>
                <div>
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Judul Zona Maskot (Beranda - Home)</label>
                  <input v-model="siteSettings.tracon_title" type="text" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)">
                </div>
                <div class="md:col-span-2">
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Deskripsi Utama Maskot (Beranda - Home)</label>
                  <textarea v-model="siteSettings.tracon_desc" rows="2" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none resize-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)"></textarea>
                </div>
              </div>

              <!-- Fun Stats Cards -->
              <div class="space-y-2 border-t border-white/10 pt-4">
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">3 Kartu Informasi Ringkas (Kekuatan, Keramahan, Kualitas)</label>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div v-for="(stat, sIdx) in siteSettings.tracon_fun_stats" :key="sIdx" class="p-3 rounded-xl space-y-2" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12)">
                    <div class="flex gap-2">
                      <input v-model="stat.icon" type="text" class="w-10 rounded px-1 py-1 text-white text-center text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Ikon">
                      <input v-model="stat.title" type="text" class="flex-grow rounded px-2 py-1 text-white text-xs font-bold focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Judul">
                    </div>
                    <input v-model="stat.subtitle" type="text" class="w-full rounded px-2 py-1 text-white text-[11px] focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Sub-info">
                  </div>
                </div>
              </div>

              <!-- Speech Bubbles List -->
              <div class="space-y-2 border-t border-white/10 pt-4">
                <div class="flex justify-between items-center">
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Daftar Obrolan / Gelembung Teks Maskot</label>
                  <button @click="addSpeechBubble" class="text-[11px] bg-slate-800 hover:bg-slate-900 text-white px-3 py-1.5 rounded-xl font-bold border-0 cursor-pointer transition-all shadow-sm">
                    ➕ Tambah Obrolan
                  </button>
                </div>
                <div class="space-y-2">
                  <div v-for="(bubble, bIdx) in siteSettings.tracon_speech_bubbles" :key="bIdx" class="flex gap-2 items-center">
                    <span class="text-xs text-slate-400 font-bold">#{{ bIdx + 1 }}</span>
                    <input v-model="siteSettings.tracon_speech_bubbles[bIdx]" type="text" class="flex-grow rounded-xl px-3 py-2 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)">
                    <button @click="removeSpeechBubble(bIdx)" class="bg-red-500/20 hover:bg-red-500/40 text-red-400 border border-red-500/30 px-2.5 py-2 rounded-xl text-xs cursor-pointer">
                      ✕
                    </button>
                  </div>
                </div>
              </div>

              <!-- Chatbot FAQ List -->
              <div class="space-y-2 border-t border-white/10 pt-4">
                <div class="flex justify-between items-center">
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Daftar Pertanyaan & Jawaban Chatbot FAQ</label>
                  <div class="flex gap-2">
                    <button @click="resetFaqToDefault" class="text-[11px] bg-red-500/20 hover:bg-red-500/40 text-red-300 px-3 py-1.5 rounded-xl font-bold border border-red-500/30 cursor-pointer transition-all shadow-sm">
                      🔄 Reset ke Default
                    </button>
                    <button @click="addFaqItem" class="text-[11px] bg-slate-800 hover:bg-slate-900 text-white px-3 py-1.5 rounded-xl font-bold border-0 cursor-pointer transition-all shadow-sm">
                      ➕ Tambah FAQ
                    </button>
                  </div>
                </div>
                <div class="space-y-4">
                  <div v-for="(faq, fIdx) in siteSettings.tracon_faq" :key="fIdx" class="p-3 rounded-xl relative space-y-2" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12)">
                    <button @click="removeFaqItem(fIdx)" class="absolute top-2 right-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 border border-red-500/30 px-2 py-0.5 rounded text-[10px] cursor-pointer">
                      ✕ Hapus
                    </button>
                    <div class="text-[10px] text-slate-400 font-bold">FAQ #{{ fIdx + 1 }}</div>
                    <div>
                      <label class="block text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1">Pertanyaan</label>
                      <input v-model="faq.question" type="text" class="w-11/12 rounded px-2 py-1 text-white text-xs font-bold focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Contoh: Berapa minimal order?">
                    </div>
                    <div>
                      <label class="block text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1">Jawaban Otomatis TRACON</label>
                      <textarea v-model="faq.answer" rows="3" class="w-full rounded px-2 py-1 text-white text-[11px] focus:outline-none resize-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Tulis jawaban detail dari TRACON..."></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Foto Slide Maskot TRACON -->
              <div class="space-y-2 border-t border-white/10 pt-4">
                <div class="flex justify-between items-center">
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Foto / Slide Maskot TRACON (Mendukung Multi-Foto)</label>
                  <label class="text-[10px] bg-slate-800 hover:bg-slate-900 text-white px-3 py-2 rounded-xl font-bold border-0 cursor-pointer transition-all shadow-sm flex items-center gap-1">
                    <span>➕ Upload Foto Maskot</span>
                    <input type="file" class="hidden" accept="image/*" @change="uploadMascotImage">
                  </label>
                </div>
                
                <div v-if="siteSettings.tracon_images && siteSettings.tracon_images.length" class="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  <div v-for="(imgUrl, idx) in siteSettings.tracon_images" :key="idx" class="relative group rounded-xl overflow-hidden border border-white/10" style="aspect-ratio: 1">
                    <img :src="imgUrl" class="w-full h-full object-cover" />
                    <!-- Action Overlay -->
                    <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5">
                      <button @click="removeMascotImage(idx)" class="bg-red-500/20 hover:bg-red-500/40 text-red-400 border border-red-500/30 p-1.5 rounded-lg text-xs cursor-pointer">
                        🗑️ Hapus
                      </button>
                    </div>
                  </div>
                </div>
                <div v-else class="text-xs text-slate-500 italic p-3 text-center rounded-xl bg-white/5 border border-white/10">
                  Belum ada foto maskot yang diunggah. Web akan menampilkan foto default (tracon.png, dll).
                </div>
              </div>

              <!-- Profile Cards -->
              <div class="space-y-2">
                <div class="flex justify-between items-center">
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Kartu Tab Profil Maskot (Asal Nama, Nilai, dll)</label>
                  <button @click="addMascotProfileCard" class="text-[11px] bg-slate-800 hover:bg-slate-900 text-white px-3 py-1.5 rounded-xl font-bold border-0 cursor-pointer transition-all shadow-sm">
                    ➕ Tambah Kartu Profil
                  </button>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div v-for="(card, cIdx) in siteSettings.tracon_profile_cards" :key="cIdx" class="p-3 rounded-xl relative space-y-2" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12)">
                    <button @click="removeMascotProfileCard(cIdx)" class="absolute top-2 right-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 border border-red-500/30 px-2 py-0.5 rounded text-[10px] cursor-pointer">
                      ✕
                    </button>
                    <input v-model="card.title" type="text" class="w-11/12 rounded px-2 py-1 text-white text-xs font-bold focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Judul Kartu">
                    <textarea v-model="card.desc" rows="2" class="w-full rounded px-2 py-1 text-white text-[11px] focus:outline-none resize-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Isi deskripsi..."></textarea>
                  </div>
                </div>
              </div>

              <!-- Philosophy Cards -->
              <div class="space-y-2 pt-2">
                <div class="flex justify-between items-center">
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Kartu Tab Filosofi Visual (Helm, Armor, dll)</label>
                  <button @click="addMascotPhilosophyCard" class="text-[11px] bg-slate-800 hover:bg-slate-900 text-white px-3 py-1.5 rounded-xl font-bold border-0 cursor-pointer transition-all shadow-sm">
                    ➕ Tambah Kartu Filosofi
                  </button>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div v-for="(card, cIdx) in siteSettings.tracon_philosophy_cards" :key="cIdx" class="p-3 rounded-xl relative space-y-2" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12)">
                    <button @click="removeMascotPhilosophyCard(cIdx)" class="absolute top-2 right-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 border border-red-500/30 px-2 py-0.5 rounded text-[10px] cursor-pointer">
                      ✕
                    </button>
                    <div class="flex gap-2">
                      <input v-model="card.icon" type="text" class="w-10 rounded px-1 py-1 text-white text-center text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Ikon">
                      <input v-model="card.title" type="text" class="flex-grow rounded px-2 py-1 text-white text-xs font-bold focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Nama Organ">
                    </div>
                    <textarea v-model="card.desc" rows="2" class="w-full rounded px-2 py-1 text-white text-[11px] focus:outline-none resize-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Isi deskripsi..."></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 5: Kemitraan / Klien Kami -->
          <div class="pt-6 border-t border-white/10 space-y-4">
            <div class="flex justify-between items-center">
              <h4 class="text-sm font-bold text-[#ef4444] uppercase tracking-wider">5. Kemitraan / Klien Kami</h4>
              <button @click="addClientLogoItem" class="text-xs bg-slate-800 hover:bg-slate-900 text-white px-3.5 py-1.5 rounded-lg border-0 cursor-pointer font-bold transition-all shadow-sm">
                ➕ Tambah Klien
              </button>
            </div>
            <div class="rounded-2xl p-5 space-y-4" style="background: #0b1c3f; border: 1px solid rgba(255,255,255,0.12)">
              <div v-if="siteSettings.client_logos && siteSettings.client_logos.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="(client, cIdx) in siteSettings.client_logos" :key="cIdx" class="p-4 rounded-xl relative space-y-3" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12)">
                  <button @click="removeClientLogoItem(cIdx)" class="absolute top-2 right-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 border border-red-500/30 px-2 py-0.5 rounded text-[10px] cursor-pointer">
                    ✕ Hapus
                  </button>
                  
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nama Klien</label>
                    <input v-model="client.name" type="text" class="w-11/12 rounded px-3 py-1.5 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Contoh: Brantas Abipraya">
                  </div>
                  
                  <div class="space-y-2">
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Logo Klien</label>
                    <div class="flex items-center gap-3">
                      <div class="w-20 h-12 bg-white rounded-lg p-1.5 flex items-center justify-center border border-white/10 shrink-0">
                        <img v-if="client.image" :src="client.image" class="max-h-full max-w-full object-contain" />
                        <span v-else class="text-[9px] text-slate-400 font-bold uppercase">No Logo</span>
                      </div>
                      <label class="text-[10px] bg-slate-800 hover:bg-slate-900 text-white px-3 py-2 rounded-xl font-bold border-0 cursor-pointer transition-all shadow-sm flex items-center gap-1">
                        <span>Upload Logo</span>
                        <input type="file" class="hidden" accept="image/*" @change="e => uploadClientLogo(e, cIdx)">
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="text-xs text-slate-500 italic p-3 text-center rounded-xl bg-white/5 border border-white/10">
                Belum ada klien yang ditambahkan. Web utama akan menampilkan mitra default (Brantas Abipraya, Agra Budi).
              </div>
            </div>
          </div>

          <!-- Section 6: Pengaturan Pricelist Website -->
          <div class="pt-6 border-t border-white/10 space-y-4">
            <div class="flex justify-between items-center">
              <h4 class="text-sm font-bold text-[#ef4444] uppercase tracking-wider">6. Pengaturan Judul & Catatan Pricelist</h4>
              <button @click="saveSiteSettings" :disabled="isSavingSettings" class="text-xs bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-lg border-0 cursor-pointer font-bold transition-all shadow-sm flex items-center gap-1">
                <span>💾 Simpan</span>
              </button>
            </div>
            <div class="rounded-2xl p-5" style="background: #0b1c3f; border: 1px solid rgba(255,255,255,0.12)">
              <div class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Judul Pricelist</label>
                    <input v-model="siteSettings.pricelist_title" type="text" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Pricelist Beton Precast">
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Sub-judul Pricelist</label>
                    <input v-model="siteSettings.pricelist_subtitle" type="text" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Daftar estimasi harga dasar Franco pabrik...">
                  </div>
                </div>

                <!-- Notes Editor -->
                <div>
                  <div class="flex justify-between items-center mb-2">
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Poin Catatan Transaksi Penting (Alert Box)</label>
                    <button type="button" @click="addPricelistNoteItem" class="text-[10px] text-red-400 font-bold hover:underline bg-transparent border-0 cursor-pointer">
                      ➕ Tambah Poin
                    </button>
                  </div>
                  <div class="space-y-2">
                    <div v-for="(note, nIdx) in siteSettings.pricelist_notes" :key="nIdx" class="flex gap-2">
                      <input 
                        v-model="siteSettings.pricelist_notes[nIdx]" 
                        type="text" 
                        class="flex-1 rounded-xl px-3 py-2 text-white text-xs focus:outline-none" 
                        style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)"
                        placeholder="Tulis catatan penting..."
                      >
                      <button 
                        type="button" 
                        @click="removePricelistNoteItem(nIdx)"
                        class="px-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-xl cursor-pointer text-xs transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <div v-if="!siteSettings.pricelist_notes || !siteSettings.pricelist_notes.length" class="text-xs text-slate-500 italic p-3 text-center rounded-xl bg-white/5 border border-white/10">
                      Belum ada poin catatan. Alert box pada homepage akan kosong.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 7: Kontak & Sosial Media -->
          <div class="pt-6 border-t border-white/10 space-y-4">
            <div class="flex justify-between items-center">
              <h4 class="text-sm font-bold text-[#ef4444] uppercase tracking-wider">7. Info Kontak & Koordinat Website</h4>
              <button @click="saveSiteSettings" :disabled="isSavingSettings" class="text-xs bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-lg border-0 cursor-pointer font-bold transition-all shadow-sm flex items-center gap-1">
                <span>💾 Simpan</span>
              </button>
            </div>
            <div class="rounded-2xl p-5" style="background: #0b1c3f; border: 1px solid rgba(255,255,255,0.12)">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Label Sales 1</label>
                  <input v-model="siteSettings.contact_wa_1_label" type="text" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Contoh: WhatsApp Sales 1">
                </div>
                <div>
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nomor WhatsApp Sales 1 (Kode Negara tanpa '+', misal: 62813...)</label>
                  <input v-model="siteSettings.contact_wa_1_num" type="text" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="6281398354196">
                </div>
                <div>
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Label Sales 2</label>
                  <input v-model="siteSettings.contact_wa_2_label" type="text" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Contoh: WhatsApp Sales 2">
                </div>
                <div>
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nomor WhatsApp Sales 2</label>
                  <input v-model="siteSettings.contact_wa_2_num" type="text" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="6285695660902">
                </div>
                <div>
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Label Sales 3</label>
                  <input v-model="siteSettings.contact_wa_3_label" type="text" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="Contoh: WhatsApp Sales 3">
                </div>
                <div>
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nomor WhatsApp Sales 3</label>
                  <input v-model="siteSettings.contact_wa_3_num" type="text" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)" placeholder="6287848104524">
                </div>
                <div>
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Username / Link Instagram</label>
                  <input v-model="siteSettings.contact_instagram" type="text" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)">
                </div>
                <div>
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Username / Link TikTok</label>
                  <input v-model="siteSettings.contact_tiktok" type="text" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)">
                </div>
                <div class="md:col-span-2">
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Alamat Email Administrasi</label>
                  <input v-model="siteSettings.contact_email" type="email" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)">
                </div>
                <div class="md:col-span-2">
                  <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">URL Google Maps Embed (Src Iframe / Share Link)</label>
                  <textarea v-model="siteSettings.contact_maps_url" rows="3" class="w-full rounded-xl px-3 py-2 text-white text-xs focus:outline-none resize-none" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15)"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-6 border-t border-slate-100 flex justify-between items-center">
            <p class="text-xs text-slate-400">Perubahan akan langsung diterapkan ke website.</p>
            <button 
              @click="saveSiteSettings" 
              :disabled="isSavingSettings"
              class="bg-[#d21d1d] hover:bg-[#b21818] text-white font-extrabold px-8 py-3 rounded-xl shadow-lg shadow-red-100 transition-all cursor-pointer border-0 uppercase tracking-wider disabled:opacity-50 flex items-center gap-2"
            >
              <span v-if="isSavingSettings">💾 Menyimpan...</span>
              <span v-else>💾 Simpan Semua Pengaturan</span>
            </button>
          </div>
        </div>

      </div>

    </div>

    <!-- PRODUCT MANIPULATION MODAL DIALOG -->
    <q-dialog v-model="showProductModal" persistent max-width="800px">
      <q-card class="bg-white text-slate-800 border border-slate-200 rounded-3xl w-full max-w-[800px] overflow-hidden shadow-2xl">
        <q-card-section class="bg-slate-50 p-5 flex justify-between items-center border-b border-slate-200">
          <div class="text-base font-extrabold text-[#0b1c3f] flex items-center gap-2">
            <span>{{ isEditing ? '✏️ Edit Data' : '➕ Tambah' }} Produk CITRACon</span>
          </div>
          <button 
            @click="showProductModal = false" 
            class="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer border-0"
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
                <label class="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Nama Produk <span class="text-red-500">*</span></label>
                <input 
                  v-model="currentProduct.name" 
                  type="text"
                  class="w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:bg-white transition-all"
                  :class="showValidationErrors && !currentProduct.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#d21d1d]'"
                  placeholder="Nama produk precast..."
                >
                <span v-if="showValidationErrors && !currentProduct.name" class="text-red-500 text-xs font-semibold mt-1.5 block">
                  ⚠️ Nama produk wajib diisi!
                </span>
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
              <label class="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Foto Utama Produk <span class="text-red-500">*</span></label>
              <!-- Preview gambar jika ada -->
              <div v-if="currentProduct.image" class="mb-3 relative group inline-block">
                <img :src="currentProduct.image" class="w-full h-40 object-cover rounded-xl border border-slate-200" alt="Preview" />
                <button type="button" @click="currentProduct.image = ''" class="absolute top-2 right-2 bg-red-500 text-white w-6 h-6 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer border-0">✕</button>
              </div>
              <!-- Upload + URL input -->
              <div class="flex gap-2">
                <input
                  v-model="currentProduct.image"
                  type="text"
                  class="flex-1 bg-slate-50 border rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:bg-white transition-all text-sm"
                  :class="showValidationErrors && !currentProduct.image ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#d21d1d]'"
                  placeholder="URL gambar atau klik Upload →"
                >
                <label class="flex items-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl cursor-pointer font-bold text-xs transition-all shadow-sm whitespace-nowrap" :class="{'opacity-60 pointer-events-none': isUploadingMain}">
                  <span v-if="isUploadingMain">⏳ Uploading...</span>
                  <span v-else>📤 Upload</span>
                  <input type="file" class="hidden" accept="image/*" @change="(e) => uploadMainImage(e)" :disabled="isUploadingMain">
                </label>
              </div>
              <span v-if="showValidationErrors && !currentProduct.image" class="text-red-500 text-xs font-semibold mt-1.5 block">
                ⚠️ Foto utama produk wajib diupload atau diisi URL gambarnya!
              </span>
              <p v-else class="text-[10px] text-slate-400 mt-1.5">Pilih file (JPG/PNG/WEBP) atau tempel URL langsung</p>
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
                <label class="text-xs font-bold text-slate-600 uppercase tracking-wider">Galeri Foto</label>
                <div class="flex gap-2">
                  <label class="text-xs text-indigo-600 font-bold hover:underline cursor-pointer" :class="{'opacity-60 pointer-events-none': isUploadingGallery}">
                    <span v-if="isUploadingGallery">⏳ Uploading...</span>
                    <span v-else>📤 Upload Foto</span>
                    <input type="file" class="hidden" accept="image/*" @change="(e) => uploadGalleryImage(e)" :disabled="isUploadingGallery">
                  </label>
                  <span class="text-slate-300">|</span>
                  <button
                    type="button"
                    @click="addGalleryField"
                    class="text-xs text-blue-600 font-bold hover:underline cursor-pointer border-0 bg-transparent"
                  >
                    ➕ Tambah URL
                  </button>
                </div>
              </div>
              <!-- Gallery previews -->
              <div v-if="currentProduct.gallery?.length" class="flex flex-wrap gap-2 mb-3">
                <div v-for="(img, idx) in currentProduct.gallery" :key="'prev-'+idx" class="relative group">
                  <img :src="img" class="w-20 h-16 object-cover rounded-lg border border-slate-200" />
                </div>
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
                    class="px-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-600 font-bold rounded-xl cursor-pointer text-xs"
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
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Metode Cetak</label>
                <input 
                  v-model="currentProduct.technical_specs.metode_cetak" 
                  type="text"
                  class="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#d21d1d]"
                  placeholder="Contoh: Centrifugal Spinning System"
                >
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Sertifikasi Teknis</label>
                <input 
                  v-model="currentProduct.technical_specs.sertifikasi" 
                  type="text"
                  class="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#d21d1d]"
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
                <label class="text-xs font-bold text-slate-600 uppercase tracking-wider">Opsi Ukuran / Dimensi (Simulasi Tonase)</label>
                <button 
                  type="button" 
                  @click="addSizeOption" 
                  class="text-xs text-[#d21d1d] font-bold hover:underline cursor-pointer border-0 bg-transparent"
                >
                  ➕ Tambah Opsi Ukuran
                </button>
              </div>

              <div class="space-y-3">
                <div v-for="(opt, idx) in currentProduct.size_options" :key="idx" class="flex flex-col sm:flex-row gap-3 p-3 bg-slate-50 border border-slate-200 rounded-2xl relative">
                  <div class="flex-1">
                    <label class="block text-[10px] text-slate-500 font-semibold mb-1">Label Ukuran / Dimensi</label>
                    <input 
                      v-model="opt.label" 
                      type="text" 
                      class="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none"
                      placeholder="Contoh: U-Ditch 30 x 30 x 120 cm"
                    >
                  </div>
                  <div class="w-full sm:w-36">
                    <label class="block text-[10px] text-slate-500 font-semibold mb-1">Berat Per Unit (kg)</label>
                    <input 
                      v-model.number="opt.weight" 
                      type="number" 
                      class="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none"
                      placeholder="kg"
                    >
                  </div>
                  <div class="w-full sm:w-36">
                    <label class="block text-[10px] text-slate-500 font-semibold mb-1">Harga Estimasi (Rp)</label>
                    <input 
                      v-model="opt.price" 
                      type="text" 
                      class="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none"
                      placeholder="Contoh: Rp 180.000"
                    >
                  </div>
                  <div class="flex items-end justify-end sm:justify-start">
                    <button 
                      type="button" 
                      @click="removeSizeOption(idx)"
                      class="px-3 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-650 border border-red-500/20 rounded-lg font-bold cursor-pointer text-xs"
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
                <label class="text-xs font-bold text-slate-600 uppercase tracking-wider">Daftar Keunggulan / Fitur</label>
                <button 
                  type="button" 
                  @click="addFeature" 
                  class="text-xs text-[#d21d1d] font-bold hover:underline cursor-pointer border-0 bg-transparent"
                >
                  ➕ Tambah Keunggulan
                </button>
              </div>

              <div class="space-y-3">
                <div v-for="(feat, idx) in currentProduct.features" :key="idx" class="flex flex-col gap-2 p-3 bg-slate-50 border border-slate-200 rounded-2xl relative">
                  <div>
                    <label class="block text-[10px] text-slate-500 font-semibold mb-1">Judul Keunggulan</label>
                    <input 
                      v-model="feat.title" 
                      type="text" 
                      class="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none"
                      placeholder="Contoh: Presisi Cetakan Baja"
                    >
                  </div>
                  <div>
                    <label class="block text-[10px] text-slate-500 font-semibold mb-1">Detail Keterangan</label>
                    <textarea 
                      v-model="feat.desc" 
                      rows="2"
                      class="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none resize-none"
                      placeholder="Tulis keterangan detail dari keunggulan ini..."
                    ></textarea>
                  </div>
                  <div class="text-right">
                    <button 
                      type="button" 
                      @click="removeFeature(idx)"
                      class="px-2 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-650 border border-red-500/20 rounded-lg font-bold cursor-pointer text-[10px]"
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
        <q-card-actions class="bg-slate-50 p-4 border-t border-slate-200 flex justify-end gap-3">
          <button 
            @click="showProductModal = false"
            class="px-4 py-2.5 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 bg-white text-xs font-bold transition-all cursor-pointer shadow-sm"
          >
            Batal
          </button>
          <button 
            @click="saveProduct"
            class="px-6 py-2.5 rounded-full bg-[#d21d1d] hover:bg-[#b21818] text-white text-xs font-bold transition-all cursor-pointer shadow-md shadow-red-900/10"
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

// DB columns debugging
const dbColumns = ref([])

// Validation error state
const showValidationErrors = ref(false)

// Upload state
const isUploadingMain = ref(false)
const isUploadingGallery = ref(false)
const STORAGE_BUCKET = 'product-images'

// Upload gambar ke Supabase Storage dan return public URL
async function uploadToSupabase(file) {
  const ext = file.name.split('.').pop()
  const fileName = `${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`
  const { error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(fileName, file, { upsert: true, contentType: file.type })
  if (error) throw error
  const { data: urlData } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(fileName)
  return urlData.publicUrl
}

async function uploadMainImage(event) {
  const file = event.target.files?.[0]
  if (!file) return
  isUploadingMain.value = true
  try {
    const url = await uploadToSupabase(file)
    currentProduct.value.image = url
    $q.notify({ color: 'positive', position: 'top', message: '✅ Foto utama berhasil diupload!', icon: 'check_circle' })
  } catch (err) {
    console.error('Upload error:', err)
    let userMessage = `Gagal upload: ${err.message || 'Cek koneksi internet'}`
    
    // Tampilkan bantuan yang relevan dengan error Supabase
    if (err.message?.includes('bucket') || err.message?.toLowerCase().includes('not found')) {
      userMessage = '❌ Bucket "product-images" belum dibuat di Supabase Anda! Buka Supabase Dashboard -> Storage -> Create New Bucket bernama "product-images" (atur ke Public).'
    } else if (err.status === 403 || err.message?.toLowerCase().includes('policy') || err.message?.toLowerCase().includes('row-level')) {
      userMessage = '❌ RLS Blocked: Akses upload ditolak! Buka Supabase Storage -> bucket "product-images" -> Policies -> Tambahkan Policy (Allow Insert/Select untuk anonymous/public).'
    }
    
    $q.notify({ 
      color: 'negative', 
      position: 'top', 
      multiLine: true,
      message: userMessage, 
      icon: 'error',
      timeout: 10000 
    })
  } finally {
    isUploadingMain.value = false
    event.target.value = ''
  }
}

async function uploadGalleryImage(event) {
  const file = event.target.files?.[0]
  if (!file) return
  isUploadingGallery.value = true
  try {
    const url = await uploadToSupabase(file)
    if (!currentProduct.value.gallery) currentProduct.value.gallery = []
    currentProduct.value.gallery.push(url)
    $q.notify({ color: 'positive', position: 'top', message: '✅ Foto galeri berhasil diupload!', icon: 'check_circle' })
  } catch (err) {
    console.error('Upload error:', err)
    let userMessage = `Gagal upload: ${err.message || 'Cek koneksi internet'}`
    
    if (err.message?.includes('bucket') || err.message?.toLowerCase().includes('not found')) {
      userMessage = '❌ Bucket "product-images" belum dibuat di Supabase Anda! Buka Supabase Dashboard -> Storage -> Create New Bucket bernama "product-images" (atur ke Public).'
    } else if (err.status === 403 || err.message?.toLowerCase().includes('policy') || err.message?.toLowerCase().includes('row-level')) {
      userMessage = '❌ RLS Blocked: Akses upload ditolak! Buka Supabase Storage -> bucket "product-images" -> Policies -> Tambahkan Policy (Allow Insert/Select untuk anonymous/public).'
    }

    $q.notify({ 
      color: 'negative', 
      position: 'top', 
      multiLine: true,
      message: userMessage, 
      icon: 'error',
      timeout: 10000
    })
  } finally {
    isUploadingGallery.value = false
    event.target.value = ''
  }
}

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
  showValidationErrors.value = false
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
  showValidationErrors.value = false
  
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
  currentProduct.value.size_options.push({ label: '', weight: null, price: '' })
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
    showValidationErrors.value = true
    $q.notify({
      color: 'negative',
      message: 'ID, Nama, dan Foto Utama wajib diisi!',
      icon: 'report_problem',
      position: 'top'
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
  tracon_title: '',
  tracon_desc: '',
  tracon_images: [],
  tracon_profile_cards: [],
  tracon_philosophy_cards: [],
  tracon_fun_stats: [],
  tracon_speech_bubbles: [],
  tracon_faq: [],
  client_logos: [],
  pricelist_title: '',
  pricelist_subtitle: '',
  pricelist_notes: [],
  contact_wa_1_label: '',
  contact_wa_1_num: '',
  contact_wa_2_label: '',
  contact_wa_2_num: '',
  contact_wa_3_label: 'WhatsApp Sales 3',
  contact_wa_3_num: '087848104524',
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
  
  const safeParse = (val, fallback = []) => {
    if (!val) return fallback
    try {
      const parsed = typeof val === 'string' ? JSON.parse(val) : val
      return (Array.isArray(parsed) && parsed.length > 0) ? parsed : fallback
    } catch (e) {
      console.error('Error parsing JSON field:', e)
      return fallback
    }
  }

  if (error) {
    console.error('Error fetching site settings:', error)
  } else if (data) {
    dbColumns.value = Object.keys(data)
    siteSettings.value = {
      ...data,
      hero_slides: safeParse(data.hero_slides, [
        { image: 'precast_concrete_factory_1782379014858.png', title: 'Beton Precast Mutu Tinggi', desc: 'Menghadirkan kekuatan optimal dan presisi tinggi untuk segala kebutuhan infrastruktur.' }
      ]),
      misi_items: safeParse(data.misi_items, [
        'Memproduksi produk beton pracetak dengan mutu tinggi standar SNI.',
        'Memberikan layanan tepat waktu dan pengiriman profesional.',
        'Mendukung pembangunan infrastruktur nasional dengan kemitraan terpercaya.'
      ]),
      portfolio_items: safeParse(data.portfolio_items, [
        { category: 'Infrastruktur Jalan', title: 'Pemasangan U-Ditch Tol Cipali', desc: 'Suplai dan pemasangan U-Ditch ukuran 60x60 cm sepanjang 2.4 km untuk drainase utama jalan tol.', image: 'precast_concrete_uditch_1782378967095.png' },
        { category: 'Saluran Irigasi', title: 'Saluran Box Culvert Primer Bekasi', desc: 'Konstruksi gorong-gorong penyaluran air pemukiman menggunakan Box Culvert ukuran 120x120 cm.', image: 'precast_concrete_structure_1782378994309.png' },
        { category: 'Pondasi Berat', title: 'Pondasi Spun Pile Pelabuhan Patimban', desc: 'Pemancangan tiang pancang spun pile silinder diameter 500 mm untuk dermaga logistik laut.', image: 'precast_concrete_factory_1782379014858.png' }
      ]),
      tracon_images: safeParse(data.tracon_images, ['tracon.png', 'tracon2.png', 'tracon3.png', 'tracon4.png', 'tracon5.png']),
      tracon_title: data.tracon_title || 'BERTEMU TRACON, MASKOT CITRACON',
      tracon_desc: data.tracon_desc || 'TRACON adalah maskot resmi CITRACon — sosok pahlawan konstruksi yang kuat, ramah, dan siap mewujudkan infrastruktur impian Anda bersama tim terbaik kami.',
      tracon_profile_cards: safeParse(data.tracon_profile_cards, [
        { title: 'Asal Nama TRACON', desc: 'Singkatan dari <strong>TRA</strong>nsformer <strong>CON</strong>crete. Melambangkan robot pelindung dan pembangun konstruksi beton yang kokoh.' },
        { title: 'Nilai Kerja TRACON', desc: 'Mengutamakan presisi tinggi (Precision), kekuatan struktural (Strength), ketahanan 100 tahun (Durability), dan keselamatan kerja (Safety).' }
      ]),
      tracon_philosophy_cards: safeParse(data.tracon_philosophy_cards, [
        { icon: '🪖', title: 'Helm Safety Merah', desc: 'Simbol kepemimpinan, keberanian, keselamatan kerja utama di lapangan proyek.' },
        { icon: '🛡️', title: 'Armor Baja K-500', desc: 'Kekuatan tekan beton precast mutu K-500 ke atas yang tahan segala cuaca.' },
        { icon: '⚡', title: 'Inti Reaktor Energi', desc: 'Melambangkan energi efisiensi tinggi, percepatan fabrikasi, dan pengiriman tepat waktu.' }
      ]),
      tracon_fun_stats: safeParse(data.tracon_fun_stats, [
        { icon: '💪', title: 'Kekuatan', subtitle: 'K-500 Ready' },
        { icon: '😊', title: 'Keramahan', subtitle: 'Siap Bantu 24h' },
        { icon: '🏆', title: 'Kualitas', subtitle: 'SNI Certified' }
      ]),
      tracon_speech_bubbles: safeParse(data.tracon_speech_bubbles, [
        '🦺 Halo! Saya TRACON, siap membangun Indonesia!',
        '🧱 Precast berkualitas = infrastruktur awet 100 tahun!',
        '🚚 Pengiriman cepat, tepat waktu, no drama!',
        '📋 SNI certified? Tentu! Standar terjamin bro!',
        '💪 Kuat tekan K-500? Itu standar minimal kami!',
        '🤝 Hubungi tim kami, konsultasi gratis!',
        '🏗️ Dari U-Ditch hingga Box Culvert, semua ada!',
        '😄 Proyek besar atau kecil, kami siap!'
      ]),
      tracon_faq: safeParse(data.tracon_faq, [
        { question: 'Berapa minimal order beton precast?', answer: 'Minimal pemesanan tergantung jenis produknya bro. Untuk U-Ditch dan Box Culvert biasanya minimal 10-20 pcs, sedangkan pipa beton (RCP) dan spun pile disesuaikan dengan volume proyek. Hubungi sales kami untuk negosiasi kuantitas kecil!' },
        { question: 'Apakah produk CITRACon sudah berstandar SNI?', answer: 'Tentu saja! Semua produk beton precast CITRACon diproduksi dengan presisi tinggi menggunakan mutu beton minimal K-350 hingga K-500, dan sudah tersertifikasi Standar Nasional Indonesia (SNI) untuk ketahanan jangka panjang.' },
        { question: 'Bagaimana sistem pengiriman produk?', answer: 'Kami menggunakan armada logistik mandiri (truk tronton/trailer) untuk mengirimkan produk langsung ke lokasi proyek Anda di seluruh area Jawa Barat, DKI Jakarta, Banten, dan sekitarnya. Pastikan akses jalan proyek cukup untuk bilewati kendaraan berat kami.' },
        { question: 'Apakah bisa memesan ukuran kustom (Custom Moulding)?', answer: 'Sangat bisa bro! CITRACon memiliki pabrik dengan fasilitas cetakan khusus yang fleksibel. Jika proyek Anda membutuhkan dimensi U-Ditch, Box Culvert, atau precast panel non-standar, tim engineering kami siap memfabrikasi cetakan kustom sesuai SPK.' },
        { question: 'Bagaimana sistem pembayaran pemesanan?', answer: 'Pembayaran biasanya dilakukan melalui transfer bank ke rekening resmi PT CITRACon Beton Precast sesuai termin kesepakatan Surat Perjanjian Kerja (SPK). Kami mendukung opsi pembayaran bertahap (Down Payment + Termin progress fabrikasi & pengiriman) maupun lunas di awal proyek.' },
        { question: 'Berapa lama estimasi proses fabrikasi produk?', answer: 'Proses produksi berkisar antara 3 hingga 7 hari kerja tergantung volume pesanan dan antrean cetakan di pabrik kami. Untuk produk kustom (cetakan non-standar), estimasi waktu pengerjaan akan disesuaikan dengan kebutuhan pembuatan cetakan (moulding) baru oleh tim engineering kami.' },
        { question: 'Di mana lokasi pabrik batching plant CITRACon?', answer: 'Batching plant dan pabrik utama kami berlokasi sangat strategis di area industri dengan akses jalan yang memadai untuk memudahkan mobilisasi material & armada pengiriman alat berat. Informasi peta navigasi Google Maps lengkap dapat Anda akses pada section Hubungi Kami di bagian bawah website.' }
      ]),
      client_logos: safeParse(data.client_logos, [
        { name: 'Brantas Abipraya', image: '/brantas.png' },
        { name: 'Agra Budi', image: '/agra.png' }
      ]),
      pricelist_title: data.pricelist_title || 'Pricelist Beton Precast',
      pricelist_subtitle: data.pricelist_subtitle || 'Daftar estimasi harga dasar Franco pabrik dengan spesifikasi dimensi standar',
      pricelist_notes: safeParse(data.pricelist_notes, [
        'Harga di atas merupakan estimasi harga dasar Franco pabrik (belum termasuk PPN 11% & ongkos kirim logistik).',
        'Harga final proyek Anda sangat ditentukan oleh volume total pemesanan (makin banyak makin murah) dan lokasi pengiriman.',
        'Hubungi sales kami untuk mendapatkan diskon terbaik dan Surat Penawaran Harga (SPH) resmi beserta kalkulasi ongkos kirim langsung ke proyek Anda.'
      ]),
      contact_wa_3_label: data.contact_wa_3_label || 'WhatsApp Sales 3',
      contact_wa_3_num: data.contact_wa_3_num || '087848104524'
    }
  }
}

async function saveSiteSettings() {
  isSavingSettings.value = true
  
  // Construct dynamic payload filtering out columns not present in Supabase site_settings
  const payload = {}
  for (const key of Object.keys(siteSettings.value)) {
    if (dbColumns.value.includes(key)) {
      payload[key] = siteSettings.value[key]
    }
  }

  const { error } = await supabase
    .from('site_settings')
    .update(payload)
    .eq('id', 1)

  isSavingSettings.value = false
  
  if (error) {
    $q.notify({
      color: 'negative',
      multiLine: true,
      message: `Gagal menyimpan pengaturan website: ${error.message || 'Error tidak diketahui'}`,
      icon: 'error',
      timeout: 10000
    })
    console.error('Error saving settings:', error)
  } else {
    const missingInDb = []
    if (!dbColumns.value.includes('contact_wa_3_num')) missingInDb.push('Sales 3')
    if (!dbColumns.value.includes('tracon_faq')) missingInDb.push('FAQ Chatbot')
    if (!dbColumns.value.includes('client_logos')) missingInDb.push('Klien Kami')
    if (!dbColumns.value.includes('pricelist_title')) missingInDb.push('Pricelist')

    if (missingInDb.length > 0) {
      $q.notify({
        color: 'warning',
        position: 'top',
        multiLine: true,
        message: `Pengaturan disimpan! Catatan: Kolom untuk [${missingInDb.join(', ')}] belum dibuat di database Supabase Anda, sehingga data tersebut kembali menggunakan nilai bawaan di web utama.`,
        icon: 'warning',
        timeout: 9000
      })
    } else {
      $q.notify({
        color: 'positive',
        message: 'Pengaturan website berhasil disimpan dan diperbarui!',
        icon: 'check'
      })
    }
    // Refresh settings from database to update local state and fallbacks
    fetchSiteSettings()
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

// Slide Image Upload Helper
async function uploadSlideImage(event, sIdx) {
  const file = event.target.files?.[0]
  if (!file) return
  try {
    const url = await uploadToSupabase(file)
    siteSettings.value.hero_slides[sIdx].image = url
    $q.notify({ color: 'positive', position: 'top', message: '✅ Gambar banner berhasil diupload!', icon: 'check_circle' })
  } catch (err) {
    console.error('Upload slide image error:', err)
    $q.notify({ color: 'negative', position: 'top', message: `❌ Gagal upload: ${err.message}`, icon: 'error' })
  } finally {
    event.target.value = ''
  }
}

// Mascot Images Helpers
async function uploadMascotImage(event) {
  const file = event.target.files?.[0]
  if (!file) return
  try {
    const url = await uploadToSupabase(file)
    if (!siteSettings.value.tracon_images) {
      siteSettings.value.tracon_images = []
    }
    siteSettings.value.tracon_images.push(url)
    $q.notify({ color: 'positive', position: 'top', message: '✅ Foto maskot berhasil diupload!', icon: 'check_circle' })
  } catch (err) {
    console.error('Upload mascot error:', err)
    $q.notify({ color: 'negative', position: 'top', message: `❌ Gagal upload: ${err.message}`, icon: 'error' })
  } finally {
    event.target.value = ''
  }
}

function removeMascotImage(idx) {
  if (confirm('Apakah Anda yakin ingin menghapus foto maskot ini?')) {
    siteSettings.value.tracon_images.splice(idx, 1)
  }
}

// Mascot Speech Bubble Helpers
function addSpeechBubble() {
  if (!siteSettings.value.tracon_speech_bubbles) {
    siteSettings.value.tracon_speech_bubbles = []
  }
  siteSettings.value.tracon_speech_bubbles.push('')
}

function removeSpeechBubble(idx) {
  siteSettings.value.tracon_speech_bubbles.splice(idx, 1)
}

// Chatbot FAQ Helpers
function addFaqItem() {
  if (!siteSettings.value.tracon_faq) {
    siteSettings.value.tracon_faq = []
  }
  siteSettings.value.tracon_faq.push({
    question: '',
    answer: ''
  })
}

function removeFaqItem(idx) {
  siteSettings.value.tracon_faq.splice(idx, 1)
}

function resetFaqToDefault() {
  if (confirm('Apakah Anda yakin ingin menyetel ulang daftar FAQ ke default? Semua FAQ kustom Anda akan terhapus. (Ingat untuk mengklik Simpan setelah melakukan reset ini!)')) {
    siteSettings.value.tracon_faq = [
      { question: 'Berapa minimal order beton precast?', answer: 'Minimal pemesanan tergantung jenis produknya bro. Untuk U-Ditch dan Box Culvert biasanya minimal 10-20 pcs, sedangkan pipa beton (RCP) dan spun pile disesuaikan dengan volume proyek. Hubungi sales kami untuk negosiasi kuantitas kecil!' },
      { question: 'Apakah produk CITRACon sudah berstandar SNI?', answer: 'Tentu saja! Semua produk beton precast CITRACon diproduksi dengan presisi tinggi menggunakan mutu beton minimal K-350 hingga K-500, dan sudah tersertifikasi Standar Nasional Indonesia (SNI) untuk ketahanan jangka panjang.' },
      { question: 'Bagaimana sistem pengiriman produk?', answer: 'Kami menggunakan armada logistik mandiri (truk tronton/trailer) untuk mengirimkan produk langsung ke lokasi proyek Anda di seluruh area Jawa Barat, DKI Jakarta, Banten, dan sekitarnya. Pastikan akses jalan proyek cukup untuk dilewati kendaraan berat kami.' },
      { question: 'Apakah bisa memesan ukuran kustom (Custom Moulding)?', answer: 'Sangat bisa bro! CITRACon memiliki pabrik dengan fasilitas cetakan khusus yang fleksibel. Jika proyek Anda membutuhkan dimensi U-Ditch, Box Culvert, atau precast panel non-standar, tim engineering kami siap memfabrikasi cetakan kustom sesuai SPK.' },
      { question: 'Bagaimana sistem pembayaran pemesanan?', answer: 'Pembayaran biasanya dilakukan melalui transfer bank ke rekening resmi PT CITRACon Beton Precast sesuai termin kesepakatan Surat Perjanjian Kerja (SPK). Kami mendukung opsi pembayaran bertahap (Down Payment + Termin progress fabrikasi & pengiriman) maupun lunas di awal proyek.' },
      { question: 'Berapa lama estimasi proses fabrikasi produk?', answer: 'Proses produksi berkisar antara 3 hingga 7 hari kerja tergantung volume pesanan dan antrean cetakan di pabrik kami. Untuk produk kustom (cetakan non-standar), estimasi waktu pengerjaan akan disesuaikan dengan kebutuhan pembuatan cetakan (moulding) baru oleh tim engineering kami.' },
      { question: 'Di mana lokasi pabrik batching plant CITRACon?', answer: 'Batching plant dan pabrik utama kami berlokasi sangat strategis di area industri dengan akses jalan yang memadai untuk memudahkan mobilisasi material & armada pengiriman alat berat. Informasi peta navigasi Google Maps lengkap dapat Anda akses pada section Hubungi Kami di bagian bawah website.' }
    ]
    $q.notify({ color: 'positive', position: 'top', message: '✅ FAQ di-reset ke default! Jangan lupa klik SIMPAN di bawah!', icon: 'check_circle' })
  }
}

// Portfolio Upload Helpers
async function uploadPortfolioImage(event, pIdx) {
  const file = event.target.files?.[0]
  if (!file) return
  try {
    const url = await uploadToSupabase(file)
    siteSettings.value.portfolio_items[pIdx].image = url
    $q.notify({ color: 'positive', position: 'top', message: '✅ Gambar proyek berhasil diupload!', icon: 'check_circle' })
  } catch (err) {
    console.error('Upload portfolio image error:', err)
    $q.notify({ color: 'negative', position: 'top', message: `❌ Gagal upload: ${err.message}`, icon: 'error' })
  } finally {
    event.target.value = ''
  }
}

// Client Logos Helpers
function addClientLogoItem() {
  if (!siteSettings.value.client_logos) {
    siteSettings.value.client_logos = []
  }
  siteSettings.value.client_logos.push({
    name: '',
    image: ''
  })
}

function removeClientLogoItem(idx) {
  siteSettings.value.client_logos.splice(idx, 1)
}

async function uploadClientLogo(event, cIdx) {
  const file = event.target.files?.[0]
  if (!file) return
  try {
    const url = await uploadToSupabase(file)
    siteSettings.value.client_logos[cIdx].image = url
    $q.notify({ color: 'positive', position: 'top', message: '✅ Logo klien berhasil diupload!', icon: 'check_circle' })
  } catch (err) {
    console.error('Upload client logo error:', err)
    $q.notify({ color: 'negative', position: 'top', message: `❌ Gagal upload: ${err.message}`, icon: 'error' })
  } finally {
    event.target.value = ''
  }
}

// Misi Helpers
function addMisi() {
  if (!siteSettings.value.misi_items) siteSettings.value.misi_items = []
  siteSettings.value.misi_items.push('')
}

function removeMisi(idx) {
  siteSettings.value.misi_items.splice(idx, 1)
}

// Pricelist Note Helpers
function addPricelistNoteItem() {
  if (!siteSettings.value.pricelist_notes) {
    siteSettings.value.pricelist_notes = []
  }
  siteSettings.value.pricelist_notes.push('')
}

function removePricelistNoteItem(idx) {
  siteSettings.value.pricelist_notes.splice(idx, 1)
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

/* Premium Card hover shine animation */
.premium-glow-card {
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.premium-glow-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -150%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-25deg);
  pointer-events: none;
}

.premium-glow-card:hover::before {
  left: 150%;
  transition: all 0.8s ease-in-out;
}

/* Card hover glow & border styling */
.glow-blue:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 12px 30px rgba(59, 130, 246, 0.25);
  border-color: rgba(59, 130, 246, 0.4) !important;
}

.glow-green:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 12px 30px rgba(16, 185, 129, 0.25);
  border-color: rgba(16, 185, 129, 0.4) !important;
}

.glow-red:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 12px 30px rgba(210, 29, 29, 0.25);
  border-color: rgba(210, 29, 29, 0.4) !important;
}
</style>
