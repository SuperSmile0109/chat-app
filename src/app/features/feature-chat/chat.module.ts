import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { ChatComponent } from './pages/chat.component';

import { ChatSelectChannelComponent } from './components/chat-select-channel/chat-select-channel.component';
import { ChatSelectUserComponent } from './components/chat-select-user/chat-select-user.component';
import { ChatWrapperHeaderComponent } from './components/chat-wrapper-header/chat-wrapper-header.component';
import { ChatWrapperMessagesComponent } from './components/chat-wrapper-messages/chat-wrapper-messages.component';
import { ChatReadmoreButtonComponent } from './components/chat-readmore-button/chat-readmore-button.component';
import { ChatWrapperTextareaComponent } from './components/chat-wrapper-textarea/chat-wrapper-textarea.component';



@NgModule({
  declarations: [
    ChatComponent,
    ChatSelectChannelComponent,
    ChatSelectUserComponent,
    ChatWrapperHeaderComponent,
    ChatWrapperMessagesComponent,
    ChatReadmoreButtonComponent,
    ChatWrapperTextareaComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ChatModule { }
