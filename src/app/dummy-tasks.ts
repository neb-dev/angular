export interface DummyTask {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

// now also stored in the tasks.service.ts file
// export const DUMMY_TASKS: DummyTask[] = [
//   {
//     id: 't1',
//     userId: 'u1',
//     title: 'Master Angular',
//     summary:
//       'Learn all the basic and advanced features of Angular & how to apply them.',
//     dueDate: '2025-12-31',
//   },
//   {
//     id: 't2',
//     userId: 'u3',
//     title: 'Build first prototype',
//     summary: 'Build a first prototype of the online shop website',
//     dueDate: '2024-05-31',
//   },
//   {
//     id: 't3',
//     userId: 'u3',
//     title: 'Prepare issue template',
//     summary:
//       'Prepare and describe an issue template which will help with project management',
//     dueDate: '2024-06-15',
//   },
// ];
