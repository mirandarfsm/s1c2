<template>
  <div id="app">
    <!-- START NAV -->
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item brand-text" href="../">Bulma Admin</a>
          <div class="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">Home</router-link>
            <router-link to="/usuarios" class="navbar-item">Usuario</router-link>
            <router-link to="/count" class="navbar-item">Count</router-link>
            <a class="navbar-item" href="#">Exceptions</a>
          </div>
        </div>
      </div>
    </nav>
    <!-- END NAV -->
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <aside class="menu">
            <p class="menu-label">General</p>
            <ul class="menu-list">
              <li><a class="is-active">Dashboard</a></li>
              <li><a>Customers</a></li>
            </ul>
            <p class="menu-label">Administration</p>
            <ul class="menu-list">
                <li><a>Team Settings</a></li>
                <li>
                    <a>Manage Your Team</a>
                    <ul>
                        <li><a>Members</a></li>
                        <li><a>Plugins</a></li>
                        <li><a>Add a member</a></li>
                    </ul>
                </li>
                <li><a>Invitations</a></li>
                <li><a>Cloud Storage Environment Settings</a></li>
                <li><a>Authentication</a></li>
            </ul>
            <p class="menu-label">Transactions</p>
            <ul class="menu-list">
                <li><a>Payments</a></li>
                <li><a>Transfers</a></li>
                <li><a>Balance</a></li>
            </ul>
          </aside>
        </div>
        <div class="column is-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'spac2-vuex'
  }
</script>

<style>
  /* CSS */
</style>
