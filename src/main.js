import { createApp } from 'vue';
import App from './App.vue';
import AppDivider from './components/ui/AppDivider';
import AppBlock from './components/ui/AppBlock';

const app = createApp(App);

// Global Components
app.component('AppDivider', AppDivider);
app.component('AppBlock', AppBlock);

app.mount('#app');
