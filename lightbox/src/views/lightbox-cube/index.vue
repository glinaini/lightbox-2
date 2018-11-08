
<template>
  <div>
    hello world
    <div>
      <title>第一种--点击按钮显示图片</title>
      <button @click="showImagePreview">预览图片</button>
    
      <div>- - | - - | - - | - - | - - | - - </div>
      <title>第二种--点击图片显示图片 ，展示的图片是每次被点击的图片</title>
      <ul>
        <li
          :key="index"
          @click="preview(index)"
          v-for="(l, index) in images">
          <img 
            :src="l" 
            alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      images: [
        'http://oayhezji6.bkt.clouddn.com/preview2.jpg',
        'http://oayhezji6.bkt.clouddn.com/preview3.jpg',
        'http://oayhezji6.bkt.clouddn.com/preview6.jpg'
      ],
      btnImages: [
        'http://oayhezji6.bkt.clouddn.com/preview6.jpg',
        'http://oayhezji6.bkt.clouddn.com/preview2.jpg',
        'http://oayhezji6.bkt.clouddn.com/preview6.jpg',
        'http://oayhezji6.bkt.clouddn.com/preview3.jpg'
      ]
    }
  },
  created() {},
  methods: {
    preview(index) {
      this.$imagePreview({
        images: this.images,
        index: index,
        defaultOpt: {
          fullscreenEl: false,
          shareEl: false,
          arrowEl: true,
          preloaderEl: true,
          loop: false,
          bgOpacity: 0.85,
          showHideOpacity: true,
          errorMsg: '<div class="pswp__error-msg">图片加载失败</div>'
        }
      })
    },
    // 按钮点中显示图片预览图
    showImagePreview() {
      this.$imagePreview({
        images: this.btnImages,
        defaultOpt: {
          fullscreenEl: false,
          bgOpacity: 0.85,
          errorMsg: '<div class="pswp__error-msg">图片加载失败</div>'
        }
      }).show()
    }
  }
}
</script>

<style>
button {
  padding: 5px;
  margin-bottom: 20px;
}
ul,
li {
  list-style: none;
}
img {
  width: 100%;
  height: auto;
}
.picture-item {
  box-sizing: border-box;
  padding: 0 5px 10px;
}
.picture-nothumb {
  position: relative;
  padding-bottom: 100%;
  height: 0;
  background-color: #f9f9f9;
  overflow: hidden;
}
.picture-nothumb img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
@media screen and (min-width: 641px) {
  .wrap {
    width: 640px;
  }
}
</style>
