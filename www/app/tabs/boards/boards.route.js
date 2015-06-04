import BoardsTemplate from './boards.html!text';

export let boardRoute = {
  url: '/boards',
  views: {
    'tab-boards': {
      template: BoardsTemplate
    }
  }
};
