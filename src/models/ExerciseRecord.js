import _Record from './_Record.js'

export default class ExerciseRecord extends _Record {
  constructor({ id, createdAt, note, sets = [], exerciseId = null } = {}) {
    super({ id, createdAt, note })
    this.sets = sets
    this.exerciseId = exerciseId
  }

  static isExerciseRecord(record) {
    return record instanceof ExerciseRecord
  }

  static isExerciseRecordArray(records) {
    return (
      Array.isArray(records) &&
      records.every((i) => ExerciseRecord.isExerciseRecord(i))
    )
  }

  static isExerciseRecordArrayWithData(items) {
    return ExerciseRecord.isExerciseRecordArray(items) && items.length > 0
  }

  static findByExerciseId(items, id) {
    return items.find((i) => i.exerciseId === id)
  }
}
