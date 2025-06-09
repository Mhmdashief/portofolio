<template>
  <header class="fixed top-0 left-0 right-0 z-50 glass-effect">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="text-2xl font-bold gradient-text">
          &lt;Dev/&gt;
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#home" class="text-gray-300 hover:text-white transition-colors duration-300">Home</a>
          <a href="#about" class="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#skills" class="text-gray-300 hover:text-white transition-colors duration-300">Skills</a>
          <a href="#projects" class="text-gray-300 hover:text-white transition-colors duration-300">Social Media</a>
          <a href="#contact" class="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden text-white focus:outline-none"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4">
        <div class="flex flex-col space-y-4">
          <a href="#home" @click="closeMobileMenu" class="text-gray-300 hover:text-white transition-colors duration-300">Home</a>
          <a href="#about" @click="closeMobileMenu" class="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#skills" @click="closeMobileMenu" class="text-gray-300 hover:text-white transition-colors duration-300">Skills</a>
          <a href="#projects" @click="closeMobileMenu" class="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#contact" @click="closeMobileMenu" class="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    }
  }
}
</script>