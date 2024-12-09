app.component('intro', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /*html*/
    `<section class="bg-black text-white h-screen">
        <div class="container sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-6xl mx-auto">
            <div class="p-5">
                <span>About Gravito</span>
                <h2 class="">We are a team that helps you identify your visitor before the page fully loads</h2>
            </div>
            <div class="pt-5 pb-5">
                <div class="pt-5 pb-5 bg-cover bg-center bg-no-repeat" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
                    <div class="flex">

                    </div>
                </div>
            </div>
        </div>
    </section>`,
    data: function() {
        return {
            image: './content/images/tifa.jpg',
        }
    },
})