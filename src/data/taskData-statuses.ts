export interface TaskDataProps {
  id: string;
  name: string;
  status: boolean;
}
interface StatusProps {
  done: boolean;
  inPlan: boolean;
}

const statuses: StatusProps = {
  done: true,
  inPlan: false,
};

const tasksData: TaskDataProps[] = [{ id: "1", name: "123", status: false }];

export { statuses, tasksData };
