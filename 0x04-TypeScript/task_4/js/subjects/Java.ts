// task_4/js/subjects/Java.ts

namespace Subjects {
  // Extend Teacher interface with declaration merging
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingJava !== undefined) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}

