import { Component } from '@angular/core';
import {LeetspeakPipe} from './leetspeak-pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    LeetspeakPipe
  ],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {
}
