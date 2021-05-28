import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';
import {PLATFORM} from 'aurelia-pal';

describe('Stage App Component', () => {
  let component;

  beforeEach(() => {
    component = StageComponent
      .withResources(PLATFORM.moduleName('app'))
      .inView('<app></app>');
  });

  afterEach(() => component.dispose());

  it('should check for title todo', done => {
    component.create(bootstrap).then(() => {
      const view = component.element;
      console.log(view);
      expect(view.textContent.trim()).toBe('Todos');
      done();
    }).catch(e => {
      fail(e);
      done();
    });
  });
});
