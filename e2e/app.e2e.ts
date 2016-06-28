import { HackathonPage } from './app.po';

describe('hackathon App', function() {
  let page: HackathonPage;

  beforeEach(() => {
    page = new HackathonPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hackathon works!');
  });
});
