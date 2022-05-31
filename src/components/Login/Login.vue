<template>
  <div class="login">
    <img src="../../assets/logo.svg" alt="instbug-logo" class="logo" />
    <h2>Log in to Instabug</h2>
    <div class="content">
      <SocialButtons />
      <p class="alert" v-if="loginError.info">
        {{ loginError.info }}
      </p>
      <p class="or">OR</p>
      <LoginForm />
      <div class="signup-option">
        <div>
          <span>Doesn't have an account? </span><a href="#"> Sign up</a>
        </div>
        <a href="#">Login via SSO</a>
      </div>
    </div>
    <div class="companies">
      <p>Trusted by Top Companies</p>

      <Companies />
    </div>
  </div>
</template>

<script>
import SocialButtons from "../SocialButtons.vue";
import LoginForm from "./LoginForm.vue";
import Companies from "../Companies.vue";

export default {
  name: "Login",
  components: {
    SocialButtons,
    LoginForm,
    Companies,
  },
  inject: ["loginError"],
};
</script>

<style scoped lang="scss">
.login {
  flex: 1;
  min-width: 50vw;
  padding: 0px 20px;
  @include centering;
  flex-direction: column;
  @media ($mobile-max) {
    padding: 0px 30px;
  }
  .logo {
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
  }
  h2 {
    margin-bottom: 1rem;
  }
  .content {
    max-width: 500px;
    width: 100%;
    .alert {
      @include rounded;
      background-color: $alert-bg;
      padding: 15px;
      color: $alert-color;
      margin: 10px 0px;
    }
    .or {
      position: relative;
      color: $dark-grey;
      width: 100%;
      font-weight: bold;
      text-align: center;
      &::before,
      &::after {
        @include centerVPosition;
        content: "";
        position: absolute;
        width: 45%;
        height: 1px;
        background-color: $light-grey;
      }
      &::before {
        left: 0;
      }
      &::after {
        right: 0;
      }
    }
    .signup-option {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
      font-size: 14px;
      a {
        color: $link-color;
        &:hover {
          color: $link-color-alt;
        }
      }
    }
  }
  .companies {
    color: $light-grey;
    font-size: 14px;
    width: 100%;
    @media ($mobile-max) {
      width: 100%;
    }
    p {
      margin: 20px 0px;
      text-align: center;
    }
  }
}
</style>
