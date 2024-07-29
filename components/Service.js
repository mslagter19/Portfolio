app.component('service-block', {
    template:
    /*html*/
    `<div @click="selectedService">
        <a :href="link" target="_blank" class="">
            <img :src="image" class="">
            <p>{{ title }}</p>
        </a>
    </div>`,
    props: ['id'],
    data: function() {
        return {
            variants: [
                { id: 1, image: './content/images/tifa.jpg', title: "Vue JS", link: "https://slaktrrr.nl/" },
                { id: 2, image: './content/images/169-Crobat.png', title: "Tailwind CSS", link: "https://www.linkedin.com/feed/" },
            ],
            selectedVariant: 0
        }
    },
    computed: {
        image() {
            const variant = this.variants.find(variant => variant.id === this.id);
            return variant ? variant.image : '';
        },
        title() {
            const variant = this.variants.find(variant => variant.id === this.id);
            return variant ? variant.title : '';
        },
        link() {
            const variant = this.variants.find(variant => variant.id === this.id);
            return variant ? variant.link : '#';
        }
    },
    methods: {
        selectService() {
            const variant = this.variants.find(variant => variant.id === this.id);
            if (variant) {
                this.$emit('service-selected', variant);
            }
        }
    }
})