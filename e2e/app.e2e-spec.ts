import { AlpsPage } from './app.po';

describe('alps App', () => {
  let page: AlpsPage;

  beforeEach(() => {
    page = new AlpsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
