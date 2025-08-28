<template>
    <a v-if="animation" :href="url ? url : '#'" class="btn-outline transition-all inline-flex justify-center items-center py-4 px-6 font-medium border rounded-sm text-primary-200 hover:text-primary-100 hover:pr-13 ">
        {{text}}
        <BtnArrow class="opacity-0 transition-all h-4 w-4"></BtnArrow>
    </a>
    <a v-else :href="url ? url : '#'" class="transition-all inline-flex justify-center items-center py-4 px-6 font-medium border rounded-sm text-primary-200 hover:text-primary-100">
        {{text}}
    </a>
</template> 

<script>
export default {
  props: {
    text:{
        type: String,
    },
    animation:{
        type: Boolean,
    },
    url:{
        type: String,
    }
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
                @media(max-width:var(--breakpoint-lg)){
                    display: none;
                }
            }
        }
    }
</style>