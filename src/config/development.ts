const Config = {
  url: {
    __origin: function() {
      return 'http://localhost:3000/';
    },

    pubs: function() {
      return this.__origin() + 'pubs';
    }
  }
};

export default Config;
