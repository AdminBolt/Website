<template>
    <div class="container-sm w-full alert-danger hidden">
        <div class="flex bg-[#48181B] px-6 py-4 mb-12 border border-[#862D32] rounded-md">
            <i>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.36133C10.5547 1.36133 11.0664 1.6543 11.3477 2.13477L19.7852 16.5098C20.0703 16.9941 20.0703 17.5918 19.793 18.0762C19.5156 18.5605 18.9961 18.8613 18.4375 18.8613H1.56252C1.00393 18.8613 0.484398 18.5605 0.207054 18.0762C-0.0702894 17.5918 -0.0663832 16.9902 0.214867 16.5098L8.65237 2.13477C8.93362 1.6543 9.44534 1.36133 10 1.36133ZM10 6.36133C9.48049 6.36133 9.06252 6.7793 9.06252 7.29883V11.6738C9.06252 12.1934 9.48049 12.6113 10 12.6113C10.5196 12.6113 10.9375 12.1934 10.9375 11.6738V7.29883C10.9375 6.7793 10.5196 6.36133 10 6.36133ZM11.25 15.1113C11.25 14.7798 11.1183 14.4619 10.8839 14.2274C10.6495 13.993 10.3315 13.8613 10 13.8613C9.6685 13.8613 9.35056 13.993 9.11614 14.2274C8.88172 14.4619 8.75002 14.7798 8.75002 15.1113C8.75002 15.4428 8.88172 15.7608 9.11614 15.9952C9.35056 16.2296 9.6685 16.3613 10 16.3613C10.3315 16.3613 10.6495 16.2296 10.8839 15.9952C11.1183 15.7608 11.25 15.4428 11.25 15.1113Z" fill="#F12533"/></svg>
            </i>
            <span class="text-[#F12533] ml-4 text-sm">
                Something went wrong. Please try again or send the message manually to newhope@adminbolt.com
            </span>
        </div>
    </div>
    <form id="newsletter-form" @submit.prevent="getRecaptchaToken">
        <input type="hidden" id="gRecaptchaResponse" name="gRecaptchaResponse" v-model="formData.recaptchaToken" />
        <div class="container-sm w-full flex flex-col gap-y-6">
            <div class="flex relative">
                <div class="relative w-full">
                    <input v-model="formData.fullName" name="fullName" id="fullName" class="block bg-input border border-border text-heading py-5 px-4 w-full text-xs rounded-md h-14 peer" placeholder=" " required />
                    <label for="fullName" class="peer-focus:font-medium absolute text-sm text-typography duration-300 transform -translate-y-7 left-4 top-[18px] -z- origin-[0] peer-focus:start-3 peer-focus:text-primary-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-7">Full Name</label>
                </div>
            </div>
            <div class="flex relative">
                <div class="relative w-full">
                    <input v-model="formData.email" type="email" name="email" id="email" class="block bg-input border border-border text-heading py-5 px-4 w-full text-xs rounded-md h-14 peer" placeholder=" " required />
                    <label for="email" class="peer-focus:font-medium absolute text-sm text-typography duration-300 transform -translate-y-7 left-4 top-[18px] -z- origin-[0] peer-focus:start-3 peer-focus:text-primary-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-7">Email Adress</label>
                </div>
            </div>
            <div class="flex gap-6 max-sm:flex-col">
                <div class="flex relative basis-[50%] max-sm:w-full">
                    <div class="relative w-full">
                        <input v-model="formData.companyName" name="company_name" id="company_name" class="block bg-input border border-border text-heading py-5 px-4 w-full text-xs rounded-md h-14 peer" placeholder=" " required />
                        <label for="company_name" class="peer-focus:font-medium absolute text-sm text-typography duration-300 transform -translate-y-7 left-4 top-[18px] -z- origin-[0] peer-focus:start-3 peer-focus:text-primary-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-7">Company Name</label>
                    </div>
                </div>
                <div class="flex relative basis-[50%] max-sm:w-full">
                    <div class="relative w-full">
                        <input v-model="formData.companyPosition" name="company_position" id="company_position" class="block bg-input border border-border text-heading py-5 px-4 w-full text-xs rounded-md h-14 peer" placeholder=" " required />
                        <label for="company_position" class="peer-focus:font-medium absolute text-sm text-typography duration-300 transform -translate-y-7 left-4 top-[18px] -z- origin-[0] peer-focus:start-3 peer-focus:text-primary-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-7">Company Position</label>
                    </div>
                </div>
            </div>
            <div class="flex relative">
                <div class="relative w-full">
                    <input v-model="formData.panelType" name="panel_type" id="panel_type" class="block bg-input border border-border text-heading py-5 px-4 w-full text-xs rounded-md h-14 peer" placeholder=" " required />
                    <label for="panel_type" class="peer-focus:font-medium absolute text-sm text-typography duration-300 transform -translate-y-7 left-4 top-[18px] -z- origin-[0] peer-focus:start-3 peer-focus:text-primary-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-7">Which Control Panel Do You Use?</label>
                </div>
            </div>
            <div class="flex gap-6 max-sm:flex-col">
                <div class="flex relative basis-[50%] bg-input">
                    <button type="button" id="decrement-button" @click="decrement" class="bg-faded border rounded-l-md border-border w-16 h-14 flex items-center justify-center cursor-pointer">
                        <svg class="w-4 h-4 text-heading " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="number" v-model="formData.numberAccount" name="account-input" id="account-input" aria-describedby="helper-text-explanation" class="z-2 pb-[18px] border border-l-0 border-r-0 border-border  font-medium text-center text-heading  h-14 w-full text-xs" placeholder="" required />
                    <div class="absolute flex items-center text-xs text-typography left-[50%] transform -translate-x-1/2 bottom-1">
                        <span class="whitespace-nowrap">Number of Hosting Accounts</span>
                    </div>
                    <button type="button" id="increment-button" @click="increment" class="bg-faded border rounded-r-md border-border w-16 h-14 flex items-center justify-center cursor-pointer">
                        <svg class="w-4 h-4 text-heading " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
                <div class="flex relative basis-[50%]">
                    <div class="relative w-full">
                        <input v-model="formData.annualSpending" type="text" name="annual_spending" id="annual_spending" class="block bg-input border border-border text-heading py-5 px-4 w-full text-xs rounded-md h-14 peer" placeholder=" " required />
                        <label for="annual_spending" class="peer-focus:font-medium absolute text-sm text-typography duration-300 transform -translate-y-7 left-4 top-[18px] -z- origin-[0] peer-focus:start-3 peer-focus:text-primary-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-7">Annual Spending on Control Panel</label>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="relative w-full">
                    <textarea v-model="formData.interested" type="textarea" name="intrested" id="interested_input" class="block bg-input border border-border text-heading py-5 px-4 w-full text-xs h-14 peer rounded-md min-h-[200px]" placeholder=" " required></textarea>
                    <label for="interested_input" class="peer-focus:font-medium absolute text-sm text-typography duration-300 transform -translate-y-7 left-4 top-[18px] -z- origin-[0] peer-focus:start-3 peer-focus:text-primary-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-7">Why are you interested in AdminBolt?</label>
                </div>
            </div>
            <div class="flex justify-center">
                <button type="submit" class="inline-flex justify-center items-center rounded-sm transition-all font-medium text-center text-white bg-primary-100 hover:bg-primary-200 text-md px-6 py-4 max-w-max cursor-pointer min-w-[160px]">
                    <span class="btn-text">Contact Us</span>
                    <span class="btn-loader hidden">
                        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#fff"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#F09F38"/>
                        </svg>
                    </span> 
                </button>
            </div>
        </div>
    </form>
    <div class="container-sm newsletter-succes hidden">
        <div class="flex flex-col min-h-[608px] justify-center items-center bg-input rounded-xl px-30 border border-border max-sm:px-8 max-sm:py-6 max-sm:min-h-none">
            <newsletterIcon class="mb-8"></newsletterIcon>
            <h4 class="text-h4 text-heading mb-4 text-center font-semibold">Thank You for Subscribing!</h4>
            <p class="text-lg text-typography text-center mb-8 font-light">You're all set! Welcome to our community, expect exciting updates, exclusive insights, and the latest news straight to your inbox. Stay tuned, and thank you for being part of our journey! </p>
            <div>
                <BtnPrimary @click="subscribeAgain" class="text-nowrap py-4 text-md px-6" text="Subscribe Again"></BtnPrimary>
            </div>
        </div>
    </div>
