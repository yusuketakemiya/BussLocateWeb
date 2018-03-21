<template>
  <v-ons-page>
    <p class="intro">
      一覧<br><br>
    </p>

    <v-ons-card v-for="page of getPages" :key="page.label"
      @click="push(page.component, page.label, page.flow)"
    >
      <div class="title">{{ page.label }}</div>
      <div class="content">{{ page.desc }}</div>
    </v-ons-card>
  </v-ons-page>
</template>

<script>
import BussLocate from './BussLocate.vue';

export default {
  computed: {
    getPages() {
      var flows = this.$store.state.bussflow.items;
      var pages = [];  
      flows.forEach(flow => {
        pages.push(
        {
          component: BussLocate,
          label: '[' + flow.company + ']' + flow.from + ' - ' + flow.to,
          desc: flow.desc,
          flow: flow
        });
      });
      return pages;
    }
  },
  methods: {
    push(page, key, flow) {
      console.log(flow.from);
      this.$store.commit('bussflow/set', flow);
      this.$store.commit('navigator/push', {
        extends: page,
        data() {
          return {
            toolbarInfo: {
              backLabel: 'Menue',
              title: key
            }
          }
        }
      });
    }
  }
};
</script>

<style>
.intro {
  text-align: left;
  padding: 0 22px;
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.4;
  color: rgba(0, 0, 0, .54);
}

ons-card {
  cursor: pointer;
  color: #333;
}

.card__title, .card--material__title {
  font-size: 20px;
}
</style>
