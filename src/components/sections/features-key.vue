<template>
    <div class="divider animation"></div>
    <div class="container grid grid-cols-2 max-sm:grid-cols-1 mobile-divider overflow-hidden">
        <div class="py-20 pr-15 max-lg:py-16 max-lg:pr-12 max-md:pr-10 max-sm:pr-0 max-sm:flex max-sm: flex-col max-sm:justify-center max-sm:items-center max-sm:text-center">
            <DeveloperIcon></DeveloperIcon>
            <h3 class="text-h3 text-heading mb-4 mt-6  font-semibold">Application Marketplace</h3>
            <p class="text-typography text-lg md font-light">Monetize and distribute custom applications - offer tailored WordPress, eCommerce, and business tools directly to clients and hosting providers</p>
        </div>
        <div class="py-20 pl-15 max-lg:py-16 max-lg:pl-12 max-md:pl-10 max-sm:pl-0 border-l border-border border-animation max-sm:border-none max-sm:flex max-sm: flex-col max-sm:justify-center max-sm:items-center max-sm:text-center">
            <FreelancerIcon></FreelancerIcon>
            <h3 class="text-h3 text-heading mb-4 mt-6 font-semibold">Collaboration Tools for Freelancers & Agencies</h3>
            <p class="text-typography text-lg md font-light">A dedicated workspace for professionals managing multiple clients - streamline teamwork, assign tasks, and track progress effortlessly</p>
        </div>
    </div>
    <div class="divider"></div>
    <div class="container grid grid-cols-2 max-sm:grid-cols-1 content-center place-items-center max-sm:text-center mobile-divider overflow-hidden">
        <div class="py-20 pr-15 max-lg:py-16 max-lg:pr-12 max-md:pr-10 max-sm:pr-0 max-sm:flex max-sm: flex-col max-sm:justify-center max-sm:items-center max-sm:text-center">
            <WebsiteIcon></WebsiteIcon>
            <h3 class="text-h3 text-heading mb-4 mt-6  font-semibold">Website-Focused Interface</h3>
            <p class="text-typography text-lg md font-light">A clean, streamlined UI where end users see only what matters - full control over their site without unnecessary clutter</p>
        </div>
        <div class="py-20 pl-15 max-lg:py-16 max-lg:pl-12 max-md:pl-10 max-sm:pl-0 border-l border-border max-sm:border-none max-sm:flex max-sm: flex-col max-sm:justify-center max-sm:items-center max-sm:text-center">
            <StagingIcon></StagingIcon>
            <h3 class="text-h3 text-heading mb-4 mt-6 font-semibold ">Staging Environments & Analytics</h3>
            <p class="text-typography text-lg md font-light">Test changes safely before going live and gain actionable insights with advanced analytics.</p>
        </div>
    </div>
    <div class="divider animation delay-1"></div>
    <div class="container grid grid-cols-2 max-sm:grid-cols-1 mobile-divider overflow-hidden">
        <div class="py-20 pr-15 max-lg:py-16 max-lg:pr-12 max-md:pr-10 max-sm:pr-0 max-sm:flex max-sm: flex-col max-sm:justify-center max-sm:items-center max-sm:text-center">
            <AipoweredIcon></AipoweredIcon>
            <h3 class="text-h3 text-heading mb-4 mt-6  font-semibold">AI-Powered Optimization</h3>
            <p class="text-typography text-lg md font-light">Automated performance tuning ensures faster, more efficient websites - less effort, better results.</p>
        </div>
        <div class="py-20 pl-15 max-lg:py-16 max-lg:pl-12 max-md:pl-10 max-sm:pl-0 border-l border-border border-animation delay-1 max-sm:border-none max-sm:flex max-sm: flex-col max-sm:justify-center max-sm:items-center max-sm:text-center">
            <CollaborationIcon></CollaborationIcon>
            <h3 class="text-h3 text-heading mb-4 mt-6 font-semibold">Freelancer & Agency Hub</h3>
            <p class="text-typography text-lg md font-light">Tools designed for professionals managing multiple sites - easy access to client projects and recurring work.</p>
        </div>
    </div>
    <div class="divider"></div>
</template>
<style lang="scss" scoped>
.divider{
    width: 100%;
    height: 1px;
    background-color: var(--color-border);
    position: relative;
    overflow: hidden;
    // divider animation
    &.animation{
        @media(min-width:768px){
            &::after{
                content: '';
                width: 100px;
                background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50.5%, rgba(255, 255, 255, 0) 100%);
                height: 2px;
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
.border-animation{
    position: relative;
    &::after{
        content: '';
        width: 1px;
        background: linear-gradient(180deg, rgba(238, 150, 37, 0) 0%, #EE9625 50.5%, rgba(238, 150, 37, 0) 100%);
        top: -25%;
        height: 60px;
        position: absolute;
        left: -1px;
        animation: borderAnimation 16s linear infinite;
    }
    @media(max-width: 768px){
        &::after{
            content: none;
        }
    }
    &.delay-1{
        &::after{
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50.5%, rgba(255, 255, 255, 0) 100%);
            animation: borderAnimation 16s linear infinite 3s;
        }
    }
}
.mobile-divider{
    position: relative;
    @media(max-width: 768px){
        position: relative;
        &::after{
            content: '';
            position: absolute;
            width: 100vw;
            height: 1px;
            background-color: #2B2B2B;
            left: 0;
            top: 50%;
            transform: translatey(-50%);
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