import { Component, OnInit, Input } from '@angular/core';
import { Agent } from '../agent';
import { AGENTS } from '../mock-agents';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agent-add',
  templateUrl: './agent-add.component.html',
  styleUrls: ['./agent-add.component.css']
})
export class AgentAddComponent implements OnInit {
  @Input() agent: Agent;
  agents = AGENTS;
  
  allAgentIds = this.agents.map(elem => elem.id)
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    f.value['id'] = parseInt(f.value['id'])
    if(this.allAgentIds.includes(f.value['id'])){
      alert('Id is already present in database')
    } else {
      this.agents.push(f.value)
    }
  }
}
