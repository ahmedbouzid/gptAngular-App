import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.scss'],
})
export class ChatGptComponent implements OnInit {
  querryForm!: FormGroup;
  messages = [{ role: 'system', content: 'You are a helpful assistant' }];
  result: any;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.querryForm = this.fb.group({
      querry: this.fb.control(''),
    });
  }

  handleAsk() {
    let url = 'https://api.openai.com/v1/chat/completions';
    let httpHeaders = new HttpHeaders().set(
      'Authorization',
      'Bearer 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'
    );
    let payload = {
      model: 'gpt-3.5-turbo',
      messages: this.messages,
    };

    this.http.post(url, payload, { headers: httpHeaders }).subscribe({
      next: (res) => {
        this.result = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
