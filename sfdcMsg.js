(function(root, factory) {
  root.sfdcMsg = factory();
}(this, function() {
  var lib = {};
  lib.createMessageFactory = function() {
    var factory = {};
    factory.setMessage = function(msg, type) {
      if(!type) type = 0;
      var divId = 'infoDiv_ep';
      if(type == 1) divId = 'errorDiv_ep';
      var msgDiv = document.getElementById(divId);
      if(msg) {
        if(!msgDiv) {
          var bodyCell = document.getElementById('bodyCell');
          var body = bodyCell.getElementsByClassName('pbBody')[0];
          msgDiv = document.createElement('div');
          msgDiv.id = divId;
          if(type == 0) msgDiv.className = "pbInfo";
          else if(type == 1) msgDiv.className = "pbError";
          msgDiv.innerHTML = msg;
          msgDiv.style.display = 'block';
          body.insertBefore(msgDiv, body.firstChild);
        } else {
          msgDiv.style.display = 'block';
          msgDiv.innerHTML = msg;
        }
      } else if(msgDiv) msgDiv.style.display = 'none';
    }
    
    factory.setInfoMessage = function(msg) {
      this.setMessage(msg, 0);
    }
    factory.setErrorMessage = function(msg) {
      this.setMessage(msg, 1);
    }
    factory.clearInfoMessage = function() {
      this.setMessage(null, 0);
    }
    factory.clearErrorMessage = function() {
      this.setMessage(null, 1);
    }
    factory.clearMessages = function() {
      this.setMessage(null, 0);
      this.setMessage(null, 1);
    }
    return factory;
  }
  return lib;
}));