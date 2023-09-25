import { Injectable } from '@angular/core';
import { SecurityStorageService } from './security-storage.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(
    private readonly securityStorageService: SecurityStorageService
  ) {}

  setJsonValue(key: string, value: string): void {
    this.securityStorageService.secureStorage.setItem(key, value);
  }

  getJsonValue(key: string): string | null {
    return this.securityStorageService.secureStorage.getItem(key);
  }

  removeJsonValue(key: string): void {
    return this.securityStorageService.secureStorage.removeItem(key);
  }

  clearAllItems(): void {
    return this.securityStorageService.secureStorage.clear();
  }
}
