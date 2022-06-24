import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training-project';
  defaultQuestion = 'teacher';
  QuesAnswer: string;
  genders = ['male', 'female', 'others'];
  isSubmitted: boolean = false;
  formData={
    username: '',
    email:'',
    Ques: '',
    ans:'',
    gender: ''
  };

  @ViewChild('f') signupform: NgForm;

  onSubmit(formData) {
    console.log(this.signupform);
    this.formData.username = this.signupform.value.username;
    this.formData.email = this.signupform.value.email;
    this.signupform.reset({
      QuesAns: {
        secret: 'teacher',
        answer: ''
      },
      email:'abc@abc.com',
      gender: 'female',
      username: 'Rahul'
    });
  }

  onUsernameSuggested() {
    const suggestion: string = 'SuperUser';
    // this.signupform.setValue({
    //   QuesAns: {
    //     secret: 'teacher',
    //     answer: ''
    //   },
    //   email:'abc@abc.com',
    //   gender: 'female',
    //   username: suggestion
    // });

    this.signupform.form.patchValue({
      username: suggestion
    });
  }
}
