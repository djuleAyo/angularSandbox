import { User } from '../user/user.model';

export class Professor extends User {

    public course: string;

    /**
     * Needed to dynamicaly check given values. This happens durring json
     * construction.
     */
    static _validateArgs(obj: any): boolean {
        if (
            User.validateArgs(obj)
            || !('course' in obj)
            || !(typeof(obj.course) === 'string')
        ) {
            return false;
        }
        return true;
    }

    constructor(json: string);
    constructor(id: string, name: string, lastName: string, course: string)
    constructor(...args) {
        let unpackedArgs: any = {};

        if (args.length === 1) {
            unpackedArgs = JSON.parse(args[0]);

            if (!Professor._validateArgs(unpackedArgs)) {
                throw new Error(`JSON construction - Invalid arguments - Given ${unpackedArgs}`);
            }
        }
        if (args.length === 4) {
            unpackedArgs.id = args[0];
            unpackedArgs.name = args[1];
            unpackedArgs.lastName = args[2];
            unpackedArgs.course = args[3];
        }
        super(unpackedArgs.id, unpackedArgs.name, unpackedArgs.lastName);
        this.course = unpackedArgs.course;
    }
}
