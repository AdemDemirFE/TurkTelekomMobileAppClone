import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleCodePagePage } from './example-code-page.page';

describe('ExampleCodePagePage', () => {
  let component: ExampleCodePagePage;
  let fixture: ComponentFixture<ExampleCodePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCodePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
