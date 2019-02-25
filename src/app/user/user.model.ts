export class User {

    public id: string;
    public name: string;
    public lastName: string;

    /**
     * Needed to validate parsed json
     */
    static validateArgs(obj: any): boolean {
        if (
            ! ('id' in obj)
            || ! ('name' in obj)
            || ! ('lastName' in obj)
            || ! (typeof(obj.id) === 'string')
            || ! (typeof(obj.name) === 'string')
            || ! (typeof(obj.lastName) === 'string')
        ) {
            return false;
        }
        return true;
    }

    constructor(json: string);
    constructor(id: string, name: string, lastName: string);
    constructor(...args) {
        let unpackedArgs: any = {};
        if (args.length === 1) {
            unpackedArgs = JSON.parse(args[0]);

            if (User.validateArgs(unpackedArgs)) {
                throw new Error(`JSON construction - Invalid arguments for User constructor. Given ${unpackedArgs}`);
            }
        }
        if ( args.length === 3) {
            unpackedArgs.id = args[0];
            unpackedArgs.name = args[1];
            unpackedArgs.lastName = args[2];
        }
        this.id = unpackedArgs.id;
        this.name = unpackedArgs.name;
        this.lastName = unpackedArgs.lastName;
    }
}
