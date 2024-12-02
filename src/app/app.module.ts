import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarSearchComponent } from './sidebar-search/sidebar-search.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { ChatPreviewComponent } from './chat-preview/chat-preview.component';
import { StringPreviewPipe } from './string-preview.pipe';
import { PhoneNumberPipe } from './phone-number.pipe';
import { ConversationPanelComponent } from './conversation-panel/conversation-panel.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { ContentBodyComponent } from './content-body/content-body.component';
import { ContentFooterComponent } from './content-footer/content-footer.component';
import { TextMessageComponent } from './text-message/text-message.component';
import { MessageBubbleComponent } from './message-bubble/message-bubble.component';
import { InteractiveMessageComponent } from './interactive-message/interactive-message.component';
import { MessageButtonsComponent } from './message-buttons/message-buttons.component';
import { LocationMessageComponent } from './location-message/location-message.component';
import { MapsURLPipe } from './maps-url.pipe';
import { NormalizeTextPipe } from './normalize-text.pipe';
import { TripsViewComponent } from './trips-view/trips-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    SidebarComponent,
    ContentComponent,
    SidebarHeaderComponent,
    SidebarSearchComponent,
    SidebarContentComponent,
    ChatPreviewComponent,
    StringPreviewPipe,
    PhoneNumberPipe,
    ConversationPanelComponent,
    ContentHeaderComponent,
    ContentBodyComponent,
    ContentFooterComponent,
    TextMessageComponent,
    MessageBubbleComponent,
    InteractiveMessageComponent,
    MessageButtonsComponent,
    LocationMessageComponent,
    MapsURLPipe,
    NormalizeTextPipe,
    TripsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
