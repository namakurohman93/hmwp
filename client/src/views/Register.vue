<template>
  <div class="home">
    <div class="row text-light d-flex justify-content-center pt-5">
      <div class="col-1 custom-col">
        <p class="lead custom-lead" style="letter-spacing: 5px;">
          Share your greates story ever, and make it remembered by everyone
          else.
        </p>
      </div>
      <div class="col-4">
        <div class="custom-form">
          <h1>Register</h1>
          <form @submit="register">
            <div class="form-group">
              <label for="exampleInputEmail1">Username</label>
              <input
                id="inputUsername"
                type="text"
                class="form-control"
                v-model="username"
                @focusout="usernameFocusout"
                @focusin="usernameFocusin"
              />
              <small
                id="usernameHelp"
                class="form-text text-danger"
                v-if="usernameIsRequired"
                >Username is required.</small
              >
              <small id="emailHelp" class="form-text text-muted" v-else
                ><br
              /></small>
            </div>
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
              <small
                id="passwordHelp"
                class="form-text text-danger"
                v-else-if="passwordLengthInvalid"
                >Password length min 6 characters</small
              >
              <small id="emailHelp" class="form-text text-light" v-else
                ><br
              /></small>
            </div>
            <button type="submit" class="btn btn-info">Register</button>
            <small class="text-light form-text mt-2"
              >Already have account?
              <router-link to="/login" class="text-decoration-none"
                >Login</router-link
              >
            </small>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: function() {
    return {
      email: '',
      emailIsRequired: false,
      emailIsNotValid: false,
      password: '',
      passwordIsRequired: false,
      passwordLengthInvalid: false,
      username: '',
      usernameIsRequired: false,
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
      } else {
        if (!this.passwordLengthIsValid()) {
          document.getElementById('inputPassword').classList.add('shaking')
          this.passwordLengthInvalid = true
        }
      }
    },
    passwordFocusin() {
      document.getElementById('inputPassword').classList.remove('shaking')
      this.passwordIsRequired = false
      this.passwordLengthInvalid = false
    },
    usernameFocusout() {
      if (!this.username) {
        document.getElementById('inputUsername').classList.add('shaking')
        this.usernameIsRequired = true
      }
    },
    usernameFocusin() {
      document.getElementById('inputUsername').classList.remove('shaking')
      this.usernameIsRequired = false
    },
    emailIsValid() {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        this.email.toLowerCase(),
      )
    },
    passwordLengthIsValid() {
      return this.password.length >= 6
    },
    register() {
      if (!this.username) {
        this.$bvToast.toast('Username is required', {
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

      if (!this.email) {
        this.$bvToast.toast('Email is required', {
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

      if (this.password.length < 6 && this.password) {
        this.$bvToast.toast('Password length min 6 characters', {
          title: 'Error',
          autoHideDelay: 2000,
          appendToast: true,
          variant: 'danger',
        })
      }

      if (
        this.email &&
        this.password &&
        this.username &&
        this.emailIsValid() &&
        this.password.length >= 6
      ) {
        console.log('masuk ke register pak eko')
      }
    },
  },
}
</script>

<style scoped>
.home {
  height: 100%;
  width: 99%;
}

.custom-form {
}

.custom-col {
  padding: 7rem 0 0 0;
  margin-right: 2rem;
}

.custom-form {
  border: 1px solid white;
  padding: 2rem;
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
