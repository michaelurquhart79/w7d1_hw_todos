// console.log('test')

import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  console.log('test: dom loaded');
  new Vue({
    el: "#app",
    data: {
      todos: [
        "Buy shopping", "Clean bathroom", "Car's MOT"
      ],
      newItem: ""
    },
    methods: {
      saveNewItem: function(){
        this.todos.push(this.newItem);
        this.newItem = "";
      }
    }
  });
});
