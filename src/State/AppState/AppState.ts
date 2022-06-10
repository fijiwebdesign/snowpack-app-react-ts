import { action, observable } from "mobx"

export class AppState {
  @observable clickCount: number = 0

  @action addClick() {
    this.clickCount++
  }
}