
<template>
    <section class="flex flex-col justify-center">
        <div class="container-sm mx-auto text-center">
            <h2 v-if="title" class="text-h2 mb-6 font-semibold text-heading" v-html="title"></h2>
            <p v-if="subTitle" class="text-typography text-xlg pb-14 font-light max-md:pb-14 max-sm:pb-10" v-html="subTitle"></p>
            <div v-if="actions" class="flex justify-center gap-x-6 ">
                <BtnPrimary url="#" text="Contact Us"></BtnPrimary>
                <BtnPrimaryOutline url="#" text="Learn More"></BtnPrimaryOutline>
            </div>
        </div>
            <slot name="customContent"></slot>
    </section>
</template>

<script>
export default {
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