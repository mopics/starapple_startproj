import { StartprojPage } from './app.po';

describe('startproj App', () => {
  let page: StartprojPage;

  beforeEach(() => {
    page = new StartprojPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
