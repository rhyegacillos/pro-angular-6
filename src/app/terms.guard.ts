import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {MessageService} from "./messages/message.service";
import {Message} from "./messages/message.model";

@Injectable({
  providedIn: 'root'
})
export class TermsGuard implements CanActivate {

  constructor(private messages: MessageService,
              private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.params['mode'] == 'create') {
      return new Promise<boolean>((resolve) => {
        let responses: [string, () => void][] = [['Yes', () => resolve(true)], ['No', () => resolve(false)]];
        this.messages.reportMessage(
          new Message('Do You accept the terms & conditions?', false, responses)
        );
      });
    } else {
      return true;
    }
   }
}
