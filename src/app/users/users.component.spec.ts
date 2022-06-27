import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DataService } from './data.service';
import { UserService } from './user.service';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the user name from the service', () =>{
    let userService = fixture.debugElement.injector.get(UserService);
    expect(userService.user.name).toEqual(component.user.name);
  });

  it('should display username if the user is logged in', () => {
    let compiled = fixture.nativeElement;
    component.isLoggedIn = true;
    fixture.detectChanges();
    expect(compiled.querySelector('p').textContent).toContain(component.user.name);
  });

  it('shouldn\'t display username if the user is not logged in', () => {
    let compiled = fixture.nativeElement;
    // component.isLoggedIn = true;
    // fixture.detectChanges();
    expect(compiled.querySelector('p').textContent).not.toContain(component.user.name);
  });

  it('should\'t fetch data successfully if not called asynchronously', () => {
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(component.data).toBe(undefined);
  })

  it('should fetch data successfully using async', async() => {
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(component.data).toBe('Data');
    });
  })

  // it('should fetch data successfully using fakeasync', fakeAsync() => {
  //   let dataService = fixture.debugElement.injector.get(DataService);
  //   let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
  //   fixture.detectChanges();
  //   // fixture.whenStable().then(()=>{
  //   //   expect(component.data).toBe('Data');
  //   // });
  //   tick();
  //   expect(component.data).toBe('Data');
  // })
});
