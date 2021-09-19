import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoUploadService {

  constructor() { }

  uploadPhoto(file: File): string {
    return file.webkitRelativePath;
  }
}
