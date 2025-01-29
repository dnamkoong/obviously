<template>
  <div class="signIn">
    <header>
      <div class="signInIconWrapper">
        <img
          src="../assets/icons/signIn.svg"
          alt="Sign in icon"
          class="signInIcon"
        />
      </div>
      <h2>Sign In</h2>
      <p>Welcome back! Let's get started with AI</p>
    </header>

    <div class="formWrapper">
      <div class="formContainer">
        <SignInForm />

        <p class="lines textCenter">OR</p>

        <div class="btnWrapper">
          <Button
            type="link"
            text="Sign up with Google"
            link="google.com"
            icon="google.svg"
          />

          <Button
            type="link"
            text="Sign up with LinkedIn"
            link="linkedin.com"
            icon="linkedIn.svg"
          />
        </div>
      </div>
    </div>

    <p class="textCenter">Don't have an account? <a href="#" class="primary semiBold">Sign up</a></p>
  </div>
</template>

<script setup>
import SignInForm from '../components/SignInForm.vue';
import Button from '../components/Button.vue';
</script>

<style scoped>
.signIn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}

header {
  text-align: center;
  margin-bottom: 30px;

  h2 {
    margin-bottom: 8px;
    letter-spacing: 0.4px;
  }

  p {
    font-size: 17px;
    font-weight: 300;
  }
}

.formWrapper {
  display: flex;
  justify-content: center;

  ~p {
    font-size: 14px;
  }
}

.formContainer {
  width: 100%;
  max-width: 460px;
  border: 1px solid rgba(228, 231, 236, 1);
  border-radius: 10px;
  border-bottom-width: 5px;
  padding: 30px 40px 12px;
  box-sizing: border-box;
  margin-bottom: 30px;
}

.signInIconWrapper {
  background-color: #fafbfb;;
  border: 1px solid rgba(233, 234, 235, 1);
  border-radius: 10px;
  border-bottom-width: 2px;
  padding: 13px;
  display: inline-flex;
  margin-bottom: 20px;
}

.signInIcon {
  height: 28px;
  opacity: 0.7;
}

.lines {
  color: rgba(185, 185, 185, 1);
  position: relative;
  margin: 25px auto;
  font-weight: 600;
  font-size: 18px;

  &:before,
  &:after {
    content: '';
    background-color: rgba(211, 211, 211, 1);
    width: calc(50% - 24px);
    height: 1px;
    display: block;
    position: absolute;
    top: 50%;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }
}

.btnWrapper {
  display: flex;
  flex-direction: column;
}
</style>