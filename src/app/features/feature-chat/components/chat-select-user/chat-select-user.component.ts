import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { User } from 'src/app/core/models';

@Component({
  selector: 'chat-select-user',
  templateUrl: './chat-select-user.component.html',
  styleUrls:["./chat-select-user.component.scss"]
})
export class ChatSelectUserComponent implements OnInit {
  userForm!: FormGroup;
  @Output() selectedUser = new EventEmitter<any>();

  users: User[] = [
    {
      userId: 'Joyse',
      userName: 'Joyse',
    },
    {
      userId: 'Russell',
      userName: 'Russell',
    },
    {
      userId: 'Sam',
      userName: 'Sam',
    },
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      userId: ['', Validators.required]
    });
  }

  getSelectedUser(form: FormGroupDirective): void {
    if (form.valid) {
      this.selectedUser.emit(form.value);
    }
  }


}
