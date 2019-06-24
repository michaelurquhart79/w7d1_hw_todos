// console.log('test')

import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  // console.log('test: dom loaded');
  new Vue({
    el: "#app",
    data: {
      todos: [
        {name: "Buy shopping", priority: "High"},
        {name: "Clean bathroom", priority: "Low"},
        {name:"Car's MOT", priority: "Medium"}
      ],
      newItemName: "",
      newItemPriority: ""
    },
    methods: {
      saveNewItem: function(){
        this.todos.push({
          name: this.newItemName,
          priority: this.newItemPriority 
        });

        this.newItemName = "";
        this.newItemPriority = "";
      }
    }
  });
});
