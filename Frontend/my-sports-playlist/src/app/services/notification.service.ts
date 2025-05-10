// src/app/services/notification.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  success(msg: string) {
    alert(` ${msg}`);
  }

  error(msg: string) {
    alert(` ${msg}`);
  }
   warn(msg: string) {
    alert(`⚠️ ${msg}`);
  }
}
