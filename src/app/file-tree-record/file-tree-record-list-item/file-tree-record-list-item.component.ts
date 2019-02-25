import { Component, OnInit, Input } from '@angular/core';
import { FileTreeRecord, FileType } from '../file-tree-record.model';
import { LocalReadService } from 'src/app/local-read.service';

@Component({
  selector: 'app-file-tree-record-list-item',
  templateUrl: './file-tree-record-list-item.component.html',
  styleUrls: ['./file-tree-record-list-item.component.scss']
})
export class FileTreeRecordListItemComponent implements OnInit {

  @Input() ftr: FileTreeRecord;

  icons: any;

  constructor(
    private localRead: LocalReadService
  ) {
    this.localRead.getFileIcons().subscribe(icons => this.icons = icons);
  }

  ngOnInit() {
  }

  getIcon(fileName: string, type: FileType): string {
    if (!this.icons) {
      return '';
    }
    const extension = this.getExtension(fileName);

    if (extension in this.icons) {
      return this.icons[extension];
    }

    if (type === 'dir') {
      return this.icons.dir;
    } else {
      return this.icons.file;
    }
  }
  getExtension(fileName: string): string {
    const index = fileName.lastIndexOf('.');

    if (index === -1) {
      return fileName;
    } else {
      return fileName.slice(index + 1);
    }
  }

}
