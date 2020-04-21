import { Component } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello Ramya';
  isbgimg = true;
  

  cardArray = [
    {
      price : 4,
      cardname : "free",
      options : [
        {
          name : "Single User",
          ischeck : true
        },
        {
          name : "5GB Storage",
          ischeck : true
        },
        {
          name : "Unlimited Public Projects",
          ischeck : true
        },
        {
          name : "Community Access",
          ischeck : true
        },
        {
          name : "Unlimited Private Projects",
          ismute : true,
          iscross : true
        },
        {
          name : "Dedicated Phone Support",
          ismute : true,
          iscross : true
        },
        {
          name : "Free Subdomain",
          ismute : true,
          iscross : true
        },
        {
          name : "Monthly Status Reports",
          ismute : true,
          iscross : true
        }
      ]
  
  
    },
    {
      price : 9,
      cardname : "plus",
      options : [
        {
          name : "5 Users",
          isbold : true,
          ischeck : true
          
        },
        {
          name : "50GB Storage",
          ischeck : true
        },
        {
          name : "Unlimited Public Projects",
          ischeck : true
        },
        {
          name : "Community Access",
          ischeck : true
        },
        {
          name : "Unlimited Private Projects",
          ischeck : true
        },
        {
          name : "Dedicated Phone Support",
          ischeck : true
        },
        {
          name : "Free Subdomain",
          ischeck : true
        },
        {
          name : "Monthly Status Reports",
          ismute : true,
          ischeck : false,
          iscross : true
        }
      ]
  
  
    },
    {
      price : 49,
      cardname : "pro",
      options : [
        {
          name : "Unlimited Users",
          isbold : true,
          ischeck : true
        },
        {
          name : "150GB Storage",
          ischeck : true
        },
        {
          name : "Unlimited Public Projects",
          ischeck : true
        },
        {
          name : "Community Access",
          ischeck : true
        },
        {
          name : "Unlimited Private Projects",
          ischeck : true
        },
        {
          name : "Dedicated Phone Support",
          ischeck : true
        },
        {
          name : "Unlimited Free Subdomain",
          ischeck : true,
          isbold : true
        },
        {
          name : "Monthly Status Reports",
          ischeck : true
          
        }
      ]
  
  
    }

  ]


 
}
