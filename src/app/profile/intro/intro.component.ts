import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const txtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

    txtType.prototype.tick = function() {
      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      let that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      if (this.txt !== fullTxt) {
      setTimeout(function() {
      that.tick();
      }, 40);
    } else {
      setTimeout(function() {
        that.tick();
        }, 600);
    }
  };

    window.onload = function() {
      const elements = document.getElementsByClassName('typewrite');
      for (let i = 0; i < elements.length; i++) {
          const toRotate = elements[i].getAttribute('data-type');
          const period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new txtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      // INJECT CSS
      const css = document.createElement('style');
      css.type = 'text/css';
      css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
      document.body.appendChild(css);
  };
  }

}
