// Angular Modules
import { Injectable } from '@angular/core'; 
@Injectable() 
export class Constants {
public readonly API_ENDPOINT: string = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}'; 
public readonly API_MOCK_ENDPOINT: string = 'https://www.userdomainmock.com/'; 
public readonly API_KEY: string = 'be1eb19824e82a7b45ba156d790b0f2d';
public readonly LIMIT: number = 1;
public static TitleOfSite: string = " Making API calls the Right Way by Monica"; 
} 