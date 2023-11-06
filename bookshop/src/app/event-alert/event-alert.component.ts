import { Component } from '@angular/core';

@Component({
  selector: 'app-event-alert',
  templateUrl: './event-alert.component.html',
  styleUrls: ['./event-alert.component.css']
})
export class EventAlertComponent {
  upcomingEvents: any[] = [
    {
      name: 'Book Release: "Mystery of the Lost Library"',
      dateTime: new Date('2023-11-06T17:03:00')
    },
    {
      name: 'Author Meet and Greet: Chetan Bhagat',
      dateTime: new Date('2023-11-19T16:30:00')
    },
    {
      name: 'Book Signing: Jane Smith',
      dateTime: new Date('2023-12-10T14:00:00')
    },
    {
      name: 'Reading Club Discussion',
      dateTime: new Date('2023-12-20T19:00:00')
    },
    {
      name: 'Special Discount Day',
      dateTime: new Date('2024-01-01T10:00:00')
    }
  ];
  recentEvents: any[] = [
    {
      name: 'Book Launch: "The Adventure Begins"',
      dateTime: new Date('2023-10-25T17:30:00')
    },
    {
      name: 'Author Talk: Sarah Johnson',
      dateTime: new Date('2023-10-08T18:00:00')
    },
    {
      name: 'Book Fair: Winter Edition',
      dateTime: new Date('2023-09-15T09:00:00')
    },
    {
      name: 'Bookstore Anniversary Celebration',
      dateTime: new Date('2023-09-03T11:00:00')
    },
    {
      name: 'Poetry Night',
      dateTime: new Date('2023-08-14T19:30:00')
    }
  ];

  constructor() {
    this.checkEvents();
  }

  checkEvents() {
    setInterval(() => {
      const now = new Date();
      const upcoming = this.upcomingEvents.filter(event => event.dateTime > now);
      const overlapping = this.upcomingEvents.filter(event => event.dateTime <= now);

      this.upcomingEvents = upcoming;

      this.recentEvents = this.recentEvents.concat(overlapping);

      this.recentEvents.sort((a, b) => b.dateTime - a.dateTime);
    }, 1);
  }
}
