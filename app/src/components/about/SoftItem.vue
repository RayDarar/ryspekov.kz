<template>
  <div class="soft-item" :class="{ 'soft-item_active': active }">
    <div class="text-wrapper">
      <h3 class="title">{{ content["about_soft_blocks"][id].title }}</h3>
      <p class="text">
        {{ content["about_soft_blocks"][id].text }}
      </p>
    </div>
    <img :src="$root.getImgUrl(`soft-skills-image-${id + 1}.jpg`)" :alt="`soft-image-${id}`" />
  </div>
</template>

<script>
export default {
  name: "SoftItem",
  props: {
    id: Number,
    active: Boolean
  },
  computed: {
    content() {
      return this.$store.state.language;
    }
  }
};
</script>

<style lang="scss" scoped>
.soft-item {
  position: relative;
  width: 50%;
}
.soft-item_active {
  .text-wrapper {
    .text,
    .title {
      opacity: 1;
    }
    & + img {
      filter: grayscale(0%);
    }
  }
}
img {
  max-width: 100%;
  filter: grayscale(100%);
  transition: filter 0.3s;
  z-index: 0;
}

.text-wrapper {
  z-index: 1;
  color: white;
  background-color: rgba(0, 0, 0, 0.65);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  
  .title {
    text-align: center;
    font-size: 3em;
    transition: opacity 0.5s;
    opacity: 0;
  }

  .text {
    font-size: 1.5em;
    margin-left: 3em;
    margin-right: 3em;
    letter-spacing: 1px;
    transition: opacity 0.5s;
    opacity: 0;
    top: 2em;
    position: relative;
  }
}

@media screen and (min-width: 1025px) {
  .text-wrapper {
    &:hover + img {
      filter: grayscale(0%);
    }

    &:hover .text,
    &:hover .title {
      opacity: 1;
    }
  }
}

@media screen and (max-width: 1024px) {
  .text-wrapper {
    .title {
      font-size: 2.5em;
    }

    .text {
      font-size: 1.2em;
    }
  }
}

@media screen and (max-width: 900px) {
  .text-wrapper {
    .title {
      font-size: 2em;
    }
    .text {
      font-size: 1em;
    }
  }
}

@media screen and (max-width: 530px) {
  .soft-item {
    width: 100%;
  }
  .text-wrapper {
    .title {
      font-size: 1.8em;
    }

    .text {
      font-size: 0.9em;
      margin-left: 2em;
      margin-right: 2em;
    }
  }
}
</style>
