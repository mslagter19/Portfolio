app.component('projects-overview', {
    template:
    /*html*/
    `<section class="p-5 h-screen flex items-center">
    <div class="container mx-auto">
      <project-block :id="1"></project-block>
      <project-block :id="2"></project-block>
      <project-block :id="3"></project-block>
    </div>
  </section>`,

})