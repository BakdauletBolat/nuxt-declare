<template>
      <div class="skeleton is-loading">
        <div></div>
        <p></p>
        <p></p>
      </div>
  </template>
  <style lang="scss">
  
  .skeleton {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  
  .skeleton.is-loading {
    div,
    p {
      width: 100%;
      background: #eee;
      background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
      border-radius: 5px;
      background-size: 200% 100%;
      animation: 1.5s shine linear infinite;
    }
  
    div {
      height: 100px;
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