import { Component } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.sass']
})
export class ContentBodyComponent {
  conversationId?: string;

  constructor (
    private state: StateService
  ) {

  }

  ngOnInit () {
    this.state.currentConversation.subscribe(conversationId => {
      this.conversationId = conversationId;
    });
  }
  
}
