import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogConfirmationComponent } from 'src/app/shared/components/dialogs/dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  data = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','']
  constructor(private dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      width: '450px',
      data: 'hi dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result, 'The dialog was closed');
    });
  }

  ngOnInit() {
  }

}
