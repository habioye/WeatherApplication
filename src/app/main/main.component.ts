import { Component } from '@angular/core';
import { WeatherinfoService } from '../weatherinfo.service';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  buttonservice = new WeatherinfoService();
  output = "";
inputValue: any;

  search(input:NgForm) {
    console.log(input.value.title);
    const city = this.buttonservice.getWeather(input.value.title);
    this.inputValue = city;
  }
}
