import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() feature = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onNavigate(feature: string){
    this.feature.emit(feature);
    console.log(feature);
  }

}
