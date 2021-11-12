// We import only the things we need from Vue
// The below import grabs "createApp" function from a Vue library ("vue")
//
// The import automatically knows to look in node_modules for "vue" library
import { createApp } from "vue";
// This is a Vue component
// We import it from a Vue file (aka Single File Component) - App.vue
import App from "./App.vue";
// import global styles
import "./assets/global.css";
// Inside we pass in "App" object
// App is a root component that then mounts to the DOM to "#app" location
createApp(App).mount("#app");
