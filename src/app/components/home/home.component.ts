import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public products(){
    console.log("products")
    this.router.navigateByUrl('/products')
  }

  public home(){
    this.router.navigateByUrl('/')
  }

  public orders(){
    this.router.navigateByUrl('/orders')
  }

  public bookings(){
    this.router.navigateByUrl('/bookings')
  }



}
