<template>
    <a v-if="animation" :href="url ? url : '#'" class="group btn-outline transition-all inline-flex justify-center items-center py-4 px-6 font-medium border rounded-sm text-primary-200 hover:text-primary-100">
        <span>{{text}}</span>
        <BtnArrow class="ml-0 w-0 opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:ml-2 transition-all h-4 flex-shrink-0"></BtnArrow>
        <span v-if="afterText" class="ml-0 max-w-0 group-hover:max-w-xs group-hover:ml-2 opacity-0 group-hover:opacity-100 transition-all overflow-hidden whitespace-nowrap">{{afterText}}</span>
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
    afterText:{
        type: String,
    },
    url:{
        type: String,
    }
  },
};
</script>
<style scoped lang="scss">
    a{
        &:hover{
            svg{
                @media(max-width:var(--breakpoint-lg)){
                    display: none;
                }
            }
        }
    }
</style>