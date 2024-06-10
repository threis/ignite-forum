import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id";

interface InstuctorProps {
    name: string;
}

export class Instructor extends Entity<InstuctorProps>{
    static create(props: InstuctorProps, id: UniqueEntityId){
        const instructor = new Instructor(props, id)

        return instructor
    }
}