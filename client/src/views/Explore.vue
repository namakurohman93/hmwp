<template>
  <div class="container" style="height: 100%">
    <form @submit="search">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control text-light custom-input"
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          v-model="searchQuery"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary text-light custom-btn"
            type="submit"
            id="button-addon2"
          >
            <span class="fas fa-search"></span>
          </button>
        </div>
      </div>
    </form>

    <div class="result-container overflow-auto" style="height: 92%">
      <b-card
        img-src="https://placekitten.com/300/300"
        img-alt="Card image"
        img-left
        img-height="200"
        img-width="200"
        class="mb-3"
      >
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of
          the card's content.
        </b-card-text>
      </b-card>
      <b-card
        img-src="https://placekitten.com/300/300"
        img-alt="Card image"
        img-left
        img-height="200"
        img-width="200"
        class="mb-3"
      >
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of
          the card's content.
        </b-card-text>
      </b-card>
      <b-card
        img-src="https://placekitten.com/300/300"
        img-alt="Card image"
        img-left
        img-height="200"
        img-width="200"
        class="mb-3"
      >
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of
          the card's content.
        </b-card-text>
      </b-card>
      <b-card
        img-src="https://placekitten.com/300/300"
        img-alt="Card image"
        img-left
        img-height="200"
        img-width="200"
        class="mb-3"
      >
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of
          the card's content.
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Explore',
  data: function() {
    return {
      searchQuery: '',
    }
  },
  methods: {
    search() {
      console.log(this.searchQuery)
    },
  },
}
</script>

<style scoped>
.custom-input {
  background-color: rgb(0, 0, 0, 0.1) !important;
  border-radius: 0 !important;
}

.custom-btn {
  background-color: rgb(0, 0, 0, 0.1) !important;
  background: none !important;
  border-radius: 0 !important;
}
</style>
