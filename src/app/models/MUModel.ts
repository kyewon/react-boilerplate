export interface MUModel {
  id: number;
  name: string;
  age: number;
  // completed: boolean;
}

export namespace MUModel {
  export enum Filter {
    SHOW_PREPARE = 'prepare',
    SHOW_COMPLETED = 'completed',
    SHOW_DELETED = 'deleted'
  }
}
