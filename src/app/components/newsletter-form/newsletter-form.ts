import { Component, signal } from '@angular/core';
import { BtnPrimary } from "../btn-primary/btn-primary";
import { EmailValidator, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Newsletter } from '../../services/newsletter';

@Component({
  selector: 'app-newsletter-form',
  imports: [BtnPrimary,
    ReactiveFormsModule
  ],
  providers: [
    NewsletterService
  ],
  templateUrl: './newsletter-form.html',
  styleUrl: './newsletter-form.scss'
})
export class NewsletterForm {
    newsletterForm!: FormGroup;
    loading = signal (false);

    constructor(private service: NewsletterService) {
      this.newsletterForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
      });
    }

    onSubmit(){
      this.loading.set(true);
      if(this.newsletterForm.valid){
        this.service.sendData(this.newsletterForm.value.name, this.newsletterForm.value.email).subscribe({
          next: () => {
            this.newsletterForm.reset
            this.loading.set(false);
          }
        })
      }
    }
}

//I accidentally ended up making the commit redundant, 
// because I forgot to delete what I had already written, 
// and the title ended up being bad, sorry to anyone who is reading hahaha 