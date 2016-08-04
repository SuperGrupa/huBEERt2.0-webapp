import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';

import { User } from '../model/user';
import { UserService } from '../user.service';
import { EmailValidator } from '../../common/validators/email.validator';

@Component({
  selector: 'user-register',
  template: require('./register.component.html'),
  styles: [require('./register.component.scss')],
  providers: [UserService],
  directives: [EmailValidator],
})

export class UserRegisterComponent {
  register_user = new User.Registering;

  onSubmit() {
    console.log(this.register_user);
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
