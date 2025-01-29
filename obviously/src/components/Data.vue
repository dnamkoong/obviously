<template>
  <td class="name">
    <input
      type="checkbox"
      v-model="selected"
      :value="item.id"
    />
    <img :src="imagePath(item.fileType)"/>
      {{ item.name }}.{{ item.fileType }}
  </td>
  <td class="status">
    <span :class="item.status.toLowerCase()">
      {{ item.status }}
    </span>
  </td>
  <td class="createdAt">{{ item.createdAt }}</td>
  <td class="createdBy">
    {{ item.createdBy }} <br />
    {{ item.createdByEmail }}

  </td>
  <td>
    <button
      @click="deleteDataset(index)"
      class="trashIcon"
    >
      <img src="../assets/Icons/trash.svg" alt="trash icon">
    </button>
  </td>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  item: Object
})

const selected = ref([]);

const imagePath = (type) => {
  return new URL(`../assets/icons/${type}.svg`, import.meta.url).href;
}
</script>

<style scoped>
tbody {
  td {
    padding: 8px 20px;
    box-sizing: border-box;
    gap: 13px;
    font-size: 14px;
  }

  img {
    height: 32px;
  }

  tr {
    &:nth-of-type(even) {
      background-color: rgba(249, 250, 252, 1);
      border: 1px solid rgba(228, 231, 236, 1);
    }

    &:hover td {
      background-color: rgb(248 248 248);
    }

    td {
      transition: .3s ease-in-out;
    }
  }
}

input {
  transform: scale(1.5);
}

.name {
  display: flex;
  align-items: center;
}

.uploaded,
.connected,
.error {
  position: relative;
  padding: 2px 5px 2px 17px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;

  &:before {
    content: '';
    border-radius: 8px;
    width: 6px;
    height: 6px;
    position: absolute;
    top: calc(50% - 3px);
    left: 6px;
  }
}

.uploaded,
.connected {
  background-color: rgba(236, 253, 243, 1);
  border: 1px solid rgba(171, 239, 198, 1);
  color: rgba(6, 118, 71, 1);

  &:before {
    background-color: rgba(23, 178, 106, 1);
  }
}

.error {
  background-color: rgba(254, 205, 202, 0.2);
    color: rgba(240, 68, 56, 1);
    border: 1px solid rgba(254, 205, 202, 1);

  &:before {
    background-color: rgba(240, 68, 56, 1);
  }
}

.trashIcon {
  background: none;
  border: none;

  img {
    opacity: 0.4;
    height: 15px;
  }
}
</style>