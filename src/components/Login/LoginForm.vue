<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="input">
      <label for="email">Work Email</label>
      <input
        autofocus
        type="text"
        name="email"
        id="email"
        autocomplete="email"
        placeholder="your@company.com"
        :class="{ error: emailHasError }"
        v-model="email.value"
        @blur="handleEmailBlur"
      />
      <p v-if="emailHasError" class="error-message" id="email-error">
        Enter a valid email address.
      </p>
    </div>
    <div class="input">
      <div class="forgot-password">
        <label for="password">Password</label>
        <a href="#">Forgot Password?</a>
      </div>
      <input
        type="password"
        name="password"
        id="password"
        autocomplete="password"
        placeholder="6+ Characters"
        :class="{ error: passwordHasError }"
        v-model="password.value"
        @blur="handlePasswordBlur"
      />
      <p v-if="passwordHasError" class="error-message" id="password-error">
        Password must be 6 characters or more
      </p>
    </div>
    <button type="submit" id="submit" class="submit" :disabled="!formIsValid">
      Log In
    </button>
  </form>
</template>

<script>
import TextInput from "../TextInput.vue";
export default {
  components: { TextInput },
  data() {
    return {
      email: {
        value: "",
        isTouched: false,
        pattern: /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-z]{2,6}/,
      },
      password: {
        value: "",
        isTouched: false,
      },
    };
  },
  inject: ["onLoggedIn"],
  methods: {
    handleEmailBlur() {
      if (this.email.value.length > 0) {
        this.email.isTouched = true;
      }
    },
    handlePasswordBlur() {
      if (this.password.value.length > 0) {
        this.password.isTouched = true;
      }
    },
    handleSubmit() {
      this.onLoggedIn({
        email: this.email.value,
        password: this.password.value,
      });
    },
  },
  computed: {
    emailIsValid() {
      return this.email.pattern.test(this.email.value);
    },
    emailHasError() {
      return !this.emailIsValid && this.email.isTouched;
    },
    passwordIsValid() {
      return this.password.value.length >= 6;
    },
    passwordHasError() {
      return !this.passwordIsValid && this.password.isTouched;
    },
    formIsValid() {
      return this.emailIsValid && this.passwordIsValid;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  margin-top: 10px;
  .input {
    width: 100%;
    margin-bottom: 20px;
    .forgot-password {
      display: flex;
      justify-content: space-between;
      a {
        color: $light-grey;
        &:hover {
          color: $link-color;
        }
      }
    }
    label,
    input {
      display: block;
    }
    label {
      margin-bottom: 5px;
    }
    input {
      width: 100%;
      padding: 10px 15px;
      border: 1px solid $light-grey;
      border-radius: 4px;
      outline: none;
      font-size: 16px;
      font-weight: 400;
      &.error {
        border: 1px solid $error-color;
      }
      &:focus {
        border: 1px solid $focus-color;
        box-shadow: inset 0 0 4px 0 $focus-color;
      }
    }
    .error-message {
      margin-top: 8px;
      color: $error-color;
    }
  }
  .submit {
    @include btn(10px, 20px);
    width: 100%;
    color: white;
    background-color: $main-color;
    &:hover {
      background-color: $main-color-alt;
    }
    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
}
</style>
