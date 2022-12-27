<template>
  <div class="skeletons">
    <div class="skeleton is-loading">
      <h2></h2>
      <p></p>
      <p></p>
    </div>
    <div class="skeleton is-loading">
      <h2></h2>
      <p></p>
      <p></p>
    </div>
    <div class="skeleton is-loading">
      <h2></h2>
      <p></p>
      <p></p>
    </div>
    <div class="skeleton is-loading">
      <h2></h2>
      <p></p>
      <p></p>
    </div>
    <div class="skeleton is-loading">
      <h2></h2>
      <p></p>
      <p></p>
    </div>
  </div>
</template>
<style lang="scss">
.skeletons {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
}

.skeleton {
  width: 100%;
  background: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.skeleton.is-loading {

  h2,
  p {
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
  }

  h2 {
    height: 40px;
  }

  p {
    height: 30px;
  }

}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>