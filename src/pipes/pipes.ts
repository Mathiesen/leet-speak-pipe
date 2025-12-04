import { Component } from '@angular/core';
import {DatePipe, UpperCasePipe} from '@angular/common';
import {LeetspeakPipe} from '../leetspeak-pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    LeetspeakPipe
  ],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {
  today: number = Date.now();
}
