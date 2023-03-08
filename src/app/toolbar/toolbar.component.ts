import { Component, OnInit } from '@angular/core';
import { ToolbarEffectService } from '../../app/services/toolbar-effect.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  subscription: Subscription;
  oldText: string = '';
  newText: string = '';
  constructor(private toolbarEffectService: ToolbarEffectService) {}

  ngOnInit(): void {}
  applyEffect(effect: string) {
    this.toolbarEffectService.applyEffect(effect);
  }
  applyReplace() {
    this.toolbarEffectService.applyReplace([this.oldText, this.newText]);
  }
}
