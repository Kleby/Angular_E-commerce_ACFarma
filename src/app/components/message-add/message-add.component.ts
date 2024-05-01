import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-message-add',
  standalone: true,
  imports: [],
  templateUrl: './message-add.component.html',
  styleUrl: './message-add.component.css',
})
export class MessageAddComponent implements OnInit{
  public title: WritableSignal<string> = signal('');
  @Input() set inputTitle(title: string) {
    this.title.set(title);
  }

  public description: WritableSignal<string> = signal('');
  @Input() set inputDescription(description:string){
    this.description.set(description);
  }

  @Output() showMessage:EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
      this.onShowMessage();
  }

  onShowMessage(){
    setTimeout(() => this.showMessage.emit(false), 4000)
  }
}
