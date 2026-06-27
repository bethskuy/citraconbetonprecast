<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Header / Navbar (Transparent Base with Floating Glass Card) -->
    <q-header class="bg-transparent text-slate-900 transition-all duration-300" style="box-shadow: none;">
      <q-toolbar class="max-w-7xl mx-auto px-4 md:px-8 py-3">
        <div :class="[
          isScrolled ? 'bg-white/55 border-white/30 shadow-md shadow-slate-200/10' : 'bg-white/35 border-white/20 shadow-sm',
          'w-full flex justify-between items-center px-6 py-2.5 rounded-2xl border backdrop-blur-2xl transition-all duration-300'
        ]">
          <!-- Brand Logo & Name -->
          <div class="flex items-center">
            <!-- Mobile Hamburger Button (hidden on desktop/laptop) -->
            <q-btn
              flat
              dense
              round
              icon="menu"
              aria-label="Menu"
              class="lt-md mr-3 text-[#0b1c3f] hover:text-[#d21d1d]"
              @click="toggleLeftDrawer"
            />

            <router-link to="/" class="flex items-center gap-2.5 no-underline">
              <img
                src="icons/favicon-128x128.png"
                class="w-8 h-8 object-contain rounded-lg border border-slate-200"
                alt="CITRACon Logo"
                @error="e => e.target.src = 'favicon.ico'"
              />
              <span class="text-xl font-bold tracking-tight text-[#0b1c3f] flex items-center">
                CITRA<span class="text-[#d21d1d] font-black">Con</span>
              </span>
            </router-link>
          </div>

          <!-- Desktop Navigation Links (hidden on mobile) -->
          <div class="gt-sm flex items-center gap-8">
            <template v-for="link in menuLinks" :key="link.title">
              <!-- Dropdown for Products -->
              <div v-if="link.title === 'Products'" class="relative cursor-pointer group">
                <span class="text-sm font-bold text-[#0b1c3f] hover:text-[#d21d1d] transition-colors duration-200 flex items-center gap-1">
                  {{ link.title }}
                  <q-icon name="keyboard_arrow_down" size="16px" />
                </span>

                <!-- Quasar Dropdown Menu with Scale Transition & Offset -->
                <q-menu
                  transition-show="scale"
                  transition-hide="scale"
                  :offset="[0, 10]"
                  class="bg-white/50 backdrop-blur-xl border border-white/20 rounded-xl py-2 min-w-[180px] shadow-lg overflow-hidden"
                >
                  <q-list>
                    <q-item
                      v-for="sub in link.subItems"
                      :key="sub.name"
                      clickable
                      v-close-popup
                      :to="sub.to"
                      class="hover:bg-slate-50/50 hover:text-[#d21d1d] text-[#0b1c3f] transition-all duration-300 py-2 px-4 hover:translate-x-1"
                    >
                      <q-item-section>
                        <q-item-label class="text-sm font-bold">{{ sub.name }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </div>

              <!-- Normal Link -->
              <router-link
                v-else-if="link.to"
                :to="link.to"
                class="text-sm font-bold text-[#0b1c3f] hover:text-[#d21d1d] transition-colors duration-200 no-underline cursor-pointer"
              >
                {{ link.title }}
              </router-link>
              <span
                v-else-if="link.action === 'whatsapp_choice'"
                @click="showWhatsAppChoice = true"
                class="text-sm font-bold text-[#0b1c3f] hover:text-[#d21d1d] transition-colors duration-200 no-underline cursor-pointer"
              >
                {{ link.title }}
              </span>
              <!-- Anchor scroll link (uses JS smooth scroll, not CSS) -->
              <span
                v-else-if="link.anchor"
                @click="smoothScrollTo(link.anchor)"
                class="text-sm font-bold text-[#0b1c3f] hover:text-[#d21d1d] transition-colors duration-200 no-underline cursor-pointer"
              >
                {{ link.title }}
              </span>
              <a
                v-else
                :href="link.href"
                :target="link.external ? '_blank' : undefined"
                class="text-sm font-bold text-[#0b1c3f] hover:text-[#d21d1d] transition-colors duration-200 no-underline cursor-pointer"
              >
                {{ link.title }}
              </a>
            </template>
          </div>

          <!-- Action Button (WhatsApp) -->
          <div class="flex items-center">
            <button
              @click="showWhatsAppChoice = true"
              class="gt-sm inline-flex items-center px-6 py-2.5 rounded-full bg-[#d21d1d] hover:bg-[#b21818] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-95 border-0"
            >
              Order Sekarang
            </button>
            <!-- Mobile Contact Icon -->
            <q-btn
              flat
              round
              dense
              icon="phone"
              class="lt-md text-[#d21d1d]"
              @click="showWhatsAppChoice = true"
            />
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Sidebar / Drawer (Only toggled on mobile) -->
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      overlay
      behavior="mobile"
      class="bg-[#050b18] text-white relative overflow-hidden"
      style="border-right: 1px solid rgba(255, 255, 255, 0.1) !important;"
    >
      <!-- Ambient Glows (Footer Style) -->
      <div class="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-[#d21d1d]/15 blur-[60px] pointer-events-none"></div>
      <div class="absolute bottom-[-50px] right-[-50px] w-[250px] h-[250px] rounded-full bg-[#3b82f6]/20 blur-[70px] pointer-events-none"></div>

      <q-list class="p-4 relative z-10">
        <div class="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <span class="text-lg font-bold text-white flex items-center gap-3">
            <div class="relative flex items-center justify-center shrink-0">
              <!-- Glow backplane with brand gradient colors -->
              <div class="absolute -inset-1.5 rounded-lg bg-gradient-to-r from-[#d21d1d] to-[#3b82f6] opacity-75 blur-md"></div>
              <!-- High-res Logo -->
              <img 
                src="icons/favicon-128x128.png" 
                class="relative w-7 h-7 rounded-lg border border-white/20 bg-[#050b18] p-0.5 object-contain" 
                alt="CITRACon Logo" 
              />
            </div>
            CITRACon
          </span>
          <q-btn flat round icon="close" size="sm" @click="toggleLeftDrawer" />
        </div>

        <template v-for="link in menuLinks" :key="link.title">
          <!-- Expansion Item for Products on Mobile -->
          <q-expansion-item
            v-if="link.title === 'Products'"
            label="Products"
            icon="layers"
            header-class="text-slate-200 font-bold text-sm rounded-xl mb-1 hover:bg-white/10"
            expand-icon-class="text-slate-300"
            class="rounded-xl mb-2"
          >
            <q-list class="pl-4">
              <q-item
                v-for="sub in link.subItems"
                :key="sub.name"
                clickable
                v-ripple
                :to="sub.to"
                @click="leftDrawerOpen = false"
                class="rounded-xl mb-1 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
              >
                <q-item-section>
                  <q-item-label class="font-bold text-xs">{{ sub.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <!-- Normal Link -->
          <q-item
            v-else-if="link.to"
            clickable
            v-ripple
            :to="link.to"
            @click="leftDrawerOpen = false"
            class="rounded-xl mb-2 text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
          >
            <q-item-section avatar class="min-w-[40px]">
              <q-icon :name="link.icon" class="text-slate-300" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="font-bold text-sm">{{ link.title }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            v-else-if="link.action === 'whatsapp_choice'"
            clickable
            v-ripple
            @click="showWhatsAppChoice = true; leftDrawerOpen = false"
            class="rounded-xl mb-2 text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
          >
            <q-item-section avatar class="min-w-[40px]">
              <q-icon :name="link.icon" class="text-slate-300" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="font-bold text-sm">{{ link.title }}</q-item-label>
            </q-item-section>
          </q-item>

          <!-- Anchor scroll link for mobile (JS smooth scroll) -->
          <q-item
            v-else-if="link.anchor"
            clickable
            v-ripple
            @click="smoothScrollTo(link.anchor); leftDrawerOpen = false"
            class="rounded-xl mb-2 text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
          >
            <q-item-section avatar class="min-w-[40px]">
              <q-icon :name="link.icon" class="text-slate-300" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="font-bold text-sm">{{ link.title }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            v-else
            clickable
            v-ripple
            tag="a"
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            @click="leftDrawerOpen = false"
            class="rounded-xl mb-2 text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
          >
            <q-item-section avatar class="min-w-[40px]">
              <q-icon :name="link.icon" class="text-slate-300" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="font-bold text-sm">{{ link.title }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>

        <!-- Mobile WhatsApp Button -->
        <q-item
          clickable
          v-ripple
          @click="showWhatsAppChoice = true; leftDrawerOpen = false"
          class="rounded-full mt-6 bg-[#d21d1d] text-white font-bold text-center hover:bg-[#b21818] transition-colors shadow-md py-3"
        >
          <q-item-section>
            <q-item-label>Order Sekarang via WhatsApp</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Main Content Page -->
    <q-page-container class="bg-[#f8fafc] min-h-screen text-slate-800 flex flex-col justify-between">
      <div class="flex-grow">
        <router-view />
      </div>

      <!-- Dark container wrapper to project a rich dark base underneath the transparent glass footer -->
      <div class="bg-[#050b18] w-full">
        <!-- Premium Corporate Footer (Glassmorphism Style) -->
        <footer class="relative bg-[#0b1c3f]/50 backdrop-blur-2xl glass-shine text-slate-200 pt-16 pb-8 border-t border-white/20 shadow-2xl overflow-hidden">
          <!-- Inner Ambient Glass Glows -->
          <div class="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[#d21d1d]/12 blur-[80px] pointer-events-none"></div>
          <div class="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] rounded-full bg-[#3b82f6]/15 blur-[90px] pointer-events-none"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          <!-- Col 1: Brand Info (4/12 cols) -->
          <div class="md:col-span-4 space-y-4">
            <div class="flex items-center gap-2.5">
              <img
                src="icons/favicon-128x128.png"
                class="w-9 h-9 object-contain rounded-lg border border-slate-700 bg-white p-1"
                alt="CITRACon Logo"
              />
              <span class="text-2xl font-bold tracking-tight text-white">
                CITRA<span class="text-[#d21d1d] font-black">Con</span>
              </span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed max-w-sm">
              Produsen dan mitra konstruksi beton pracetak (precast concrete) utama berskala nasional bersertifikasi SNI. Berkomitmen menghadirkan presisi tinggi, kekuatan, dan ketahanan untuk infrastruktur Indonesia.
            </p>
            <div class="flex items-center gap-3 pt-2">
              <!-- Instagram -->
              <a
                href="https://instagram.com/citraconbetonprecast"
                target="_blank"
                class="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#d21d1d] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 no-underline"
                title="Instagram Citracon"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <!-- TikTok -->
              <a
                href="https://tiktok.com/@cvcitraelvanoberkah"
                target="_blank"
                class="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#d21d1d] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 no-underline"
                title="TikTok Citracon"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.43-.43-.64-.67-.07 3.26-.03 6.52-.05 9.77-.1 1.92-.85 3.86-2.38 5.05-1.58 1.27-3.78 1.72-5.76 1.43-2.27-.33-4.39-1.78-5.38-3.87-1.12-2.27-.89-5.18.63-7.2 1.44-1.92 3.93-2.88 6.28-2.51v4.03c-1.32-.4-2.83.07-3.67 1.18-.89 1.1-.98 2.7-.27 3.86.71 1.17 2.14 1.79 3.5 1.57 1.28-.19 2.29-1.26 2.37-2.56.09-3.26.04-6.52.06-9.78-.02-3.14-.02-6.28-.02-9.42z"/>
                </svg>
              </a>
            </div>

          </div>

          <!-- Col 2: Katalog Produk (3/12 cols) -->
          <div class="md:col-span-3 space-y-4">
            <h4 class="text-sm font-bold uppercase tracking-wider text-white mb-4">Katalog Produk</h4>
            <ul class="space-y-2.5 text-xs text-slate-300 list-none p-0 m-0">
              <li><router-link to="/produk/1" class="text-slate-300 hover-link-footer"><span class="link-text">Saluran U-Ditch</span></router-link></li>
              <li><router-link to="/produk/2" class="text-slate-300 hover-link-footer"><span class="link-text">Pipa Beton (RCP)</span></router-link></li>
              <li><router-link to="/produk/3" class="text-slate-300 hover-link-footer"><span class="link-text">Box Culvert</span></router-link></li>
              <li><router-link to="/produk/4" class="text-slate-300 hover-link-footer"><span class="link-text">Buis Beton</span></router-link></li>
              <li><router-link to="/produk/5" class="text-slate-300 hover-link-footer"><span class="link-text">Kansteen Jalan</span></router-link></li>
              <li><router-link to="/produk/6" class="text-slate-300 hover-link-footer"><span class="link-text">Panel Pagar Beton</span></router-link></li>
            </ul>
          </div>

          <!-- Col 3: Navigasi (2/12 cols) -->
          <div class="md:col-span-2 space-y-4">
            <h4 class="text-sm font-bold uppercase tracking-wider text-white mb-4">Perusahaan</h4>
            <ul class="space-y-2.5 text-xs text-slate-300 list-none p-0 m-0">
              <li><router-link to="/" class="text-slate-300 hover-link-footer"><span class="link-text">Beranda</span></router-link></li>
              <li><span @click="smoothScrollTo('profil-perusahaan')" class="text-slate-300 hover-link-footer cursor-pointer"><span class="link-text">Tentang Kami</span></span></li>
              <li><span @click="smoothScrollTo('galeri-kerja')" class="text-slate-300 hover-link-footer cursor-pointer"><span class="link-text">Portofolio</span></span></li>
              <li><span @click="smoothScrollTo('tracon')" class="text-slate-300 hover-link-footer cursor-pointer"><span class="link-text">Maskot TRACON</span></span></li>
              <li><span @click="showWhatsAppChoice = true" class="text-slate-300 hover-link-footer cursor-pointer"><span class="link-text">Hubungi Sales</span></span></li>
            </ul>
          </div>

          <!-- Col 4: Hubungi Kami (3/12 cols) -->
          <div class="md:col-span-3 space-y-4">
            <h4 class="text-sm font-bold uppercase tracking-wider text-white mb-4">Hubungi Kami</h4>
            <q-list class="text-xs text-slate-300 q-pa-none">
              <!-- Alamat -->
              <q-item class="q-px-none q-py-xs min-h-0 items-start text-xs text-slate-300">
                <q-item-section avatar class="min-w-0 q-pr-sm mt-0.5 text-slate-300">
                  <q-icon name="place" size="16px" class="text-slate-300" />
                </q-item-section>
                <q-item-section class="text-slate-300 leading-relaxed">
                  Jl. Tegal Danas No.18a, Sertajaya, Kec. Cikarang Tim., Kabupaten Bekasi, Jawa Barat 17530
                </q-item-section>
              </q-item>

              <!-- WhatsApp 1 -->
              <q-item class="q-px-none q-py-xs min-h-0 items-center text-xs text-slate-300">
                <q-item-section avatar class="min-w-0 q-pr-sm text-slate-300">
                  <q-icon name="chat" size="16px" class="text-slate-300" />
                </q-item-section>
                <q-item-section class="text-slate-300">
                  <a href="https://wa.me/6281398354196" target="_blank" class="text-slate-300 hover:text-white transition-all duration-300 no-underline hover-underline-left inline-block w-fit self-start">0813-9835-4196</a>
                </q-item-section>
              </q-item>

              <!-- WhatsApp 2 -->
              <q-item class="q-px-none q-py-xs min-h-0 items-center text-xs text-slate-300">
                <q-item-section avatar class="min-w-0 q-pr-sm text-slate-300">
                  <q-icon name="chat" size="16px" class="text-slate-300" />
                </q-item-section>
                <q-item-section class="text-slate-300">
                  <a href="https://wa.me/6285695660902" target="_blank" class="text-slate-300 hover:text-white transition-all duration-300 no-underline hover-underline-left inline-block w-fit self-start">0856-9566-0902</a>
                </q-item-section>
              </q-item>

              <!-- Email -->
              <q-item class="q-px-none q-py-xs min-h-0 items-center text-xs text-slate-300">
                <q-item-section avatar class="min-w-0 q-pr-sm text-slate-300">
                  <q-icon name="mail" size="16px" class="text-slate-300" />
                </q-item-section>
                <q-item-section class="text-slate-300">
                  <a href="mailto:citraelvanoberkah.adm@gmail.com" class="text-slate-300 hover:text-white transition-all duration-300 no-underline hover-underline-left inline-block w-fit self-start">citraelvanoberkah.adm@gmail.com</a>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>

        <!-- Copyright Bar -->
        <div class="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            &copy; 2026 Citracon Beton Precast. All rights reserved.
          </div>
          <div class="flex items-center gap-6">
            <span @click="openPrivacyDialog" class="cursor-pointer text-slate-400 hover:text-white transition-all duration-300 no-underline hover-underline-left inline-block">Kebijakan Privasi</span>
            <span @click="openTermsDialog" class="cursor-pointer text-slate-400 hover:text-white transition-all duration-300 no-underline hover-underline-left inline-block">Syarat & Ketentuan</span>
          </div>
        </div>


      </footer>
    </div>
  </q-page-container>

    <!-- Dialog Kebijakan Privasi -->
    <q-dialog v-model="showPrivacyDialog" backdrop-filter="blur(4px)" no-refocus no-focus>
      <q-card class="bg-white text-slate-800" style="width: 700px; max-width: 90vw; border-radius: 16px;">
        <q-card-section class="row items-center q-pb-none bg-[#0b1c3f] text-white p-5">
          <div class="text-h6 font-bold flex items-center gap-2">
            <q-icon name="security" size="24px" class="text-yellow-400" />
            Kebijakan Privasi - CITRACon
          </div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup class="text-white hover:bg-white/10" />
        </q-card-section>

        <q-card-section class="q-pa-md scroll" style="max-height: 60vh;">
          <div class="text-xs text-slate-500 mb-4">Terakhir diperbarui: 26 Juni 2026</div>

          <p class="leading-relaxed">
            Selamat datang di <strong>CITRACon</strong> (Citracon Beton Precast). Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan menjaga data Anda saat berinteraksi dengan layanan kami.
          </p>

          <h5 class="text-sm font-bold text-[#0b1c3f] mt-4 mb-2 uppercase tracking-wide">1. Informasi yang Kami Kumpulkan</h5>
          <p class="leading-relaxed">
            Kami mengumpulkan informasi yang Anda berikan secara langsung saat menggunakan formulir konsultasi, melakukan pemesanan, atau menghubungi sales kami, termasuk namun tidak terbatas pada: nama lengkap, nomor WhatsApp/telepon, alamat email, serta alamat pengiriman atau detail proyek konstruksi Anda.
          </p>

          <h5 class="text-sm font-bold text-[#0b1c3f] mt-4 mb-2 uppercase tracking-wide">2. Penggunaan Informasi Anda</h5>
          <p class="leading-relaxed">
            Informasi yang kami kumpulkan digunakan untuk:
          </p>
          <ul class="list-disc pl-5 space-y-1 mb-3">
            <li>Menghubungi Anda kembali untuk konsultasi estimasi kebutuhan beton pracetak.</li>
            <li>Memproses pesanan, memverifikasi pembayaran, dan mengoordinasikan pengiriman armada logistik.</li>
            <li>Mengirimkan informasi promosi berkala jika Anda menyetujuinya.</li>
            <li>Meningkatkan kualitas pelayanan dan fungsionalitas situs web kami.</li>
          </ul>

          <h5 class="text-sm font-bold text-[#0b1c3f] mt-4 mb-2 uppercase tracking-wide">3. Perlindungan & Keamanan Data</h5>
          <p class="leading-relaxed">
            Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang ketat untuk mencegah akses tanpa izin, kehilangan, perubahan, atau pengungkapan data pribadi Anda. Data Anda disimpan di server yang aman dan hanya dapat diakses oleh staf berwenang.
          </p>

          <h5 class="text-sm font-bold text-[#0b1c3f] mt-4 mb-2 uppercase tracking-wide">4. Penyebaran Informasi ke Pihak Ketiga</h5>
          <p class="leading-relaxed">
            Kami tidak akan pernah menjual, menyewakan, atau memperdagangkan data pribadi Anda kepada pihak ketiga. Kami hanya membagikan informasi terbatas (seperti alamat proyek dan kontak penerima) kepada mitra logistik/pengiriman kami semata-mata untuk kelancaran distribusi produk ke lokasi Anda.
          </p>

          <h5 class="text-sm font-bold text-[#0b1c3f] mt-4 mb-2 uppercase tracking-wide">5. Hak Anda sebagai Pengguna</h5>
          <p class="leading-relaxed">
            Anda berhak meminta akses ke data pribadi Anda yang kami simpan, meminta koreksi atas kesalahan informasi, atau meminta penghapusan data pribadi Anda dari sistem kami kapan saja dengan menghubungi kami melalui saluran email resmi.
          </p>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right" class="bg-slate-50 p-4">
          <q-btn label="Saya Mengerti" color="primary" class="bg-[#0b1c3f] font-bold rounded-lg px-4 py-2" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Dialog Syarat & Ketentuan -->
    <q-dialog v-model="showTermsDialog" backdrop-filter="blur(4px)" no-refocus no-focus>
      <q-card class="bg-white text-slate-800" style="width: 700px; max-width: 90vw; border-radius: 16px;">
        <q-card-section class="row items-center q-pb-none bg-[#0b1c3f] text-white p-5">
          <div class="text-h6 font-bold flex items-center gap-2">
            <q-icon name="gavel" size="24px" class="text-yellow-400" />
            Syarat & Ketentuan - CITRACon
          </div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup class="text-white hover:bg-white/10" />
        </q-card-section>

        <q-card-section class="q-pa-md scroll" style="max-height: 60vh;">
          <div class="text-xs text-slate-500 mb-4">Terakhir diperbarui: 26 Juni 2026</div>

          <p class="leading-relaxed">
            Syarat & Ketentuan ini mengatur penggunaan situs web dan layanan pembelian beton pracetak dari <strong>CITRACon</strong>. Dengan mengunjungi situs kami atau melakukan pemesanan produk, Anda setuju untuk terikat oleh ketentuan di bawah ini.
          </p>

          <h5 class="text-sm font-bold text-[#0b1c3f] mt-4 mb-2 uppercase tracking-wide">1. Penerimaan Syarat & Ketentuan</h5>
          <p class="leading-relaxed">
            Jika Anda tidak menyetujui bagian mana pun dari syarat dan ketentuan ini, Anda disarankan untuk tidak menggunakan situs ini atau melakukan transaksi pemesanan produk beton precast kami.
          </p>

          <h5 class="text-sm font-bold text-[#0b1c3f] mt-4 mb-2 uppercase tracking-wide">2. Spesifikasi Produk & Mutu Beton</h5>
          <p class="leading-relaxed">
            Seluruh produk beton pracetak kami diproduksi secara presisi dengan sertifikasi standar nasional Indonesia (SNI). Detail ukuran dimensi (panjang, lebar, diameter, ketebalan) serta kelas mutu beton (seperti K-350, K-400) yang tertera di situs merupakan referensi standar resmi. Klien wajib mengonfirmasi kebutuhan spesifikasi khusus proyek sebelum pemesanan diproduksi massal.
          </p>

          <h5 class="text-sm font-bold text-[#0b1c3f] mt-4 mb-2 uppercase tracking-wide">3. Prosedur Pemesanan & Pembayaran</h5>
          <ul class="list-disc pl-5 space-y-1 mb-3 leading-relaxed">
            <li>Pemesanan dianggap sah apabila klien telah menyetujui Surat Penawaran Harga (SPH) resmi dan Surat Perjanjian Kerja (SPK).</li>
            <li>Pembayaran uang muka (down payment) sebesar persentase yang disepakati wajib diselesaikan sebelum proses fabrikasi precast atau penjadwalan pengiriman dimulai.</li>
            <li>Pelunasan wajib dilakukan sesuai dengan termin pembayaran yang tertulis di dalam dokumen perjanjian kerja resmi.</li>
          </ul>

          <h5 class="text-sm font-bold text-[#0b1c3f] mt-4 mb-2 uppercase tracking-wide">4. Pengiriman & Akses Jalan Lokasi Proyek</h5>
          <p class="leading-relaxed">
            Klien bertanggung jawab untuk memastikan bahwa akses jalan menuju lokasi proyek layak dan aman dilalui oleh armada truk mixer atau truk pengangkut precast berat kami. Klien juga wajib menyediakan perizinan setempat (keamanan, lingkungan, dinas perhubungan jika diperlukan) untuk aktivitas bongkar muat precast di lokasi.
          </p>

          <h5 class="text-sm font-bold text-[#0b1c3f] mt-4 mb-2 uppercase tracking-wide">5. Pembatalan & Pengembalian</h5>
          <p class="leading-relaxed">
            Produk precast yang dicetak secara custom (sesuai pesanan khusus/spesial non-standar) tidak dapat dibatalkan atau dikembalikan setelah proses fabrikasi cetakan dimulai di pabrik kami. Pembatalan produk standar tunduk pada biaya administrasi dan penalti yang diatur terpisah dalam SPK.
          </p>

          <h5 class="text-sm font-bold text-[#0b1c3f] mt-4 mb-2 uppercase tracking-wide">6. Hukum yang Mengatur</h5>
          <p class="leading-relaxed">
            Syarat dan ketentuan ini diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap perselisihan yang timbul dari transaksi ini akan diselesaikan secara musyawarah mufakat, atau melalui jalur hukum pengadilan negeri yang berwenang di Jawa Barat/DKI Jakarta.
          </p>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right" class="bg-slate-50 p-4">
          <q-btn label="Saya Setuju" color="primary" class="bg-[#0b1c3f] font-bold rounded-lg px-4 py-2" v-close-popup />
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
              href="https://wa.me/6281398354196"
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
              href="https://wa.me/6285695660902"
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
  </q-layout>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const menuLinks = [
  {
    title: 'Home',
    icon: 'home',
    to: '/',
  },
  {
    title: 'About',
    icon: 'info',
    anchor: 'profil-perusahaan',
  },
  {
    title: 'Products',
    icon: 'layers',
    href: '/#produk',
    subItems: [
      { name: 'U-Ditch', to: '/produk/1' },
      { name: 'Pipa Beton (RCP)', to: '/produk/2' },
      { name: 'Box Culvert', to: '/produk/3' },
      { name: 'Buis Beton', to: '/produk/4' },
      { name: 'Kansteen', to: '/produk/5' },
      { name: 'Panel Pagar', to: '/produk/6' },
    ]
  },
  {
    title: 'Projects',
    icon: 'work',
    anchor: 'galeri-kerja',
  },
  {
    title: 'TRACON',
    icon: 'business',
    anchor: 'tracon',
  },
  {
    title: 'Contact',
    icon: 'phone',
    anchor: 'kontak',
  },
]

const leftDrawerOpen = ref(false)
const isScrolled = ref(false)
const showPrivacyDialog = ref(false)
const showTermsDialog = ref(false)
const showWhatsAppChoice = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function openPrivacyDialog() {
  showPrivacyDialog.value = true
}

function openTermsDialog() {
  showTermsDialog.value = true
}

// Smooth scroll via JS (not CSS) so Quasar dialog restore won't trigger animation
async function smoothScrollTo(anchorId) {
  if (route.path !== '/') {
    await router.push('/')
    setTimeout(() => {
      const el = document.getElementById(anchorId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 350)
  } else {
    // Wait for mobile drawer to finish closing animation (300ms) 
    // to prevent Quasar scroll locking from interrupting the animation
    setTimeout(() => {
      const el = document.getElementById(anchorId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 300)
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initialize state in case page is loaded already scrolled
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* Remove shadow from header */
.q-header {
  box-shadow: none !important;
}
</style>
