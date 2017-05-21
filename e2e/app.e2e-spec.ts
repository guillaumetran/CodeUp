import { CodeUpPage } from './app.po';

describe('code-up App', () => {
  let page: CodeUpPage;

  beforeEach(() => {
    page = new CodeUpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
