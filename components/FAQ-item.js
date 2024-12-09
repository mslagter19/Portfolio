app.component('faq-item', {
    template:
    /*html*/
    `<div class="max-w-md mx-auto mt-10 space-y-4">
    <!-- Accordion Item -->
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border rounded-lg shadow-sm"
    >
      <button
        @click="toggleAccordion(index)"
        class="w-full flex justify-between items-center px-4 py-2 bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none"
      >
        <span>{{ item.title }}</span>
        <svg
          :class="{ 'rotate-180': isActive(index) }"
          class="h-5 w-5 transition-transform transform"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        v-show="isActive(index)"
        class="p-4 bg-white border-t"
        v-cloak
      >
        {{ item.content }}
      </div>
    </div>
  </div>`,
    data: function() {
        return {
            activeIndex: null, // Tracks the currently open accordion item
            items: [
                { id: 1, title: "What is Tailwind CSS?", content: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs." },
                { id: 2, title: "What is Vue.js?", content: "Vue.js is a progressive JavaScript framework for building user interfaces." },
                { id: 3, title: "Why use Tailwind with Vue?", content: "Combining Tailwind CSS and Vue.js makes it easy to build dynamic, styled components efficiently." },
            ],
        }
    },
    methods: {
        toggleAccordion(index) {
          this.activeIndex = this.activeIndex === index ? null : index;
        },
        isActive(index) {
          return this.activeIndex === index;
        },
    },
})