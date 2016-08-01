import Config from 'config';

const Url = {
  pubs: function(page: number, filter: string) {
    return Config.server.__url() + 'pubs?page=' + page + '&q=' + filter;
  },
  cities: function() {
    return Config.server.__url() + 'cities';
  }
};

export default Url;
