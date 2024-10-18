import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/i-user';
import { USERS } from '../data/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = USERS;

  getUsers(): IUser[]{
    return this.users;
  }
  getUserById(id: number): IUser | undefined {
    return this.users.find(user => user.id===id);
  }
  getUserName(userId: number): string {
    const user= this.getUserById(userId);
    return user ? `${user.firstName} ${user.lastName}` : "Sconosciuto";
  }
}
