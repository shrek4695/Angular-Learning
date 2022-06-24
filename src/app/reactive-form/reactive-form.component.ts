import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders=['male', 'female', 'others'];
  forbiddenUsernames = ['random', 'abc', 'test'];
  signupform: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signupform = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenUsername.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.asynForbiddenEmailValidator)
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    })

    // this.signupform.valueChanges
    this.signupform.statusChanges.subscribe((status) => {
      console.log("Status", status);
    })
    //console.log(this.signupform);
  }

  onSetUsername() {
    // this.signupform.setValue({
    //   'userData': {
    //     'username': "Shreea",
    //     'email': "",
    //   },
    //   'gender': "female",
    //   'hobbies': []
    // })

    this.signupform.patchValue({
      'userData': {
        'username': "Shreea"
      }
    })
  }

  onSubmit() {
    console.log(this.signupform);
    this.signupform.reset();
  }

  getControl() {
    return (<FormArray> this.signupform.get('hobbies')).controls;
  }

  get Controls() {
    return (this.signupform.get('hobbies') as FormArray).controls;
  }

  onAddHobby() {
    (<FormArray>this.signupform.get('hobbies')).push(new FormControl(null, Validators.required));
  }

  forbiddenUsername(control: FormControl):{[s:string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value)!==-1) {
      return  {'nameIsForbidden': true};
    } 
    return null;
  }

  asynForbiddenEmailValidator(control: FormControl): Promise<any>| Observable<any> {
    const promise = new Promise<any>((resolve, reject)=> {
      setTimeout(()=> {
        if(control.value ==="test@test.com") {
          resolve({'emailIsForbidden': true})
        } else {
          resolve(null);
        }
      }, 1000)
    });
    return promise;
  }

}
