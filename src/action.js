(function(){

  function executeTarget(e){
    var node = this;
    var targets = xtag.query(document, node.target);
    var method = node.method;
    var event = node.event;
    (targets[0] ? targets : [node]).forEach(function(target){
      if (target[method]) target[method]();
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
      target: { attribute: {}},
      method: { attribute: {}},
      event: { attribute: {}}
    },
    methods: {
      execute: executeTarget
    }
  });

})();
