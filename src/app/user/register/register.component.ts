import { Component } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';

import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'user-register',
  template: require('./register.component.html'),
  styles: [require('./register.component.scss')],
  providers: [UserService],
})

export class UserRegisterComponent {
  register() {
    console.log('ok');
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
