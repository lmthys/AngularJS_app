import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { CountingComponent } from './counting/counting.component';
import { NumConcentrationComponent } from './counting/num-concentration/num-concentration.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatchingComponent } from './alphabet/matching/matching.component';
import { NumAssociationComponent } from './counting/num-association/num-association.component';
import { AlphaSequenceComponent } from './alphabet/alpha-sequence/alpha-sequence.component';


const routes: Routes = [
  {path: '', redirectTo: '/Login', pathMatch: 'full' },
  {path: 'Login', component: LoginComponent},
  {path: 'SignUp', component: SignupComponent},
  {path: 'Counting-Games', component: CountingComponent},
  {path: 'Alphabet-Games', component: AlphabetComponent},
  {path: 'NumConcentration', component: NumConcentrationComponent},
  {path: 'NumAssociation', component: NumAssociationComponent},
  {path: 'NumSequence', component: CountingComponent},
  {path: 'AlphaConcentration', component: MatchingComponent},
  {path: 'AlphaAssociation', component: AlphaSequenceComponent},
  {path: 'AlphaSleuth', component: AlphabetComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
