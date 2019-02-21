import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { Professor } from './professor.model';

@Injectable()
export class ProfessorService {

    constructor(
        private userService: UserService
    ) {}

    _genTestProfessor(sufix: string): Professor {
        return new Professor(
            `testId${sufix}`,
            `testNM${sufix}`,
            `testLN${sufix}`,
            `testCourse${sufix}`
        );
    }
    _genTestProfessors(num: number): Array<Professor> {
        const results = [];
        for (let i = 0; i <= num; i++) {
            results.push(this._genTestProfessor(`${i}`));
        }
        return results;
    }
}
