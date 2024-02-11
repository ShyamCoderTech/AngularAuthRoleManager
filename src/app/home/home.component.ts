import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  id!: string | null;
  ngOnInit(): void {
    this.id = sessionStorage.getItem('username');
  }

}
