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
  offer: function(pub_id: number) {
    return Config.server.__url() + 'pubs/' + pub_id + '/offers';
  },
  events: function(pub_id: number) {
    return Config.server.__url() + 'pubs/' + pub_id + '/events';
  },

  users: {
    all: () => Config.server.__url() + 'users',
    one: (user_id) => Config.server.__url() + 'users/' + user_id,
    comments: (user_id) => Config.server.__url() + 'users/' + user_id + '/comments',
    subscriptions: (user_id) => Config.server.__url() + 'users/' + user_id + '/subscriptions',
    notifications: {
      all: (user_id) => Config.server.__url() + 'users/' + user_id + '/notifications',
      one: (user_id, not_id) => Config.server.__url() + 'users/' + user_id + '/notifications' + not_id,
    },
  },

  tokens: {
    all: () => Config.server.__url() + 'tokens',
    one: (token_id) => Config.server.__url() + 'tokens/' + token_id,
  },

  beer(id: number) {
    return Config.server.__url() + 'beers/' + id;
  },

  cities: function() {
    return Config.server.__url() + 'cities';
  }
};

export default Url;
