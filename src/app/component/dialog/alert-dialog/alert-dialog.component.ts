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

  @ViewChild('hiddenToggle') hiddenToggle: ElementRef;
  private _show: boolean = false;
  @Input() set show(value: boolean) {
    this._show = value;
    this.hiddenToggle?.nativeElement.click();
    this._cdf.detectChanges();
  }
  get show() {
    return this._show;
  }

  constructor(private _cdf: ChangeDetectorRef) {}

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
