/* tslint:disable:no-unused-variable */

import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async, inject, waitForAsync } from '@angular/core/testing';
import { mockEmptyListPostReponseData, mockListPostReponseData } from '../mock-unit-test/services/mock-post-services.spec';
import { PostListReponse } from '../models/post';
import { PostService } from './post.service';

describe('Service: Post', () => {
  let postService: PostService;
  let mockHttp: HttpTestingController;
  const domainUrl: string = 'https://reqres.in/api';
  const mockListPostReponse: PostListReponse = mockListPostReponseData;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService]
    });
    postService = TestBed.inject(PostService);
    mockHttp = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    mockHttp.verify();
  });

  it('should create success', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));

  it('getPostList should return list Post', waitForAsync(() => {
    let listPostReponse: PostListReponse;
    const expectedUrl = `${domainUrl}/unknown`
    postService.getListPost().subscribe((res) => {
      listPostReponse = res;
    }, (error) => {
      fail('Error callback must be not call');
    });

    mockHttp.expectOne(expectedUrl).flush(mockListPostReponseData);
    expect(listPostReponse).toEqual(mockListPostReponseData);
  }));

  it('getPostList should return empty data', waitForAsync(() => {
    let listPostReponse: PostListReponse;
    const expectedUrl = `${domainUrl}/unknown`
    postService.getListPost().subscribe((res) => {
      listPostReponse = res;
    }, (error) => {
      fail('Error callback must be not call');
    });

    mockHttp.expectOne(expectedUrl).flush(mockEmptyListPostReponseData);
    expect(listPostReponse).toEqual(mockEmptyListPostReponseData);
  }));


  it('getPostList should return error', waitForAsync(() => {
    let listPostReponseError: HttpErrorResponse;
    const errorEvent = { error: 'Api error' };
    const status = 400;
    const statusText = 'OK';
    const expectedUrl = `${domainUrl}/unknown`
    postService.getListPost().subscribe((res) => {
      fail('Success callback must be not call');
    }, (error) => {
      listPostReponseError = error;
    });

    mockHttp.expectOne(expectedUrl).error(errorEvent as any, { status, statusText });
    expect(listPostReponseError.error).toEqual(errorEvent);
    expect(listPostReponseError.status).toEqual(status);
    expect(listPostReponseError.statusText).toEqual(statusText);
  }));

});
