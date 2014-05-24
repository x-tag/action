(function(){

  function executeTarget(e){
    var targets = xtag.query(document, this.target);
    var method = this.method;
    var event = this.event;
    (targets[0] ? targets : [this]).forEach(function(target){
      if (typeof target[method] === 'function'){
        target[method]();
      }
      if (event) xtag.fireEvent(target, event);
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
