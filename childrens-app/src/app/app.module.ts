import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 


import { AppComponent } from './app.component';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { CountingComponent } from './counting/counting.component';
import { LoginComponent } from './login/login.component';
import { CountingDetailComponent } from './counting-detail/counting-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { NumConcentrationComponent } from './counting/num-concentration/num-concentration.component';
import { SignupComponent } from './signup/signup.component';
import { MatchingComponent } from './alphabet/matching/matching.component';
import { NumAssociationComponent } from './counting/num-association/num-association.component';
import { AlphaSequenceComponent } from './alphabet/alpha-sequence/alpha-sequence.component';



@NgModule({
  declarations: [
    AppComponent,
    AlphabetComponent,
    CountingComponent,
    LoginComponent,
    CountingDetailComponent,
    NumConcentrationComponent,
    SignupComponent,
    MatchingComponent,
    NumAssociationComponent,
    AlphaSequenceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
