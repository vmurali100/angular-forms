import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name = new FormControl('');
  title = 'angular-forms2';

  updateName() {
    this.name.setValue('Nancy');
  }
}
