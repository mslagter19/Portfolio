app.component('outro', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /*html*/
    `<div class="pt-5 pb-5 bg-cover bg-center bg-no-repeat" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
        <div class="container mx-auto">
            <div class="columns-3">
                <div class="p-5">Test</div>
                <div class="p-5">Test</div>
                <div class="p-5">Test</div>
            </div>
        </div>
    </div>`,
    data: function() {
        return {
            image: './content/images/tifa.jpg',
        }
    },
})