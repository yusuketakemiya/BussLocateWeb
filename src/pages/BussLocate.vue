<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>

    <v-ons-pull-hook
      :action="onAction"
      :fixed-content="md"
      :height="md ? 84 : 64"
      :on-pull="md && onPull || null"
      @changestate="state = $event.state"
    >

      <!-- Show this on iOS -->
      <v-ons-icon v-if="!md"
        size="22px"
        class="pull-hook-spinner"
        :icon="state === 'action' ? 'fa-spinner' : 'fa-arrow-down'"
        :rotate="state === 'preaction' && 180"
        :spin="state === 'action'"
      ></v-ons-icon>

      <!-- Show this on Material Design -->
      <div v-else class="pull-hook-progress">
        <v-ons-progress-circular
          :value="ratio * 100"
          :indeterminate="state === 'action'"
          :style="{ transform: `rotate(${ratio}turn)` }"
        ></v-ons-progress-circular>
      </div>

    </v-ons-pull-hook>

    <label class="center">{{ flow.name }}</label>
    <label class="center">{{ flow.company }}</label>
    <label class="center">{{ flow.from }}</label>
    <label class="center">{{ flow.to }}</label>
    <label class="center">{{ flow.desc }}</label>

  </v-ons-page>
</template>

<script>
export default {
  data() {
    return {
      state: 'initial',
      flow: this.getFlow(),
      ratio: 0
    };
  },

  methods: {
    onPull(ratio) {
      this.ratio = ratio;
    },
    onAction(done) {
      setTimeout(() => {
        this.flow = this.getFlow();
        done();
      }, 1500);
    },
    getFlow() {
      return this.$store.state.bussflow.current;
    }
  }
};
</script>

<style>
</style>
