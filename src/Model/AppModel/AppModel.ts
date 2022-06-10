import { action, observable } from "mobx"

export class AppModel {
  @observable clickCount: number = 0

  @action addClick() {
    this.clickCount++
  }
}