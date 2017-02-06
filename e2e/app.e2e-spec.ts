import { NgChatAppPage } from './app.po';

describe('ng-chat-app App', function() {
  let page: NgChatAppPage;

  beforeEach(() => {
    page = new NgChatAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
