import { observable } from "mobx";
import { appStore } from './appStore'

export const globalStore = observable({
  appStore
})