</template>

<script>
/* global grecaptcha */
import axios from "axios";

export default {
    data() {
        return {
            formData: {
                fullName: "",
                email:"",
                companyName:"",
                companyPosition: "",
                panelType:"",
                numberAccount:1,
                annualSpending: "",
                interested:"",
                recaptchaToken: ""
            }
        };
    },
    methods: {
        getRecaptchaToken() {
            let self = this;
            grecaptcha.ready(function() {
                grecaptcha.execute('6LdMQuoqAAAAAKhgoKO3A4dh5jbCJnj3yknYtXjU', {action: 'newsletter_form'}).then(function(token) {
                    self.formData.recaptchaToken = token
                    self.submitForm();
                });
            });
        },
        async submitForm() {
            this.btnLoader();
            if(!document.querySelector('.alert-danger').classList.contains('hidden')){
                document.querySelector('.alert-danger').classList.add('hidden')
            }   
            try {
                const response = await axios.post("https://adminbolt.com/emailSenderApi.php", this.formData);
                if(response.data.status == "success"){
                    document.querySelector('#newsletter-form').classList.add('hidden');
                    document.querySelector('.newsletter-succes').classList.remove('hidden');
                    this.removeBtnLoader();
                }
            } catch (error) {
                document.querySelector('.alert-danger').classList.remove('hidden');
                this.removeBtnLoader();
            }
        },
        subscribeAgain(){
            document.querySelector('#newsletter-form').classList.remove('hidden');
            document.querySelector('.newsletter-succes').classList.add('hidden');
        },
        increment() {
            if (this.formData.numberAccount < 9999) {
                this.formData.numberAccount++;
            }
        },
        decrement() {
            if (this.formData.numberAccount > 1) {
                this.formData.numberAccount--;
            }
        },
        btnLoader(){
            document.querySelector('.btn-text').classList.add('hidden');
            document.querySelector('.btn-loader').classList.remove('hidden')
        },
        removeBtnLoader(){
            document.querySelector('.btn-text').classList.remove('hidden');
            document.querySelector('.btn-loader').classList.add('hidden')
        }
    },
};
</script>

<style lang="scss" scoped>

label{
    font-size: 14px;
    line-height: 14px;
    padding: 4px;
    background-color: #101010;
    border-radius: 4px;
}
input,
textarea{
    &:focus-visible{
        outline: unset !important;
    }
    &:focus{
        border: 1px solid #C7770F!important;
    }
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #fff !important;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
}
</style>