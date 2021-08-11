import styled from 'styled-components';


const StyledHeading = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  padding: 20px 20px 6px 20px;
`;

const StyledTaskList = styled.div`
  max-height: 60vh;
  overflow: auto;
`;

const StyledTaskDelete = styled.button`
  border: 0;
  width: 18px;
  height: 18px;
  padding: 0;
  overflow: hidden;
  background-color: transparent;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg fill='%23dc4771' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 174.239 174.239'%3e%3cpath d='M87.12 0C39.082 0 0 39.082 0 87.12s39.082 87.12 87.12 87.12 87.12-39.082 87.12-87.12S135.157 0 87.12 0zm0 159.305c-39.802 0-72.185-32.383-72.185-72.185S47.318 14.935 87.12 14.935s72.185 32.383 72.185 72.185-32.384 72.185-72.185 72.185z'/%3e%3cpath d='M120.83 53.414c-2.917-2.917-7.647-2.917-10.559 0L87.12 76.568 63.969 53.414c-2.917-2.917-7.642-2.917-10.559 0s-2.917 7.642 0 10.559l23.151 23.153-23.152 23.154a7.464 7.464 0 000 10.559 7.445 7.445 0 005.28 2.188 7.437 7.437 0 005.28-2.188L87.12 97.686l23.151 23.153a7.445 7.445 0 005.28 2.188 7.442 7.442 0 005.28-2.188 7.464 7.464 0 000-10.559L97.679 87.127l23.151-23.153a7.465 7.465 0 000-10.56z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  display: none;
`;

const StyledTaskStatus = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  cursor: pointer;
  border: 2px solid #bbbdc7;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 10px;
  position: relative;

  &:checked {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='405.272' height='405.272'%3e%3cpath d='M393.401 124.425L179.603 338.208c-15.832 15.835-41.514 15.835-57.361 0L11.878 227.836c-15.838-15.835-15.838-41.52 0-57.358 15.841-15.841 41.521-15.841 57.355-.006l81.698 81.699L336.037 67.064c15.841-15.841 41.523-15.829 57.358 0 15.835 15.838 15.835 41.514.006 57.361z' fill='%23fff'/%3e%3c/svg%3e");
    background-size: 10px;
    background-color: #4acea3;
    border-color: #38bb90;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const StyledTaskItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 12px 20px;

  &:not(:last-of-type) {
    border-bottom: 1px solid #eef0f5;
  }

  &:hover {
    background-color: #f6fbff;

    & > ${StyledTaskDelete} {
      display: block;
    }
  }
`;

const StyledTaskTitle = styled.label`
  margin-right: auto;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledTaskItemCompleted = styled(StyledTaskItem)`
  background-color: rgba(74, 206, 163, 0.1);

  & > ${StyledTaskTitle} {
    text-decoration: line-through wavy rgba(0,0,0,.3);
  }
`;


export {
  StyledHeading,
  StyledTaskDelete,
  StyledTaskList,
  StyledTaskStatus,
  StyledTaskItem,
  StyledTaskTitle,
  StyledTaskItemCompleted,
}
