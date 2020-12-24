import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  gun: Array<object> = [
    {
      name: 'AK-47',
      imgURL:
        'https://i2.wp.com/globalriskinsights.com/wp-content/uploads/2015/10/AK-2.jpg?resize=800%2C460',
      price: 2000,
      status: false,
    },

    {
      name: 'M-16',
      imgURL:
        'https://cdn.athlonoutdoors.com/wp-content/uploads/sites/8/2014/06/m16-evo-lead.jpg',
      price: 3000,
      status: false,
    },

    {
      name: 'Dragunov',
      imgURL:
        'https://static.wikia.nocookie.net/guns/images/1/15/SVD.jpg/revision/latest?cb=20190420101321',
      price: 7000,
      status: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
