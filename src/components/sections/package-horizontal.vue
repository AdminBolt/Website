<template>
    <div class="container-sm">
        <div class="flex flex-col gap-y-8">
            <a href="#contact" class="package flex gap-x-6 bg-ui-block rounded-lg p-8 max-sm:flex-col max-sm:items-center max-sm:gap-y-4 transition-all border border-border">
                <div class=""><standaloneIcon></standaloneIcon></div>
                <div class="flex flex-col gap-y-3 max-sm:items-center">
                    <p class=" package-title text-start transition-all text-heading text-h4 font-semibold max-sm:text-center">Adminbolt Standalone</p>
                    <p class="text-start text-typography-lighter text-md max-sm:text-center font-light">A simple control panel for a single VM or personal server, with no limits except a maximum of 2 user accounts.</p>
                </div>
                <div class="price flex flex-col gap-y-3 items-end max-sm:items-center max-sm:w-full sm:justify-between">
                    <p class="text-nowrap text-heading text-h4 font-semibold">$5 USD<span class="text-typography-lighter text-sm font-light"> /month</span></p>
                    <BtnPrimary url="#contact" class="max-h-12 text-nowrap max-w-29 max-sm:w-full max-sm:max-w-full py-3 px-4" text="Contact Us"></BtnPrimary>
                </div>
            </a>
            <a href="#contact" class="package flex gap-x-6 bg-ui-block rounded-lg p-8 max-sm:flex-col max-sm:items-center max-sm:gap-y-4 transition-all border border-border">
                <div class=""><VirtualMachine></VirtualMachine></div>
                <div class="flex flex-col gap-y-3 max-sm:items-center">
                    <p class=" package-title text-start transition-all text-heading text-h4 font-semibold max-sm:text-center">Adminbolt for Virtual Machines</p>
                    <p class="text-start text-typography-lighter text-md max-sm:text-center font-light">A lightweight and efficient control panel for VPS and cloud instances, designed for fast deployment, automation, and seamless management without extra costs.</p>
                </div>
                <div class="price flex flex-col gap-y-3 items-end max-sm:items-center max-sm:w-full sm:justify-between">
                    <p class="text-nowrap text-heading text-h4 font-semibold">$20 USD<span class="text-typography-lighter text-sm font-light"> /month</span></p>
                    <BtnPrimary url="#contact" class="max-h-12 text-nowrap max-w-29 max-sm:w-full max-sm:max-w-full py-3 px-4" text="Contact Us"></BtnPrimary>
                </div>
            </a>
            <a href="#contact" class="package flex gap-x-6 bg-ui-block rounded-lg p-8 max-sm:flex-col max-sm:items-center max-sm:gap-y-4 transition-all border border-border">
                <div class=""><BareMetal></BareMetal></div>
                <div class="flex flex-col gap-y-3">
                    <p class=" package-title text-start transition-all text-heading text-h4 font-semibold max-sm:text-center">Adminbolt for Bare Metal</p>
                    <p class="text-start text-typography-lighter text-md max-sm:text-center font-light">A powerful control panel for dedicated servers, giving you full control, advanced security, and a streamlined experience without unnecessary overhead.</p>
                </div>
                <div class="price flex flex-col gap-y-3 items-end max-sm:items-center max-sm:w-full sm:justify-between">
                    <p class="text-nowrap text-heading text-h4 font-semibold ">$45 USD<span class="text-typography-lighter text-sm font-light"> /month</span></p>
                    <BtnPrimary url="#contact" class="max-h-12 text-nowrap max-w-29 max-sm:w-full max-sm:max-w-full py-3 px-4" text="Contact Us"></BtnPrimary>
                </div>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .package{
        &:hover{
            background: #0E0F11;
            .package-title{
                color: #EE9625;
            }
        }
    }
</style>