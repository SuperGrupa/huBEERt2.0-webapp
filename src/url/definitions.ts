import Config from 'config';

const Url = {
  pubs: function(page: number, filter: string, city: string) {
    return Config.server.__url() + 'pubs?q=' + filter + '&city=' + city + '&page=' + page;
  },
  pub: function(id: number) {
    return Config.server.__url() + 'pubs/' + id;
  },
  comments: function(pub_id: number) {
    return Config.server.__url() + 'pubs/' + pub_id + '/comments';
  },
  cities: function() {
    return Config.server.__url() + 'cities';
  }
};

export default Url;
