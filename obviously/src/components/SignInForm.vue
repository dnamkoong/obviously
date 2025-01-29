<template>
  <form @submit.prevent="handleSubmit">
    <label>Email</label>
    <input
      type="email"
      v-model="email"
      placeholder="Enter your email"
      required
    >

    <label>Password</label>
    <input
      type="password"
      v-model="password"
      placeholder="Create a password"
      required
    >

    <Button
      type="submit"
      :disabled="!email || !password || !isEmailValid "
      text="Sign In"
      color="primary"
      link="/library"
    />
  </form>
</template>

<script setup>
import { ref, computed } from 'vue';
import Button from './Button.vue';

const email = ref('');
const password = ref('');

const isEmailValid = computed(() => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email.value);
});

const handleSubmit = () => {
  email.value = '';
  password.value = '';
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 14px;
  margin-bottom: 6px;
  letter-spacing: .1px;
  font-weight: 500;
}

input {
  border: 1px solid rgba(213, 215, 218, 1);
  border-radius: 8px;
  margin-bottom: 23px;
  padding: 12px;
  box-sizing: border-box;
  font-size: 16px;
  letter-spacing: .5px;
}
</style>