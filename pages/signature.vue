<template>
  <div class="home-wrapper">
    <div class="container">
      <section>
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Assine o manifesto
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <b-field label="Nome completo">
                <b-input v-model="name" />
              </b-field>

              <b-field label="Email">
                <b-input type="email" />
              </b-field>

              <b-field label="Profissão">
                <b-input type="text" />
              </b-field>

              <b-button type="is-info is-light" size="is-medium">Salvar assinatura</b-button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button, Field, Input } from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Input)
Vue.use(Field)
Vue.use(Button)

export default { }
</script>

<style>

</style>
