import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-button-action',
  standalone: true,
  imports: [],
  templateUrl: './button-action.component.html',
  styleUrl: './button-action.component.css'
})
export class ButtonActionComponent {
  public btnActionTitle = signal('')

  @Input() set inputBtnActionTitle(title: string){
    this.btnActionTitle.set(title);
  } 
}
