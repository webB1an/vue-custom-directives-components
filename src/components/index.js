import loading from './Loading';
import Loading from './Loading/index.vue';

const components = {
  Loading
};

const fns = {
  loading
};

export default {
  install(app) {
    Object.keys(fns).forEach((key) => {
      app.provide(key, fns[key]);
      app.config.globalProperties[`$${key}`] = fns[key];
    });
    Object.keys(components).forEach((key) => {
      app.component(key, components[key]);
    });
  }
};
