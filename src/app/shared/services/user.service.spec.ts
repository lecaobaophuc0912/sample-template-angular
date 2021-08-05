import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { mockDataGetUserDetailData, mockDataLoginTokenData } from '../mock-unit-test/services/mock-user-services.spec';
import { LoginReponse, UserDetailReponse } from '../models/user';
import { UserService } from './user.service';
const domainUrl: string = 'https://reqres.in/api';
const expectLoginUrl = `${domainUrl}/login`;
const expectUserDetail = `${domainUrl}/users`;
const mockDataLoginToken = mockDataLoginTokenData;
const mockDataGetUserDetail = mockDataGetUserDetailData;

describe('Service: User', () => {
  let userService: UserService;
  let mockHttp: HttpTestingController;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    userService = TestBed.inject(UserService);
    mockHttp = TestBed.inject(HttpTestingController);
  }));

  afterEach(() => {
    mockHttp.verify();
  });

  it('login should return data LoginReponse model', waitForAsync(() => {
    let loginReponse: LoginReponse;
    userService.login('eve.holt@reqres.in', 'cityslicka').subscribe((res) => {
      loginReponse = res;
    }, () => {
      fail('Error callback must be not call');
    });
    const mockLoginRequest = mockHttp.expectOne(expectLoginUrl);
    mockLoginRequest.flush(mockDataLoginToken);
    expect(mockLoginRequest.request.method).toEqual('POST');
    expect(loginReponse).toEqual(mockDataLoginToken);
  }));

  it('login should return error when wrong username and password', waitForAsync(() => {
    const status = 400;
    const statusText = 'OK';
    const errorEvent = { error: 'user not found' };
    let errorLogin: HttpErrorResponse;
    userService.login('test', 'tesspass').subscribe(() => {
      fail('Success callback must not be call');
    }, (error: HttpErrorResponse) => {
      errorLogin = error;
    });
    const mockLoginRequest = mockHttp.expectOne(expectLoginUrl);
    mockLoginRequest.error(errorEvent as any, { status, statusText });
    expect(mockLoginRequest.request.method).toEqual('POST');
    expect(errorLogin.status).toEqual(status);
    expect(errorLogin.statusText).toEqual(statusText);
    expect(errorLogin.error).toEqual(errorEvent);
  }));

  it('getUserDetail should return data UserDetailReponse model', waitForAsync(() => {
    let userDetailResponse: UserDetailReponse;
    const userId = 1;
    const expectUserDetailWithId = `${expectUserDetail}/${userId}`;
    userService.getUserDetail(userId).subscribe((res) => {
      userDetailResponse = res;
      expect(res).toEqual(mockDataGetUserDetail);
      expect(res.data.id).toEqual(userId);
    }, () => {
      fail('Error callback must be not call')
    });
    const mockGetUserDetailRequest = mockHttp.expectOne(expectUserDetailWithId);
    mockGetUserDetailRequest.flush(mockDataGetUserDetail);
    expect(mockGetUserDetailRequest.request.method).toEqual('GET');
    expect(userDetailResponse).toEqual(mockDataGetUserDetail);
  }));

  it('getUserDetail should return error when using wrong userId', waitForAsync(() => {
    const status = 404;
    const statusText = 'OK';
    const errorEvent = {};
    let errorGetUserDetail: HttpErrorResponse;
    const userId = 123456;
    const expectUserDetailWithId = `${expectUserDetail}/${userId}`;
    userService.getUserDetail(userId).subscribe((res) => {
      fail('Success callback must be not call');
    }, (error: HttpErrorResponse) => {
      errorGetUserDetail = error;
    });
    const mockGetUserDetailRequest = mockHttp.expectOne(expectUserDetailWithId);
    mockGetUserDetailRequest.error(errorEvent as any, { status, statusText });
    expect(mockGetUserDetailRequest.request.method).toEqual('GET');
    expect(errorGetUserDetail.status).toEqual(status);
    expect(errorGetUserDetail.statusText).toEqual(statusText);
    expect(errorGetUserDetail.error).toEqual(errorEvent);
  }));

  /**
   * Expect for simple unit test not cover all case
   */
  // it('getUserDetail should return', waitForAsync(() => {
  //   expect(userService.getUserDetail(1)).not.toBeNull()
  // }));

});
