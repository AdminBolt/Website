// banners
import MainBanner from './components/banners/main-banner.vue';

// sections
import SectionDefault from './components/sections/section-default.vue';
import FeaturesBeginning from './components/sections/features-beginning.vue';
import IntegrationsBoxed from './components/sections/integrations-boxed.vue';
import FeaturesKey from './components/sections/features-key.vue';
import SectionCta from './components/sections/section-cta.vue';
import NewsletterForm from './components/sections/newsletter-form.vue';


//footer & topbar
import FooterIcons from './components/footer/footer-icons.vue';
import TopBar from './components/nav/top-bar.vue';
import MiniTopBar from './components/nav/mini-topbar.vue';

// icons
import BtnArrow from './components/icons/btn-arrow.vue';
import LogoAdminbolt from './components/icons/logo-adminbolt.vue';
import BareMetal from './components/icons/bare-metal.vue';
import VirtualMachine from './components/icons/virtual-machine.vue';
import CloudlinuxIcon from './components/icons/cloudlinux-icon.vue';
import HostbillIcon from './components/icons/hostbill-icon.vue';
import ImunifyIcon from './components/icons/imunify-icon.vue';
import LetsencryptIcon from './components/icons/letsencrypt-icon.vue';
import MailchannelsIcon from './components/icons/mailchannels-icon.vue';
import SoftaculousIcon from './components/icons/softaculous-icon.vue';
import UpmindIcon from './components/icons/upmind-icon.vue';
import WhmcsIcon from './components/icons/whmcs-icon.vue';
import LitespeedIcon from './components/icons/litespeed-icon.vue';
import AipoweredIcon from './components/icons/aipowered-icon.vue';
import CollaborationIcon from './components/icons/collaboration-icon.vue';
import DeveloperIcon from './components/icons/developer-icon.vue';
import FreelancerIcon from './components/icons/freelancer-icon.vue';
import StagingIcon from './components/icons/staging-icon.vue';
import WebsiteIcon from './components/icons/webiste-icon.vue';
import newsletterIcon from './components/icons/newsletter-icon.vue';
import standaloneIcon from './components/icons/standalone-icon.vue';
import packageHorizontal from './components/sections/package-horizontal.vue';

// btns

import BtnPrimary from './components/button/btn-primary.vue';
import BtnPrimaryOutline from './components/button/btn-primary-outline.vue';

export default function globalComponents(app) {
  app
    .component('MainBanner', MainBanner)
    .component('SectionDefault', SectionDefault)
    .component('BtnPrimary', BtnPrimary)
    .component('BtnPrimaryOutline', BtnPrimaryOutline)
    .component('FooterIcons',FooterIcons)
    .component('MiniTopBar',MiniTopBar)
    .component('TopBar',TopBar)
    .component('FeaturesBeginning',FeaturesBeginning)
    .component('IntegrationsBoxed', IntegrationsBoxed)
    .component('FeaturesKey',FeaturesKey)
    .component('SectionCta',SectionCta)
    .component('NewsletterForm',NewsletterForm)
    .component('packageHorizontal',packageHorizontal)

    // icons
    .component('BtnArrow',BtnArrow)
    .component('LogoAdminbolt',LogoAdminbolt)
    .component('BareMetal',BareMetal)
    .component('VirtualMachine',VirtualMachine)
    .component('CloudlinuxIcon',CloudlinuxIcon)
    .component('HostbillIcon',HostbillIcon)
    .component('ImunifyIcon',ImunifyIcon)
    .component('LetsencryptIcon',LetsencryptIcon)
    .component('MailchannelsIcon',MailchannelsIcon)
    .component('SoftaculousIcon',SoftaculousIcon)
    .component('UpmindIcon',UpmindIcon)
    .component('WhmcsIcon',WhmcsIcon)
    .component('LitespeedIcon',LitespeedIcon)
    .component('AipoweredIcon',AipoweredIcon)
    .component('CollaborationIcon',CollaborationIcon)
    .component('DeveloperIcon',DeveloperIcon)
    .component('FreelancerIcon',FreelancerIcon)
    .component('StagingIcon',StagingIcon)
    .component('WebsiteIcon',WebsiteIcon)
    .component('newsletterIcon',newsletterIcon)
    .component('standaloneIcon',standaloneIcon)
}