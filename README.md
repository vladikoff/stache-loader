# stache-loader

Almost like https://github.com/jfparadis/requirejs-mustache but for [webpack](https://github.com/webpack/webpack).

Helps webpack load AMD Mustache templates like so:
```
require(['backbone', 'stache!mytemplate'], function (Backbone, mytemplate) {
  return Backbone.View.extend({
    initialize: function(){
      this.render();
    },
    render: function(){
      this.$el.html(mytemplate({message: 'hello'}));
  });
});
```
