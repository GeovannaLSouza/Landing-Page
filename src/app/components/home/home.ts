import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header";
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimary } from "../btn-primary/btn-primary";
import { NewsletterForm } from "../newsletter-form/newsletter-form";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent, 
    NgOptimizedImage, 
    BtnPrimary, 
    NewsletterForm
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  
}
