<template>
    <a v-if="animation" :href="url || undefined" class="inline-flex justify-center items-center rounded-sm transition-all font-medium text-center text-white bg-primary-100 hover:bg-primary-200 hover:pr-12 cursor-pointer">
        {{text}}
        <BtnArrow class="opacity-0 transition-all h-4 w-4 md:"></BtnArrow>
    </a>
    <a v-else :href="url || undefined" class="inline-flex justify-center items-center rounded-sm transition-all font-medium text-center text-white bg-primary-100 hover:bg-primary-200 cursor-pointer">
        {{text}}
    </a>
</template>

<script>
export default {
  props: {
    text:{
        type: String,
    },
    url:{
        type: String,
    },
    animation:{
        type: Boolean,
    },
  },
};
</script>
<style scoped lang="scss">
    a{
        position: relative;
        svg{
            position: absolute;
            right: 0;
        }
        &:hover{
            svg{
                opacity: 1;
                right: 24px;
            }
        }
    }
</style>