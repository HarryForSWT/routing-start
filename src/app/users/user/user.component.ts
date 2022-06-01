import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number,name: string; };
  paramsSubscription: Subscription;

  constructor(private route : ActivatedRoute) {}
  
  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.paramsSubscription = this.route.params
        .subscribe(
          (params: Params)=>{
            this.user.id = params['id'];
            this.user.name = params['name']
          }
        );
  }

  //Diese Methode ist beim Lernen des Routings noch nicht notwendig.
  ngOnDestroy(){
   this.paramsSubscription.unsubscribe();
  }


}