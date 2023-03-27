
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: any = '';
  mediaURL: any = '';
  podURL: any = '';

  constructor(
    private http: HttpClient,

  ) {
    this.baseUrl = environment.baseUrl;
    this.mediaURL = environment.imageUrl;
    // this.podURL = environment.podUrl;

  }



  uploadFile(files: File[]) {
    const formData = new FormData();
    Array.from(files).forEach(f => formData.append('userfile', f));
    return this.http.post(this.baseUrl + 'users/upload_image', formData);
  }

  JSON_to_URLEncoded(element, key?, list?) {
    let new_list = list || [];
    if (typeof element === 'object') {
      for (let idx in element) {
        this.JSON_to_URLEncoded(
          element[idx],
          key ? key + '[' + idx + ']' : idx,
          new_list
        );
      }
    } else {
      new_list.push(key + '=' + encodeURIComponent(element));
    }
    return new_list.join('&');
  }

  public post_private(url, body): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const header = {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      };
      const param = this.JSON_to_URLEncoded(body);
      console.log(param);
      this.http.post(this.baseUrl + url, param, header).subscribe((data) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public post_temp(url, body,temp): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const header = {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', `Bearer ${temp}`)
      };
      const param = this.JSON_to_URLEncoded(body);
      console.log(param);
      this.http.post(this.baseUrl + url, param, header).subscribe((data) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public post_public(url, body): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const header = {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      };
      const param = this.JSON_to_URLEncoded(body);
      console.log(param);
      this.http.post(this.baseUrl + url, param, header).subscribe((data) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  // public uploadImage(url, blobData, ext): Promise<any> {
  //   return new Promise<any>((resolve, reject) => {
  //     const formData = new FormData();
  //     formData.append('image', blobData, `image.${ext}`);
  //     this.http.post(this.baseUrl + url, formData).subscribe((data) => {
  //       resolve(data);
  //     }, error => {
  //       reject(error);
  //     });
  //   });
  // }

  public uploadImage(files: File[]){

  var formData = new FormData();
  Array.from(files).forEach(f => formData.append('image', f));
  return this.http.post(this.baseUrl + 'uploadImage', formData);
  }
  public get_public(url): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const header = {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      };
      this.http.get(this.baseUrl + url, header).subscribe((data) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }


  public get_private(url): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const header = {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      };
      this.http.get(this.baseUrl + url, header).subscribe((data) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public externalGet(url): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const header = {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      };
      this.http.get(url, header).subscribe((data) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  httpGet(url, key) {
    const header = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', `Bearer ${key}`)
    };
    return this.http.get(url, header);
  }

  public getLocalAssets(name): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const header = {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      };
      this.http.get('assets/json/' + name, header).subscribe((data) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  sendNotification(msg,title,id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const body = {
        app_id: environment.onesignal.appId,
        include_player_ids: [id],
        headings: {en: title},
        contents: {en: msg},
        data: {}
      };
      const header = {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${environment.onesignal.restKey}`)
      }
      // const param = this.JSON_to_URLEncoded(body);
      // console.log(param);
      this.http.post('https://onesignal.com/api/v1/notifications',body, header).subscribe((data) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });

}
}
