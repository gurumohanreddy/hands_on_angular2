import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HackathonAppComponent } from '../app/hackathon.component';

beforeEachProviders(() => [HackathonAppComponent]);

describe('App: Hackathon', () => {
  it('should create the app',
      inject([HackathonAppComponent], (app: HackathonAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'hackathon works!\'',
      inject([HackathonAppComponent], (app: HackathonAppComponent) => {
    expect(app.title).toEqual('hackathon works!');
  }));
});
