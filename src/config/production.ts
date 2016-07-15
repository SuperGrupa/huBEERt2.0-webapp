const Config = {
  url: {
    __origin: function() {
      return 'http://hubeert-server.herokuapp.com/';
    },

    pubs: function() {
      return this.__origin() + 'pubs';
    }
  }
};

export default Config;
