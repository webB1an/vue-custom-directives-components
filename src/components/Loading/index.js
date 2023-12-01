import { createApp } from 'vue';
import Loading from './index.vue';

let instance;

const loading = function (options) {
  if (!instance) {
    const app = createApp(Loading, {
      ...options
    });

    instance = app.mount(document.createElement('div'));

    document.body.appendChild(instance.$el);
  }

  instance.close = function () {
    document.body.removeChild(instance.$el);
    instance = null;
  };

  return instance;
};

export default loading;
