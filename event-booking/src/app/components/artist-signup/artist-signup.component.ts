import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Performer } from '../artist-signup/performer';

@Component({
  selector: 'app-artist-signup',
  templateUrl: './artist-signup.component.html',
  styleUrls: ['./artist-signup.component.css']
})
export class ArtistSignupComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  responsedata = new Performer('', '', '', '', '', '', '');
  performerModel = new Performer('', '', '', '', '', '', '');
  confirm_msg = '';
  data_submitted = '';

  // takes a performer object
  confirmOrder(data: Performer) {
    console.log(data);
    this.confirm_msg = 'Thank you, ' + data.name + '(' + data.name.length + ')';
    this.confirm_msg += '. Now you go out and play the best ' + data.genre + ' music you can!';
  }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    // log the value to check
    console.log('You submitted value: ', form);

    // convert the form data to a JSON
    let params = JSON.stringify(form);

    // To send a GET request, use the concept of URL rewriting to pass data to the backend
    // this.http.get<Order>('http://localhost/cs4640/inclass11/ngphp-get.php?str='+params)
    // To send a POST request, pass data as an object
    this.http.post<Performer>('http://localhost/WEB_PL/project/performer/performerSignUp.php', params)
      .subscribe((data) => {
        // Receive a response successfully, do something here
        console.log('Response from backend ', data);
        this.responsedata = data;     // assign response to responsedata property to bind to screen later
      }, (error) => {
        // An error occurs, handle an error in some way
        console.log('Error ', error);
      })
  }


}
