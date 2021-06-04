import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
})
export class AlertDialogComponent implements OnInit {
  @Input() show: boolean = false;
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() type: string = 'info';
  @Input() showClose: boolean = false;
  @Input() showCancel: boolean = false;
  @Input() okText: string = 'Ok';
  @Input() cancelText: string = 'Cancel';

  @Output() showChange = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @Output() onOk = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onOkClick(event: any) {
    this.onOk.emit(event);
    this.close();
  }

  onCloseClick(event: any) {
    this.close();
  }

  onCancelClick(event: any) {
    this.onCancel.emit(event);
    this.close();
  }

  close() {
    this.show = false;
    this.showChange.emit(this.show);
  }
}
