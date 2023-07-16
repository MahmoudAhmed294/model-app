export interface INoteInput {
  by: string;
  details: string;
}

export interface INote extends INoteInput {
  id: number;
  date: Date;
  model_id: number;
}
