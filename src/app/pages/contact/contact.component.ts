import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', './contact.component.responsive.css']
})
export class ContactComponent implements OnInit {
    formContact: FormGroup | null = null;

    constructor( private fb: FormBuilder){}

    ngOnInit(): void{
      this.formContact = this.fb.group({
        name: ["", Validators.required],
        topic: ["", Validators.required],
        tel: ["", Validators.required],
        email: ["", Validators.required]
      });
    }

    send(){

    }
}
