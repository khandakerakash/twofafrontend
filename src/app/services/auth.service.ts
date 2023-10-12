import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { User } from "../models/user.model";
import { TwoFaVerifyModel } from "../models/two-fa-verify.model";
import { TwoFABackupCodeModel } from "../models/two-fa-backup-code-res.model";



@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiPATH = "Auth/";

  constructor(
	private api: ApiService
  ) {}

user2faAuth(request: User) {
    return this.api.post<boolean>(`${this.apiPATH}User2faAuth`, request);
}


  getUser2faAuthTotpSecretKey(userId: number) {
    return this.api.get<User>(
      `${this.apiPATH}GetUser2faAuthTotpSecretKey/${userId}`
    );
  }
  
  user2faVerifyingTOTPBySecretkey(request: TwoFaVerifyModel) {
    return this.api.post<boolean>(
      `${this.apiPATH}User2faVerifyingTOTPBySecretkey`,
      request
    );
  }


get2faAuthBackupCodes(user: User) {
    return this.api.post<TwoFABackupCodeModel[]>(
      `${this.apiPATH}Get2faAuthBackupCodes`,
      user
    );
}


}