import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/base/api.service';
import {
GetParamsRequest,
PostParamsRequest,
} from '../../services/base/models/params-request.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base',
  template: '',
  styleUrls: [],
})
export class BaseComponent<T extends any> implements OnInit {
  public isLoading = true;

  private _responseService: T = {} as T;

  public get getResponseService(): T {
    return this._responseService;
  }
  public set setResponseService(value: T) {
    this._responseService = value;
  }

  public getParamsRequest: GetParamsRequest = {
    url: '',
    params: {},
  };

  public postParamsRequest: PostParamsRequest<any> = {
    url: '',
    payload: {},
    params: {},
  };

  public getIdParamsRequest: { url: string; id: number } = {
    url: '',
    id: 0,
  };

  public set setGetParamsRequest(value: GetParamsRequest) {
    this.getParamsRequest = value;
  }

  constructor(
    private readonly httpApiService: ApiService<T>
  ) {}

  ngOnInit(): void {}

  getRequest(): void {
    this.httpApiService.getService(this.getParamsRequest).subscribe({
      next: (response) => {
        this.setResponseService = response;
      },
      error: (error) => this.onError(),
      complete: () => (this.isLoading = false),
    });
  }

  getByIdRequest(): void {
    this.httpApiService.getByIdService(this.getIdParamsRequest).subscribe({
      next: (response) => {
        this.setResponseService = response;
      },
      error: (error) => this.onError(),
      complete: () => (this.isLoading = false),
    });
  }

  postRequest(): void {
    this.httpApiService.postService(this.postParamsRequest).subscribe({
      next: (response) => {
        this.setResponseService = response;
      },
      error: (error) => this.onError(),
      complete: () => (this.isLoading = false),
    });
  }

  onError(): void {
    // this method is override in the component but trigged in the base component
  }

  isFormInvalid(form: FormGroup) : boolean {
    form.markAllAsTouched();
    for (const key in form.controls) {
      (form.controls as { [key: string]: any })[key].markAsDirty();
    }
    this.onError();
    return form.invalid;
  }
}
