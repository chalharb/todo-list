interface TodoProps {
  id: string;
  title: string;
  description?: string;
  done: boolean;
  deleteClick?: () => void;
}

export default TodoProps;
