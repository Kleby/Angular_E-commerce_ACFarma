import { Component, Output, EventEmitter, WritableSignal, signal, Input } from '@angular/core';

@Component({
  selector: 'app-message-delete',
  standalone: true,
  imports: [],
  templateUrl: './message-delete.component.html',
  styleUrl: './message-delete.component.css'
})
export class MessageDeleteComponent {

  @Output() isDeleteMessage: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() closeMessage: EventEmitter<boolean> = new EventEmitter<boolean>()
  
  public itemTitle:WritableSignal<string> = signal('');
  @Input() set inputItemTitle(title: string){
    this.itemTitle.set(title);
  }


  onDeleteMessage(){
    //Butão para deletar o item
    this.isDeleteMessage.emit();
  }

  onCloseMessage(){
    //botão de fechar    
    this.closeMessage.emit(false)
  }
}
