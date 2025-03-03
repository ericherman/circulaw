export const bulletComponent = ({ children }) => (
  <div className='newlineDisplay p-base sm:p-lg'>
    <ul className='list-disc pl-6 p-base sm:p-lg'>{children}</ul>
  </div>
);

export const numberComponent = ({ children }) => (
  <div className='newlineDisplay p-base sm:p-lg'>
    <ol className='list-decimal pl-6 pb-4 p-base sm:p-lg'>{children}</ol>
  </div>
);

export const bulletItemComponent = ({ children }) => {
  return <li className='py-1'>{children}</li>;
};

export const numberItemComponent = ({ children }) => <li className='py-1'>{children}</li>;

export const bulletComponentSmallPara = ({ children }) => (
  <div className='newlineDisplay p-sm sm:p-base text-black-white-600'>
    <ul className='list-disc pl-6 p-sm sm:p-base'>{children}</ul>
  </div>
);

export const numberComponentSmallPara = ({ children }) => (
  <div className='newlineDisplay p-sm sm:p-base text-black-white-600'>
    <ol className='list-decimal pl-6 pb-4 p-sm sm:p-base'>{children}</ol>
  </div>
);
