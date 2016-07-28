import Config from 'config';

const Url = {
  pubs: function(page: number, filter: string) {
    return Config.server.__url() + 'pubs?page=' + page + '&q=' + filter;
  }
};

export default Url;
