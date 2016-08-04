import { Component } from '@angular/core';
import { Router }    from '@angular/router';
import { NgForm }    from '@angular/forms';

import { User } from '../model/user';
import { AuthService } from '../auth/auth.service';
import { EmailValidator } from '../../common/validators/email.validator';

@Component({
  selector: 'user-register',
  template: require('./register.component.html'),
  styles: [require('./register.component.scss')],
  providers: [AuthService],
  directives: [EmailValidator],
})

export class UserRegisterComponent {
  error_messages = {};
  register_user = new User.Registering;

  constructor(private authService: AuthService,
              private router: Router) { }

  onSubmit() {
    this.authService.register(this.register_user).subscribe(
      user  => this.router.navigate(['/home']),
      error => this.error_messages = <any>error
    );
  }
}

// export class PubShowComponent implements OnInit, OnDestroy {
//   error_message: string;
//   pub: Pub.Detail;
//   section: string = 'offer';
//   subscription: any;
//
//   constructor(private pubService: PubService,
//               private route: ActivatedRoute) { }
//
//   ngOnInit() {
//     this.subscription = this.route.params.subscribe(params => {
//       let id = params['id'];
//       this.getPub(id);
//     });
//   }
//
//   ngOnDestroy() {
//     this.subscription.unsubscribe();
//   }
//
//   show(what: string) {
//     this.section = what;
//   }
//
//   getPub(id: number) {
//     this.pubService.getPub(id).subscribe(
//       data => this.pub = data,
//       error => this.error_message = <any>error
//     );
//   }
//
//   currentUser() {
//     return {name: 'QbekKawy'};
//   }
// }
