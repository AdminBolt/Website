<template>
    <MiniTopBar></MiniTopBar>
    <TopBar></TopBar>
    <MainBanner
        title="The Hosting <span class=text-primary-100>Control Panel</span> of The Future"
        subTitle="It’s time for the next step. Unlock the potential of your clients including agencies and freelancers naturally connecting both groups and earning commissions."
        :actions="true"
    >
    </MainBanner>
    <SectionDefault
        id="package"
        class="pb-30 max-md:pb-24 max-sm:pb-18"
        title="Future of Hosting Management Starts Here - <span class=text-primary-100>Old-School Pricing, Fair and Simple</span>"
        subTitle="Escaping high fees? Jump to safety - 6 months free for those fleeing overpriced control panels 🚀"
        :actions="false">
        <template v-slot:customContent>
            <packageHorizontal></packageHorizontal>
        </template>
    </SectionDefault>
    <SectionDefault
        class="pt-12 pb-30 max-md:pb-24 max-sm:pb-18"
        title="<span class=text-primary-100>Phase 1: </span>Just the Beginning"
        subTitle="This is only the first step in a bigger journey. More features, improvements, and innovations are on the way!"
        :actions="false">
        <template v-slot:customContent>
            <FeaturesBeginning></FeaturesBeginning>
        </template>
    </SectionDefault>
    <SectionDefault 
        class="pb-30 max-md:pb-24 max-sm:pb-18"
        title="Planned <span class=text-primary-100>Integrations</span>"
        subTitle="During the first phase, we will integrate our platform with top-tier solutions to enhance security, performance, and automation."
        :actions="false">
        <template v-slot:customContent>
            <IntegrationsBoxed></IntegrationsBoxed>
        </template>
    </SectionDefault>
    <SectionDefault
        class="bg-section pt-30 max-md:pt-24 max-sm:pt-18"
        title="<span class=text-primary-100>Phase 2:</span> Key Improvements"
        subTitle="The second phase brings significant enhancements to boost performance, security, and usability."
        :actions="false">
        <template v-slot:customContent>
            <FeaturesKey></FeaturesKey>
        </template>
    </SectionDefault>
    <SectionDefault
        id="contact"
        class="bg-section pt-30 max-md:pt-24 max-sm:pt-18 pb-30 max-md:pb-24 max-sm:pb-18"
        title="<span class=text-primary-100>Get in Touch</span> with Us"
        subTitle="Have questions or want to learn more? Reach out to us and stay informed about the latest updates, exciting news, and exclusive insights into our ongoing projects!"
        :actions="false">
        <template v-slot:customContent>
            <NewsletterForm></NewsletterForm>
        </template>
    </SectionDefault>
    <SectionCta></SectionCta>
    <FooterIcons></FooterIcons>
</template>