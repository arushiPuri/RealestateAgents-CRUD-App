import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent';
import { AGENTS } from '../mock-agents';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  agents = AGENTS;
  selectedAgent: Agent;

  constructor() { }

  ngOnInit() {
  }

  onSelect(agent: Agent): void {
    this.selectedAgent = agent;
  }

  deleteAgent(id) {
    this.agents = this.agents
      .filter(agent => agent.id !== id);
    return this;
  }
}

