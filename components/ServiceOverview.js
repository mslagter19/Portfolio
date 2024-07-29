app.component('service-overview', {
    template:
    /*html*/
    `<section class="p-5 h-screen flex items-center">
    <div class="container mx-auto">
      <div class="grid grid-cols-4 grid-rows-2 gap-8">
        <div class="col-span-2 border-b-2 p-5">
          <div class="p-5">
            <h2 class="text-3xl font-medium">“Een Front-end developer met gevoel voor design en
              gebruiksvriendelijkheid. Van alle markten thuis met veel passie, creativiteit en leergierigheid op
              dagelijkse basis.”</h2>
          </div>
        </div>
        <div class="col-span-2">
          <div class="p-5">

          </div>
        </div>
        <service-block v-for="i in 4" :key="i" :id="i" class="col-span-1" @service-selected>
        <h3>{{ selectedService.title }}</h3>
        <img :src="selectedService.image" v-if="selectedService.image">
        <a :href="selectedService.link" target="_blank">{{ selectedService.link }}</a>
        </service-block>
      </div>
    </div>
  </section>`,
  data() {
    return {
      selectedService: {}
    }
  },
  methods: {
    handleServiceSelected(service) {
      this.selectedService = service;
    }
  }
})