import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { __importDefault } from 'tslib';

type BtnVariats = "primary" | "secondary"

@Component({
  selector: 'app-btn-primary',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './btn-primary.html',
  styleUrl: './btn-primary.scss'
})
export class BtnPrimary {
  @__importDefault("btn-text") btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariats = "primary"
  @Output("submit") onSubmit = new EventEmitter();

  submit (){
    this.onSubmit.emit
  }
}
