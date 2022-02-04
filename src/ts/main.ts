import { createApp } from 'vue';
import InstantSearch from 'vue-instantsearch/vue3/es';

// Components
import Search from '@/vue/components/Search.ts';

export default function init() {
  // Create our vue instance
  const vueInstance = createApp({
    delimiters: ['${', '}'],
    components: {
      Search,
    },
  });
  // Use InstantSearch
  vueInstance.use(InstantSearch);
  // Mount the app
  vueInstance.mount('#app');
}

init();
