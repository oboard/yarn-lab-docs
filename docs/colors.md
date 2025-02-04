---
title: 颜色对照表
---

<script setup>
import { ref, computed } from 'vue'
import colors from './colors.json'
const searchText = ref('')
const filteredColors = computed(() => {
  if (!searchText.value) {
    return colors
  }
  
  const searchValue = searchText.value.toLowerCase()
  return colors.filter((color, index, self) =>
    (color.name.toLowerCase().includes(searchValue) ||
    color.hex.toLowerCase().includes(searchValue)) &&
    index === self.findIndex(c => c.name === color.name)
  )
})
</script>

# 颜色对照表

<!-- <div class="search-box">
  <input
    v-model="searchText"
    type="text"
    placeholder="搜索颜色名称或十六进制值..."
  />
</div> -->

<div class="color-grid">
  <div v-for="color in filteredColors" :key="`${color.name}-${color.hex}`" class="color-card">
    <div class="color-preview" :style="{ backgroundColor: color.hex }"></div>
    <div class="color-info">
      <div class="color-name">{{ color.name }}</div>
      <div class="color-hex">{{ color.hex }}</div>
      <div class="color-rgb">RGB: {{ color.rgb.join(', ') }}</div>
    </div>
  </div>
</div>

<style scoped>
.search-box {
  margin: 20px 0;
}

.search-box input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px 0;
}

.color-card {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
}

.color-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.color-preview {
  height: 120px;
  border-bottom: 1px solid #eee;
}

.color-info {
  padding: 12px;
}

.color-name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
}

.color-hex {
  color: #666;
  font-family: monospace;
  margin-bottom: 2px;
}

.color-rgb {
  color: #666;
  font-size: 14px;
  font-family: monospace;
}
</style> 