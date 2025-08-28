<template>
    <div class="container flex items-center justify-between py-4">
        <div class="flex items-center animate-fadeIn">
            <LogoAdminbolt class="hover:opacity-90 transition-all duration-300 hover:scale-105"></LogoAdminbolt>
        </div>
        <nav class="hidden md:flex items-center space-x-10">
            <a href="/docs" 
               class="group relative px-1 py-2 text-gray-100 font-medium text-[15px] tracking-wide hover:text-white transition-all duration-300 animate-slideDown hover:-translate-y-0.5"
               style="animation-delay: 100ms">
                Docs
                <span class="absolute bottom-0 left-0 w-full h-[2px] bg-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                <span class="absolute -inset-1 scale-x-0 group-hover:scale-100 transition-transform duration-300 bg-white/5 rounded-lg"></span>
            </a>
            <a href="/community" 
               class="group relative px-1 py-2 text-gray-100 font-medium text-[15px] tracking-wide hover:text-white transition-all duration-300 animate-slideDown hover:-translate-y-0.5"
               style="animation-delay: 200ms">
                Community
                <span class="absolute bottom-0 left-0 w-full h-[2px] bg-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                <span class="absolute -inset-1 scale-x-0 group-hover:scale-100 transition-transform duration-300 bg-white/5 rounded-lg"></span>
            </a>
            <a href="/client-area" 
               class="group relative px-1 py-2 text-gray-100 font-medium text-[15px] tracking-wide hover:text-white transition-all duration-300 animate-slideDown hover:-translate-y-0.5"
               style="animation-delay: 300ms">
                Client Area
                <span class="absolute bottom-0 left-0 w-full h-[2px] bg-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                <span class="absolute -inset-1 scale-x-0 group-hover:scale-100 transition-transform duration-300 bg-white/5 rounded-lg"></span>
            </a>
        </nav>
        <div class="flex items-center animate-fadeIn" style="animation-delay: 400ms">
            <BtnPrimary 
                :animation=true 
                url="#contact" 
                class="max-h-12 py-3 px-6 max-sm:text-[13px] shadow-lg hover:shadow-xl transition-all duration-300" 
                text="Contact Us">
            </BtnPrimary>
        </div>
    </div>
</template>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeIn {
    animation: fadeIn 0.6s ease-out forwards;
}

.animate-slideDown {
    animation: slideDown 0.6s ease-out forwards;
}
</style>