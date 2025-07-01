import { Component } from '@angular/core';
import { BtnPrimary } from "../btn-primary/btn-primary";
import { EmailValidator, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter-form',
  imports: [BtnPrimary,
    ReactiveFormsModule
  ],
  templateUrl: './newsletter-form.html',
  styleUrl: './newsletter-form.scss'
})
export class NewsletterForm {
    newsletterForm!: FormGroup;

    constructor() {
      this.newsletterForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
      });
    }

    onSubmit(){
      console.log(this.newsletterForm.value)
    }
}

//I accidentally ended up making the commit redundant, 
// because I forgot to delete what I had already written, 
// and the title ended up being bad, sorry to anyone who is reading hahaha 