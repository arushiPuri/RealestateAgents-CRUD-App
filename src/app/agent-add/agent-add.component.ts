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
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    f.value['id'] = parseInt(f.value['id'])
    this.agents.push(f.value)
  }
}
