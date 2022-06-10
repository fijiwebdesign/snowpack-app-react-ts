import { makeAutoObservable } from "mobx";
import { AppModel } from "../Model/AppModel";

export const appStore = makeAutoObservable(new AppModel())