import Config from 'config';

const Url = {
  pubs: function(page: number, filter: string) {
    return Config.server.__url() + 'pubs?page=' + page + '&q=' + filter;
  },
  pub: function(id: number) {
    return Config.server.__url() + 'pubs/' + id;
  }
};

export default Url;
