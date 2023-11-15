import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  upcomingEvents: any[] = [];
  recentEvents: any[] = [];
  events: any;

  constructor(private eventService: EventService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(res => {
      console.log("response", res);
      const now = new Date();

      res.sort((a: any, b: any) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());

      this.upcomingEvents = res.filter((event: any) => new Date(event.dateTime) > now);

      this.recentEvents = res.filter((event: any) => new Date(event.dateTime) <= now);

      this.recentEvents.sort((a: any, b: any) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Are you sure you want to delete this event?')) {
      this.eventService.deleteEvent(id).subscribe(res => {
        const index = this.events.findIndex((event: any) => event._id === id);
        if (index !== -1) {
          this.events.splice(index, 1);
          this.toastr.success('Event deleted successfully!', 'Success');
        }
      });
    }
  }
}
