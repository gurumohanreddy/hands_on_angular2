import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2HackathonAppComponent } from '../app/angular2-hackathon.component';

beforeEachProviders(() => [Angular2HackathonAppComponent]);

describe('App: Angular2Hackathon', () => {
  it('should create the app',
      inject([Angular2HackathonAppComponent], (app: Angular2HackathonAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-hackathon works!\'',
      inject([Angular2HackathonAppComponent], (app: Angular2HackathonAppComponent) => {
    expect(app.title).toEqual('angular2-hackathon works!');
  }));
});
