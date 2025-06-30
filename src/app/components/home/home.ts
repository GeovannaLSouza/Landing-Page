import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Home, HeaderComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
