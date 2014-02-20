define(["dojo/Evented", "dojo/_base/declare"], function(Evented, declare) {
  return declare([Evented], {

    Obj: {},

    watch: function(obj) {
      this.Obj = obj;
    },
    set: function(key, val) {
      if(this.Obj.hasOwnProperty(key)) {
        this.Obj[key] = val;
        this._notify(key, val);
      }
    },
    get: function(key) {
      return this.Obj[key];
    },
    _notify: function(key, value) {
      console.log(this);
      this.emit("PropertyChanged", {key:key, value:value}); 
    }
  });
});
