import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Image-Upload';
  file: File
  constructor(private http:HttpClient){}

  onFileChanged(event) {
    this.file = event.target.files[0]
  }

  onUpload() {
    
    // upload code goes here
    const uploadData = new FormData();
  uploadData.append('file', this.file);
  uploadData.append('type','image')
  console.log(uploadData)
  this.http.post('http://68.183.183.255:8080/api/v1/booking/DNER9533/guest/00ad390c-44a9-4d56-8b09-e8897a6809b7/upload',uploadData)
    .subscribe(event=>{
      console.log(event)
    })
  }
}
