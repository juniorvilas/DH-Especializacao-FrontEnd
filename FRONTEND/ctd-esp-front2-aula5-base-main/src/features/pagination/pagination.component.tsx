import { FC } from 'react';
import PaginationInfo from 'features/pagination/pagination.types';

type PaginationProps = {
  pagination: PaginationInfo;
  onPreviousPage: () => void;
  onNextPage: () => void;
};

const Pagination: FC<PaginationProps> = ({
  pagination,
  onPreviousPage,
  onNextPage
}: PaginationProps) => {
  const onPrev = () => {
    onPreviousPage();
  };

  const onNext = () => {
    onNextPage();
  };

  return (
    <div className={'pagination'}>
      <button aria-label="Anterior" disabled={!pagination.prev} onClick={() => onPrev()} className={'button primary'}>
        Previous
      </button>
      <button aria-label="Proximo" disabled={!pagination.next} onClick={() => onNext()} className={'button primary'}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
