import { Component, DoCheck,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements DoCheck ,OnInit {
  id: string | null = null;
  
  title = 'Authentication';
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.id = sessionStorage.getItem('username');
  }
  ismenurequired = false;
  ngDoCheck(): void {
    let currenturl = this.router.url;
    if (currenturl == '/login' || currenturl == '/register') {
      this.ismenurequired = false;
    } else {
      this.ismenurequired = true;
    }
  }

  removesesion(){
    sessionStorage.removeItem('username');
  }

}
