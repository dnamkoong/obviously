<template>
  <component
    :is="link ? 'a' : 'button'"
    :href="link"
    :class="[
      'btn',
      `btn-${type}`,
      { 'btn-disabled': disabled },
      { [`btn-${color}`]: color }
    ]"
    :disabled="disabled && !link"
    @click="handleClick"
  >
    <span
      v-if="icon"
      class="btn-icon"
    >
      <img :src='imagePath(icon)' alt="icon">
    </span>
    <span>{{ text }}</span>
  </component>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: null
  }
});

const imagePath = (image) => {
  return new URL(`../assets/icons/${image}`, import.meta.url).href;
};

const handleClick = (event) => {
  if (props.disabled) {
    event.preventDefault();
  }
}
</script>

<style scoped>
.btn {
  border: none;
  border-radius: 8px;
  padding: 12px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
}

.btn-primary {
  background-color: rgba(56, 130, 255, 1);

  span {
    color: #fff;
  }
}

.btn-disabled {
  opacity: 0.5;
  transition: .3s ease-in-out;
  cursor: auto;
}

.btn-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  border: 1px solid rgba(213, 215, 218, 1);
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 8px;
  box-sizing: border-box;
  font-weight: 600;
}

.btn-icon {
  height: 25px;

  img {
    height: 100%;
  }
}

</style>