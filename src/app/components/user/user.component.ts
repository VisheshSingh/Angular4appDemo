import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;//interface provided at the bottom as it is an object
  hobbies: string[]; // an array of strings;
  hello: any; //could be anything. Eg: string or number
  posts: any;

  constructor(private DS: DataService) {
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
    this.hobbies = ['write code', 'teach code', 'cricket'];
    this.hello = "hey!!!";

    this.DS.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  onClick(){
    this.hello = 'hello man!!!';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i=0; i< this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  }
}

interface Address{
  street: string,
  city: string,
  state: string,
  zip: string
}

interface Posts {
  id:number,
  title:string,
  body:string,
  userId:number
}
