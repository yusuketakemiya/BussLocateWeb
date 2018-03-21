export default {
  modules: {
    navigator: {
      strict: true,
      namespaced: true,
      state: {
        stack: [],
        options: {}
      },
      mutations: {
        push(state, page) {
          state.stack.push(page);
        },
        pop(state) {
          if (state.stack.length > 1) {
            state.stack.pop();
          }
        },
        replace(state, page) {
          state.stack.pop();
          state.stack.push(page);
        },
        reset(state, page) {
          state.stack = [page || state.stack[0]];
        },
        options(state, newOptions = {}) {
          state.options = newOptions;
        }
      }
    },

    splitter: {
      strict: true,
      namespaced: true,
      state: {
        open: false
      },
      mutations: {
        toggle(state, shouldOpen) {
          if (typeof shouldOpen === 'boolean') {
            state.open = shouldOpen;
          } else {
            state.open = !state.open;
          }
        }
      }
    },

    tabbar: {
      strict: true,
      namespaced: true,
      state: {
        index: 0
      },
      mutations: {
        set(state, index) {
          state.index = index;
        }
      }
    },
    bussflow: {
      strict: true,
      namespaced: true,
      state: {
        items: [
          { name : 'test', company: '西部バス', from: '土支田一丁目', to: '光が丘駅', desc: 'TEST' },
          { name : 'test', company: '西部バス', from: '光が丘駅', to: '土支田一丁目', desc: 'TEST' }
        ],
        current : null
      },
      mutations: {
        set(state, flow) {
          state.current = flow;
        }
      }
    },
  }
};
