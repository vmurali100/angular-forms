import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profiles=[]
  profileForm = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl()
  })
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.profiles.push(this.profileForm.value)
    console.log(this.profileForm.value)
  }
  

}
