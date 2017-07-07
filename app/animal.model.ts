export class Animal {
  constructor(public name: string, public species: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string) {
    this.name = name,
    this.species = species,
    this.age = age,
    this.diet = diet,
    this.location = location,
    this.caretakers = caretakers,
    this.sex = sex,
    this.likes = likes,
    this.dislikes = dislikes;
  }
}
