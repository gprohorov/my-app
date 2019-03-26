import {Group} from './group';
export class Student {
  id: string;
  name: string;
  group: Group;

  constructor() {
    this.group = new Group();
  }
}
