app.component('project-block', {
    template:
    /*html*/
    `<div class="columns-2">
        <div class="">
            <img :src="image" class="w-full">
        </div>
        <div class="">
            <h3>{{ title }}</h3>
            <p>{{ text }}</p>
            <a :href="link" target="_blank" class=""></a>
        </div>
    </div>`,
    props: ['id'],
    data: function() {
        return {
            variants: [
                { id: 1, image: './content/images/tifa.jpg', title: "Vue JS", link: "https://slaktrrr.nl/", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
                { id: 2, image: './content/images/169-Crobat.png', title: "Tailwind CSS", link: "https://www.linkedin.com/feed/", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
                { id: 3, image: './content/images/169-Crobat.png', title: "", link: "https://www.linkedin.com/feed/", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
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
        },
        text() {
            const variant = this.variants.find(variant => variant.id === this.id);
            return variant ? variant.text : '#';
        }
    }
})