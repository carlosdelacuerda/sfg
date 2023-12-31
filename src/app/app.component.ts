import { AfterViewInit, Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LoadingInterceptor } from './interceptors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'sfg';

  showLoading: boolean = false;
  showLoading$: Observable<any> = new Observable;
  loadingSubscribe: Subscription = new Subscription;

  constructor(
    public  loadingInterceptor: LoadingInterceptor
  ){}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showLoading$ = this.loadingInterceptor.showLoading$
      this.loadingSubscribe = this.showLoading$.subscribe(state => {
        this.showLoading = state
      })
    });
  }
}
