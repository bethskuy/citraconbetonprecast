<template>
  <q-page class="q-pb-xl bg-[#f8fafc] text-slate-800">
    <!-- Breadcrumbs / Back navigation -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex items-center gap-4 mb-6">
      <!-- Back Button -->
      <router-link 
        to="/" 
        class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#d21d1d] hover:text-[#d21d1d] text-slate-700 font-bold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-300 no-underline cursor-pointer active:scale-95"
      >
        <q-icon name="arrow_back" size="18px" />
        Kembali
      </router-link>

      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
        <router-link to="/" class="hover:text-[#d21d1d] transition-colors flex items-center gap-1 font-medium no-underline">
          🏠 Beranda
        </router-link>
        <span>/</span>
        <span class="text-slate-400">Katalog Produk</span>
        <span>/</span>
        <span class="text-[#0b1c3f] font-semibold">{{ product?.name }}</span>
      </nav>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="max-w-7xl mx-auto px-4 py-32 flex flex-col items-center justify-center text-center">
      <div class="relative w-24 h-24 mb-6">
        <!-- Outer Glowing Spin Ring -->
        <div class="absolute inset-0 rounded-full border-4 border-[#0b1c3f]/10 border-t-[#d21d1d] animate-spin"></div>
        <!-- Inner CITRACon logo pulsing -->
        <div class="absolute inset-4 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-lg shadow-slate-200/50 animate-pulse">
          <img src="icons/favicon-128x128.png" class="w-10 h-10 object-contain rounded-lg" alt="CITRACon Logo" />
        </div>
      </div>
      <h3 class="text-lg font-extrabold text-[#0b1c3f] tracking-tight uppercase">
        Memuat <span class="text-[#0b1c3f]">CITRA</span><span class="text-[#d21d1d]">Con</span>
      </h3>
      <p class="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">Menyiapkan spesifikasi teknis dan formulir penawaran terbaik untuk Anda...</p>
    </div>

    <div v-else-if="product" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Two Column Layout: Main Details and Sticky Sidebar -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left Column: Image, Description, Features, Specs Table -->
        <div class="lg:col-span-8 space-y-8">
          
          <!-- Product Hero Banner Image -->
          <div class="relative rounded-3xl overflow-hidden shadow-md h-80 sm:h-96 md:h-[450px]">
            <img 
              :src="activeImage" 
              :alt="product.name" 
              class="w-full h-full object-cover transition-all duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            <div class="absolute bottom-8 left-8 right-8 text-white z-10">
              <span class="px-3.5 py-1.5 bg-[#d21d1d] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm">
                {{ product.icon }} Beton Pracetak
              </span>
              <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 uppercase tracking-tight">
                {{ product.name }}
              </h1>
            </div>
          </div>

          <!-- Thumbnail Gallery -->
          <div v-if="product.gallery && product.gallery.length" class="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
            <h3 class="text-sm font-bold uppercase tracking-wider text-[#0b1c3f] mb-4">Galeri Foto Produk</h3>
            <div class="flex flex-wrap gap-4">
              <div 
                v-for="(img, idx) in product.gallery" 
                :key="idx"
                @click="activeImage = img"
                class="w-24 h-16 sm:w-28 sm:h-20 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-300 shrink-0"
                :class="activeImage === img ? 'border-[#d21d1d] scale-105 shadow-md shadow-red-500/10' : 'border-slate-200 hover:border-slate-400'"
              >
                <img :src="img" class="w-full h-full object-cover" alt="Product thumbnail" />
              </div>
            </div>
          </div>

          <!-- Product Details Section -->
          <div class="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <h2 class="text-xl sm:text-2xl font-bold text-[#0b1c3f] border-b border-slate-100 pb-4 mb-4">
              Deskripsi Produk
            </h2>
            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
              {{ product.detailed_desc || product.detailedDesc || product.desc || 'Deskripsi produk belum tersedia.' }}
            </p>
          </div>

          <!-- Key Features Section -->
          <div class="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <h2 class="text-xl sm:text-2xl font-bold text-[#0b1c3f] border-b border-slate-100 pb-4 mb-6">
              Keunggulan & Fitur Utama
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                v-for="(feature, idx) in (product.features || [])"
                :key="idx" 
                class="group relative overflow-hidden flex items-start gap-3 p-4 rounded-xl border border-transparent cursor-pointer hover:shadow-md hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out"
                :class="[
                  idx % 4 === 0 ? 'bg-gradient-to-br from-[#0b1c3f] via-[#1e1b4b] to-[#3b0764] hover:shadow-indigo-500/30' :
                  idx % 4 === 1 ? 'bg-gradient-to-br from-[#d21d1d] via-[#701a75] to-[#3b0764] hover:shadow-fuchsia-500/30' :
                  idx % 4 === 2 ? 'bg-gradient-to-br from-[#d97706] via-[#7c2d12] to-[#1e1b4b] hover:shadow-amber-500/30' :
                  'bg-gradient-to-br from-[#059669] via-[#064e3b] to-[#1e1b4b] hover:shadow-emerald-500/30'
                ]"
              >
                <!-- Shine Reflection Effect -->
                <div class="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out pointer-events-none z-10"></div>

                <span class="text-xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 inline-block relative z-20">
                  {{ 
                    idx % 4 === 0 ? '🏆' : 
                    idx % 4 === 1 ? '🎯' : 
                    idx % 4 === 2 ? '💰' : 
                    '🤝' 
                  }}
                </span>
                <div class="relative z-20">
                  <h4 class="font-bold text-sm sm:text-base mb-1 text-white">
                    {{ feature.title }}
                  </h4>
                  <p class="text-xs sm:text-sm leading-relaxed"
                    :class="[
                      idx % 4 === 0 ? 'text-slate-200' :
                      idx % 4 === 1 ? 'text-rose-100' :
                      idx % 4 === 2 ? 'text-amber-50' :
                      'text-emerald-50'
                    ]"
                  >
                    {{ feature.desc }}
                  </p>
                </div>
              </div>
            </div>

          </div>

          <!-- Technical Specs Table Section -->
          <div class="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm overflow-hidden">
            <h2 class="text-xl sm:text-2xl font-bold text-[#0b1c3f] border-b border-slate-100 pb-4 mb-6">
              Tabel Spesifikasi Teknis
            </h2>
            <div class="overflow-x-auto">
              <div v-if="!product.technical_specs && !product.technicalSpecs" class="text-slate-400 text-sm py-4 text-center">
                Spesifikasi teknis belum tersedia.
              </div>
              <table v-else class="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr class="bg-[#0b1c3f] text-white uppercase text-[10px] sm:text-xs tracking-wider">
                    <th class="p-4 rounded-l-xl">Parameter</th>
                    <th class="p-4 rounded-r-xl">Spesifikasi Standar CITRACon</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr 
                    v-for="(spec, name) in (product.technical_specs || product.technicalSpecs || {})"
                    :key="name" 
                    class="hover:bg-slate-50 transition-colors"
                  >
                    <td class="p-4 font-bold text-[#0b1c3f] capitalize">{{ name.replace(/_/g, ' ') }}</td>
                    <td class="p-4 text-slate-600 font-medium">{{ spec }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Product Specific Pricelist Table Section -->
          <div class="bg-gradient-to-br from-[#0b1c3f] via-[#10224b] to-[#071330] rounded-3xl border border-white/10 p-6 md:p-8 shadow-xl overflow-hidden relative">
            <!-- Inner glowing blur decorations -->
            <div class="absolute top-[-50px] left-[-50px] w-[150px] h-[150px] rounded-full bg-[#d21d1d]/15 blur-[45px] pointer-events-none"></div>
            <div class="absolute bottom-[-50px] right-[-50px] w-[180px] h-[180px] rounded-full bg-[#3b82f6]/10 blur-[55px] pointer-events-none"></div>

            <div class="relative z-10">
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h3 class="text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2">
                    <span>📊 Pricelist {{ product.name }}</span>
                  </h3>
                  <p class="text-xs text-slate-400 mt-0.5">Daftar estimasi harga Franco pabrik berdasarkan dimensi standar</p>
                </div>
                <button
                  @click="showWhatsAppChoice = true"
                  class="px-5 py-2.5 rounded-full bg-[#d21d1d] hover:bg-[#b21818] text-white font-bold text-xs shadow-md cursor-pointer transition-all border-0 flex items-center gap-1.5 active:scale-95"
                >
                  📥 Minta Penawaran SPH (PDF)
                </button>
              </div>

              <!-- Table -->
              <div class="overflow-x-auto rounded-2xl border border-white/10 bg-black/25">
                <table class="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr class="bg-black/45 text-slate-200 uppercase text-[10px] sm:text-xs tracking-wider border-b border-white/10">
                      <th class="p-4 rounded-l-xl">Tipe / Ukuran Standar</th>
                      <th class="p-4">Estimasi Berat</th>
                      <th class="p-4">Harga Franco Pabrik</th>
                      <th class="p-4 text-center rounded-r-xl">Aksi</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-white/5">
                    <tr 
                      v-if="!product.size_options || !product.size_options.length"
                      class="hover:bg-white/[0.05] transition-colors"
                    >
                      <td colspan="4" class="p-8 text-center text-slate-400 font-medium bg-transparent">
                        Ukuran dan pricelist belum tersedia. Silakan hubungi tim sales kami untuk informasi harga lengkap.
                      </td>
                    </tr>
                    <tr 
                      v-else
                      v-for="(size, idx) in product.size_options"
                      :key="idx" 
                      class="transition-all duration-200 hover:bg-white/[0.06] group"
                      :class="idx % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'"
                    >
                      <td class="p-4 font-bold text-white group-hover:translate-x-1 transition-transform">{{ size.label }}</td>
                      <td class="p-4 text-slate-300 font-medium">{{ size.weight ? size.weight + ' kg' : '-' }}</td>
                      <td class="p-4 text-[#fbbf24] font-black text-sm sm:text-base">
                        {{ size.price || getEstimatedPrice(product.name, size.label) }}
                      </td>
                      <td class="p-4 text-center">
                        <button 
                          @click="requestQuote(size)"
                          class="px-4 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:text-white transition-all font-bold text-xs cursor-pointer shadow-sm active:scale-95"
                        >
                          💬 Tanya Sales
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Notes Section -->
              <div class="mt-6 p-4 rounded-2xl bg-black/30 border border-white/5 flex items-start gap-3">
                <span class="text-xl">💡</span>
                <div class="text-xs text-slate-400 leading-relaxed">
                  <strong class="text-slate-200 uppercase tracking-wide">Penting untuk Diketahui:</strong>
                  <ul class="list-disc pl-4 space-y-1 mt-1">
                    <template v-if="siteSettings.pricelist_notes && siteSettings.pricelist_notes.length">
                      <li v-for="(note, nIdx) in siteSettings.pricelist_notes" :key="nIdx">
                        {{ note }}
                      </li>
                    </template>
                    <template v-else>
                      <li>Harga di atas merupakan **estimasi harga dasar Franco pabrik** (belum termasuk PPN 11% & ongkos kirim logistik).</li>
                      <li>Harga final proyek Anda sangat ditentukan oleh **volume total pemesanan** (makin banyak makin murah) dan **lokasi pengiriman**.</li>
                      <li>Hubungi sales kami untuk mendapatkan diskon terbaik dan Surat Penawaran Harga (SPH) resmi beserta kalkulasi ongkos kirim langsung ke proyek Anda.</li>
                    </template>
                  </ul>
                </div>
              </div>

            </div>
          </div>
          
        </div>

        <!-- Right Column: Sticky Lead Form & Interactive Quotation Selector -->
        <div class="lg:col-span-4 lg:sticky lg:top-8 space-y-6">
          
          <!-- Dynamic Quotation Panel -->
          <div class="bg-white rounded-3xl border border-slate-100 p-8 shadow-md">
            <div class="text-xs font-bold uppercase tracking-wider text-[#d21d1d] mb-2">Simulasi Kebutuhan</div>
            <h3 class="text-lg font-bold text-[#0b1c3f] mb-6">Estimasi Order & Penawaran</h3>
            
            <div class="space-y-4">
              <!-- Custom Premium Select Dropdown -->
              <div class="relative">
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Pilih Ukuran/Dimensi</label>
                
                <!-- Toggle Button -->
                <div 
                  @click="isDropdownOpen = !isDropdownOpen"
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-semibold flex items-center justify-between cursor-pointer hover:border-[#d21d1d] hover:bg-white transition-all shadow-sm active:scale-[0.99] select-none"
                >
                  <span class="text-xs sm:text-sm">{{ currentSize ? currentSize.label : (product.size_options?.length || product.sizeOptions?.length ? 'Pilih Ukuran' : 'Ukuran tersedia (hubungi sales)') }}</span>
                  <q-icon 
                    name="expand_more" 
                    class="text-slate-500 transition-transform duration-300"
                    :class="{ 'rotate-180 text-[#d21d1d]': isDropdownOpen }"
                    size="20px"
                  />
                </div>

                <!-- Backdrop Click Closer -->
                <div 
                  v-if="isDropdownOpen" 
                  @click="isDropdownOpen = false" 
                  class="fixed inset-0 z-40"
                ></div>

                <!-- Dropdown Menu List -->
                <transition
                  enter-active-class="transition duration-150 ease-out"
                  enter-from-class="transform scale-95 opacity-0 -translate-y-2"
                  enter-to-class="transform scale-100 opacity-100 translate-y-0"
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="transform scale-100 opacity-100 translate-y-0"
                  leave-to-class="transform scale-95 opacity-0 -translate-y-2"
                >
                  <ul 
                    v-if="isDropdownOpen"
                    class="absolute left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl shadow-2xl p-2 z-50 list-none m-0 max-h-60 overflow-y-auto divide-y divide-slate-50"
                  >
                    <li 
                      v-for="(option, idx) in (product.size_options || product.sizeOptions || [])"
                      :key="idx"
                      @click="selectedSizeIndex = idx; isDropdownOpen = false"
                      class="px-4 py-3 rounded-xl cursor-pointer font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-between"
                      :class="selectedSizeIndex === idx 
                        ? 'bg-gradient-to-r from-[#0b1c3f] to-[#122b5e] text-white font-bold shadow-md' 
                        : 'text-slate-700 hover:bg-[#d21d1d]/10 hover:text-[#d21d1d] hover:translate-x-1'"
                    >
                      <span>{{ option.label }}</span>
                      <!-- Checked indicator -->
                      <q-icon 
                        v-if="selectedSizeIndex === idx" 
                        name="check" 
                        class="text-white"
                        size="16px"
                      />
                    </li>
                  </ul>
                </transition>
              </div>

              <!-- Quantity Input -->
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Jumlah Kebutuhan (pcs)</label>
                <input 
                  v-model.number="quantity" 
                  type="number" 
                  min="1" 
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-semibold focus:outline-none focus:border-[#0b1c3f] focus:bg-white transition-all"
                  placeholder="Jumlah pcs"
                >
              </div>

              <!-- Address Input -->
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Alamat Kirim / Lokasi Proyek</label>
                <textarea 
                  v-model="address" 
                  rows="2"
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-semibold focus:outline-none focus:border-[#0b1c3f] focus:bg-white transition-all resize-none text-xs sm:text-sm"
                  placeholder="Contoh: Proyek Tol Cikampek KM 15 atau Jl. Mawar No. 4, Bekasi"
                ></textarea>
              </div>

              <!-- Specification Highlight Box -->
              <div v-if="currentSize" class="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-xs sm:text-sm space-y-2">
                <div class="flex justify-between">
                  <span class="text-slate-500 font-medium">Mutu Kuat Tekan:</span>
                  <span class="font-bold text-[#0b1c3f]">{{ product.specs ? product.specs.split('/')[0].trim() : '-' }}</span>
                </div>
                <div class="flex justify-between" v-if="currentSize.weight">
                  <span class="text-slate-500 font-medium">Berat per pcs:</span>
                  <span class="font-bold text-[#0b1c3f]">{{ currentSize.weight }} kg</span>
                </div>
                <div class="flex justify-between" v-if="currentSize.weight && quantity > 0">
                  <span class="text-slate-500 font-medium">Total Estimasi Berat:</span>
                  <span class="font-extrabold text-[#059669]">{{ (currentSize.weight * quantity / 1000).toFixed(2) }} Ton</span>
                </div>
              </div>

              <!-- CTA Buttons -->
              <div class="pt-4 space-y-3">
                <!-- Direct WhatsApp Link Button -->
                <button 
                  @click="showWhatsAppChoice = true"
                  class="w-full text-center block text-xs bg-[#059669] hover:bg-[#047857] text-white font-extrabold py-3.5 rounded-full shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer uppercase tracking-wider border-0"
                >
                  💬 Minta Penawaran WA
                </button>
                
                <!-- Open Quasar Dialog button -->
                <button 
                  @click="leadForm.address = address; showModal = true" 
                  class="w-full text-xs bg-[#d21d1d] hover:bg-[#b21818] text-white font-extrabold py-3.5 rounded-full shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer uppercase tracking-wider"
                >
                  🚀 Konsultasi Spesifikasi
                </button>
              </div>
            </div>
          </div>

          <!-- Katalog Produk Cepat (Sidebar) -->
          <div v-if="products && products.length" class="bg-white rounded-3xl border border-slate-100 p-6 shadow-md">
            <div class="text-xs font-bold uppercase tracking-wider text-[#d21d1d] mb-1">Pilihan Produk</div>
            <h3 class="text-base font-bold text-[#0b1c3f] mb-4 border-b border-slate-100 pb-3">Katalog Precast</h3>
            <div class="space-y-2">
              <router-link
                v-for="p in products"
                :key="p.id"
                :to="'/produk/' + p.id"
                class="flex items-center justify-between p-3 rounded-xl border font-bold text-xs sm:text-sm transition-all duration-300 no-underline cursor-pointer group hover:bg-[#0b1c3f]/5"
                :class="p.id === product.id ? 'bg-[#0b1c3f]/5 border-[#0b1c3f] text-[#0b1c3f]' : 'bg-slate-50 border-slate-200 text-slate-700'"
              >
                <div class="flex items-center gap-2.5">
                  <span class="text-lg group-hover:scale-110 transition-transform">{{ p.icon }}</span>
                  <span class="uppercase tracking-wide font-extrabold group-hover:text-[#d21d1d] transition-colors">{{ p.name }}</span>
                </div>
                <q-icon 
                  v-if="p.id === product.id"
                  name="check_circle" 
                  class="text-[#0b1c3f]"
                  size="16px"
                />
                <q-icon
                  v-else
                  name="chevron_right"
                  class="text-slate-400 group-hover:translate-x-1 transition-transform"
                  size="16px"
                />
              </router-link>
            </div>
          </div>

          <!-- Trust Badges Panel -->
          <div class="bg-gradient-to-br from-[#0b1c3f] to-[#122b5e] text-white rounded-3xl p-8 shadow-sm">
            <h4 class="font-bold text-base mb-4 uppercase tracking-wide border-b border-white/10 pb-3">Standar Kualitas</h4>
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <span class="text-2xl">📋</span>
                <div>
                  <div class="font-bold text-xs uppercase text-slate-300">Sertifikasi Produk</div>
                  <div class="text-sm font-semibold">Memenuhi Standar SNI Pracetak</div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-2xl">🔬</span>
                <div>
                  <div class="font-bold text-xs uppercase text-slate-300">Laboratorium Uji</div>
                  <div class="text-sm font-semibold">Kualitas Terkontrol & Tersertifikasi</div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-2xl">🚛</span>
                <div>
                  <div class="font-bold text-xs uppercase text-slate-300">Layanan Distribusi</div>
                  <div class="text-sm font-semibold">Logistik Mandiri Seluruh Jawa</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- Horizontal Other Products Grid -->
      <div v-if="products && products.length" class="mt-16 pt-10 border-t border-slate-200/50">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <div class="inline-block px-4 py-1.5 bg-[#d21d1d]/10 text-[#d21d1d] text-xs font-bold uppercase tracking-wider rounded-full mb-3">
            Rekomendasi Lainnya
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-[#0b1c3f] tracking-tight uppercase">Produk Precast Terkait</h2>
          <p class="text-slate-500 text-sm mt-2">Telusuri katalog produk pracetak berkualitas tinggi kami lainnya</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div
            v-for="p in products.filter(item => item.id !== product.id).slice(0, 4)"
            :key="p.id"
            class="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[320px] p-5 bg-white border border-slate-100"
          >
            <!-- Thumbnail Image with Hover zoom -->
            <div class="relative rounded-xl overflow-hidden h-40 mb-4 bg-slate-100">
              <img 
                :src="p.image" 
                :alt="p.name" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute top-3 left-3 bg-[#0b1c3f] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow">
                {{ p.icon }}
              </div>
            </div>
            
            <!-- Content -->
            <div class="flex-grow flex flex-col justify-between">
              <div>
                <h3 class="text-sm font-extrabold text-[#0b1c3f] uppercase tracking-wider mb-2 group-hover:text-[#d21d1d] transition-colors">
                  {{ p.name }}
                </h3>
                <p class="text-slate-500 text-[11px] leading-relaxed line-clamp-3 mb-4">
                  {{ p.desc || 'Beton precast bermutu tinggi berstandar SNI untuk infrastruktur berkualitas.' }}
                </p>
              </div>
              
              <!-- Navigation button -->
              <router-link 
                :to="'/produk/' + p.id"
                class="w-full text-center text-xs bg-[#d21d1d] hover:bg-[#b21818] text-white font-bold py-2.5 rounded-xl shadow-sm transition-all no-underline block cursor-pointer active:scale-95 border-0"
              >
                Lihat Detail
              </router-link>
            </div>
          </div>
        </div>
      </div>

    </div>
    
    <div v-else class="max-w-7xl mx-auto px-4 py-20 text-center">
      <div class="text-4xl mb-4">🔍</div>
      <h2 class="text-2xl font-bold text-[#0b1c3f]">Produk Tidak Ditemukan</h2>
      <p class="text-slate-500 mt-2">Produk yang Anda cari tidak tersedia di katalog.</p>
      <router-link to="/" class="mt-6 inline-block bg-[#0b1c3f] text-white font-bold px-6 py-2.5 rounded-full shadow-md">
        Kembali ke Beranda
      </router-link>
    </div>

    <!-- lead capture modal dialog -->
    <q-dialog v-model="showModal">
      <q-card class="bg-white text-slate-800 rounded-2xl border border-slate-100 p-6 shadow-2xl" style="min-width: 350px">
        <q-card-section class="q-pt-none text-center">
          <div class="text-h6 text-[#d21d1d] font-bold mb-2">Konsultasi Produk CITRACon</div>
          <p class="text-slate-600 text-sm">Silakan isi data Anda, tim spesialis beton kami akan segera menghubungi Anda dengan penawaran detail.</p>
          <div class="space-y-4 mt-4 text-left">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Nama Lengkap</label>
              <input v-model="leadForm.name" type="text" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-[#0b1c3f] focus:bg-white transition-all" placeholder="Masukkan nama Anda">
            </div>
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Nomor WhatsApp</label>
              <input v-model="leadForm.phone" type="text" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-[#0b1c3f] focus:bg-white transition-all" placeholder="Contoh: 08123456789">
            </div>
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Alamat Kirim / Lokasi Proyek</label>
              <textarea 
                v-model="leadForm.address" 
                rows="2"
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-[#0b1c3f] focus:bg-white transition-all resize-none text-xs sm:text-sm" 
                placeholder="Masukkan lokasi pengiriman proyek Anda"
              ></textarea>
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="mt-4 gap-2">
          <button @click="showModal = false" class="text-sm font-bold text-slate-400 hover:text-slate-600 px-4 py-2 uppercase transition-colors">Batal</button>
          <button @click="submitLead" class="bg-[#d21d1d] hover:bg-[#b21818] text-white font-bold px-6 py-2.5 rounded-full shadow-md transition-all uppercase text-sm">Kirim & Hubungi</button>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- WhatsApp Choice Dialog -->
    <q-dialog v-model="showWhatsAppChoice">
      <q-card class="bg-[#0b1c3f] text-white rounded-2xl border border-white/10 p-6 shadow-2xl" style="min-width: 320px; max-width: 400px;">
        <q-card-section class="q-pt-none text-center relative overflow-hidden">
          <!-- Background glow -->
          <div class="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#d21d1d]/20 blur-[30px] pointer-events-none"></div>

          <div class="text-h6 font-bold uppercase tracking-wider mb-2">Pilih WhatsApp Sales</div>
          <p class="text-slate-300 text-xs mb-6">Silakan pilih salah satu layanan WhatsApp Sales kami untuk mengirim penawaran:</p>
          
          <div class="space-y-4">
            <!-- Sales 1 Button -->
            <a
              v-if="siteSettings.contact_wa_1_num"
              :href="getWhatsAppLink(cleanPhone(siteSettings.contact_wa_1_num))"
              target="_blank"
              class="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#d21d1d]/50 transition-all duration-300 no-underline cursor-pointer group"
              @click="showWhatsAppChoice = false"
            >
              <div class="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <q-icon name="chat" size="20px" />
              </div>
              <div class="text-left">
                <div class="text-sm font-bold text-white group-hover:text-[#d21d1d] transition-colors">{{ siteSettings.contact_wa_1_label || 'WhatsApp Sales 1' }}</div>
                <div class="text-xs text-slate-400">{{ siteSettings.contact_wa_1_num }}</div>
              </div>
            </a>

            <!-- Sales 2 Button -->
            <a
              v-if="siteSettings.contact_wa_2_num"
              :href="getWhatsAppLink(cleanPhone(siteSettings.contact_wa_2_num))"
              target="_blank"
              class="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#d21d1d]/50 transition-all duration-300 no-underline cursor-pointer group"
              @click="showWhatsAppChoice = false"
            >
              <div class="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <q-icon name="chat" size="20px" />
              </div>
              <div class="text-left">
                <div class="text-sm font-bold text-white group-hover:text-[#d21d1d] transition-colors">{{ siteSettings.contact_wa_2_label || 'WhatsApp Sales 2' }}</div>
                <div class="text-xs text-slate-400">{{ siteSettings.contact_wa_2_num }}</div>
              </div>
            </a>

            <!-- Sales 3 Button -->
            <a
              v-if="siteSettings.contact_wa_3_num"
              :href="getWhatsAppLink(cleanPhone(siteSettings.contact_wa_3_num))"
              target="_blank"
              class="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#d21d1d]/50 transition-all duration-300 no-underline cursor-pointer group"
              @click="showWhatsAppChoice = false"
            >
              <div class="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <q-icon name="chat" size="20px" />
              </div>
              <div class="text-left">
                <div class="text-sm font-bold text-white group-hover:text-[#d21d1d] transition-colors">{{ siteSettings.contact_wa_3_label || 'WhatsApp Sales 3' }}</div>
                <div class="text-xs text-slate-400">{{ siteSettings.contact_wa_3_num }}</div>
              </div>
            </a>
          </div>
        </q-card-section>

        <q-card-actions align="center" class="mt-4">
          <button
            @click="showWhatsAppChoice = false"
            class="text-xs font-bold text-slate-400 hover:text-white uppercase tracking-widest transition-colors cursor-pointer border-0 bg-transparent"
          >
            Tutup
          </button>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, computed, watchEffect, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useQuasar } from 'quasar'
import { supabase } from 'src/boot/supabase'

const route = useRoute()
const products = ref([])
const $q = useQuasar()
const showModal = ref(false)
const showWhatsAppChoice = ref(false)
const selectedSizeIndex = ref(0)
const quantity = ref(50)
const activeImage = ref('')
const isDropdownOpen = ref(false)
const address = ref('')

function getEstimatedPrice(productName, sizeLabel) {
  const name = (productName || '').toLowerCase()
  const size = (sizeLabel || '').toLowerCase()
  
  if (name.includes('u-ditch') || name.includes('uditch')) {
    if (size.includes('30 x 30')) return 'Rp 185.000'
    if (size.includes('40 x 40')) return 'Rp 290.000'
    if (size.includes('50 x 50')) return 'Rp 410.000'
    if (size.includes('60 x 60')) return 'Rp 580.000'
    if (size.includes('80 x 80')) return 'Rp 920.000'
    if (size.includes('100 x 100')) return 'Rp 1.450.000'
    return 'Rp 185.000'
  }
  if (name.includes('box culvert')) {
    if (size.includes('40 x 40')) return 'Rp 950.000'
    if (size.includes('50 x 50')) return 'Rp 1.150.000'
    if (size.includes('60 x 60')) return 'Rp 1.480.000'
    if (size.includes('80 x 80')) return 'Rp 2.100.000'
    if (size.includes('100 x 100')) return 'Rp 3.100.000'
    if (size.includes('150 x 150')) return 'Rp 5.800.000'
    return 'Rp 950.000'
  }
  if (name.includes('pipa') || name.includes('rcp')) {
    if (size.includes('300')) return 'Rp 280.000'
    if (size.includes('400')) return 'Rp 395.000'
    if (size.includes('500')) return 'Rp 520.000'
    if (size.includes('600')) return 'Rp 690.000'
    if (size.includes('800')) return 'Rp 1.150.000'
    if (size.includes('1000')) return 'Rp 1.650.000'
    return 'Rp 280.000'
  }
  if (name.includes('kanstin')) {
    if (size.includes('jepit')) return 'Rp 42.000'
    if (size.includes('taman')) return 'Rp 45.000'
    if (size.includes('pembatas')) return 'Rp 58.000'
    if (size.includes('dki')) return 'Rp 78.000'
    return 'Rp 42.000'
  }
  if (name.includes('paving') || name.includes('conblock')) {
    if (size.includes('6cm') || size.includes('6 cm')) return 'Rp 85.000'
    if (size.includes('8cm') || size.includes('8 cm')) return 'Rp 98.000'
    return 'Rp 85.000'
  }
  if (name.includes('spun pile') || name.includes('tiang pancang') || name.includes('pile')) {
    if (size.includes('300')) return 'Rp 450.000'
    if (size.includes('400')) return 'Rp 620.000'
    if (size.includes('500')) return 'Rp 890.000'
    return 'Rp 450.000'
  }
  if (name.includes('buis')) {
    if (size.includes('20')) return 'Rp 75.000'
    if (size.includes('30')) return 'Rp 95.000'
    if (size.includes('40')) return 'Rp 135.000'
    if (size.includes('60')) return 'Rp 195.000'
    if (size.includes('80')) return 'Rp 285.000'
    if (size.includes('100')) return 'Rp 395.000'
    return 'Rp 75.000'
  }
  return 'Hubungi Sales'
}

function requestQuote(sizeOption) {
  if (!product.value || !product.value.size_options) return
  const idx = product.value.size_options.indexOf(sizeOption)
  if (idx !== -1) {
    selectedSizeIndex.value = idx
  }
  showWhatsAppChoice.value = true
}

const leadForm = ref({
  name: '',
  phone: '',
  address: ''
})

const isLoading = ref(true)
const product = ref(null)

const siteSettings = ref({
  contact_wa_1_label: 'WhatsApp Sales 1',
  contact_wa_1_num: '081398354196',
  contact_wa_2_label: 'WhatsApp Sales 2',
  contact_wa_2_num: '085695660902',
  contact_wa_3_label: 'WhatsApp Sales 3',
  contact_wa_3_num: '087848104524',
  pricelist_title: '',
  pricelist_subtitle: '',
  pricelist_notes: []
})

async function fetchSiteSettings() {
  const { data, error } = await supabase
    .from('site_settings')
    .select('*')
    .eq('id', 1)
    .single()
  if (error) {
    console.error('Error fetching site settings:', error)
  } else if (data) {
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

    siteSettings.value = {
      ...data,
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

function cleanPhone(phone) {
  if (!phone) return ''
  let cleaned = phone.replace(/[^0-9]/g, '')
  if (cleaned.startsWith('0')) {
    cleaned = '62' + cleaned.slice(1)
  }
  return cleaned
}

async function fetchProduct() {
  isLoading.value = true
  const id = parseInt(route.params.id)
  
  // Minimal loading time 800ms agar transisi loading terasa smooth & tidak berkedip cepat
  const minDelay = new Promise(resolve => setTimeout(resolve, 800))
  const fetchQuery = supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()

  const [, { data, error }] = await Promise.all([minDelay, fetchQuery])

  if (error) {
    console.error('Error fetching product:', error)
    product.value = null
  } else {
    product.value = data
  }
  isLoading.value = false
}

async function fetchProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: true })
  if (error) {
    console.error('Error fetching all products:', error)
  } else {
    products.value = data
  }
}

watch(() => route.params.id, (newId) => {
  if (newId) {
    selectedSizeIndex.value = 0
    quantity.value = 50
    address.value = ''
    fetchProduct()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

onMounted(() => {
  fetchProduct()
  fetchSiteSettings()
  fetchProducts()
})

watchEffect(() => {
  if (product.value) {
    activeImage.value = product.value.image
    // Set dynamic browser tab title for SEO
    document.title = `Jual ${product.value.name} Beton Precast Mutu Tinggi SNI - CITRACon`
    // Set dynamic meta description for Google search snippets
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', `Pabrik ${product.value.name} beton precast berkualitas tinggi standar SNI. Melayani pengiriman ke seluruh Jawa. Hubungi kami untuk penawaran harga terbaik!`)
    }
  }
})

const currentSize = computed(() => {
  if (!product.value) return null
  const options = product.value.size_options || product.value.sizeOptions
  if (!options || !options.length) return null
  return options[selectedSizeIndex.value] || null
})

function getWhatsAppLink(phone) {
  if (!product.value) return '#'
  const sizeLabel = currentSize.value ? currentSize.value.label : ''
  const qty = quantity.value || 1
  const clientAddress = address.value ? address.value.trim() : '-'
  const text = `Halo CITRACon, saya ingin meminta penawaran harga untuk produk *${product.value.name}*:\n\n- Tipe/Ukuran: *${sizeLabel}*\n- Jumlah Kebutuhan: *${qty} pcs*\n- Lokasi Kirim: *${clientAddress}*\n\nMohon informasi ketersediaan stok, harga terbaik, serta biaya pengiriman ke lokasi kami. Terima kasih!`
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}

async function submitLead() {
  if (!leadForm.value.name || !leadForm.value.phone || !leadForm.value.address) {
    $q.notify({
      color: 'negative',
      position: 'top',
      message: 'Nama, Nomor WhatsApp, dan Alamat wajib diisi!',
      icon: 'warning'
    })
    return
  }

  // Insert lead into Supabase leads table
  const { error } = await supabase
    .from('leads')
    .insert([
      {
        name: leadForm.value.name,
        phone: leadForm.value.phone,
        address: leadForm.value.address,
        product_name: product.value ? product.value.name : 'Umum'
      }
    ])

  if (error) {
    console.error('Error saving lead to Supabase:', error)
    $q.notify({
      color: 'negative',
      position: 'top',
      message: 'Gagal mengirim data. Silakan coba lagi nanti.',
      icon: 'warning'
    })
    return
  }
  
  $q.notify({
    color: 'positive',
    position: 'top',
    message: `Terima kasih ${leadForm.value.name}, tim spesialis CITRACon akan menghubungi Anda dalam beberapa menit!`,
    icon: 'check_circle'
  })
  
  showModal.value = false
  leadForm.value.name = ''
  leadForm.value.phone = ''
  leadForm.value.address = ''
}
</script>
