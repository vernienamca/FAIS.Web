import { Component } from '@angular/core';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'vex-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  folderSave = faFolder;
  close = faClose;
  eyeOpen = faEye;
  eyeClose = faEyeSlash;

  hide = false;
}
