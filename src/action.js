(function(){

  function executeTarget(e){
    console.log(e)
    var targets = xtag.query(document, this.target);
    var action = this.action;
    var event = this.event;
    (targets[0] ? targets : [this]).forEach(function(target){
      if (typeof target[action] === 'function'){
        target[action]();
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
      action: { attribute: {}},
      event: { attribute: {}}
    },
    methods: {
      execute: executeTarget
    }
  });

})();
