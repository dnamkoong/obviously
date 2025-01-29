<template>
  <div class="dataSet">
    <table>
      <thead>
        <tr>
          <th class="name">
            <input
              type="checkbox"
            />
            Dataset Name
            <img src="../assets/Icons/arrow.svg" alt="arrow icon" class="arrowIcon">
          </th>
          <th class="status">Status</th>
          <th class="createdAt">Created at</th>
          <th class="createdBy">Created by</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(item) in data"
          :key="item.index"
        >
          <Data :item="item" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Data from './Data.vue';

const props = defineProps({
  data: Object
})

const selected = ref([]);
const selectAll = ref(false);

</script>

<style scoped>
table {
  width: 100%;
  border: 1px solid rgba(228, 231, 236, 1);
  border-radius: 8px;
}

thead {
  position: relative;

  &:after {
    content: '';
    border-bottom: 1px solid rgba(228, 231, 236, 1);
    width: calc(100% + 6px);
    height: 1px;
    display: block;
    position: absolute;
    bottom: 0;
    left: -3px;
  }

  tr {
    font-size: 12px;
  }

  th {
    padding: 10px 20px;
    box-sizing: border-box;
    text-align: left;
  }
}

input {
  transform: scale(1.5);
  margin-right: 15px;
}

.name {
  display: flex;
  align-items: center;

  input {
    &:checked {
      filter: hue-rotate(30deg);
    }
  }

  img {
    height: 17px;
    margin: 0 0 0 5px;
  }
}

.arrowIcon {
  opacity: 0.4;
  height: 20px;
}
.trashIcon {
  background: none;
}
</style>