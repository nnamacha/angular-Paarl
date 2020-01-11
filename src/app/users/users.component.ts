import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
  {{ user.name }}<br/>
  {{ user. age }}<br/>
  {{ user.role }}<br/>
  {{ dateOfBirth }}<br/>

  `
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 user={
  name:"Nicholas Namacha",
  age:37,
  role:"Admin",
  dateOfBirth:"24/08/1982"
 }

 

}
