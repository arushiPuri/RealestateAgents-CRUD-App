import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentsComponent } from '../app/agents/agents.component';
import { AgentExtrasComponent } from '../app/agent-extras/agent-extras.component';
import { AgentDetailComponent } from '../app/agent-detail/agent-detail.component';
import { AgentAddComponent } from '../app/agent-add/agent-add.component';

const routes: Routes = [
  { path: '', component: AgentsComponent },
  { path: 'agent-extras/:id', component: AgentExtrasComponent },
  { path: 'agent-add', component: AgentAddComponent },
  { path: 'agent-edit/:id', component: AgentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }