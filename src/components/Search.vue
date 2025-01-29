<template>
  <div class="search">
    <div class="inputWrapper">
      <input
        type="text"
        placeholder="Search"
      >
      <img src="../assets/icons/search.svg" alt="search icon">
    </div>
  </div>
</template>

<style scoped>
.search {
  margin-bottom: 12px;
}

.inputWrapper {
  position: relative;
}

input {
  width: 100%;
  max-width: 220px;
  padding: 7px 10px 7px 32px;
  font-size: 12px;
  border: 1px solid rgba(213, 215, 218, 1);
  border-radius: 8px;
  letter-spacing: 0.2px;
}

img {
  opacity: 0.5;
  position: absolute;
  top: calc(50% - 7.5px);
  left: 10px;
  height: 15px;
}
</style>