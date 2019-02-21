import { User } from './user.model';

export class UserService {

    constructor() {}

    _genTestUser(sufix: string): User {
        return new User(`testId${sufix}`, `testNM${sufix}`, `testLN${sufix}`);
    }
    _genTestUsers(num: number): Array<User> {
        const results = [];
        for (let i = 1; i <= num; i++) {
            results.push(this._genTestUser(`${i}`));
        }
        return results;
    }
}
