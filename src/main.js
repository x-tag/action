(function(){

  function executeTarget(e){
    var node = this;
    var event = node.event;
    var method = node.method;
    var params = node.xtag.params || [];
    var targets = xtag.query(document, node.target);
    (targets[0] ? targets : [node]).forEach(function(target){
      if (target[method]) target[method].apply(null, params);
      if (event) xtag.fireEvent(target, event, {
        detail: {
          actionElement: node
        }
      });
    });
  }

  xtag.register('x-action', {
    events: {
      'tap': executeTarget
    },
    accessors: {
      event: { attribute: {}},
      target: { attribute: {}},
      method: { attribute: {}},
      params: {
        attribute: {},
        set: function(params){
          this.xtag.params = JSON.parse('[' + params + ']');
        }
      },
    },
    methods: {
      execute: executeTarget
    }
  });

})();
