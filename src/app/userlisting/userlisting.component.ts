import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrl: './userlisting.component.css',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class UserlistingComponent {
  userlist: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service: AuthService, private dialog: MatDialog) {
    this.LoadUser();
  }

  LoadUser() {
    this.service.GetAll().subscribe((res) => {
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'role',
    'status',
    'action',
  ];

  UpdateUser(code: any) {
    const popup = this.dialog.open(UpdatepopupComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '50%',
      data: {
        usercode: code,
      },
    });
    popup.afterClosed().subscribe((res) => {
      this.LoadUser();
    });
  }
  opendialog() {}
}
