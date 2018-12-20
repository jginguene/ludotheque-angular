import { User } from "../model/User";

export class AuthService {

    isAuth = false;    
     user: User;


  
    signIn() {
      return new Promise(
        (resolve, reject) => {
          setTimeout(
            () => {
              this.isAuth = true;
              this.user = new User(1,'jerome','ginguene','jerome@ginguene.fr');
              resolve(true);
            }, 2000
          );
        }
      );
    }
  
    signOut() {
      this.isAuth = false;
      delete this.user ;
    }
  }