<template>
  <div class="min-h-screen bg-gradient-to-br from-[#0b1c3f] via-[#10224c] to-[#1e1b4b] flex items-center justify-center p-6 text-white overflow-hidden relative">
    <!-- Ambient glows -->
    <div class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#d21d1d]/15 blur-[100px] pointer-events-none"></div>
    <div class="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>

    <div class="relative z-10 max-w-lg w-full text-center">
      <!-- Glassmorphic Card -->
      <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl space-y-6">
        
        <!-- TRACON Mascot Container -->
        <div class="relative w-48 h-48 mx-auto flex items-center justify-center">
          <!-- Pulse animation glow behind mascot -->
          <div class="absolute inset-0 bg-[#d21d1d]/10 rounded-full animate-ping scale-75"></div>
          
          <img
            src="/tracon5.png"
            alt="TRACON Bingung"
            class="w-40 h-40 object-contain drop-shadow-2xl mascot-float cursor-pointer select-none"
            @click="playFunBubble"
            @error="e => e.target.src = 'favicon.ico'"
          />
        </div>

        <!-- 404 Text -->
        <div class="space-y-2">
          <div class="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#d21d1d] tracking-widest leading-none">
            404
          </div>
          <h1 class="text-xl md:text-2xl font-extrabold uppercase tracking-wide text-slate-100">
            Halaman Tidak Ditemukan
          </h1>
        </div>

        <!-- Fun Mascot message -->
        <div class="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-left relative">
          <!-- Speech bubble pointing up -->
          <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white/5"></div>
          
          <p class="text-xs md:text-sm text-slate-200 leading-relaxed text-center font-semibold">
            &ldquo;Waduh! Sepertinya Anda tersesat di luar area proyek konstruksi CITRACon. Yuk, saya antar kembali ke jalur utama!&rdquo;
          </p>
        </div>

        <!-- Button to go home -->
        <div class="pt-2">
          <q-btn
            unelevated
            to="/"
            class="px-8 py-3 bg-[#d21d1d] hover:bg-[#b21818] text-white font-extrabold tracking-wider uppercase rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm"
            no-caps
            label="Kembali ke Beranda"
            icon="home"
          />
        </div>

      </div>

      <!-- Footer credit -->
      <div class="text-[10px] text-slate-400 mt-6 tracking-widest uppercase">
        CITRACon Beton Precast &bull; K-500 Certified
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'

const $q = useQuasar()

function playFunBubble() {
  $q.notify({
    type: 'info',
    message: '👷‍♂️ Tenang, TRACON siap membantu Anda kembali ke jalan yang benar!',
    position: 'top',
    timeout: 2000
  })
}
</script>

<style scoped>
@keyframes mascot-float {
  0%, 100% {
    transform: translateY(0px) rotate(-1deg);
  }
  50% {
    transform: translateY(-12px) rotate(1deg);
  }
}

.mascot-float {
  animation: mascot-float 3s ease-in-out infinite;
}

.mascot-float:hover {
  filter: drop-shadow(0 8px 24px rgba(210, 29, 29, 0.4));
}
</style>
