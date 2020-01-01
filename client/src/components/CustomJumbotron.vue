<template>
  <div class="custom-container">
    <b-jumbotron class="custom-jumbotron pt-3 pb-0">
      <template v-slot:header>
        <h1 class="display-1">
          Mini-WP
        </h1>
      </template>
      <template v-slot:lead>
        <h4>Minified Wordpress App</h4>
      </template>
      <hr style="border: inherit" />
      <h4>{{ random }}.</h4>
      <div class="pb-4 pt-4">
        <b-link class="btn btn-outline-light" :to="{ path: '/register' }"
          >Join now</b-link
        >
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'CustomJumbotron',
  data: function() {
    return {
      random: '',
      words: [
        'story',
        'work',
        'ideas',
        'writing',
        'publications',
        'thesis',
        'research',
        'anything that matter for you',
      ],
      interval: {},
      index: 0,
      baseText: 'Share your ',
    }
  },
  methods: {
    randomWords(interval) {
      this.random = this.baseText + this.words[this.index]

      const self = this
      self.interval = setInterval(function() {
        ++self.index
        if (self.index >= self.words.length) self.index = 0
        self.random = self.baseText + self.words[self.index]
        if (self.index === self.words.length - 1) {
          self.random = 'Share ' + self.words[self.index]
        }
      }, interval)
    },
  },
  created() {
    this.randomWords(4000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
}
</script>

<style scoped>
.custom-jumbotron {
  border-radius: 0 !important;
  background: none !important;
  width: 40% !important;
  border: 1px solid white !important;
  color: white !important;
}

.custom-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-bottom: 0;
}

h4 {
  letter-spacing: 3px;
}

h1 {
  letter-spacing: 5px;
}
</style>
