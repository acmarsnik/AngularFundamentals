import { TestBed, async } from '@angular/core/testing';
import { EventAppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventAppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EventAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-fundamentals'`, () => {
    const fixture = TestBed.createComponent(EventAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng-fundamentals');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EventAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'ng-fundamentals app is running!'
    );
  });
});
