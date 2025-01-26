import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }


  quitGame(): void {
    if (confirm('Are you sure you want to quit?')) {
      window.location.href = "https://www.google.com"; // Redirect to a different page or home page.
    }
  }
//*
  confirmQuit(): void {
    window.location.href = 'https://www.google.com';
  }
  cancelQuit(): void {
    // Close the modal or take no action.
  }
}
