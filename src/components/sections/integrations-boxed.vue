<template>
    <div class="container ">
        <div class="flex gap-8 flex-wrap justify-center row max-sm:gap-6">
            <a href="#contact" class="box cursor-pointer h-32 min-w-[calc(20%-26px)] max-md:min-w-[calc(33%-21px)] max-sm:max-md:min-w-full min-h-[200px] max-sm:min-h-[104px] bg-ui-block hover:bg-ui-block-hover flex flex-col gap-y-5 justify-center items-center rounded-sm border border-border max-sm:flex-row max-sm:gap-x-5 transition-all" >
                <CloudlinuxIcon></CloudlinuxIcon>
                <span class="text-typography transition-all text-lg font-semibold md">CloudLinux</span>
            </a>
            <a href="#contact" class="box cursor-pointer h-32 min-w-[calc(20%-26px)] max-md:min-w-[calc(33%-21px)] max-sm:max-md:min-w-full min-h-[200px] max-sm:min-h-[104px] bg-ui-block hover:bg-ui-block-hover flex flex-col gap-y-5 justify-center items-center rounded-sm border border-border max-sm:flex-row max-sm:gap-x-5 transition-all" >
                <ImunifyIcon></ImunifyIcon>
                <span class="text-typography transition-all text-lg font-semibold md">Imunify</span>
            </a>
            <a href="#contact" class="box cursor-pointer h-32 min-w-[calc(20%-26px)] max-md:min-w-[calc(33%-21px)] max-sm:max-md:min-w-full min-h-[200px] max-sm:min-h-[104px] bg-ui-block hover:bg-ui-block-hover flex flex-col gap-y-5 justify-center items-center rounded-sm border border-border max-sm:flex-row max-sm:gap-x-5 transition-all" >
                <LitespeedIcon></LitespeedIcon>
                <span class="text-typography transition-all text-lg font-semibold md">LiteSpeed</span>
            </a>
            <a href="#contact" class="box cursor-pointer h-32 min-w-[calc(20%-26px)] max-md:min-w-[calc(33%-21px)] max-sm:max-md:min-w-full min-h-[200px] max-sm:min-h-[104px] bg-ui-block hover:bg-ui-block-hover flex flex-col gap-y-5 justify-center items-center rounded-sm border border-border max-sm:flex-row max-sm:gap-x-5 transition-all" >
                <WhmcsIcon></WhmcsIcon>
                <span class="text-typography transition-all text-lg font-semibold md">WHMCS</span>
            </a>
            <a href="#contact" class="box cursor-pointer h-32 min-w-[calc(20%-26px)] max-md:min-w-[calc(33%-21px)] max-sm:max-md:min-w-full min-h-[200px] max-sm:min-h-[104px] bg-ui-block hover:bg-ui-block-hover flex flex-col gap-y-5 justify-center items-center rounded-sm border border-border max-sm:flex-row max-sm:gap-x-5 transition-all" >
                <UpmindIcon></UpmindIcon>
                <span class="text-typography transition-all text-lg font-semibold md">Upmind</span>
            </a>
            <a href="#contact" class="box cursor-pointer h-32 min-w-[calc(20%-26px)] max-md:min-w-[calc(33%-21px)] max-sm:max-md:min-w-full min-h-[200px] max-sm:min-h-[104px] bg-ui-block hover:bg-ui-block-hover flex flex-col gap-y-5 justify-center items-center rounded-sm border border-border max-sm:flex-row max-sm:gap-x-5 transition-all" >
                <HostbillIcon></HostbillIcon>
                <span class="text-typography transition-all text-lg font-semibold md">HostBill</span>
            </a>
            <a href="#contact" class="box cursor-pointer h-32 min-w-[calc(20%-26px)] max-md:min-w-[calc(33%-21px)] max-sm:max-md:min-w-full min-h-[200px] max-sm:min-h-[104px] bg-ui-block hover:bg-ui-block-hover flex flex-col gap-y-5 justify-center items-center rounded-sm border border-border max-sm:flex-row max-sm:gap-x-5 transition-all" >
                <SoftaculousIcon></SoftaculousIcon>
                <span class="text-typography transition-all text-lg font-semibold md">Softaculous</span>
            </a>
            <a href="#contact" class="box cursor-pointer h-32 min-w-[calc(20%-26px)] max-md:min-w-[calc(33%-21px)] max-sm:max-md:min-w-full min-h-[200px] max-sm:min-h-[104px] bg-ui-block hover:bg-ui-block-hover flex flex-col gap-y-5 justify-center items-center rounded-sm border border-border max-sm:flex-row max-sm:gap-x-5 transition-all" >
                <MailchannelsIcon></MailchannelsIcon>
                <span class="text-typography transition-all text-lg font-semibold md">MailChannels</span>
            </a>
            <a href="#contact" class="box cursor-pointer h-32 min-w-[calc(20%-26px)] max-md:min-w-[calc(33%-21px)] max-sm:max-md:min-w-full min-h-[200px] max-sm:min-h-[104px] bg-ui-block hover:bg-ui-block-hover flex flex-col gap-y-5 justify-center items-center rounded-sm border border-border max-sm:flex-row max-sm:gap-x-5 transition-all" >
                <LetsencryptIcon></LetsencryptIcon>
                <span class="text-typography transition-all text-lg font-semibold md">Let's Encrypt</span>
            </a>
        </div>
        <div class="flex justify-center mt-12">
            <BtnPrimaryOutline :animation=true url="#contact" text="Contact Us"></BtnPrimaryOutline>
        </div>
    </div>
</template>

<style lang="scss">
.box{
    svg{
        path{
            transition: all 0.3s ease;
        }
    }
    &:hover{
        span{
          color: var(--color-primary-600);
        }
        svg{
            path{
                fill: var(--color-primary-600);
            }
        }
    }
}
</style>