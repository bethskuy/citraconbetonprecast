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

    <div v-if="product" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {{ product.detailedDesc }}
            </p>
          </div>

          <!-- Key Features Section -->
          <div class="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <h2 class="text-xl sm:text-2xl font-bold text-[#0b1c3f] border-b border-slate-100 pb-4 mb-6">
              Keunggulan & Fitur Utama
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                v-for="(feature, idx) in product.features" 
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
              <table class="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr class="bg-[#0b1c3f] text-white uppercase text-[10px] sm:text-xs tracking-wider">
                    <th class="p-4 rounded-l-xl">Parameter</th>
                    <th class="p-4 rounded-r-xl">Spesifikasi Standar CITRACon</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr 
                    v-for="(spec, name) in product.technicalSpecs" 
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
                  <span class="text-xs sm:text-sm">{{ currentSize ? currentSize.label : 'Pilih Ukuran' }}</span>
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
                      v-for="(option, idx) in product.sizeOptions" 
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
                  <span class="font-bold text-[#0b1c3f]">{{ product.specs.split('/')[0].trim() }}</span>
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
              :href="getWhatsAppLink('6281398354196')"
              target="_blank"
              class="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#d21d1d]/50 transition-all duration-300 no-underline cursor-pointer group"
              @click="showWhatsAppChoice = false"
            >
              <div class="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <q-icon name="chat" size="20px" />
              </div>
              <div class="text-left">
                <div class="text-sm font-bold text-white group-hover:text-[#d21d1d] transition-colors">WhatsApp Sales 1</div>
                <div class="text-xs text-slate-400">0813-9835-4196</div>
              </div>
            </a>

            <!-- Sales 2 Button -->
            <a
              :href="getWhatsAppLink('6285695660902')"
              target="_blank"
              class="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#d21d1d]/50 transition-all duration-300 no-underline cursor-pointer group"
              @click="showWhatsAppChoice = false"
            >
              <div class="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <q-icon name="chat" size="20px" />
              </div>
              <div class="text-left">
                <div class="text-sm font-bold text-white group-hover:text-[#d21d1d] transition-colors">WhatsApp Sales 2</div>
                <div class="text-xs text-slate-400">0856-9566-0902</div>
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
import { ref, computed, watchEffect, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useQuasar } from 'quasar'
import { supabase } from 'src/boot/supabase'

const route = useRoute()
const $q = useQuasar()
const showModal = ref(false)
const showWhatsAppChoice = ref(false)
const selectedSizeIndex = ref(0)
const quantity = ref(50)
const activeImage = ref('')
const isDropdownOpen = ref(false)
const address = ref('')

const leadForm = ref({
  name: '',
  phone: '',
  address: ''
})

const product = ref(null)

async function fetchProduct() {
  const id = parseInt(route.params.id)
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()
  if (error) {
    console.error('Error fetching product:', error)
  } else {
    product.value = data
  }
}

onMounted(() => {
  fetchProduct()
})

watchEffect(() => {
  if (product.value) {
    activeImage.value = product.value.image
  }
})

const currentSize = computed(() => {
  if (!product.value) return null
  return product.value.sizeOptions[selectedSizeIndex.value]
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
