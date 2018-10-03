<template>
  <div>
    <section class="hero is-info welcome is-small">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">Hello, Admin.</h1>
                <h2 class="subtitle">
                    I hope you are having a great day!
                </h2>
            </div>
        </div>
    </section>
    <div class="columns">
      <div class="column">
        <div class="card events-card">
          <header class="card-header">
              <p class="card-header-title">Count</p>
              <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                  {{ this.count }}<!--i class="fa fa-angle-down" aria-hidden="true"></i-->
                </span>
            </a>
          </header>
          <div >
              <div class="content">
                  <table class="table">
                      <tbody>
                          <tr>
                              <td width="5%"><!--i class="fa fa-bell-o"></i--></td>
                              <td><button class="button is-primary" @click="this.increment">increment</button></td>
                              <td><button class="button is-primary" @click="this.decrement">decrement</button></td>
                          </tr>
                          <tr>
                              <td width="5%"><i class="fa fa-bell-o"></i></td>
                              <td>Lorum ipsum dolem aire</td>
                              <td><a class="button is-small is-primary" href="#">Action</a></td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
          <footer class="card-footer">
              <a href="#" class="card-footer-item">View All</a>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      count: state => state.Counter.count,
      main: state => state.Counter.main
    }),
    ...mapGetters(['getCount'])
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  }
}
</script>

<style>
</style>

