import { QuestionsRepository } from '@/domain/forum/application/repositories/question-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  async findBySlug(slug: string) {
    const question = await this.items.find((item) => item.slug.value === slug)

    if (!question) {
      return null
    }

    return question
  }

  public items: Question[] = []
  async create(question: Question) {
    this.items.push(question)
  }
}
