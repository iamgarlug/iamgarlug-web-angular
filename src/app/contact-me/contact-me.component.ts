import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    NgIf,
    ReactiveFormsModule,
  ],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent implements OnInit {
  isFormEnabled = environment.is_contact_me_form_enabled;

  public contactMeForm: FormGroup;

  ngOnInit(): void {
    this.contactMeForm = new FormGroup({
      from_name: new FormControl('', [Validators.required]),
      from_email: new FormControl('', [Validators.required, Validators.email]),
      from_company: new FormControl('', Validators.required),
      from_message: new FormControl('', Validators.required),
    });
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    // Only send emails in production.
    if (!environment.production) {
      return;
    }

    emailjs.sendForm(
        environment.emailjs_service_key,
        environment.emailjs_contact_me_template_key,
        e.target as HTMLFormElement,
        environment.emailjs_public_key)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  public hasError = (controlName: string, errorName: string) => {
    const control = this.contactMeForm.controls[controlName];
    return control.hasError(errorName) && (control.dirty || control.touched);
  }
}