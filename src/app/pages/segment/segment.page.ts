import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSegment} from '@ionic/angular';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment,  {static: true} ) segment: IonSegment;
  superheroes: Observable<any>;
  valorSegmento = '';
  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = 'Todos';
    this.superheroes = this.dataService.getHeroes();
  }

  segmentChanged($event: CustomEvent) {
    const valorSegmento = $event.detail.value;
    console.log($event);
    if (valorSegmento === 'Todos') {
      this.valorSegmento = '';
      return;
    }
    this.valorSegmento = valorSegmento;
  }
}
