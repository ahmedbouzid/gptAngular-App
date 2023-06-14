import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ChatGptComponent } from './chat-gpt/chat-gpt.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'gpt', component: ChatGptComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
