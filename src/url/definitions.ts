import Config from 'config';

const Url = {
  pubs: function() {
    return Config.server.__url() + 'pubs';
  }
};

export default Url;
