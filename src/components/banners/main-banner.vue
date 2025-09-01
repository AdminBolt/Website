
<template>
    <header class="flex justify-center pt-20 flex-col relative pb-30 max-md:pb-24 max-sm:pb-18 max-md:pt-16 max-sm:pt-14">
        <div class="container-sm mx-auto text-center">
            <h1 class="text-h1 mb-6 font-semibold text-heading" v-html="title"></h1>
            <p class="text-typography text-xlg pb-10 font-light" v-html="subTitle"></p>
            <div v-if="actions" class="flex justify-center gap-x-6 max-sm:flex-col max-sm:gap-y-6">
                <BtnPrimary :animation=true  url="https://billing.adminbolt.com/register.php" class="max-h-16 text-lg py-4 px-6" text="Join Us"></BtnPrimary>
                <BtnPrimaryOutline :animation=true url="#package"  class="max-h-16 text-lg" text="Learn More"></BtnPrimaryOutline>
            </div>
        </div>
        <div class="mx-auto text-center pt-18 max-md:pt-10 max-sm:pt-8 py-8 max-w-[1104px] max-md:min-h-[100%] w-full px-8 relative">
            <video class="border border-border pb-4 max-w-[1040px] max-md:max-w-[100%] max-lg:w-full min-h-[560px] max-lg:min-h-[0]" autoplay loop muted>
                <source :src="require('@/assets/video/banner-video.webm')" type="video/webm"/>
                <source :src="require('@/assets/video/banner-video-saf.mp4')" type="video/mp4"/>
            </video>
            <div class="overlay"></div>
        </div>
        <div class="header-animation">
            <div class="animation animation-orange"></div>
            <div class="animation animation-blue"></div>
            <div class="animation animation-gray"></div>
            <div class="animation animation-black"></div>
        </div>
    </header>
    <!-- <DotLottieVue style="height: 500px; width: 500px" autoplay loop src="/tesssst.json" /> -->

</template>


<script>
// import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

export default {
    // components: { DotLottieVue },
  props: {
    actions: {
      type: Boolean,
    },
    title:{
        type: String,
    },
    subTitle:{
        type: String,
    }
  },
};
</script>

<style lang="scss">
video{
    border-radius: 16px;
    &::after{
        display: block;
        content: '';
        width: 100%;
        height: 100%;
        background-color: red;
    }
}
.overlay{
    position: absolute;
    top:0;
    left: 32px;
    right: 32px;
    // width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 44.24%, #000000 100%);
}
.header-animation{
    width: 100%;
    height: 1160px;
    position: absolute;
    top: -180px;
    left: 0;
    z-index: -1;
    .animation{
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
        &-orange{
            opacity: 1;
            background: radial-gradient(112.01% 306.85% at 116.95% -15.43%, #C7770F 0%, rgba(0, 0, 0, 0) 100%);
            animation: orangeAnimation 16s linear infinite;
        }
        &-black{
            background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
        }
        &-gray{
            opacity: 0;
            animation: grayAnimation 16s linear infinite;;
            background: radial-gradient(169.22% 169.22% at 50% -45.86%, #393939 0%, rgba(0, 0, 0, 0) 100%);
        }
        &-blue{
            opacity: 0;
            animation: blueAnimation 16s linear infinite;
            background: radial-gradient(111.77% 306.21% at -17.34% -6.72%, #153E7B 0%, rgba(0, 0, 0, 0) 100%);
        }
    }
}
@keyframes orangeAnimation{
    25%{
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    75%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
@keyframes blueAnimation{
    25%{
        opacity: 0.5;
    }
    50%{
        opacity: 1;
    }
    75%{
        opacity: 0.5;
    }
    100%{
        opacity: 0;
    }
}
@keyframes grayAnimation{
    25%{
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
    75%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
</style>