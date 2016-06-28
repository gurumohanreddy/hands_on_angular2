import { Angular2HackathonPage } from './app.po';

describe('angular2-hackathon App', function() {
  let page: Angular2HackathonPage;

  beforeEach(() => {
    page = new Angular2HackathonPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-hackathon works!');
  });
});
