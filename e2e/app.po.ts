export class HackathonPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hackathon-app h1')).getText();
  }
}
