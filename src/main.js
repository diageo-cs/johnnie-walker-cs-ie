import { createApp } from 'vue'
import App from './App.vue'
import apiCall from './js/fetch.js';
import dataModel from './js/model.js';

//call the api to get data from channelsight
apiCall();

//check the data has loaded, if not try again in 1 second
var checkData = function() {
    if(Object.keys(dataModel[1].retailers).length < 1) {
        console.log('Data is still loading...');
        setTimeout(function() {
            checkData();
        }, 1000)
    } else {
        console.log('Data is loaded: \n');
        console.log(dataModel);
        setTimeout(function() {
            createApp(App).mount('#app')
        }, 500)
    }
}
checkData();



