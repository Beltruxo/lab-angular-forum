import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { AuthRoutesService } from '../authRoutes.service';




@Component({
  selector: 'app-threadList',
  templateUrl: './threadList.component.html',
  styleUrls: ['./threadList.component.css'],
  providers:[MyServiceService,AuthRoutesService]
})
export class ThreadListComponent implements OnInit {
  list: Array<any>
  user: any
  constructor( public listSample : MyServiceService, public authRoutes: AuthRoutesService) { }

  ngOnInit() {
    this.listSample.getThreadsList().subscribe(list => {
      this.list = list
    })
  }
  }


