<template>

  <div id="app">
    
      <!-- router view -->
      <router-view></router-view>

  </div>

</template>

<script>

  
  export default {
    name: 'app'
  }

</script>

<style>
  /*global styling for loader */
  .loader-container{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(255,255,255, 0.95);
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      z-index: 1;
      margin: 0 auto;
  }
  .spinner {
      border: 8px solid #f3f3f3; /* Light grey */
      border-top: 8px solid #3273dc; /* Blue */
      border-radius: 50%;
      width: 60px;
      height: 60px;
      animation: spin 0.5s linear infinite;
  }

  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }
</style>