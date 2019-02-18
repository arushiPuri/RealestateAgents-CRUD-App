import { Component, OnInit, Input } from '@angular/core';
import { Agent } from '../agent';
import { AGENTS } from '../mock-agents'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent-extras',
  templateUrl: './agent-extras.component.html',
  styleUrls: ['./agent-extras.component.css']
})
export class AgentExtrasComponent implements OnInit {
  @Input() agent: Agent;
  agents = AGENTS;
  selectedAgent = Agent[0]

  filterAgents = () => {
    this.route.paramMap.subscribe(params => {
      let agentId = parseInt(params.get('id'))
      this.selectedAgent = this.agents.filter(agent => agent.id === agentId)[0]
    })
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.filterAgents()
  }
}