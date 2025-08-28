<template>
    <div class="divider animation"></div>
    <div class="container items-center grid grid-cols-2 max-sm:grid-cols-1 max-sm:pt-14">
        <div class="pr-15 max-sm:pr-0 max-sm:text-center">
            <h3 class="text-heading text-h3 font-semibold">All Classic Control Panel Features</h3>
            <p class="text-lg text-typography font-light mt-4">Everything you expect from a hosting panel- just like in cPanel and DirectAdmin, but without unnecessary costs and restrictions.</p>
        </div>
        <div class="img-container flex pt-38 border-l border-border max-sm:border-none max-lg:pt-30 max-md:pt-24 max-sm:pt-14 border-animation">
            <img class="min-h-[450px] min-w-[607px] max-sm:min-w-full max-sm:min-h-full " src="../../assets/img/control-panel.png" alt="dashboard image">
        </div>
    </div>
    <div class="divider"></div>
    <div class="container items-center grid grid-cols-2 max-sm:grid-cols-1 max-sm:pt-14">
        <div class="img-container left-background flex justify-end pt-38 border-r border-border max-sm:border-none max-lg:pt-30 max-md:pt-24 max-sm:pt-14 max-sm:order-2">
            <img class="min-h-[450px] min-w-[607px] max-sm:min-w-full max-sm:min-h-full" src="../../assets/img/web-infrastructure.png" alt="dashboard image">
        </div>
        <div class="pr-15 max-sm:pr-0 pl-15 max-sm:pl-0 max-sm:order-1 max-sm:text-center">
            <h3 class="text-heading text-h3 font-semibold">Optional Separation of Email and Web Infrastructure</h3>
            <p class="text-lg text-typography font-light mt-4">Reduce costs and improve performance with the option to run email services separately - no need to store mail on expensive NVMe storage, giving you more flexibility and savings.</p>
        </div>
    </div>
    <div class="divider animation delay-1"></div>
    <div class="container items-center grid grid-cols-2 max-sm:grid-cols-1 max-sm:pt-14">
        <div class="pr-15 max-sm:pr-0 max-sm:text-center">
            <h3 class="text-heading text-h3 font-semibold">Advanced Dashboard for Server and User Management</h3>
            <p class="text-lg text-typography font-light mt-4">A powerful and intuitive control center that simplifies multi-server management and user distribution, ensuring a seamless experience for administrators</p>
        </div>
        <div class="img-container flex pt-38 border-l border-border max-sm:border-none max-lg:pt-30 max-md:pt-24 max-sm:pt-14 border-animation delay-1">
            <img class="min-h-[450px] min-w-[607px] max-sm:min-w-full max-sm:min-h-full" src="../../assets/img/super-dashboard.png" alt="dashboard image">
        </div>
    </div>
    <div class="divider"></div>
</template>

<style lang="scss" scoped>
.img-container{
    position: relative;
    overflow: hidden;
    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 143.75%);
        width: 100%;
        height: 100%;
    }
    &.left-background{
        &::after{
            background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 143.75%);
        }
    }
}
.border-animation{
    position: relative;
    &::before{
        content: '';
        width: 1px;
        background: linear-gradient(180deg, rgba(238, 150, 37, 0) 0%, #EE9625 50.5%, rgba(238, 150, 37, 0) 100%);
        top: -25%;
        height: 60px;
        position: absolute;
        left: 0;
        animation: borderAnimation 16s linear infinite;
    }
    @media(max-width: 768px){
        &::before{
            content: none;
        }
    }
    &.delay-1{
        &::before{
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50.5%, rgba(255, 255, 255, 0) 100%);
            animation: borderAnimation 16s linear infinite 3s;
        }
    }
}
.divider{
    width: 100%;
    height: 1px;
    background-color: var(--color-border);
    position: relative;
    overflow: hidden;
    &.animation{
        @media(min-width:768px){
            &::after{
                content: '';
                width: 100px;
                background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50.5%, rgba(255, 255, 255, 0) 100%);
                height: 1px;
                position: absolute;
                animation: dividerAnimation 32s ease infinite;
                right: -120px;
            }
        }
        &.delay-1{
            &::after{
                background: linear-gradient(90deg, rgba(238, 150, 37, 0) 0%, #EE9625 50.5%, rgba(238, 150, 37, 0) 100%);
                animation: dividerAnimation 32s linear infinite 4s;
            }
        }
    }
}
@keyframes dividerAnimation{
    0%{
        right: -120px;
    }
    50%{
        right: 100%;
    }
    100%{
        right: -120px;
    }
}
@keyframes borderAnimation{
    0%{
        top: -25%;
    }
    50%{
        top: 120%;
    }
    100%{
        top: -25%;
    }
}
</style>