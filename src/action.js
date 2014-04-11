(function(){

  function executeTarget(selector, action){
    xtag.query(document, selector).forEach(function(element){
      if (typeof element[action] === 'function'){
        element[action]();
      }
    });
  }

  xtag.register('x-action', {
    lifecycle: {
      created: function(){

      }
    },
    events: {
      'tap': function(){
        executeTarget(this.target, this.action);
      }
    },
    accessors: {
      target: { attribute: {}},
      action: { attribute: {}}
    },
    methods: {}
  });

})();
