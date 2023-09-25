import { Injectable } from '@angular/core';

const CryptoJS = require('crypto-js');
const SECRET_KEY = 'secret-key';
const SecureStorage = require('secure-web-storage');

@Injectable({
  providedIn: 'root',
})
export class SecurityStorageService {
  public secureStorage = new SecureStorage(sessionStorage, {
    hash: (key: string) => {
      key = CryptoJS.SHA256(key, SECRET_KEY);

      return key.toString();
    },
    encrypt: (data: any) => {
      data = CryptoJS.AES.encrypt(data, SECRET_KEY);

      data = data.toString();

      return data;
    },
    decrypt: (data: any) => {
      data = CryptoJS.AES.decrypt(data, SECRET_KEY);

      data = data.toString(CryptoJS.enc.Utf8);

      return data;
    },
  });

  constructor() {}
}
