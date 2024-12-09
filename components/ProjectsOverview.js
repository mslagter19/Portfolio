app.component('projects-overview', {
    template:
    /*html*/
    `<section class="h-screen flex items-center">
    <div class="container sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-6xl mx-auto">
    <swiper-container slides-per-view="3" speed="500" loop="true" css-mode="true">
      <swiper-slide>
        <project-block :id="1"></project-block>
      </swiper-slide>
      <swiper-slide>
        <project-block :id="2"></project-block>
      </swiper-slide>
      <swiper-slide>
        <project-block :id="3"></project-block>
      </swiper-slide>
    </swiper-container>
    </div>
  </section>`,
})