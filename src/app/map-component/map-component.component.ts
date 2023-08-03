import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']
})
export class MapComponentComponent implements  AfterViewInit {
  @ViewChild('mapContainer', { static: false })
  gmap!: ElementRef;
  map!: google.maps.Map;
  lat!: number;
  lng! :number
  zoom:number = 15




  ngAfterViewInit(): void {
    this.mapInitializer();
  }
  mapInitializer() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const mapOptions = {
          center: { lat, lng },
          zoom: this.zoom,
        };

        const map = new google.maps.Map(this.gmap.nativeElement, mapOptions);

        const marker = new google.maps.Marker({
          position: { lat, lng },
          map: map,
        });
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
 

}
