import { useState, forwardRef, useImperativeHandle } from 'react';
import { handleToggle } from '../utils/checkbox-utils';
import RTooltip from '../components/r-ladder-tooltip';
import JHTooltip from '../components/juridische-houdbaarheid-tooltip';
import JITooltip from '../components/juridische-invloed-tooltip';

const SearchFilter = forwardRef(({ list, title, filterNumbers, handleFilters }, ref) => {
  const [checkedArray, setCheckedArray] = useState([]);

  // state to check if set value is for mouse click or state persist
  const [clicked, setClicked] = useState(false);

  const onChangeHandler = (checkboxId) => {
    setClicked(true);
    const newState = handleToggle(checkboxId, checkedArray);
    setCheckedArray(newState);
    const mapIdToValueArray = newState.map((id) => {
      return list[id].value;
    });
    handleFilters(mapIdToValueArray);
  };

  // functions for parent component to reset checkbox values and set values from localStorage
  useImperativeHandle(ref, () => ({
    reset() {
      setCheckedArray([]);
    },
    set(selectedArray) {
      // only do this for state persist and not mouse click
      if (!clicked) {
        let newArr = [];
        for (let index = 0; index < selectedArray.length; index++) {
          // matching values to IDs
          list?.map((element) => {
            // list = list of all the elements in dataFilter
            if (selectedArray[index] === element.value) {
              // element = the dataFilter element
              newArr.push(element.id);
            }
          });
        }
        setCheckedArray(newArr);
      }
    },
  }));

  return (
    <fieldset className='py-4'>
      <div className='block'>
        <div className='relative flex justify-between'>
          <h4 className='mobile sm:desktop mr-8'>{title}</h4>
          {title === 'Circulaire strategie (R-ladder)' && (
            <RTooltip>
              <svg className='w-6 h-6  mb-2' viewBox='0 0 26 26'>
                <circle cx='12' cy='15' r='10' fill='#676868' />
                <path
                  d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                  fill='#F8FBF8'
                />
              </svg>
            </RTooltip>
          )}
          {title === 'Juridische haalbaarheid' && (
            <JHTooltip>
              <svg className='w-6 h-6 fill-current text-black-white-20 mb-2' viewBox='0 0 26 26'>
                <circle cx='12' cy='15' r='10' fill='#676868' />
                <path
                  d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                  fill='#F8FBF8'
                />
              </svg>
            </JHTooltip>
          )}
          {title === 'Invloed' && (
            <JITooltip>
              <svg className='w-6 h-6 fill-current text-black-white-20 mb-2' viewBox='0 0 26 26'>
                <circle cx='12' cy='15' r='10' fill='#676868' />
                <path
                  d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                  fill='#F8FBF8'
                />
              </svg>
            </JITooltip>
          )}
        </div>
      </div>
      <div>
        {list?.map((data, dataIdx) => (
          <div key={dataIdx} className='relative flex justify-between'>
            {filterNumbers[dataIdx] > 0 ? (
              <>
                <div className='my-1 block-inline flex items-center'>
                  <input
                    type='checkbox'
                    id={`data-${data.value}-${data.id}`}
                    checked={checkedArray.indexOf(data.id) !== -1}
                    onChange={() => onChangeHandler(data.id)}
                    className='rounded-[3px]'
                  />
                  <label
                    htmlFor={`data-${data.value}-${data.id}`}
                    className='select-none popup-sm pl-2 text-black-white-800'
                  >
                    {/* RVALUE */}
                    {title === 'Circulaire strategie (R-ladder)' && (
                      <>
                        <div className='h-6 w-6 mr-2 bg-green-600 rounded-full inline-flex justify-center items-center'>
                          <h6 className='text-white text-center'>{data.value} </h6>
                        </div>
                        <span>{data.name}</span>
                      </>
                    )}
                    {/* std design */}
                    {title !== 'Circulaire strategie (R-ladder)' && (
                      <span className=''>{data.name}</span>
                    )}
                  </label>
                </div>
                <div className=' table-base '>({filterNumbers[dataIdx]})</div>
              </>
            ) : (
              <>
                <div className='my-1 block-inline flex items-center max-w-lg'>
                  <input
                    disabled
                    type='checkbox'
                    id={`data-${data.value}-${data.id}`}
                    checked={checkedArray.indexOf(data.id) !== -1}
                    onChange={() => onChangeHandler(data.id)}
                    className='rounded-[3px]'
                  />
                  <label
                    htmlFor={`data-${data.value}-${data.id}`}
                    className='select-none popup-sm text-black-white-500 pl-2'
                  >
                    {title === 'Circulaire strategie (R-ladder)' && (
                      <>
                        <div className='h-6 w-6 mr-2 bg-green-600 rounded-full inline-flex justify-center items-center'>
                          <span className='text-white text-center'>{data.value}</span>
                        </div>
                        <span className='table-basel text-black-white-600 text-sm'>
                          {data.name}
                        </span>
                      </>
                    )}

                    {title !== 'Circulaire strategie (R-ladder)' && <span>{data.name}</span>}
                  </label>
                </div>
                <div className='table-base text-black-white-500'>({filterNumbers[dataIdx]})</div>
              </>
            )}
          </div>
        ))}
      </div>
    </fieldset>
  );
});

SearchFilter.displayName = 'SearchFilter';

export default SearchFilter;
