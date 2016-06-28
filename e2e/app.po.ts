export class Angular2HackathonPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-hackathon-app h1')).getText();
  }
}
