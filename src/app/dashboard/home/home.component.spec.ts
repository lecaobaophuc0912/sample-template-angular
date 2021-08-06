/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA, ɵCodegenComponentFactoryResolver } from '@angular/core';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PostService } from '../../shared/services/post.service';
import { mockListPostReponseData, MockPostServices } from '../../shared/mock-unit-test/services/mock-post-services.spec';
import { Post, PostListReponse } from '../../shared/models/post';
import { of, throwError } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let fakePostService: PostService;
  const singlePostData: Post = mockListPostReponseData.data[0];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomeComponent],
      imports: [],
      providers: [
        { provide: PostService, useClass: MockPostServices }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fakePostService = TestBed.inject(PostService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be ngOnInit', waitForAsync(() => {
    spyOn(component, 'getListPost');
    component.ngOnInit();
    expect(component.ngOnInit()).toBeUndefined();
    expect(component.getListPost).toHaveBeenCalled();
  }))

  it('should be rendering app-post ', waitForAsync(() => {
    const appPostComponent = fixture.debugElement.query(By.css('app-post'));
    expect(appPostComponent).toBeTruthy();
  }));

  it('should undefined postClicked when start component', waitForAsync(() => {
    expect(component.postClicked).toBeUndefined();
  }));


  it('should list Post return value', waitForAsync(() => {
    spyOn(fakePostService, 'getListPost').and.callThrough();
    let postListResponse: PostListReponse;
    fakePostService.getListPost().subscribe((res) => {
      postListResponse = res;
    });
    expect(postListResponse).toEqual(mockListPostReponseData);
    expect(fakePostService.getListPost).toHaveBeenCalled();
  }));

  it('should list Post return null value', waitForAsync(() => {
    let mockListPostReponseNullData = JSON.parse(JSON.stringify(mockListPostReponseData));
    mockListPostReponseNullData.data = null;
    spyOn(fakePostService, 'getListPost').and.returnValue(of(mockListPostReponseNullData));
    let postListResponse: PostListReponse;
    fakePostService.getListPost().subscribe((res) => {
      postListResponse = res;
    });
    component.getListPost();
    expect(postListResponse).toEqual(mockListPostReponseNullData);
    expect(component.listPost).toEqual([]);
    expect(fakePostService.getListPost).toHaveBeenCalled();
  }));

  it('should list Post return error', waitForAsync(() => {
    spyOn(fakePostService, 'getListPost').and.returnValue(throwError('API Error'));
    let postListError: string;
    fakePostService.getListPost().subscribe((res) => {
      fail('Success call back must be not call');
    }, (error) => {
      postListError = error;
    });
    spyOn(console, 'log');
    component.getListPost();
    expect(fakePostService.getListPost).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledOnceWith(postListError);
    expect(postListError).toEqual('API Error');
  }));

  it('should on moonIconClick handle with empty post', waitForAsync(() => {
    component.postClicked = undefined;
    component.onMoonIconClick(null);
    fixture.detectChanges();
    expect(component.postClicked).toBeNull();
  }));

  it('should on moonIconClick handle with postData', waitForAsync(() => {
    component.onMoonIconClick(singlePostData);
    fixture.detectChanges();
    expect(component.postClicked).toEqual(singlePostData);
    const elementTitle = fixture.debugElement.query(By.css('.display-6'));
  }))


});
