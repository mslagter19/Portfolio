app.component('faq', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /*html*/
    `<div class="h-screen">
        <div class="container mx-auto">
        <faq-item></faq-item>
        </div>
    </div>`,
})