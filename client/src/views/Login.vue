<template>
  <div class="home">
    <div class="text-light d-flex justify-content-center custom-flex">
      <div class="custom-form">
        <h1 class="mt-2 mb-4">Login</h1>
        <form @submit="login">
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              id="inputEmail"
              type="text"
              class="form-control"
              v-model="email"
              @focusout="emailFocusout"
              @focusin="emailFocusin"
            />
            <small
              id="emailHelp"
              class="form-text text-danger"
              v-if="emailIsRequired"
              >Email is required.</small
            >
            <small
              id="emailHelp"
              class="form-text text-danger"
              v-else-if="emailIsNotValid"
              >Email is not valid.</small
            >
            <small id="emailHelp" class="form-text text-muted" v-else
              ><br
            /></small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              id="inputPassword"
              type="password"
              class="form-control"
              v-model="password"
              @focusout="passwordFocusout"
              @focusin="passwordFocusin"
            />
            <small
              id="passwordHelp"
              class="form-text text-danger"
              v-if="passwordIsRequired"
              >Password is required.</small
            >
            <small id="emailHelp" class="form-text text-muted" v-else
              ><br
            /></small>
          </div>
          <button type="submit" class="btn btn-info">Login</button>
          <small class="text-light form-text mt-2"
            >Didn't have account?
            <router-link to="/register" class="text-decoration-none"
              >Register</router-link
            >
          </small>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      emailIsRequired: false,
      emailIsNotValid: false,
      password: '',
      passwordIsRequired: false,
    }
  },
  methods: {
    emailFocusout() {
      if (!this.email) {
        document.getElementById('inputEmail').classList.add('shaking')
        this.emailIsRequired = true
      } else {
        if (!this.emailIsValid()) {
          document.getElementById('inputEmail').classList.add('shaking')
          this.emailIsNotValid = true
        }
      }
    },
    emailFocusin() {
      document.getElementById('inputEmail').classList.remove('shaking')
      this.emailIsRequired = false
      this.emailIsNotValid = false
    },
    passwordFocusout() {
      if (!this.password) {
        document.getElementById('inputPassword').classList.add('shaking')
        this.passwordIsRequired = true
      }
    },
    passwordFocusin() {
      document.getElementById('inputPassword').classList.remove('shaking')
      this.passwordIsRequired = false
    },
    login() {
      if (!this.email) {
        this.$bvToast.toast('Email is required', {
          title: 'Error',
          autoHideDelay: 2000,
          appendToast: true,
          variant: 'danger',
        })
      }

      if (!this.password) {
        this.$bvToast.toast('Password is required', {
          title: 'Error',
          autoHideDelay: 2000,
          appendToast: true,
          variant: 'danger',
        })
      }

      if (!this.emailIsValid() && this.email) {
        this.$bvToast.toast('Email is not valid', {
          title: 'Error',
          autoHideDelay: 2000,
          appendToast: true,
          variant: 'danger',
        })
      }

      if (this.email && this.password && this.emailIsValid()) {
        console.log('masuk ke login pak eko')
      }
    },
    emailIsValid() {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        this.email.toLowerCase(),
      )
    },
  },
}
</script>

<style scoped>
.home {
  height: 100%;
}

.custom-flex {
  padding-top: 10rem !important;
}

.custom-form {
  border: 1px solid white;
  padding: 0 2rem 2rem 2rem;
  border-radius: 0.25rem;
}

.shaking {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  border: 1px solid red;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

.btn-info {
  background-color: #52a2d6 !important;
  border: 1px solid #52a2d6;
}

.btn-info:hover {
  background-color: #337fb0 !important;
  border: 1px solid #337fb0 !important;
}
</style>
