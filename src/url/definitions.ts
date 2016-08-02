import Config from 'config';

const Url = {
  pubs: function(page: number, filter: string, city: number) {
    return Config.server.__url() + 'pubs?q=' + filter + '&city=' + city + '&page=' + page;
  },
  cities: function() {
    return Config.server.__url() + 'cities';
  }
};

export default Url;
