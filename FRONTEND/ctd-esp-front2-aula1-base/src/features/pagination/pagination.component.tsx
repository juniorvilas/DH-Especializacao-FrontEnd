import { FC } from 'react';
import PaginationInfo from 'features/pagination/pagination.types';

type PaginationProps = {
  p: PaginationInfo;
  onP: () => void;
  onN: () => void;
};

const Pagination: FC<PaginationProps> = ({
  p,
     onP,
  onN
}: PaginationProps) => {
    const onPrev = () => {
      onP();
    };

    const onNext = () => {
      onN();
    };

  return (
    <div className={'pagination'}>
        <button disabled={!p.prev} onClick={() => onPrev()} className={'button primary'}>
          Previous
        </button>
      <button disabled={!p.next} onClick={() => onNext()} className={'button primary'}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
