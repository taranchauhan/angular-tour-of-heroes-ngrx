import { Component, OnInit } from '@angular/core';
import { MessageService } from '@app/services/message/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class Messages implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

}
