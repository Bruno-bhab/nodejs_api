import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specifcationsRepository: ISpecificationsRepository) {}
  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specifcationsRepository.findByName(name);
    console.log(specificationAlreadyExists);
    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.specifcationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
