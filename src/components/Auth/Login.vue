<template>
  <div class="wrapper">
    <!-- login form -->
    <div class="auth" id="login" v-if=" userOption == 'logIn' ">
      <div class="thumbnail">
        <i class="fa fa-user fa-2x"></i>
      </div>
      <p class="auth-text">Log In</p>
      <div class="social">
        <a class="button">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>
      </div>
      <p>Or</p>
      <form>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Password">
              <span class="icon is-small is-left">
                <i class="fa fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-text-centered">
                <router-link class="button is-success block" :to="{ name: 'Channels' }" tag="button">Login</router-link>
            </p>
          </div>
      </form>
      <div class="">
        <a class="button  is-outlined" @click.prevent="toggleUserOption('signUp')">Sign Up</a>
        <a class="button is-outlined" @click.prevent="toggleUserOption('reset')">Reset Password</a>
      </div>
      <div>
         <i class="fa fa-lock"></i>
      </div>
    </div>
    <!-- login form ends here -->

    <!-- sign up form -->
    <div class="auth" id="signUp" v-if="userOption == 'signUp' ">
      <div class="thumbnail">
        <i class="fa fa-user fa-2x"></i>
      </div>
      <p class="auth-text">Sign Up</p>
      <div class="social">
        <a class="button">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>
      </div>
      <p>Or</p>
      <form>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Password">
              <span class="icon is-small is-left">
                <i class="fa fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-text-centered">
                <router-link class="button is-success block" :to="{ name: 'Articles' }" tag="button">Login</router-link>
            </p>
          </div>
      </form>
      <div class="">
        <a class="button  is-outlined" @click.prevent="toggleUserOption('logIn')">Sign In</a>
      </div>
      <div>
         <i class="fa fa-lock"></i>
      </div>
    </div>
    <!-- sign up form ends -->

    <!-- reset form -->
    <div class="auth" id="reset" v-if="userOption == 'reset'">
      <div class="thumbnail">
        <i class="fa fa-user fa-2x"></i>
      </div>
      <p class="auth-text">Reset Password</p>
      
      <form>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-text-centered">
                <router-link class="button is-success block" :to="{ name: 'Articles' }" tag="button">Login</router-link>
            </p>
          </div>
      </form>
      <div class="">
        <a class="button  is-outlined" @click.prevent="toggleUserOption('logIn')">Sign In</a>
        <a class="button  is-outlined" @click.prevent="toggleUserOption('signUp')">Sign Up</a>
      </div>
      <div>
         <i class="fa fa-lock"></i>
      </div>
    </div>
    <!-- reset form ends here -->
  </div>
</template>

<script>
export default {
  name: 'userLog',
  props:{
  
  },
  data(){
    return{
      userOption: 'logIn'
    }
  },
  methods:{
    toggleUserOption(arg){
      this.userOption = arg;
    }
  }
}
</script>


<style scoped>
  .wrapper{
    height: 100vh;
    width: 100%;
    display: flex;
    align-content: center;
    align-items: center;
    background: rgba(10, 10, 10, 0.86);
  }
  .auth{
    width: 100%;
    height: 80%;
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    background: rgb(255, 255, 255);
    padding: 20px 20px;
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .auth .thumbnail{
    height: 64px;
    width: 64px;
    border-radius: 100%;
    background: #EEE;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .auth-text{
    font-size: 25px;
  }
  .field:not(:last-child) {
      margin-bottom: 0 !important;
  }
  .field:last-child{
    margin-top: 25px;
  }

  input{
    padding-top: 15px;
    padding-bottom: 15px;
    height: 55px;
  }
  .field:first-child input,
  .field:nth-child(2) input
  {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: none;
  }

  .field:first-child input{
    border-bottom: 0;
  }

  .field:first-child input:focus ~ input{
    border: 1px solid green;
  }

  
  .control.has-icons-left .icon, .control.has-icons-right .icon {
    height: 100%;
  }
  .button.block{
    width: 100%;
    height: 55px;
    display: block;
  }
  .is-outlined{
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  @keyframes bounceInUp {
    from, 60%, 75%, 90%, to {
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    from {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }

    75% {
      transform: translate3d(0, 10px, 0);
    }

    90% {
      transform: translate3d(0, -5px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes bounceInDown {
    from, 60%, 75%, 90%, to {
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      transform: translate3d(0, -3000px, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0);
    }

    75% {
      transform: translate3d(0, -10px, 0);
    }

    90% {
      transform: translate3d(0, 5px, 0);
    }

    to {
      transform: none;
    }
  }

  @keyframes fadeIn{
    from{
      transform-origin: center;
      transform: rotate3d(0,0,1, -200deg);
      opacity: 0;
    }
    to{
      transform-origin: center;
      transform: none;
      opacity: 1;
    }

  }

  #login {
    animation-name: bounceInUp;
  }
  #signUp{
    animation-name: bounceInDown;
  }
  #reset{
    animation-name: fadeIn;
  }
</style>