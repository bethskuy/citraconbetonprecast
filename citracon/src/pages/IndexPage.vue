<template>
  <q-page class="text-slate-800 min-h-screen font-sans selection:bg-[#d21d1d] selection:text-white" style="padding-top: 0 !important;">
    <!-- Full-Bleed Hero Banner — bleeds under the navbar -->
    <div class="relative overflow-hidden w-full" style="height: 100svh; min-height: 600px; margin-top: 0;">
      <q-carousel
        v-model="activeSlide"
        animated
        infinite
        :autoplay="4000"
        transition-prev="fade"
        transition-next="fade"
        height="100%"
        class="bg-[#0b1c3f]"
      >
        <q-carousel-slide
          v-for="(slide, idx) in slides"
          :key="idx"
          :name="idx"
          class="p-0 relative overflow-hidden"
        >
          <!-- Full Background Image -->
          <div
            class="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-105"
            :style="{ backgroundImage: `url(${slide.image})` }"
          ></div>
          <!-- Dark Overlay for Readability (Twilight Gradient) -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/80 z-10"></div>
          
          <!-- Content Overlay (Centered text, no card) -->
          <div class="absolute inset-0 z-20 flex items-center justify-center text-center px-4 pt-[72px]">
            <div class="max-w-4xl">
              <div class="inline-block bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm mb-4">
                <span class="text-xs uppercase tracking-wider font-extrabold">
                  <span class="text-[#0b1c3f]">CITRACON</span>
                  <span class="text-[#0b1c3f] ml-1">BETON</span>
                  <span class="text-[#d21d1d] ml-1">PRECAST</span>
                </span>
              </div>
              <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 uppercase leading-none" v-html="slide.title"></h1>
              <p class="text-xs md:text-sm lg:text-base font-medium text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                {{ slide.desc }}
              </p>
              <div class="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#produk"
                  @click.prevent="scrollToElement('produk')"
                  class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#d21d1d] hover:bg-[#b21818] text-white font-bold text-sm tracking-wide shadow-md transition-all duration-300 no-underline cursor-pointer"
                >
                  Lihat Produk
                </a>
                <button
                  @click="openWhatsAppWithChoice()"
                  class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#0b1c3f] hover:bg-[#152c5c] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-95 border-0"
                >
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>

      <!-- Custom Left Navigation Button -->
      <button
        v-if="$q.screen.gt.sm"
        @click="prevSlide"
        class="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white hover:bg-slate-100 text-slate-800 flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 shadow-md border border-slate-200/50"
      >
        <span class="text-xl font-bold">&larr;</span>
      </button>

      <!-- Custom Right Navigation Button -->
      <button
        v-if="$q.screen.gt.sm"
        @click="nextSlide"
        class="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white hover:bg-slate-100 text-slate-800 flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 shadow-md border border-slate-200/50"
      >
        <span class="text-xl font-bold">&rarr;</span>
      </button>
    </div>

    <!-- Main Content Container (Centered for Desktop) -->
    <div class="max-w-7xl mx-auto px-4 md:px-8 py-12">

      <!-- Tentang Kami Section -->
      <div id="profil-perusahaan" v-reveal class="max-w-4xl mx-auto text-center py-8 mb-16 reveal">
        <div class="inline-block px-4 py-1.5 bg-[#d21d1d]/10 text-[#d21d1d] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
          Profil Perusahaan
        </div>
        <h2 class="text-3xl md:text-4xl font-extrabold text-[#0b1c3f] tracking-tight mb-6 leading-tight uppercase">
          {{ siteSettings.profile_title }}
        </h2>
        <p class="text-slate-600 leading-relaxed mb-4 text-base" v-html="siteSettings.profile_desc_1">
        </p>
        <p class="text-slate-600 leading-relaxed mb-0 text-base" v-html="siteSettings.profile_desc_2">
        </p>
      </div>

      <!-- Visi & Misi Section -->
      <div v-reveal class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 reveal delay-150">
        <!-- Visi Card -->
        <div class="relative p-8 rounded-2xl bg-[#0b1c3f] shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer text-white flex flex-col">
          <div class="flex items-start gap-4">
            <span class="text-4xl">🎯</span>
            <div>
              <h3 class="text-xl font-bold text-white uppercase tracking-wider mb-3">Visi Kami</h3>
              <p class="text-slate-200 text-sm leading-relaxed">
                {{ siteSettings.visi_text }}
              </p>
            </div>
          </div>
        </div>

        <!-- Misi Card -->
        <div class="relative p-8 rounded-2xl bg-[#d21d1d] shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer text-white flex flex-col">
          <div class="flex items-start gap-4">
            <span class="text-4xl">🚀</span>
            <div>
              <h3 class="text-xl font-bold text-white uppercase tracking-wider mb-3">Misi Kami</h3>
              <ul class="text-white/95 text-sm leading-relaxed space-y-2 list-disc pl-4">
                <li v-for="(item, idx) in siteSettings.misi_items" :key="idx">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Keunggulan Utama Section (Mengapa Memilih Kami) -->
      <div class="mb-16">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <div class="inline-block px-4 py-1.5 bg-[#d21d1d]/10 text-[#d21d1d] text-xs font-bold uppercase tracking-wider rounded-full mb-3">
            Mengapa Memilih Kami
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-[#0b1c3f] tracking-tight">Kelebihan Layanan CITRACon</h2>
          <p class="text-slate-500 text-sm mt-2">Komitmen mutu tinggi dan kepuasan pelanggan untuk setiap proyek Anda</p>
        </div>

        <!-- Row 1: 3 Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <!-- Card 1: Kualitas Terjamin -->
          <div v-reveal class="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-[#0b1c3f] via-[#1e1b4b] to-[#3b0764] shadow-md hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 ease-out cursor-pointer text-center reveal">
            <!-- Shine Reflection Effect -->
            <div class="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out pointer-events-none z-10"></div>
            
            <div class="text-3xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 inline-block relative z-20">🏆</div>
            <h3 class="text-base font-bold text-white mb-2 uppercase tracking-wide relative z-20">Kualitas Terjamin</h3>
            <p class="text-xs text-slate-200 leading-relaxed relative z-20">Produk dibuat dengan material pilihan dan proses produksi yang terkontrol untuk memastikan mutu terbaik.</p>
          </div>

          <!-- Card 2: Presisi Tinggi -->
          <div v-reveal class="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-[#d21d1d] via-[#701a75] to-[#3b0764] shadow-md hover:shadow-lg hover:shadow-fuchsia-500/30 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 ease-out cursor-pointer text-center reveal delay-150">
            <!-- Shine Reflection Effect -->
            <div class="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out pointer-events-none z-10"></div>
            
            <div class="text-3xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 inline-block relative z-20">🎯</div>
            <h3 class="text-base font-bold text-white mb-2 uppercase tracking-wide relative z-20">Presisi Tinggi</h3>
            <p class="text-xs text-rose-100 leading-relaxed relative z-20">Setiap produk diproduksi dengan standar ukuran yang akurat untuk hasil pemasangan yang optimal.</p>
          </div>

          <!-- Card 3: Harga Kompetitif -->
          <div v-reveal class="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-[#d97706] via-[#7c2d12] to-[#1e1b4b] shadow-md hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 ease-out cursor-pointer text-center reveal delay-300">
            <!-- Shine Reflection Effect -->
            <div class="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out pointer-events-none z-10"></div>
            
            <div class="text-3xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 inline-block relative z-20">💰</div>
            <h3 class="text-base font-bold text-white mb-2 uppercase tracking-wide relative z-20">Harga Kompetitif</h3>
            <p class="text-xs text-amber-50 leading-relaxed relative z-20">Menawarkan harga yang bersaing tanpa mengurangi kualitas produk.</p>
          </div>
        </div>

        <!-- Row 2: 2 Cards (Centered) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <!-- Card 4: Pengiriman Tepat Waktu -->
          <div v-reveal class="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-[#0284c7] via-[#0f172a] to-[#1e1b4b] shadow-md hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 ease-out cursor-pointer text-center reveal delay-450">
            <!-- Shine Reflection Effect -->
            <div class="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out pointer-events-none z-10"></div>
            
            <div class="text-3xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 inline-block relative z-20">🚚</div>
            <h3 class="text-base font-bold text-white mb-2 uppercase tracking-wide relative z-20">Pengiriman Tepat Waktu</h3>
            <p class="text-xs text-sky-50 leading-relaxed relative z-20">Didukung sistem distribusi yang baik agar produk sampai sesuai jadwal proyek.</p>
          </div>

          <!-- Card 5: Pelayanan Profesional -->
          <div v-reveal class="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-[#059669] via-[#064e3b] to-[#1e1b4b] shadow-md hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 ease-out cursor-pointer text-center reveal delay-600">
            <!-- Shine Reflection Effect -->
            <div class="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out pointer-events-none z-10"></div>
            
            <div class="text-3xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 inline-block relative z-20">🤝</div>
            <h3 class="text-base font-bold text-white mb-2 uppercase tracking-wide relative z-20">Pelayanan Profesional</h3>
            <p class="text-xs text-emerald-50 leading-relaxed relative z-20">Tim kami siap membantu konsultasi dan memberikan solusi sesuai kebutuhan pelanggan.</p>
          </div>
        </div>

      </div>

      <!-- Product Showcase -->
      <div id="produk" class="mb-16 pt-8">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-[#0b1c3f] tracking-tight">Katalog Beton Precast</h2>
            <p class="text-slate-500 text-sm mt-1">Produk unggulan dengan standar mutu tinggi</p>
          </div>
          <div>
            <span class="px-3 py-1.5 bg-[#0b1c3f]/10 text-[#0b1c3f] font-bold text-xs uppercase rounded-full">
              SNI Certified
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(product, idx) in products"
            :key="product.id"
            v-reveal
            class="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[360px] p-6 reveal"
            :class="`delay-${idx * 150}`"
          >
            <!-- Background Image -->
            <div 
              class="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500 z-0"
              :style="{ backgroundImage: 'url(' + product.image + ')' }"
            ></div>
            
            <!-- Dark Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/45 z-10"></div>

            <!-- Content Area -->
            <div class="relative z-20 flex flex-col justify-between h-full flex-grow">
              <div>
                <div class="w-12 h-12 text-white flex items-center justify-center text-xl mb-4 rounded-xl shadow-md bg-white/10 backdrop-blur-md border border-white/20">
                  {{ product.icon }}
                </div>
                <h3 class="text-lg font-bold text-white mb-2 uppercase tracking-wide">
                  {{ product.name }}
                </h3>
                <p class="text-slate-300 text-xs leading-relaxed mb-6">
                  {{ product.desc }}
                </p>
              </div>
              <div class="pt-4 border-t border-white/15">
                <router-link :to="'/produk/' + product.id" class="w-full text-xs bg-[#d21d1d] hover:bg-[#b21818] text-white font-bold py-2.5 rounded-full shadow-sm transition-all cursor-pointer text-center block no-underline">
                  Detail
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Portfolio Section -->
      <div id="galeri-kerja" class="mb-16">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <div class="inline-block px-4 py-1.5 bg-[#d21d1d]/10 text-[#d21d1d] text-xs font-bold uppercase tracking-wider rounded-full mb-3">
            Galeri Kerja
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-[#0b1c3f] tracking-tight">Portofolio Proyek Terkini</h2>
          <p class="text-slate-500 text-sm mt-2">Kontribusi CITRACon dalam proyek infrastruktur berskala nasional</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-reveal v-for="(item, idx) in siteSettings.portfolio_items" :key="idx" 
               :class="'group relative rounded-2xl overflow-hidden h-72 flex flex-col justify-end p-6 reveal shadow-sm hover:shadow-md transition-all duration-300 ' + (idx === 1 ? 'delay-150' : idx === 2 ? 'delay-300' : '')">
            <div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 opacity-90" :style="{ backgroundImage: 'url(' + item.image + ')' }"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10"></div>
            <div class="relative z-20 text-white">
              <span :class="idx % 2 === 0 ? 'text-red-400' : 'text-blue-400'" class="text-[10px] uppercase font-bold">{{ item.category }}</span>
              <h3 class="text-lg font-bold text-white mt-1">{{ item.title }}</h3>
              <p class="text-slate-200 text-xs mt-1">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Klien Kami Section -->
      <div id="klien" v-reveal class="rounded-3xl border border-slate-100 bg-white p-8 md:p-12 relative overflow-hidden mb-16 reveal transition-all duration-300 shadow-md text-slate-800 text-center">
        <div class="max-w-3xl mx-auto mb-8">
          <div class="inline-block px-4 py-1.5 bg-[#d21d1d]/10 text-[#d21d1d] text-xs font-bold uppercase tracking-wider rounded-full mb-3">
            Klien Kami
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-[#0b1c3f] tracking-tight uppercase">Kemitraan Terpercaya</h2>
          <p class="text-slate-500 text-sm mt-3 leading-relaxed">
            Kami bangga telah dipercaya oleh berbagai perusahaan kontraktor terkemuka dan instansi nasional untuk mendukung kesuksesan pembangunan infrastruktur di Indonesia.
          </p>
        </div>
        
        <!-- Client Logos Row -->
        <div class="flex flex-wrap items-center justify-center gap-12 mt-6">
          <!-- Brantas Abipraya -->
          <div class="flex items-center justify-center bg-slate-50 border border-slate-100 rounded-2xl p-4 w-52 h-24 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 group cursor-pointer">
            <img src="/brantas.png" alt="Brantas Abipraya" class="max-h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105" />
          </div>
          <!-- Agra Budi -->
          <div class="flex items-center justify-center bg-slate-50 border border-slate-100 rounded-2xl p-4 w-52 h-24 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 group cursor-pointer">
            <img src="/agra.png" alt="Agra Budi" class="max-h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105" />
          </div>
        </div>
      </div>

      <!-- Maskot TRACON Section -->
      <div id="tracon" v-reveal class="mb-16 reveal transition-all duration-300 text-slate-800 pt-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- Left Column: Mascot Presentation Carousel -->
          <div class="lg:col-span-5 flex justify-center w-full">
            <div class="relative overflow-hidden rounded-2xl max-w-sm w-full group">
              <!-- Slides Container -->
              <div class="relative w-full flex items-center justify-center">
                <img 
                  :src="mascotImages[activeMascotSlide]" 
                  alt="TRACON Mascot Slide" 
                  class="w-full h-auto object-contain transition-all duration-300 group-hover:scale-[1.01]" 
                />
              </div>
              
              <!-- Left/Right Navigation Buttons -->
              <button 
                @click="prevMascotSlide"
                class="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow border border-slate-200/50"
              >
                <span class="text-lg font-bold">&larr;</span>
              </button>
              <button 
                @click="nextMascotSlide"
                class="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow border border-slate-200/50"
              >
                <span class="text-lg font-bold">&rarr;</span>
              </button>

              <!-- Indicators -->
              <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span 
                  v-for="(img, idx) in mascotImages" 
                  :key="idx" 
                  class="w-2 h-2 rounded-full transition-all cursor-pointer"
                  :class="activeMascotSlide === idx ? 'bg-white scale-125' : 'bg-white/40'"
                  @click="activeMascotSlide = idx"
                ></span>
              </div>
            </div>
          </div>

          
          <!-- Right Column: Interactive Mascot Info -->
          <div class="lg:col-span-7 space-y-6">
            <div>
              <div class="inline-block px-4 py-1.5 bg-[#d21d1d]/10 text-[#d21d1d] text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                Maskot Resmi
              </div>
              <h2 class="text-2xl md:text-3xl font-bold text-[#0b1c3f] tracking-tight uppercase">MEMPERKENALKAN TRACON</h2>
              <p class="text-slate-500 text-sm mt-2 leading-relaxed">
                {{ siteSettings.tracon_subtitle }}
              </p>
            </div>

            <!-- Tab Buttons -->
            <div class="flex border-b border-slate-100 gap-6">
              <button 
                @click="activeMascotTab = 'profile'"
                class="pb-3 text-sm font-bold tracking-wide uppercase transition-all relative cursor-pointer"
                :class="activeMascotTab === 'profile' ? 'text-[#d21d1d]' : 'text-slate-400 hover:text-slate-600'"
              >
                Profil Maskot
                <span v-if="activeMascotTab === 'profile'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d21d1d]"></span>
              </button>
              <button 
                @click="activeMascotTab = 'philosophy'"
                class="pb-3 text-sm font-bold tracking-wide uppercase transition-all relative cursor-pointer"
                :class="activeMascotTab === 'philosophy' ? 'text-[#d21d1d]' : 'text-slate-400 hover:text-slate-600'"
              >
                Filosofi Visual
                <span v-if="activeMascotTab === 'philosophy'" class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d21d1d]"></span>
              </button>
            </div>

            <!-- Tab Content: Profile -->
            <div v-if="activeMascotTab === 'profile'" class="space-y-4 transition-all duration-300">
              <div v-for="(card, idx) in siteSettings.tracon_profile_cards" :key="idx" 
                   :class="'p-4 rounded-xl text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all bg-gradient-to-br ' + (idx === 0 ? 'from-[#0b1c3f] via-[#1e1b4b] to-[#3b0764]' : idx === 1 ? 'from-[#d21d1d] via-[#701a75] to-[#3b0764]' : 'from-[#059669] via-[#064e3b] to-[#1e1b4b]')">
                <div>
                  <h4 class="font-bold text-white text-sm uppercase tracking-wide">{{ card.title }}</h4>
                  <p class="text-xs text-slate-200 mt-1 leading-relaxed" v-html="card.desc"></p>
                </div>
              </div>
            </div>

            <!-- Tab Content: Philosophy -->
            <div v-else class="grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-300">
              <div v-for="(card, idx) in siteSettings.tracon_philosophy_cards" :key="idx" 
                   :class="'p-4 rounded-xl text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all bg-gradient-to-br ' + (idx === 0 ? 'from-[#0b1c3f] via-[#1e1b4b] to-[#3b0764]' : idx === 1 ? 'from-[#d21d1d] via-[#701a75] to-[#3b0764]' : 'from-[#059669] via-[#064e3b] to-[#1e1b4b]')">
                <div class="text-2xl mb-2">{{ card.icon }}</div>
                <h4 class="font-bold text-xs uppercase tracking-wide text-white">{{ card.title }}</h4>
                <p class="text-[10px] text-slate-200 mt-1 leading-relaxed">{{ card.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TRACON Mascot Animation Section -->
      <div id="tracon-zone" v-reveal class="mb-16 reveal transition-all duration-300">
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f8fafc] via-[#eff6ff] to-[#fef2f2] border border-slate-200/60 shadow-sm py-10 px-6 md:px-12">

          <!-- Floating particle decorations -->
          <div class="absolute top-4 left-10 w-3 h-3 rounded-full bg-[#d21d1d]/20 animate-bounce" style="animation-delay: 0.2s;"></div>
          <div class="absolute top-10 right-16 w-4 h-4 rounded-full bg-[#0b1c3f]/10 animate-bounce" style="animation-delay: 0.8s;"></div>
          <div class="absolute bottom-8 left-20 w-2 h-2 rounded-full bg-emerald-400/30 animate-bounce" style="animation-delay: 0.5s;"></div>
          <div class="absolute bottom-4 right-8 w-3 h-3 rounded-full bg-[#d21d1d]/15 animate-bounce" style="animation-delay: 1.1s;"></div>
          <div class="absolute top-1/2 left-4 w-2 h-2 rounded-full bg-amber-400/30 animate-bounce" style="animation-delay: 0.3s;"></div>

          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <!-- Left: Mascot Animation Area -->
            <div class="lg:col-span-5 flex flex-col items-center justify-center gap-4">
              <!-- Speech Bubble -->
              <div class="relative">
                <div class="bg-white border-2 border-[#0b1c3f]/10 rounded-2xl px-5 py-3 shadow-md max-w-[240px] text-center mascot-bubble">
                  <p class="text-xs font-bold text-[#0b1c3f] leading-relaxed transition-all duration-500">
                    {{ traconspeech[activeSpeechIdx] }}
                  </p>
                </div>
                <!-- Bubble tail pointing down -->
                <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0" style="border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 12px solid white;"></div>
              </div>

              <!-- Mascot Image with bounce animation -->
              <div class="mascot-bounce cursor-pointer select-none" @click="nextMascotSpeech" title="Klik untuk ngobrol!">
                <img
                  :src="activeMascotImg"
                  alt="TRACON Mascot"
                  class="w-44 h-44 object-contain drop-shadow-xl"
                />
              </div>

              <p class="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Klik TRACON untuk ngobrol! 👆</p>
            </div>

            <!-- Right: Info Cards -->
            <div class="lg:col-span-7 space-y-4">
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b1c3f]/10 text-[#0b1c3f] text-xs font-bold uppercase tracking-wider">
                🤖 Sudut TRACON
              </div>
              <h3 class="text-2xl md:text-3xl font-extrabold text-[#0b1c3f] tracking-tight uppercase leading-tight">
                Bertemu <span class="text-[#d21d1d]">TRACON</span>, Maskot CITRACon
              </h3>
              <p class="text-slate-500 text-sm leading-relaxed">
                TRACON adalah maskot resmi CITRACon — sosok pahlawan konstruksi yang kuat, ramah, dan siap mewujudkan infrastruktur impian Anda bersama tim terbaik kami.
              </p>

              <!-- Fun Stats -->
              <div class="grid grid-cols-3 gap-3 pt-2">
                <div class="text-center p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div class="text-2xl font-black text-[#d21d1d]">💪</div>
                  <div class="text-xs font-bold text-[#0b1c3f] mt-1">Kekuatan</div>
                  <div class="text-[10px] text-slate-400">K-500 Ready</div>
                </div>
                <div class="text-center p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div class="text-2xl font-black text-emerald-500">😊</div>
                  <div class="text-xs font-bold text-[#0b1c3f] mt-1">Keramahan</div>
                  <div class="text-[10px] text-slate-400">Siap Bantu 24h</div>
                </div>
                <div class="text-center p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div class="text-2xl font-black text-amber-500">🏆</div>
                  <div class="text-xs font-bold text-[#0b1c3f] mt-1">Kualitas</div>
                  <div class="text-[10px] text-slate-400">SNI Certified</div>
                </div>
              </div>

              <!-- Mascot slider dots -->
              <div class="flex items-center gap-2 pt-2">
                <span class="text-xs text-slate-400 font-medium">Pose TRACON:</span>
                <div class="flex gap-1.5">
                  <button
                    v-for="(img, idx) in mascotImages"
                    :key="idx"
                    @click="activeMascotSlide = idx"
                    class="w-2 h-2 rounded-full transition-all cursor-pointer border-0"
                    :class="activeMascotSlide === idx ? 'bg-[#d21d1d] scale-125' : 'bg-slate-200 hover:bg-slate-400'"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Kontak Section -->
      <div id="kontak" v-reveal class="mb-16 reveal transition-all duration-300 text-slate-800 pt-8 border-t border-slate-200/50">
        <div class="text-center max-w-xl mx-auto mb-10">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d21d1d]/10 text-[#d21d1d] text-xs font-bold uppercase tracking-wider mb-3">
            ✉️ Hubungi Kami
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-[#0b1c3f] tracking-tight uppercase">Saluran Kontak Resmi</h2>
          <p class="text-slate-500 text-sm mt-3 leading-relaxed">
            Terhubung langsung dengan tim kami melalui layanan pelanggan resmi CITRACon di bawah ini.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          <!-- Card 1: WhatsApp Sales -->
          <div class="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/60 p-6 shadow-sm hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-1 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between min-h-[220px]">
            <div class="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-emerald-500/20 blur-xl pointer-events-none group-hover:bg-emerald-500/35 transition-all duration-300"></div>
            <div>
              <div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <q-icon name="chat" />
              </div>
              <h3 class="text-base font-extrabold text-[#0b1c3f] uppercase tracking-wide">WhatsApp Sales</h3>
              <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                Tanya produk, spesifikasi teknis, atau minta penawaran harga resmi.
              </p>
            </div>
            <button
              @click="openWhatsAppWithChoice()"
              class="w-full text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer text-center block no-underline border-0 mt-4"
            >
              Hubungi Sales
            </button>
          </div>

          <!-- Card 2: Instagram -->
          <a
            href="https://instagram.com/citraconbetonprecast"
            target="_blank"
            class="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/60 p-6 shadow-sm hover:shadow-xl hover:shadow-pink-500/30 hover:-translate-y-1 hover:border-pink-500/50 transition-all duration-300 flex flex-col justify-between min-h-[220px] no-underline"
          >
            <div class="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-pink-500/20 blur-xl pointer-events-none group-hover:bg-pink-500/35 transition-all duration-300"></div>
            <div>
              <div class="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <q-icon name="photo_camera" />
              </div>
              <h3 class="text-base font-extrabold text-[#0b1c3f] uppercase tracking-wide">Instagram</h3>
              <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                Lihat galeri proyek, video edukasi produk precast, dan informasi terbaru kami.
              </p>
              <div class="text-[11px] font-bold text-slate-400 mt-2">@citraconbetonprecast</div>
            </div>
            <div
              class="w-full text-xs bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-center block mt-4"
            >
              Kunjungi Instagram
            </div>
          </a>

          <!-- Card 3: TikTok -->
          <a
            href="https://tiktok.com/@cvcitraelvanoberkah"
            target="_blank"
            class="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/60 p-6 shadow-sm hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between min-h-[220px] no-underline"
          >
            <div class="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-cyan-500/20 blur-xl pointer-events-none group-hover:bg-cyan-500/35 transition-all duration-300"></div>
            <div>
              <div class="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.43-.43-.64-.67-.07 3.26-.03 6.52-.05 9.77-.1 1.92-.85 3.86-2.38 5.05-1.58 1.27-3.78 1.72-5.76 1.43-2.27-.33-4.39-1.78-5.38-3.87-1.12-2.27-.89-5.18.63-7.2 1.44-1.92 3.93-2.88 6.28-2.51v4.03c-1.32-.4-2.83.07-3.67 1.18-.89 1.1-.98 2.7-.27 3.86.71 1.17 2.14 1.79 3.5 1.57 1.28-.19 2.29-1.26 2.37-2.56.09-3.26.04-6.52.06-9.78-.02-3.14-.02-6.28-.02-9.42z"/>
                </svg>
              </div>
              <h3 class="text-base font-extrabold text-[#0b1c3f] uppercase tracking-wide">TikTok Resmi</h3>
              <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                Tonton keseruan produksi pabrik, proses kirim barang, dan edukasi beton.
              </p>
              <div class="text-[11px] font-bold text-slate-400 mt-2">@cvcitraelvanoberkah</div>
            </div>
            <div
              class="w-full text-xs bg-slate-900 hover:bg-black text-white font-bold py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-center block mt-4"
            >
              Kunjungi TikTok
            </div>
          </a>

          <!-- Card 4: Email -->
          <a
            href="mailto:citraelvanoberkah.adm@gmail.com"
            class="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/60 p-6 shadow-sm hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between min-h-[220px] no-underline"
          >
            <div class="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-blue-500/20 blur-xl pointer-events-none group-hover:bg-blue-500/35 transition-all duration-300"></div>
            <div>
              <div class="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <q-icon name="mail" />
              </div>
              <h3 class="text-base font-extrabold text-[#0b1c3f] uppercase tracking-wide">Email Resmi</h3>
              <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                Kirim dokumen teknis, detail Rencana Anggaran Biaya (RAB), atau kerja sama bisnis.
              </p>
              <div class="text-[10px] font-bold text-[#0b1c3f] mt-2 truncate">citraelvanoberkah.adm@gmail.com</div>
            </div>
            <div
              class="w-full text-xs bg-[#0b1c3f] hover:bg-[#152e60] text-white font-bold py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-center block mt-4"
            >
              Kirim Email
            </div>
          </a>
        </div>
      </div>

      <!-- Lokasi Kantor & Pabrik Section -->
      <div id="lokasi" v-reveal class="mb-16 reveal transition-all duration-300 text-slate-800 pt-8 border-t border-slate-200/50">
        <div class="text-center max-w-xl mx-auto mb-10">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d21d1d]/10 text-[#d21d1d] text-xs font-bold uppercase tracking-wider mb-3">
            📍 Kunjungi Kami
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-[#0b1c3f] tracking-tight uppercase">Lokasi Kantor & Pabrik</h2>
          <p class="text-slate-500 text-sm mt-3 leading-relaxed">
            Kami siap menyambut kunjungan Anda untuk meninjau secara langsung kualitas produksi precast di fasilitas pabrik modern kami.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <!-- Left Column: Details (5/12 cols) -->
          <div class="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div class="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex-grow flex flex-col justify-between space-y-6">
              <q-list class="text-slate-600 q-pa-none space-y-6">
                <!-- Alamat Utama -->
                <q-item class="q-px-none q-py-none items-start min-h-0">
                  <q-item-section avatar class="min-w-0 q-pr-md mt-1 shrink-0">
                    <q-icon name="business" size="24px" class="text-[#d21d1d]" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="font-bold text-[#0b1c3f] text-base uppercase tracking-wide">Alamat Utama</q-item-label>
                    <q-item-label class="text-sm text-slate-600 mt-1.5 leading-relaxed">
                      Jl. Tegal Danas No.18a, Sertajaya, Kec. Cikarang Tim., Kabupaten Bekasi, Jawa Barat 17530
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <!-- Jam Operasional -->
                <q-item class="q-px-none q-py-none items-start min-h-0">
                  <q-item-section avatar class="min-w-0 q-pr-md mt-1 shrink-0">
                    <q-icon name="schedule" size="24px" class="text-[#0b1c3f]" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="font-bold text-[#0b1c3f] text-base uppercase tracking-wide">Jam Operasional</q-item-label>
                    <q-item-label class="text-sm text-slate-600 mt-1.5 leading-relaxed">
                      Senin - Sabtu: 08:00 - 17:00 WIB<br>
                      Hari Minggu & Libur Nasional: Tutup
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <!-- Kontak Layanan -->
                <q-item class="q-px-none q-py-none items-start min-h-0">
                  <q-item-section avatar class="min-w-0 q-pr-md mt-1 shrink-0">
                    <q-icon name="contact_phone" size="24px" class="text-[#059669]" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="font-bold text-[#0b1c3f] text-base uppercase tracking-wide">Kontak Layanan</q-item-label>
                    <q-item-label class="text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {{ siteSettings.contact_wa_1_label }}: <a :href="'https://wa.me/' + siteSettings.contact_wa_1_num" target="_blank" class="text-slate-600 hover:text-[#d21d1d] font-bold transition-all no-underline">{{ siteSettings.contact_wa_1_num }}</a><br>
                      {{ siteSettings.contact_wa_2_label }}: <a :href="'https://wa.me/' + siteSettings.contact_wa_2_num" target="_blank" class="text-slate-600 hover:text-[#d21d1d] font-bold transition-all no-underline">{{ siteSettings.contact_wa_2_num }}</a><br>
                      Email: <a :href="'mailto:' + siteSettings.contact_email" class="text-[#0b1c3f] hover:text-[#d21d1d] font-semibold transition-all no-underline">{{ siteSettings.contact_email }}</a>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
 
              <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                <a
                  :href="siteSettings.contact_maps_url"
                  target="_blank"
                  class="flex-1 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-[#0b1c3f] hover:bg-[#152e60] text-white font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-300 no-underline text-center"
                >
                  <q-icon name="directions" size="18px" />
                  Petunjuk Arah
                </a>
                <button
                  @click="openWhatsAppWithChoice()"
                  class="flex-1 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-[#059669] hover:bg-[#047857] text-white font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-300 text-center cursor-pointer active:scale-95 border-0"
                >
                  <q-icon name="chat" size="18px" />
                  Hubungi Sales
                </button>
              </div>
            </div>
          </div>

          <!-- Right Column: Map Embed (7/12 cols) -->
          <div class="lg:col-span-7 flex">
            <div class="w-full rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-slate-50 flex items-stretch">
              <!-- Real Google Maps Embed with Tegal Danas Bekasi coordinates -->
              <iframe
                :src="siteSettings.contact_maps_url"
                class="w-full min-h-[350px] border-0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <!-- Consultation Section -->
      <div id="konsultasi" v-reveal class="mb-8 reveal transition-all duration-300">
        <div class="relative overflow-hidden rounded-3xl p-8 md:p-12 text-white bg-gradient-to-br from-[#0b1c3f] via-[#1e293b] to-[#7f1d1d] shadow-2xl border border-white/10">
          <!-- Premium background decorative glowing shapes -->
          <div class="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#d21d1d]/20 blur-[80px] pointer-events-none"></div>
          <div class="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#3b82f6]/10 blur-[80px] pointer-events-none"></div>

          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <!-- Left Side: Text Description -->
            <div class="lg:col-span-8 space-y-4">
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#fca5a5] text-xs font-bold uppercase tracking-wider">
                💬 Konsultasi Proyek & Estimasi
              </div>
              <h3 class="text-3xl md:text-4xl font-extrabold tracking-tight uppercase leading-tight">
                Mulai Konsultasi Kebutuhan <span class="text-[#fca5a5]">Precast</span> Anda
              </h3>
              <p class="text-slate-200 text-sm md:text-base leading-relaxed max-w-2xl">
                Butuh hitungan spesifikasi teknis saluran, kebutuhan box culvert, jalan beton, atau pagar panel? Tim spesialis insinyur CITRACon siap membantu memberikan analisis gratis & penawaran harga terbaik.
              </p>
            </div>

            <!-- Right Side: Action Buttons -->
            <div class="lg:col-span-4 flex flex-col gap-3 justify-end">
              <button
                @click="showModal = true"
                class="w-full inline-flex justify-center items-center gap-2 px-6 py-4 rounded-full bg-[#d21d1d] hover:bg-[#b21818] text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-red-500/20 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <q-icon name="assignment" size="18px" />
                Form Konsultasi
              </button>
              <button
                @click="openWhatsAppWithChoice()"
                class="w-full inline-flex justify-center items-center gap-2 px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-emerald-500/20 active:scale-95 transition-all duration-300 cursor-pointer border-0"
              >
                <q-icon name="chat" size="18px" />
                Chat WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Simple Dialog / Modal for Lead Capture -->
    <q-dialog v-model="showModal">
      <q-card class="bg-white text-slate-800 rounded-2xl border border-slate-100 p-6 shadow-2xl" style="min-width: 350px">
        <q-card-section class="q-pt-none text-center">
          <div class="text-h6 text-[#d21d1d] font-bold mb-2">Mulai Konsultasi Citracon</div>
          <p class="text-slate-600 text-sm">Tim spesialis beton kami siap membantu menghitung spesifikasi detail konstruksi Anda.</p>
          <div class="space-y-4 mt-4 text-left">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Nama Lengkap</label>
              <input v-model="leadForm.name" type="text" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-[#0b1c3f] focus:bg-white transition-all" placeholder="Masukkan nama Anda">
            </div>
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Nomor WhatsApp</label>
              <input v-model="leadForm.phone" type="text" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-[#0b1c3f] focus:bg-white transition-all" placeholder="Contoh: 08123456789">
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="mt-4 gap-2">
          <button @click="showModal = false" class="text-sm font-bold text-slate-400 hover:text-slate-600 px-4 py-2 uppercase transition-colors">Batal</button>
          <button @click="submitLead" class="bg-[#d21d1d] hover:bg-[#b21818] text-white font-bold px-6 py-2.5 rounded-full shadow-md transition-all uppercase text-sm">Hubungi Kami</button>
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
          <p class="text-slate-300 text-xs mb-6">Silakan pilih salah satu layanan WhatsApp Sales kami untuk konsultasi:</p>
          
          <div class="space-y-4">
            <!-- Sales 1 Button -->
            <a
              :href="waSales1Url"
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
              :href="waSales2Url"
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useQuasar } from 'quasar'
import { supabase } from 'src/boot/supabase'

const $q = useQuasar()

// Auto-rotate TRACON speech bubble every 3 seconds
let speechInterval = null
onMounted(() => {
  fetchProducts()
  fetchSiteSettings()
  speechInterval = setInterval(() => {
    activeSpeechIdx.value = (activeSpeechIdx.value + 1) % traconspeech.length
    activeMascotSlide.value = (activeMascotSlide.value + 1) % mascotImages.length
  }, 3000)
})
onUnmounted(() => {
  clearInterval(speechInterval)
})

// Custom Intersection Observer Directive for Entrance Scroll Animations
const vReveal = {
  mounted(el) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-active')
          observer.unobserve(el) // Animate once and clean up
        }
      })
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px'
    })
    observer.observe(el)
  }
}

// Carousel State
const activeSlide = ref(0)
const slides = computed(() => siteSettings.value.hero_slides || [])

// Site Settings State (100% database-driven)
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
    
    // Update dynamic WA URLs based on settings
    const wa1Msg = encodeURIComponent('Halo Sales CITRACon, saya ingin bertanya mengenai produk beton precast.')
    const wa2Msg = encodeURIComponent('Halo Sales CITRACon, saya ingin bertanya mengenai produk beton precast.')
    waSales1Url.value = `https://wa.me/${data.contact_wa_1_num}?text=${wa1Msg}`
    waSales2Url.value = `https://wa.me/${data.contact_wa_2_num}?text=${wa2Msg}`
  }
}

function prevSlide() {
  activeSlide.value = activeSlide.value === 0 ? slides.value.length - 1 : activeSlide.value - 1
}

function nextSlide() {
  activeSlide.value = activeSlide.value === slides.value.length - 1 ? 0 : activeSlide.value + 1
}

const showModal = ref(false)
const showWhatsAppChoice = ref(false)
const leadForm = ref({
  name: '',
  phone: ''
})

const waSales1Url = ref('https://wa.me/6281398354196')
const waSales2Url = ref('https://wa.me/6285695660902')

function openWhatsAppWithChoice(customMessage = '') {
  if (customMessage) {
    const encoded = encodeURIComponent(customMessage)
    waSales1Url.value = `https://wa.me/6281398354196?text=${encoded}`
    waSales2Url.value = `https://wa.me/6285695660902?text=${encoded}`
  } else {
    const defaultMsg = encodeURIComponent('Halo Sales CITRACon, saya ingin bertanya mengenai produk beton precast.')
    waSales1Url.value = `https://wa.me/6281398354196?text=${defaultMsg}`
    waSales2Url.value = `https://wa.me/6285695660902?text=${defaultMsg}`
  }
  showWhatsAppChoice.value = true
}

const activeMascotTab = ref('profile')
const activeMascotSlide = ref(0)
const mascotImages = [
  'tracon.png',
  'tracon2.png',
  'tracon3.png',
  'tracon4.png',
  'tracon5.png'
]
const activeMascotImg = computed(() => mascotImages[activeMascotSlide.value])

function prevMascotSlide() {
  activeMascotSlide.value = activeMascotSlide.value === 0 ? mascotImages.length - 1 : activeMascotSlide.value - 1
}

function nextMascotSlide() {
  activeMascotSlide.value = activeMascotSlide.value === mascotImages.length - 1 ? 0 : activeMascotSlide.value + 1
}

// TRACON Mascot speech bubbles
const traconspeech = [
  '🦺 Halo! Saya TRACON, siap membangun Indonesia!',
  '🧱 Precast berkualitas = infrastruktur awet 100 tahun!',
  '🚚 Pengiriman cepat, tepat waktu, no drama!',
  '📋 SNI certified? Tentu! Standar terjamin bro!',
  '💪 Kuat tekan K-500? Itu standar minimal kami!',
  '🤝 Hubungi tim kami, konsultasi gratis!',
  '🏗️ Dari U-Ditch hingga Box Culvert, semua ada!',
  '😄 Proyek besar atau kecil, kami siap!',
]
const activeSpeechIdx = ref(0)

function nextMascotSpeech() {
  activeSpeechIdx.value = (activeSpeechIdx.value + 1) % traconspeech.length
  activeMascotSlide.value = (activeMascotSlide.value + 1) % mascotImages.length
}

const products = ref([])

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


// Submit Lead
async function submitLead() {
  if (!leadForm.value.name || !leadForm.value.phone) {
    $q.notify({
      type: 'negative',
      message: 'Harap isi nama dan nomor telepon Anda.',
      position: 'top'
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
        address: 'Konsultasi Umum (Homepage)',
        product_name: 'Umum'
      }
    ])

  if (error) {
    console.error('Error saving lead to Supabase:', error)
    $q.notify({
      type: 'negative',
      message: 'Gagal mengirim data. Silakan coba lagi nanti.',
      position: 'top'
    })
    return
  }
  
  $q.notify({
    type: 'positive',
    message: `Terima kasih ${leadForm.value.name}, tim sales Citracon akan segera menghubungi WhatsApp Anda!`,
    position: 'top'
  })
  
  showModal.value = false
  leadForm.value = { name: '', phone: '' }
}

function scrollToElement(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style>
html {
  /* Smooth scroll hanya untuk klik anchor menu, bukan scroll programatik */
  scroll-behavior: auto;
}

/* Custom scroll reveal styling */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}

.reveal-active {
  opacity: 1;
  transform: translateY(0);
}

/* Transition Delays for Staggered Animations */
.delay-0 {
  transition-delay: 0ms;
}
.delay-150 {
  transition-delay: 150ms;
}
.delay-200 {
  transition-delay: 200ms;
}
.delay-300 {
  transition-delay: 300ms;
}
.delay-450 {
  transition-delay: 450ms;
}
.delay-600 {
  transition-delay: 600ms;
}

/* TRACON Mascot Animations */
@keyframes mascot-float {
  0%, 100% {
    transform: translateY(0px) rotate(-1deg);
  }
  25% {
    transform: translateY(-10px) rotate(1deg);
  }
  50% {
    transform: translateY(-16px) rotate(-1deg);
  }
  75% {
    transform: translateY(-8px) rotate(1deg);
  }
}

@keyframes bubble-pop {
  0% { transform: scale(1); }
  30% { transform: scale(1.05); }
  60% { transform: scale(0.97); }
  100% { transform: scale(1); }
}

.mascot-bounce {
  animation: mascot-float 3s ease-in-out infinite;
  transition: filter 0.2s;
}

.mascot-bounce:hover {
  filter: drop-shadow(0 8px 24px rgba(210, 29, 29, 0.3));
  animation-play-state: paused;
}

.mascot-bounce:active {
  animation: bubble-pop 0.4s ease-out forwards;
}

.mascot-bubble {
  animation: bubble-pop 0.6s ease-out;
}
</style>
