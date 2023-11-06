import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notification: Notification | null | undefined;

  sendNotification(message: string) {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          if (this.notification) {
            this.notification.close();
          }

          this.notification = new Notification('This is going to expire soon', {
            body: message,
          });

          this.notification.onclick = () => {
          };
        }
      });
    }
  }

  snoozeNotification(duration: number) {
    if (this.notification) {
      this.notification.close();
      
      setTimeout(() => {
        this.sendNotification('Snoozed Notification');
      }, duration);
    }
  }
}
