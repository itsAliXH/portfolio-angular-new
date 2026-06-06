import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { RevealOnScrollDirective } from '../../../common/directives/reveal-on-scroll.directive';

const SERVICE_ID = "service_9dce1co";
const TEMPLATE_ID = "template_6gn78oe";
const PUBLIC_ID = "Yo0HHRp18QKSSdeQc";

@Component({
  selector: 'app-contact',
  imports: [RevealOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})


export class Contact {

  sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target as HTMLFormElement, PUBLIC_ID)
      .then((result: EmailJSResponseStatus) => {
        alert('Message sent successfully!');
      }, (error:any) => {
        alert('Failed to send message. Please try again.');
      });
  }
}
