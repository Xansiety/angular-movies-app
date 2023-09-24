import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-back-to',
  templateUrl: './back-to.component.html',
  styleUrls: ['./back-to.component.scss'],
})
export class BackToComponent implements OnInit {
  @Input() path: string = '';
  @Input() title: string = '';
  @Input() isRelative: boolean = false;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  onPressBack() {
    if (!this.isRelative) {
      this.router.navigate([this.path]);
    }
    this.router.navigate([this.path], { relativeTo: this.activeRoute });
  }
}
