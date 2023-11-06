import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  constructor(private notificationService: NotificationService) {}

  triggerNotification() {
    this.notificationService.sendNotification('Your subscription is going to expire soon.');
  }

  snoozeNotification(duration: number) {
    this.notificationService.snoozeNotification(duration);
  }
}
