app.component('outro', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /*html*/
    `<section class="h-screen bg-cover bg-center bg-no-repeat" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
        <div class="container sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-6xl mx-auto">
            <div class="columns-3">
                <div class="p-5">Test</div>
                <div class="p-5">Test</div>
                <div class="p-5">Test</div>
            </div>
        </div>
    </section>`,
    data: function() {
        return {
            image: './content/images/tifa.jpg',
        }
    },
})