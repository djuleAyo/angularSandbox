/**
 * File types under linux
 */
export type FileType =
    'blockDevice'
    | 'characterDevice'
    | 'dir'
    | 'fifo'
    | 'file'
    | 'socket'
    | 'symLink';

/**
 * file tree record
 */
export class FileTreeRecord {
    public path: string;
    public size: number;
    public fileType: FileType;
    public children: Array<FileTreeRecord>;

    constructor(obj: object);
    constructor(
        path: string,
        size: number,
        fileType: FileType,
        children: Array<FileTreeRecord>
    );
    constructor(...args) {
        if (args.length === 1) {
            if (!typeof(args[0] === 'object')) {
                throw new Error(`Invalid constructor`);
            }
            const unconstructed = args[0];
            this.size       = unconstructed.size;
            this.path       = unconstructed.path;
            this.fileType   = unconstructed.fileType;
            this.children   = [];
            unconstructed.children.forEach(ftr => {
                this.children.push(new FileTreeRecord(ftr));
            });
        }
        if (args.length === 4) {
            this.size       = args[1];
            this.path       = args[0];
            this.fileType   = args[2];
            this.children   = args[3];
        }
    }
}
