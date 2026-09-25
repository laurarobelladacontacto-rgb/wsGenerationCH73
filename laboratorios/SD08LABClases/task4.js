//SD-08 LAB 25/09 LAURA ROBELLADA

export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    console.log(this.name + " has reached Level " + this.level + "!");
  }

  levelUp() {
    this.level += 1;
  }
}