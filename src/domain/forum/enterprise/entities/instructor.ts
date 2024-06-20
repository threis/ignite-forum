import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface InstuctorProps {
  name: string
}

export class Instructor extends Entity<InstuctorProps> {
  static create(props: InstuctorProps, id: UniqueEntityID) {
    const instructor = new Instructor(props, id)

    return instructor
  }
}
