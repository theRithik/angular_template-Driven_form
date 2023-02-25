import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
form: any;
value='hide'
  ngOnInit(): void {
   
  }
  onSubmit(form:NgForm){
    this.value='show'
  }

}
