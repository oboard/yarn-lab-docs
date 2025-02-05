---
title: 钩针视频教程
---

<script setup>
import { ref, onMounted } from 'vue'

const videos = ref([
  {
    bvid: 'BV14a411n7Rf',
  },
  // 可以继续添加更多视频，只需要提供 bvid
])

const getVideoInfo = async (bvid) => {
  try {
    const response = await fetch(`/bilibili/x/web-interface/view?bvid=${bvid}`)
    const data = await response.json()
    if (data.code === 0) {
      return {
        title: data.data.title,
        author: data.data.owner.name,
        description: data.data.desc
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching video info:', error)
    return null
  }
}

const updateVideosInfo = async () => {
  for (const video of videos.value) {
    const info = await getVideoInfo(video.bvid)
    if (info) {
      video.title = info.title
      video.author = info.author
      video.description = info.description
    }
  }
}

onMounted(() => {
  updateVideosInfo()
})
</script>

# 钩针视频教程

<div class="video-grid">
  <div v-for="video in videos" :key="video.bvid" class="video-card">
    <div class="video-player">
      <iframe
        :src="`//player.bilibili.com/player.html?bvid=${video.bvid}&page=1&high_quality=1&danmaku=0`"
         scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"
      ></iframe>
    </div>
    <div class="video-info">
      <h3 class="video-title">{{ video.title || '加载中...' }}</h3>
      <div class="video-author">{{ video.author || '加载中...' }}</div>
      <div class="video-desc">{{ video.description || '加载中...' }}</div>
    </div>
  </div>
</div>

<style scoped>
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding: 20px 0;
}

.video-card {
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.video-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.video-player {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 比例 */
}

.video-player iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-info {
  padding: 16px;
}

.video-title {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 600;
}

.video-author {
  font-size: 14px;
  margin-bottom: 8px;
}

.video-desc {
  font-size: 14px;
  line-height: 1.5;
}

.support-card {
  border: 1px solid #ffeded;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
}

.support-card h3 {
  margin-top: 0;
  color: #ff6b6b;
}

.support-card p {
  margin: 16px 0;
  line-height: 1.6;
}

.support-card ul {
  margin: 16px 0;
  padding-left: 20px;
}

.support-card li {
  margin: 8px 0;
}

.support-button {
  display: inline-block;
  background: #ff6b6b;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.support-button:hover {
  background: #ff5252;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 107, 107, 0.2);
}
</style> 