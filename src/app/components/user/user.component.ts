import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;

  constructor() {
    console.log('Constructor ran..');
  }

  ngOnInit() {
    //ngOnInit always overrides the properties of the class
    this.name = "Vishesh Thakur";
    this.age = 24;
    this.email = "Visheshsingh16@gmail.com";
    this.address = {
      street: '3 prospect st',
      city: 'Kingston',
      state: 'NJ',
      zip: '08528'
    };
  }
}

interface Address{
  street: string,
  city: string,
  state: string,
  zip: string  
}
