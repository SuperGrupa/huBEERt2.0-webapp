import Config from 'config';

const Url = {
  pubs: {
    all: (page: number, filter: string, city: string) => Config.server.__url() + 'pubs?q=' + filter + '&city=' + city + '&page=' + page,
    one: (id: number) => Config.server.__url() + 'pubs/' + id,
    comments: {
      all: (pub_id: number) => Config.server.__url() + 'pubs/' + pub_id + '/comments',
    },
    offer: {
      all: (pub_id: number) => Config.server.__url() + 'pubs/' + pub_id + '/offers',
      one: (pub_id: number, offer_id: number) => Config.server.__url() + 'pubs/' + pub_id + '/offers/' + offer_id,
    },
    events: {
      all: (pub_id: number) => Config.server.__url() + 'pubs/' + pub_id + '/events',
      one: (pub_id: number, event_id: number) => Config.server.__url() + 'pubs/' + pub_id + '/events/' + event_id,
    },
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
    all: () => Config.server.__url() + 'beers',
    one: (id: number) => Config.server.__url() + 'beers/' + id,
  },

  cities: {
    all: () => Config.server.__url() + 'cities',
  },
};

export default Url;
