import Config from 'config';

const Url = {
  pubs: {
    all: (page: number, filter: string, city: string) => Config.server.__url() + 'pubs?q=' + filter + '&city=' + city + '&page=' + page,
    one: (id: number) => Config.server.__url() + 'pubs/' + id,
    comments: (pub_id: number) => Config.server.__url() + 'pubs/' + pub_id + '/comments',
    offer: (pub_id: number) => Config.server.__url() + 'pubs/' + pub_id + '/offers',
    events: (pub_id: number) => Config.server.__url() + 'pubs/' + pub_id + '/events',
  },

  users: {
    all: () => Config.server.__url() + 'users',
    one: (user_id) => Config.server.__url() + 'users/' + user_id,
    comments: (user_id) => Config.server.__url() + 'users/' + user_id + '/comments',
    subscriptions: {
      all: (user_id) => Config.server.__url() + 'users/' + user_id + '/subscriptions',
      one: (user_id, sub_id) => Config.server.__url() + 'users/' + user_id + '/subscriptions/' + sub_id,
    },
    notifications: {
      all: (user_id) => Config.server.__url() + 'users/' + user_id + '/notifications',
      one: (user_id, not_id) => Config.server.__url() + 'users/' + user_id + '/notifications/' + not_id,
    },
  },

  tokens: {
    all: () => Config.server.__url() + 'tokens',
    one: (token_id: number) => Config.server.__url() + 'tokens/' + token_id,
  },

  beers: {
    one: (id: number) => Config.server.__url() + 'beers/' + id,
  },

  cities: {
    all: () => Config.server.__url() + 'cities',
  },
};

export default Url;
