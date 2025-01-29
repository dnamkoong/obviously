<template>
  <div class="library">
    <h3>Library</h3>
    <p>Here is a list of datasets already connected to your Obviously AI account.</p>

    <hr>

    <Search />

    <Dataset :data="data" />
  </div>
</template>

<script setup>
import Search from '../components/Search.vue';
import Dataset from '../components/Dataset.vue';
import data from '../../data';

</script>

<style scoped>
.library {
  margin: 30px auto;
  width: 100%;
  max-width: 1268px;
  border-radius: 8px;
  border: 1px solid rgba(228, 231, 236, 1);
  padding: 25px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

h3 {
  margin-bottom: 5px;
}

p {
  font-size: 14px;
  margin-bottom: 25px;
  letter-spacing: 0.2px;
}

hr {
  width: calc(100% + 50px);
  opacity: 0.3;
  margin-left: -25px;
  margin-bottom: 20px;
}
</style>