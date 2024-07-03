// task_4/js/subjects/Subject.ts

namespace Subjects {
  export class Subject {
    private _teacher: Teacher | undefined;

    public setTeacher(teacher: Teacher): void {
      this._teacher = teacher;
    }

    get teacher(): Teacher | undefined {
      return this._teacher;
    }
  }
}

