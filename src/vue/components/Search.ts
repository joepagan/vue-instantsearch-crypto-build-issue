import {
  defineComponent,
} from 'vue';
import algoliasearch from 'algoliasearch/lite';

export default defineComponent({
  delimiters: ['${', '}'],
  props: {
    searchApiKey: {
      type: String,
      default: '',
    },
    appId: {
      type: String,
      default: '',
    },
    environment: {
      type: String,
      default: 'production',
    },
  },
  setup(props: any) {
    return {
      indexName: `${props.environment}_products`,
      categoryIndexName: `${props.environment}_product_categories`,
    };
  },
  data() {
    return {
      searchClient: algoliasearch(
        this.appId,
        this.searchApiKey,
      ),
      enabled: false,
    };
  },
  methods: {
    toggleSearch() {
      this.enabled = !this.enabled;
    },
  },
  template: '#t-search',
});
