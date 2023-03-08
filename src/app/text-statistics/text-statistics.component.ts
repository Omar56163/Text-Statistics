import { Component, forwardRef, OnInit } from '@angular/core';
import { ToolbarEffectService } from '../services/toolbar-effect.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-text-statistics',
  templateUrl: './text-statistics.component.html',
  styleUrls: ['./text-statistics.component.css'],
})
export class TextStatisticsComponent implements OnInit {
  textAreaContent: string = '';
  wordsNumber: number = 0;
  lettersNumber: number = 0;
  specialCharsNumber: number = 0;
  alphabetCharsNumber: number = 0;
  numbersNumber: number = 0;

  subscription: Subscription;
  replaceSubscription: Subscription;
  textAreaClasses: string[] = [''];

  constructor(private toolbarEffectService: ToolbarEffectService) {
    this.subscription = this.toolbarEffectService
      .onEffect()
      .subscribe((effect) => {
        this.applyNewEffect(true, effect);
      });

    this.replaceSubscription = this.toolbarEffectService
      .onReplace()
      .subscribe((arrTexts) => {
        this.applyReplace(arrTexts);
      });
  }

  ngOnInit(): void {}

  applyNewEffect(fromToolbar: boolean, effect: string) {
    if (fromToolbar) {
      if (this.textAreaClasses.includes(effect)) {
        console.log(this.textAreaClasses);
        console.log(effect);
        this.textAreaClasses = this.textAreaClasses.filter(function (element) {
          return element !== effect;
        });
      } else {
        this.textAreaClasses.push(effect);
      }
    }
    return this.textAreaClasses;
  }

  applyReplace(arrTexts) {
    this.textAreaContent=this.textAreaContent.replaceAll(arrTexts[0], arrTexts[1]);
    this.calcStatistics();
  }
  calcStatistics() {
    if (this.textAreaContent.length > 0) {
      this.wordsNumber = this.textAreaContent
        .split(' ')
        .filter((w) => !w.includes(' ')).length;

      this.lettersNumber = this.textAreaContent.replace(/\s/g, '').length;

      this.alphabetCharsNumber = this.textAreaContent.replace(
        /[^a-zA-Z0-9]/g,
        ''
      ).length;

      this.specialCharsNumber = this.textAreaContent.replace(
        /[a-zA-Z0-9]|\s/g,
        ''
      ).length;

      this.numbersNumber = this.textAreaContent.replace(/[^0-9]/g, '').length;
    } else {
      this.wordsNumber = 0;
      this.lettersNumber = 0;
      this.alphabetCharsNumber = 0;
      this.specialCharsNumber = 0;
      this.numbersNumber = 0;
    }
  }
}
