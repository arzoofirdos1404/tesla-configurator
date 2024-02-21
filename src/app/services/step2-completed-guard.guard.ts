import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class Step2CompletedGuard implements CanActivate {

  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const step1Completed = this.storageService.isStep2Completed();
    if (step1Completed) {
      return true; 
    } else {
        this.router.navigate(['/step2']);
      return false;
      
    }
  }
}
