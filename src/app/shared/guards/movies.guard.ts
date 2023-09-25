import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MoviesGuard implements CanActivate {
  constructor(
    @Inject(AuthService) private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isAuth = this.authService.isUserLogged;
    const isLogged = sessionStorage.getItem('loginFlag') === 'true';
    if (isAuth && isLogged) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
}
