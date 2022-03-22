<template>
    <header>
    <img alt="Vue logo" src="../assets/Takamol_hub_logo.png" height="50">
    <nav>
      <ul>
        <li><router-link to="/">About</router-link></li>
         <li><router-link to="/">Docs</router-link></li>
          <li><router-link to="/">APIs Hub</router-link></li>
          <li><router-link to="/sign-in">Sign in</router-link></li>
          <button class="btn primary-btn">Sign up</button>
      </ul>
    </nav>
  </header>
</template>

<script>
    export default {
        name: 'app-header',
    }
</script>

<style lang="scss">
  header {
    display: flex;
    padding: .5rem 1rem;

    p {
      margin-left: 1rem;
    }
  }

  nav {
    margin-left: auto;

    ul {
      list-style: none;
    }

    ul li {
      display: inline-flex;
      margin-left: 1rem;
      font-size: 19px;
    }
  }
  .btn {
    padding: 10px 20px;
    font-size: 19px;
    border: none;
    border-radius: 5px;
    margin-left: 1rem;
  }
  .primary-btn {
    background-color: #4FB7DD;
    color: #ffff;

  }
</style>