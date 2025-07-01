import { Component } from '@angular/core';
import { BtnPrimary } from "../btn-primary/btn-primary";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
        name: new FormControl('', Validators.required),
      });
    }
}
