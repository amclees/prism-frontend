import {browser,
        by,
        element} from 'protractor';

export class PrsFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('prs-root h1')).getText();
  }
}
