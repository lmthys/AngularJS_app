import { Component, Injectable } from '@angular/core';
import { Item } from './Item';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
	constructor(private _http: Http){}
  private headers = new Headers({'Content-Type': 'application/json'});
  title = 'Laravel Angular 4 App';
	
	onSubmit(form: NgForm): Promise <Item>{
        return this._http.post('http://127.0.0.1:8000/api/items', JSON.stringify(form.value), {headers: this.headers})
  		   .toPromise()
    	           .then(res => res.json().data)
				   .then(this.completed)
				   .catch(this.printError)
    	           .catch(this.handleError);
  }
 
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
  }
	
	private printError(error: any){
	  document.getElementById("error").innerHTML = "";
	  var err = error.json()["errors"];
	  if(err.hasOwnProperty("user_name")){
		document.getElementById("error").innerHTML += err["user_name"];
		document.getElementById("error").innerHTML += "<br></br>";
	  }
	  if(err.hasOwnProperty("user_email")){
		document.getElementById("error").innerHTML += err["user_email"];  
		document.getElementById("error").innerHTML += "<br></br>";
	  }
	  if(err.hasOwnProperty("user_password")){
		document.getElementById("error").innerHTML += err["user_password"]; 
		document.getElementById("error").innerHTML += "<br></br>";
	  }  
	  
  }
  private completed(){
	window.location.href = "http://localhost:4200/Login";
  }
  
}
